const credentials = require("../utils/users");
const users = (req, res) => {
  const { user, pass } = req.query;
  const result = credentials.find(
    (cred) => cred.email === user && cred.password === pass
  );
  // res.status(200).json(result.email)
  if (result) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
};

module.exports = users;
