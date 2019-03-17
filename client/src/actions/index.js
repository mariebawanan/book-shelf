import axios from 'axios';

export function getBooks(
    limit = 10,
    start = 0,
    order = 'asc'
) {
    const request = `/api/books?limit=${limit}&skip=${start}&order=${order}`;
    //const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`);
    console.log(request);

    return {
        type: 'GET_BOOKS',
        payload: null
    }
}