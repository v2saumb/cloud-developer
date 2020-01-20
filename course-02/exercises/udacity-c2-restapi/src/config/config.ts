export const config = {
  "dev": {
    "username": process.env.UDACITY_POSTGRESS_USERNAME,
    "password": process.env.UDACITY_POSTGRESS_PW,
    "database": process.env.UDACITY_POSTGRESS_DB,
    "host": process.env.UDACITY_POSTGRESS_HOST,
    "dialect": process.env.UDACITY_POSTGRESS_DIALECT,
    "aws_region": process.env.UDACITY_AWS_REGION,
    "aws_profile": process.env.UDACITY_PROFILE,
    "aws_media_bucket": process.env.UDACITY_AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
