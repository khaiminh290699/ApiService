const { DB, ModelUser } = require("../db");
const { crypto } = require("../ultilities");

const publicApi = {
  "/auth/login": 1
}

const adminApi = {
  "/auth/users": 255,
  "/auth/reset-password": 255,
  "/auth/set-permission": 255,
  "/auth/sign-in": 255,
  "/auth/toggle-activate": 255
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

  try {
  
    const modelUser = new ModelUser(db);
    const user = await modelUser.findOne({ id: payload.id });
    
    if (!user) {
      return res.send({ status: 403, message: "UnauthorizeError" });
    }
  
    if (!user.is_activated) {
      return res.send({ status: 403, message: "UnauthorizeError" });
    }
  
    if (user.permission >= 256) {
      user.isAdmin = true;
    }
  
    if (adminApi[req.originalUrl] && adminApi[req.originalUrl] > user.permission) {
      return res.send({ status: 403, message: "PermissionError" });
    }
  
    req.user = user;
  
    return next();
  } finally {
    await db.DB.destroy();
  }
}

module.exports = authorize;