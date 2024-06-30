const jwt = require("jsonwebtoken");

const { jwtVerify } = require("../utils");

const midAuthentication = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const userId = jwtVerify(authorization);

    req.userId = userId;
  } catch (e) {
    return res.status(401).json({
      status: 401,
      name: "Unahorized",
      msg: "사용자 인증 실패",
      data: null,
    });
  }

  next();
};

module.exports = {
  midAuthentication,
};
