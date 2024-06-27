const { userSchema } = require("../schemas");

const signUpGoogleUser = async (platformId, email) => {
  const user = await userSchema.create({
    platform: "google",
    platformId,
    email,
  });

  return user;
};

module.exports = {
  signUpGoogleUser,
};
