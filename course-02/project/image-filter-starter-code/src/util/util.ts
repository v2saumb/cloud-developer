import fs from 'fs';
import Jimp = require('jimp');
import { config } from "../config/config";

// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
export async function filterImageFromURL(inputURL: string): Promise<string>{
    return new Promise( async resolve => {
        const photo = await Jimp.read(inputURL).catch((err)=>{
                console.error("Error Reading image "+ err);
                resolve(undefined);
        });
        let outpath = config.dev.image_out_folder +'filtered.'+Math.floor(Math.random() * 2000)+'.jpg';
        await photo
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
        .write(process.cwd()+outpath, (img)=>{
            resolve(process.cwd()+outpath);
        });
    });
}

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
export async function deleteLocalFiles(files:Array<string>){
    for( let file of files) {
        fs.unlink(file,(err) => {
            if (err) throw err;
        });
    }
}

//Creating function to validate URL
//fixed the pattern for
export function isUrlValid(inputURL: string) {
    let result = false;
    let  res = inputURL.match(/^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null) {
        result = false;
    }
    else {
        result = true;
    }
    return result;
}