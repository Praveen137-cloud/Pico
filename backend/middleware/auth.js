const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization denied. Access code required.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error('[CRITICAL] Missing JWT_SECRET in server environment!');
      return res.status(500).json({ error: 'System configuration error. Contact admin.' });
    }

    const decoded = jwt.verify(token, secret);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.warn(`[Auth Middleware] Token rejection: ${err.message}`);
    res.status(401).json({ error: 'Session expired or invalid. Please authenticate again.' });
  }
};

module.exports = authMiddleware;
