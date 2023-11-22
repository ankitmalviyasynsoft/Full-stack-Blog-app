import jwt from 'jsonwebtoken';


const secretKey = 'your-secret-key'; // Replace with your actual secret key

const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);

    // You can attach user information to the request for later use
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};


export default authMiddleware;

