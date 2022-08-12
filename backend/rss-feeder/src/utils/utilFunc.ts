import { parseString } from "xml2js";
export const isJSON = (data) => {
    try {
        JSON.parse(data);
        return true;
    } catch (error) {
        return false;
    }
}
export const jsonToXML = (data) => {
    return new Promise((resolve,reject) => {
        try {
            parseString(data,{trim : true},(results) => {
                resolve(JSON.stringify(results));
            })
        } catch (error) {
            reject(error);
        }
    });
}