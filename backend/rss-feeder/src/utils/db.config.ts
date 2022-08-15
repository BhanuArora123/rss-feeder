const sequelize = require("sequelize");
const {Sequelize} = sequelize;
export let seq = new Sequelize("test","postgres","password",{
    host:"localhost",
    dialect:"postgres"
});
// module.exports = seq;
