import jwt from "jsonwebtoken";
import { createError } from "../error.js";
const secret = "Nishant12345@$";
export const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return next(createError(401, "You are not authenticated!"));
    }

    const token = req.headers.authorization.split(" ")[1];
    

    if (!token) return next(createError(401, "You are not authenticated"));

    const decode = jwt.verify(token, secret);
    
    req.user = decode;
    return next();
  } catch (err) {
    next(err);
  }
};
