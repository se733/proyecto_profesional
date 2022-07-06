
function itsLoggedIn (req, res, next) {
  if (req.isAuthenticated()) next();
  else res.sendStatus(401);
}

module.exports = itsLoggedIn;