const express = require("express");
const  Users  = require("../models/Users");
const UsersRouter = express.Router();
const passport = require("passport");
const itsLoggedIn = require("../utils/middlewares");


UsersRouter.post("/register", (req, res, next) => {
  Users.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch(next);
});

UsersRouter.post("/login", passport.authenticate("local"), (req, res) => {
  req.login(req.user, function (err) {
    if (err) {
      return next(err);
    }
    return res.send(req.user);
  });
});

// UsersRouter.put("/promote", (req, res, next) => {
//   const {id} = req.body
//   Users.update({ type: "admin" }, { where: { id:id }, returning: true })
//     .then(([affectedRows, user]) => {
//       res.send(user[0]);
//     })
//     .catch(next);
// });

UsersRouter.post("/logout", (req, res, next) => {
  console.log('entrando al logout');
  req.logout(function (err) {
    if (err) {
      return next(err);
    } 
    return res.sendStatus(200);
  });
});

UsersRouter.put("/update/:id", (req, res, next) => {
  const id = req.params.id;
  Users.update(req.body, { where: { id }, returning: true })
    .then(([affectedRows, user]) => {
      res.send(user[0]);
    })
    .catch(next);
});


UsersRouter.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Users.destroy({ where: { id } })
    .then(() => res.sendStatus(202))
    .catch(next);
});

UsersRouter.get("/me", itsLoggedIn, (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

UsersRouter.get("/", (req, res, next) => {
  Users.findAll()
    .then((users) => res.send(users))
    .catch(next);
});

module.exports = UsersRouter;
