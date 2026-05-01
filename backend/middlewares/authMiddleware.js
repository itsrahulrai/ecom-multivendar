import jwt from "jsonwebtoken";

const authMiddleware = async(req, res, next) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return res.status(401).json({ error: "Please login first" });
  }

  try {
    const decodedToken = await jwt.verify(accessToken, process.env.SECRET);
    req.id = decodedToken.id;
    req.role = decodedToken.role;
    next();
    
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

export default authMiddleware;