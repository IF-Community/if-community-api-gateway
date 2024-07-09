import {
  All,
  Controller,
  HttpException,
  HttpStatus,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { commentRequest, accountsRequest, profilesRequest, notificationsRequest } from 'src/requests.config';
import { CheckUserLogin } from './gateway.service';

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
  @UseGuards(CheckUserLogin)
  @All('accounts*')
  async accountsProxy(@Req() req: Request, @Res() res: Response) {

    let requestUrlFrom
    try {
      requestUrlFrom = req.url.match(/(accounts\/.*)/)[1]
    } catch(_){
      requestUrlFrom = "accounts"
    }

    try {
      const data = await accountsRequest.request(
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
  @All('profiles*')
  async profilesProxy(@Req() req: Request, @Res() res: Response) {

    let requestUrlFrom
    try {
      requestUrlFrom = req.url.match(/(profiles\/.*)/)[1]
    } catch(_){
      requestUrlFrom = "profiles"
    }

    try {
      const data = await profilesRequest.request(
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
  @All('notifications*')
  async notificationsProxy(@Req() req: Request, @Res() res: Response) {

    let requestUrlFrom
    try {
      requestUrlFrom = req.url.match(/(notifications\/.*)/)[1]
    } catch(_){
      requestUrlFrom = "notifications"
    }

    try {
      const data = await notificationsRequest.request(
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
