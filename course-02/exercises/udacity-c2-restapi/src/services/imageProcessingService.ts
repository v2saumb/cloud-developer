import * as fs from "fs";
import {config} from "../config/config";
import * as AWS from '../aws';

const request = require('request');
const c= config.dev;


export function getFilteredImage(imageUrl: string, authToken: string,key: string): Promise<string>{
    const serviceurl = c.image_processing_url + imageUrl;
    const token_bearer = authToken.split(' ');
    return new Promise((resolve, reject) => {
        request(serviceurl, { auth: {
            'bearer': token_bearer[1]
            } ,encoding: 'binary'}, (err: any, res: { statusCode: any; headers: { [x: string]: any; }; }, body: any) => {
            if (err) reject(err)
            console.log(res.statusCode);
            console.log(res.headers['content-type']);
            let filteredImage = fs.createWriteStream(process.cwd()+c.image_out_folder + 'filtered.'+Math.floor(Math.random() * 2000)+'.jpg');
            fs.writeFile(filteredImage.path, body, 'binary', function (err) {
                // @ts-ignore
                resolve(filteredImage.path);
            });
        });
    })
}


export async function deleteLocalFiles(files:Array<string>){
    for( let file of files) {
        console.log('deleting ..',file);
        fs.unlink(file,(err) => {
            if (err) throw err;
        });
    }
}