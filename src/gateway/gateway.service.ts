import {
	Injectable,
	CanActivate,
	ExecutionContext,
	UnauthorizedException,
  } from '@nestjs/common';
import { accountsRequest } from 'src/requests.config';
  
  @Injectable()
  export class CheckUserLogin implements CanActivate {
	async canActivate(context: ExecutionContext): Promise<boolean> {
	  const request = context.switchToHttp().getRequest();
  
	  //Obter Token
	  const bearer = request.headers['authorization'];
	  const tokenAcess = bearer.split(' ')[1]
		console.log(tokenAcess)
	  const verifyResponse =  await accountsRequest.post('token/verify/', {token: tokenAcess})
	  
	  if (!(verifyResponse.data.statusCode == 500)) {
		return true
	  } 
	  return false;
	}
  }