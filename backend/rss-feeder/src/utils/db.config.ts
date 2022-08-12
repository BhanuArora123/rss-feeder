const sequelize = require("sequelize");
const {Sequelize} = sequelize;
export let seq = new Sequelize("test","postgres","",{
    host:"localhost",
    dialect:"postgres"
});
// module.exports = seq;