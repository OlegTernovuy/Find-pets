import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    // baseURL.searchParams.append('limit', 10),
    // baseURL.searchParams.append('limit', 10);
})