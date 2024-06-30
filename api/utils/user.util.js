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

module.exports = {
  tokenGenerator,
};
