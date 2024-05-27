import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { postsRequest } from 'src/requests.config';
import { PostRequest } from '../dto/posts.dto';

@Controller('posts')
export class PostsController {
    @Post()
    async createPost(@Body() postData: PostRequest) {
        const response = await postsRequest.post('/posts', postData);
        return response.data;
    }

    @Get()
    async getPosts(
        @Query('pageNumber') pageNumber: number = 1,
        @Query('pageSize') pageSize: number = 10,
        @Query('popularity') popularity: boolean = false,
    ) {
        const response = await postsRequest.get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&popularity=${popularity}`);
        return response.data;
    }

    @Get('categories')
    async getPostsByCategories(@Query('tags') tags: string) {

        if (!tags) {
            throw new BadRequestException('Você precisa informar a query com a string de valores separados por ,');
        }

        const response = await postsRequest.get('/posts/categories', { params: { tags } });
        return response.data;
    }

    @Get(':id')
    async getPostById(@Param('id') id: number) {
        const response = await postsRequest.get(`/posts/${id}`);
        return response.data;
    }

    @Get('users/:id')
    async getPostsByUser(
        @Param('id') id: number,
        @Query('pageNumber') pageNumber: number = 1,
        @Query('pageSize') pageSize: number = 10,
    ) {
        const response = await postsRequest.get(`/posts/users/${id}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
        return response.data;
    }

    @Get('search/:search')
    async searchPosts(
        @Param('search') search: string,
        @Query('pageNumber') pageNumber: number = 1,
        @Query('pageSize') pageSize: number = 10,
    ) {
        const response = await postsRequest.get(`/posts/search/${search}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
        return response.data;
    }

    @Patch(':id')
    async updatePost(@Param('id') id: number, @Body() postData: Partial<PostRequest>) {
        const response = await postsRequest.patch(`/posts/${id}`, postData);
        return response.data;
    }

    @Delete(':id')
    async deletePost(@Param('id') id: number) {
        const response = await postsRequest.delete(`/posts/${id}`);
        return response.data;
    }
}
