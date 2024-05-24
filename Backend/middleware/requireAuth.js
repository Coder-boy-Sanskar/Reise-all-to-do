const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function requireAuth(req, res, next) {
  try {
    console.log("In middleware");
    // Read token off Cookies ...
    const token = req.cookies.Authorization;

    // Decode the token ...
    const s="bWx4dXV6aW5ub29ncG1sYXJnZnNobW10bWFuc29uZHBlcnNwYXk=";
    const decoded = jwt.verify(token, s);

    // Check expiration ...
    if(Date.now()  > decoded.exp) return res.sendStatus(401);

    // Find user using decoded  sub ...
    const user =await User.findbyId(decoded.sub);

    if(!user) return res.sendStatus(401);

    // attach user to req
    req.user = user;

    // Continue  on .
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
}

module.exports = requireAuth;
