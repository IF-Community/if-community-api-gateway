import { All, Controller, Req, Res } from '@nestjs/common';
import { postsRequest } from 'src/requests.config';
import { Request, Response } from 'express';
import { handleError } from '../utils/handleError';

@Controller()
export class VotesController {
  @All('votes*')
  async postGetway(@Req() req: Request, @Res() res: Response) {

    let requestUrlFrom: string;
    try {
      requestUrlFrom = req.path.match(/(votes\/.*)/)[1];
    } catch(_){
      requestUrlFrom = "votes";
    }

    try {
      const data = await postsRequest.request(
        { 
          method: req.method,
          url: requestUrlFrom,
          data: req.body,
          params: req.query,
        }
      );
      
      res.status(data.status).json(data.data);
  
    } catch (error) {
      handleError(error);
    }
  }
}