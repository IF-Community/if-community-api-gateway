import axios from "axios";

export const commentRequest = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {'api-key': '20ca7c6e-8661-430b-998b-cadaf04bf824'}
})

// export const postsRequest = axios.create({
//     baseURL: 'http://localhost:3002',
//     headers: {'api-key': ''}
// })

export const notificationsRequest = axios.create({
    baseURL: 'http://localhost:3003/api/v1/',
    headers: {'Authorization': 'Api-Key <API_KEY>'}
})

export const accountsRequest = axios.create({
    baseURL: 'http://localhost:3004/api/v1/',
    headers: {'Authorization': 'Api-Key <API_KEY>'}
})

export const profilesRequest = axios.create({
    baseURL: 'http://localhost:3004/api/v1/',
    headers: {'Authorization': 'Api-Key <API_KEY>'}
})
