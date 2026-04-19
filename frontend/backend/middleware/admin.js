const User = require('../models/User');

const adminMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user && user.role === 'admin') {
      req.adminUser = user; // Store full admin user object for convenience
      next();
    } else {
      res.status(403).json({ error: 'Access denied. Administrator privileges required.' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error during admin validation' });
  }
};

module.exports = adminMiddleware;
