const { signUpGoogleUser, readGoogleUser, readUserById } = require("../models");
const { getUserInfoForGoogle } = require("../services");
const { tokenGenerator } = require("../utils");

const getUserByTest = async (req, res) => {
  return res.json({ message: "User by test" });
};

const googleSignUp = async (req, res) => {
  const userInfo = await getUserInfoForGoogle(req.body.accessToken);
  let user = await readGoogleUser(userInfo.sub);

  if (!user) {
    await signUpGoogleUser(userInfo.sub, userInfo.email);

    user = await readGoogleUser(userInfo.sub);
  }

  return res.json({
    token: tokenGenerator(user._id),
  });
};

const getMyUserData = async (req, res) => {
  const userId = req.userId;

  const user = await readUserById(userId);

  return res.json(user);
};

module.exports = {
  getUserByTest,
  googleSignUp,
  getMyUserData,
};
