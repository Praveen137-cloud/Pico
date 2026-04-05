const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.header('Authorization');

  // If no token is provided, assign a Guest user for public access
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    try {
      // Find the first user in the database to act as the "Guest" or "Demo" user
      let guest = await User.findOne({});
      
      // If no user exists at all, we'll create a default "Student" user
      if (!guest) {
        guest = new User({
          name: 'Guest Pro',
          email: 'guest@picodsa.com',
          xp: 100,
          lessonsCompleted: 5,
          avatar: 'Parrot'
        });
        await guest.save();
      }
      
      req.user = { id: guest._id };
      return next();
    } catch (err) {
      console.error('Guest Auth Error:', err);
      return res.status(500).json({ error: 'Failed to initialize guest session' });
    }
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_key_123');
    req.user = decoded.user;
    next();
  } catch (err) {
    // If token is invalid, we don't block the request, we just fallback to the guest user
    try {
      const guest = await User.findOne({});
      if (guest) {
        req.user = { id: guest._id };
        return next();
      }
    } catch (guestErr) {}
    res.status(401).json({ error: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
