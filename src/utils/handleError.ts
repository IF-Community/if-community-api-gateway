import { HttpException, HttpStatus } from '@nestjs/common';

export function handleError(error: any): void {
    const statusCode = error.response?.status ?? HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal Server Error';

    if (error.response?.data) {
        if (Array.isArray(error.response.data.errors) && error.response.data.errors.length > 0) {
            message = error.response.data.errors.join(', ');
        } else if (error.response.data.message) {
            message = error.response.data.message;
        }
    }

    throw new HttpException(message, statusCode);
}