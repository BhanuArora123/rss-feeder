const xmlParser = require("xml-js");
const convert = require("iconv-lite");
export const isJSON = (data) => {
    try {
        JSON.parse(data);
        return true;
    } catch (error) {
        return false;
    }
}
export const jsonToXML = (data) => {
    let xmlData = data;
    return xmlParser.xml2js(xmlData,{
		compact: true,
		ignoreDoctype: true,
		attributesKey: "attributes"
	});
}