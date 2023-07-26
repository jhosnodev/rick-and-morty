const credentials = require("../utils/users");
const users = (req, res) => {
  const { email, password } = req.query;
  const result = credentials.find(
    (cred) => cred.email === email && cred.password === password
  );
  // res.status(200).json(result.email)
  if (result) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
};

module.exports = users;
