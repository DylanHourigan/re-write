import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://re-write-api-89b7e8387487.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    paraphrase(data) {
        try {
            return apiClient.post('/V1/paraphrase/', data);
        } catch (error) {
            return error;
        }
    },
    login(data) {
        return apiClient.post('/login/', data)
            .then((response) => {
                return response.data.response; 
            })
            .catch((error) => {
                if (error.response) {
                    throw new Error(error.response.data.message || 'Login failed');
                } else {
                    throw new Error('Login failed');
                }
            });
    },
};