import axios from 'axios';


export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async () => { //получаю сообщения
    const response = await api.get('/posts')
    return response.data
}