import { Module } from '@nestjs/common';
import { GatewayModule } from './gateway/gateway.module';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts/posts.module';
import { CategoriesModule } from './posts/categories/categories.module';
import { VotesModule } from './posts/votes/votes.module';


@Module({
  imports: [ConfigModule.forRoot(), GatewayModule, PostsModule, CategoriesModule, VotesModule],
  controllers: [],
})
export class AppModule {}
