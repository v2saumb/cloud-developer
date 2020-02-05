import AWS = require('aws-sdk');
import fs from 'fs';
import Jimp = require('jimp');
import { config } from "../config/config";
const request = require('request')
const c = config.dev;
//Configure AWS
if(c.aws_profile !== "DEPLOYED") {
    var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
    AWS.config.credentials = credentials;
}

export const s3 = new AWS.S3({
    signatureVersion: 'v4',
    region: c.aws_region,
    params: {Bucket: c.aws_media_bucket}
});
// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
export async function filterImageFromURL(inputURL: string): Promise<string>{
    return new Promise( async resolve => {
        // @ts-ignore
        const unfilteredFile : string = await getSignedImage(inputURL);
        // @ts-ignore
        const photo = await Jimp.read(unfilteredFile).catch((err)=>{
                console.error("Error Reading image "+ err);
                resolve(undefined);
        });
        let outpath = config.dev.image_out_folder +'filtered.'+Math.floor(Math.random() * 2000)+'.jpg';

        await photo
            // @ts-ignore
        .resize(350, 350) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
            // @ts-ignore
        .write(process.cwd()+outpath, (img)=>{
            resolve(process.cwd()+outpath);
            deleteLocalFiles([unfilteredFile]);
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
        console.log('deleting ..',file);
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

 export function getSignedImage(imageUrl: string ) {
     const serviceurl = imageUrl;
     console.log('Get Signed Image ', imageUrl);
     return new Promise((resolve, reject) => {
         request(serviceurl, {encoding: 'binary'}, (err: any, res: { statusCode: any; headers: { [x: string]: any; }; }, body: any) => {
             if (err) reject(err)
             console.log('Got the Image ',res.statusCode, res.headers['content-type']);
             let unFiltered = fs.createWriteStream(process.cwd() + config.dev.image_out_folder + 'unfiltered.' + Math.floor(Math.random() * 2000) + '.jpg');
             fs.writeFile(unFiltered.path, body, 'binary', function (err) {
                 resolve(unFiltered.path);
             });
         });
     })
 }