import {
  All,
  Controller,
  HttpException,
  HttpStatus,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { commentRequest } from 'src/requests.config';

@Controller()
export class GatewayController {
  @All('comments*')
  async proxy(@Req() req: Request, @Res() res: Response) {

    let requestUrlFrom
    try {
      requestUrlFrom = req.url.match(/(comments\/.*)/)[1]
    } catch(_){
      requestUrlFrom = "comments"
    }

    try {
      const data = await commentRequest.request(
        { 
          method: req.method,
          url: requestUrlFrom,
          data: req.body
        }
      );
      res.status(data.status).json(data.data);
  
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else {
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
