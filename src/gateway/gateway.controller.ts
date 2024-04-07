import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import axios from 'axios';
import { commentRequest } from 'src/requests.config';

@Controller()
export class GatewayController {
  @Get('comments')
  async proxy(@Req() req: Request, @Res() res: Response) {

    const axiosResponse = await commentRequest.get('comments/')
    return res.send(axiosResponse.data);
  }
}
