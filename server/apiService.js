import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    paraphraseV1(data) {
        try {
            return apiClient.post('/V1/paraphrase/', data);
        } catch (error) {
            return error;
        }
    },
    paraphraseV2(data) {
        try {
            return apiClient.post('/V2/paraphrase/', data);
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