import AWS = require('aws-sdk');
import { config } from './config/config';
import * as fs from "fs";
import Jimp = require('jimp');
import * as imgService from './services/imageProcessingService';

const c = config.dev;
const TinyURL = require('tinyurl');
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


/* getGetSignedUrl generates an aws signed url to retreive an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getGetSignedUrl(key: string): string {

    const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('getObject', {
        Bucket: c.aws_media_bucket,
        Key: key,
        Expires: signedUrlExpireSeconds
    });
    return url;

}

/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retreived from s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getPutSignedUrl( key: string ){

    const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('putObject', {
      Bucket: c.aws_media_bucket,
      Key: key,
      Expires: signedUrlExpireSeconds
    });

    return url;
}


export function getTinyURl(imageUrl: string ){
    return new Promise((resolve, reject) => {
        TinyURL.shorten(imageUrl, function(res: any, err: any) {
            if (err)
                console.log('Error getting url: ',err);
            console.log('Got Tiny URL : ' , res);
            resolve(res);
        });
    })
}


export async function putImage(key: string, image: string): Promise<string>{

    const photo =  await Jimp.read(image);
    const fileData =  await photo.getBufferAsync(Jimp.MIME_JPEG);
    return new Promise((resolve, reject) => {
        const s3UploadConfig: AWS.S3.Types.PutObjectRequest = {
            Bucket: c.aws_media_bucket,
            Key: key,
            Body: fileData,
            ContentType: "image/jpeg"
        };
        s3.putObject(s3UploadConfig,(err, data) =>{
            console.log('Updating image in s3 ', key);
            if(err) console.log('Error calling put object: ',err);
            imgService.deleteLocalFiles([image]);
            resolve('done');
        });
    })

}

