import { Router, Request, Response } from 'express';
const router: Router = Router();
import {filterImageFromURL, deleteLocalFiles, isUrlValid} from '../util/util';
import { requireAuth} from "../util/authUtil";

router.get('/', async (req: Request, res: Response) => {
    res.send("try GET /filteredimage?image_url={{}}")
});


// @TODO1 IMPLEMENT A RESTFUL ENDPOINT
// GET /filteredimage?image_url={{URL}}
// endpoint to filter an image from a public url.
// IT SHOULD
//    1
//    1. validate the image_url query
//    2. call filterImageFromURL(image_url) to filter the image
//    3. send the resulting file in the response
//    4. deletes any files on the server on finish of the response
// QUERY PARAMATERS
//    image_url: URL of a publicly accessible image
// RETURNS
//   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

/**************************************************************************** */
router.get( "/filteredimage", requireAuth,
      async ( req, res ) => {
    let image_url = req.query.image_url;
    if(!image_url || !isUrlValid(image_url)) {
      res.status(404).send("image_url is required")
    }
    let filtered_image = await filterImageFromURL(image_url);
    if(!filtered_image){
      res.status(500).send("Something went wrong while processing the image")
    }
         res.status(200).sendFile(filtered_image);
          res.on("finish", function() {
              deleteLocalFiles([filtered_image]);
          });

  } );
//! END @TODO1
export const ImageRouter: Router = router;