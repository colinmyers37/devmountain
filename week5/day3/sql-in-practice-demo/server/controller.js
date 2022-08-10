require("dotenv").config();
const Sequelize = require("sequelize")

const {CONNECTION_STRING} = process.env;    //Destruction the connnection string from env file

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {   
        ssl: {
            rejectUnauthorized: false,
        }
    }
})

const userID = 4;
const clientId = 3;


module.exports = {
    getUserInfo: (req, res) => {
        sequelize.query(`SELECT * FROM cc_clients AS c
        `)
    }
}