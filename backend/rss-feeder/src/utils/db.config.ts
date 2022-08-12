const sequelize = require("sequelize");
const {Sequelize} = sequelize;
export let seq = new Sequelize("test","postgres","a+b+c+d=e+f",{
    host:"localhost",
    dialect:"postgres"
});
// module.exports = seq;