export class PostRequest {
    userId: number;
    title: string;
    content: string;
    categories?: {
        name: string,
        remove?: boolean,
    }[];
}