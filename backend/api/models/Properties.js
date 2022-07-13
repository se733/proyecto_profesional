const s = require("sequelize");
const db = require("../db");

class Properties extends s.Model {}

Properties.init(
{
    name: {
        type: s.TEXT
    },
    price: {
        type: s.FLOAT
    },
    description: {
        type: s.TEXT
    },
    categorie: {
        type: s.TEXT
    },
    address: {
        type: s.TEXT
    },
    image: {
        type: s.TEXT
    }
},
{ sequelize:db, modelName: 'properties' }
);

module.exports = Properties;
