const getUserByTest = async (req, res) => {
  return res.json({ message: "User by test" });
};

module.exports = {
  getUserByTest,
};
