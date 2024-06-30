const jwt = require("jsonwebtoken");

const tokenGenerator = (userId) => {
  token = jwt.sign(
    {
      type: "JWT",
      userId: userId,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "15m",
    }
  );

  return token;
};

const jwtVerify = (token) => {
  const secret = process.env.SECRET_KEY;

  const { userId } = jwt.verify(token, secret);
  return userId;
};

module.exports = {
  tokenGenerator,
  jwtVerify,
};
