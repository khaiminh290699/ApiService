const { DB, UserModel } = require("../db");
const { crypto } = require("../ultilities");

const publicApi = {
  "/auth/login": 1
}

const authorize = async (req, res, next) => {
  if (publicApi[req.originalUrl]) {
    return next();
  }
  const { authorization } = req.headers;

  if (!authorization) {
    return res.send({ status: 403, message: "InvalidTokenError" });
  }

  const token = authorization.split(" ")[1];

  if (!token) {
    return res.send({ status: 403, message: "InvalidTokenError" });
  }
  
  const payload = await crypto.verify(token);
  if (!payload) {
    return res.send({ status: 403, message: "InvalidTokenError" });
  }

  const db = new DB();
  const userModel = new UserModel(db);
  const user = await userModel.findOne({ id: payload.id });
  
  if (!user) {
    return res.send({ status: 403, message: "UnauthorizeError" });
  }

  if (!user.is_activated) {
    return res.send({ status: 403, message: "UnauthorizeError" });
  }

  if (user.permission >= 256) {
    user.isAdmin = true;
  }

  // if (api[req.originalUrl].permission && api[req.originalUrl].permission > user.permission) {
  //   return res.send({ status: 403, message: "PermissionError" });
  // }

  req.user = user;

  return next();
}

module.exports = authorize;