import jwt from 'jsonwebtoken';



export const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const bearerToken = token.split(' ')[1];

  try {
    const decoded = jwt.verify(bearerToken, process.env.SECRET_KEY);
    console.log(decoded)
    // You can attach user information to the request for later use
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};


export default authMiddleware;

