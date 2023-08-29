
const checkAuth = (req, res, next) => {
  try {
    if (req.userID) {
    next();
    } else {
      res.status(401).send({message: "User unauthorized"});
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  checkAuth
}