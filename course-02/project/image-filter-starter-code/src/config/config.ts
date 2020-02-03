export const config = {
  "dev": {
    "aws_region": process.env.UDACITY_AWS_REGION,
    "aws_profile": process.env.UDACITY_PROFILE,
    "image_out_folder":process.env.UDACITY_IMAGE_OUT,
    "aws_media_bucket": process.env.UDACITY_AWS_MEDIA_BUCKET,
  },
  "prod": {
    "aws_region": process.env.UDACITY_AWS_REGION,
    "aws_profile": process.env.UDACITY_PROFILE,
    "image_out_folder":process.env.UDACITY_IMAGE_OUT,
    "aws_media_bucket": process.env.UDACITY_AWS_MEDIA_BUCKET
  },
  "jwt": {
    "secret": process.env.UDACITY_JWT_SECRET
  }
}
