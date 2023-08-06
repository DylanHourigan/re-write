import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://re-write-api-89b7e8387487.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    paraphrase(data) {
        return apiClient.post('/paraphrase', data);
    }
};