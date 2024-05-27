import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { postsRequest } from 'src/requests.config';
import { CategoriesDto } from '../dto/categorie.dto';
import { handleError } from 'src/posts/utils/handleError';

@Controller('categories')
export class CategoriesController {
    @Post()
    async createCategory(@Body() categoryData: CategoriesDto) {
        try{
            const response = await postsRequest.post('/categories', categoryData);
            return response.data;
        } catch(error) {
            handleError(error);
        }
    }

    @Get()
    async getCategories(
        @Query('pageNumber') pageNumber: number = 1,
        @Query('pageSize') pageSize: number = 10,
    ) {
        try{
            const response = await postsRequest.get(`/categories?pageNumber=${pageNumber}&pageSize=${pageSize}`);
            return response.data;
        } catch(error) {
            handleError(error);
        }
    }

    @Get(':id')
    async getCategoryById(@Param('id') id: number) {
        try{
            const response = await postsRequest.get(`/categories/${id}`);
            return response.data;
        } catch(error) {
            handleError(error);
        }
    }

    @Patch(':id')
    async updateCategory(@Param('id') id: number, @Body() categoryData: Partial<CategoriesDto>) {
        try {
            const response = await postsRequest.patch(`/categories/${id}`, categoryData);
            return response.data;
        } catch(error) {
            handleError(error);
        }
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id: number) {
        try {
            const response = await postsRequest.delete(`/categories/${id}`);
            return response.data;
        } catch(error) {
            handleError(error);
        }
    }
}