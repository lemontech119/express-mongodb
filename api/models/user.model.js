const { userSchema } = require("../schemas");

const signUpGoogleUser = async (platformId, email) => {
  const user = await userSchema.create({
    platform: "google",
    platformId,
    email,
  });

  return user;
};

const readGoogleUser = async (platformId) => {
  const user = await userSchema.findOne({
    platform: "google",
    platformId,
  });

  return user;
};

module.exports = {
  signUpGoogleUser,
  readGoogleUser,
};
