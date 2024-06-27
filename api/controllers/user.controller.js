const { signUpGoogleUser } = require("../models");

const getUserByTest = async (req, res) => {
  return res.json({ message: "User by test" });
};

const googleSignUp = async (req, res) => {
  const testPlatformId = "testPlatformId";
  const testEmail = "testEmail";

  const user = await signUpGoogleUser(testPlatformId, testEmail);

  return res.json(user);
};

module.exports = {
  getUserByTest,
  googleSignUp,
};
