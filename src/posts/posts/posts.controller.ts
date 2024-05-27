import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { postsRequest } from 'src/requests.config';
import { PostRequest } from '../dto/posts.dto';
import { handleError } from '../utils/handleError';

@Controller('posts')
export class PostsController {
    @Post()
    async createPost(@Body() postData: PostRequest) {
        try {
            const response = await postsRequest.post('/posts', postData);
            return response.data;
        } catch(error) {
            handleError(error);
        }
    }

    @Get()
    async getPosts(
        @Query('pageNumber') pageNumber: number = 1,
        @Query('pageSize') pageSize: number = 10,
        @Query('popularity') popularity: boolean = false,
    ) {
        try {
            const response = await postsRequest.get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&popularity=${popularity}`);
            return response.data;
        } catch(error) {
            handleError(error);
        }
    }

    @Get('categories')
    async getPostsByCategories(@Query('tags') tags: string) {

        try {
            if (!tags) {
                throw new BadRequestException('Você precisa informar a query com a string de valores separados por ,');
            }
    
            const response = await postsRequest.get('/posts/categories', { params: { tags } });
            return response.data;
        } catch(error) {
            handleError(error);
        }

    }

    @Get(':id')
    async getPostById(@Param('id') id: number) {
        try {
            const response = await postsRequest.get(`/posts/${id}`);
            return response.data;
        } catch(error) {
            handleError(error);
        }
    }

    @Get('users/:id')
    async getPostsByUser(
        @Param('id') id: number,
        @Query('pageNumber') pageNumber: number = 1,
        @Query('pageSize') pageSize: number = 10,
    ) {
        try {
            const response = await postsRequest.get(`/posts/users/${id}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
            return response.data;
        } catch(error) {
            handleError(error);
        }
    }

    @Get('search/:search')
    async searchPosts(
        @Param('search') search: string,
        @Query('pageNumber') pageNumber: number = 1,
        @Query('pageSize') pageSize: number = 10,
    ) {
        try {
            const response = await postsRequest.get(`/posts/search/${search}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
            return response.data;
        } catch(error) {
            handleError(error);
        }
    }

    @Patch(':id')
    async updatePost(@Param('id') id: number, @Body() postData: Partial<PostRequest>) {
        try {
            const response = await postsRequest.patch(`/posts/${id}`, postData);
            return response.data;
        } catch(error) {
            handleError(error);
        }
    }

    @Delete(':id')
    async deletePost(@Param('id') id: number) {
        try {
            const response = await postsRequest.delete(`/posts/${id}`);
            return response.data;
        } catch(error) {
            handleError(error);
        }
    }
}
