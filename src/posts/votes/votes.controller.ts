import { BadRequestException, Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { postsRequest } from 'src/requests.config';
import { voteDto } from '../dto/vote.dto';


@Controller('votes')
export class VotesController {
    @Post()
    async createVote(@Body() voteData: voteDto) {
        const response = await postsRequest.post('/votes', voteData);
        return response.data;
    }

    @Get()
    async getVote(
        @Query('userId') userId: number,
        @Query('postId') postId: number,
    ) {
        if (!userId || !postId) {
            throw new BadRequestException('Você precisa informar a query de userId e postId');
        }

        const response = await postsRequest.get('/votes', { params: { userId, postId } });
        return response.data;
    }

    @Patch()
    async updateVote(@Body() voteData: Partial<voteDto>) {
        const response = await postsRequest.patch('/votes', voteData);
        return response.data;
    }

    @Delete()
    async deleteVote(
        @Query('userId') userId: number,
        @Query('postId') postId: number,
    ) {

        if (!userId || !postId) {
            throw new BadRequestException('Você precisa informar a query de userId e postId');
        }

        const response = await postsRequest.delete('/votes', { params: { userId, postId }});
        return response.data;
    }
}
