import datauriParser from "datauri/parser.js";
import path from "path";
const getDatauri = (file) => {
    const parser = new datauriParser();
    const extName = path.extname(file.originalname).toString();
    // console.log(extName);
    return parser.format('jpg',file.buffer);
}

export default getDatauri;