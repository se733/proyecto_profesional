const express = require("express");
const Properties = require("../models/Properties");
const PropertiesRouter = express.Router();
const { Op } = require('sequelize')

//devuelve todas las rutas
PropertiesRouter.get("/", (req, res, next) => {
  Properties.findAll()
    .then((properties) => res.send(properties))
    .catch((error) => console.log(error));
});

//devuelve una propiedad especifica
PropertiesRouter.get("/:id", (req, res, next) => {
  Properties.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((properties) => res.send(properties))
    .catch(next);
});

//crea una propiedad
PropertiesRouter.post("/", (req, res, next) => {
  Properties.create(req.body)
    .then((properties) => res.status(201).send(properties))
    .catch(next);
});

//elimina una propiedad
PropertiesRouter.delete("/delete/:id", (req, res, next) => {
  Properties.destroy({
    where: { id: req.params.id },
  })
    .then(() => res.sendStatus(202))
    .catch(next);
});

//ruta para search
PropertiesRouter.get("/search/:name", (req, res, next) => {
  const { name } = req.params;
  // console.log(name);
  const lower = name.toLowerCase();
  Properties.findAll({
     where: {
      name: { [Op.like]: "%" + lower + "%" },
    },
  })
  .then((search) => {
    console.log(search);
    res.send(search);
  })
    .catch(next);
});

module.exports = PropertiesRouter;
