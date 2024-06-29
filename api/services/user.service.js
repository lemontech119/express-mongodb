const axios = require("axios");
const { OAuth2Client } = require("google-auth-library");

const oauth2Client = new OAuth2Client();

const getUserInfoForGoogle = async (token) => {
  try {
    const ticket = await oauth2Client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const email = payload.email;
    const sub = payload.sub;

    return { email, sub };
  } catch (err) {
    return err;
  }
};

module.exports = {
  getUserInfoForGoogle,
};
