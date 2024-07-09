import axios from "axios";

export const commentRequest = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {'api-key': '20ca7c6e-8661-430b-998b-cadaf04bf824'}
})

export const postsRequest = axios.create({
    baseURL: 'http://localhost:3002',
    headers: {'api-key': 'd6f8e5b2a1c3f9e7d0b5c2a4e6f8a7d3'}
})

export const notificationsRequest = axios.create({
    baseURL: 'http://localhost:3003/api/v1/',
    headers: {'Authorization': 'Api-Key <API_KEY>'}
})

export const accountsRequest = axios.create({
    baseURL: 'http://localhost:3004/api/v1/',
    headers: {'Authorization': 'Api-Key rZsMVR0Z.7VUA7ZX6cq8VZm0IjJAeT9A0onCVl4ML'}
})

export const profilesRequest = axios.create({
    baseURL: 'http://localhost:3004/api/v1/',
    headers: {'Authorization': 'Api-Key rZsMVR0Z.7VUA7ZX6cq8VZm0IjJAeT9A0onCVl4ML'}
})
