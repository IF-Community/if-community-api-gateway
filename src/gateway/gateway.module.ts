import { Module } from '@nestjs/common';

import { GatewayController } from './gateway.controller';

@Module({
  controllers: [GatewayController],
  providers: [],
})
export class GatewayModule {}
