import {  NUMBER, STRING } from "sequelize/types";
import { seq } from "src/utils/db.config";
export const rssFeed = seq.define('feeds',{
    userId:{
        type : STRING,
        allowNull:false,
        unique:true
    },
    feedUrl:{
        type : STRING,
        allowNull:false
    },
    feedId:{
        type : NUMBER,
        unique:true,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    feedName:{
        type:STRING,
        allowNull:false
    }
},{
    timestamps:true
});