const jwt = require('jsonwebtoken');

// Middleware to verify JWT token and protect routes
const authenticate = (req, res, next) => {
  try {
    // Get token from Authorization header (format: "Bearer <token>")
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: 'No token provided',
      });
    }

    // Extract token from header
    const token = authHeader.split(' ')[1]; // Gets the part after "Bearer "
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token format',
      });
    }

    // Verify and decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Store user info in request object for use in next middleware/controller
    req.user = decoded;
    
    // Pass control to next middleware or route handler
    next();
  } catch (error) {
    // Token verification failed (invalid or expired)
    res.status(401).json({
      success: false,
      message: 'Token verification failed',
    });
  }
};

module.exports = { authenticate };
