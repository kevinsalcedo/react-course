import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d95e012656017d9817264a92a0efea91a756ca4d0ebc541a96ff20e8804c40e9'
    }
});