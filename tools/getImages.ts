const folder = './public/images';
// const fs = require("fs")
import {readdir, writeFile} from "fs/promises"


async function listFiles() {
    try {
        var jsonFile = await readdir(folder)
        
        const data = JSON.stringify(jsonFile)
        writeFile("./src/Gallery/files.json", data)
    } catch (error){
        console.error(error);
    }
}

listFiles()