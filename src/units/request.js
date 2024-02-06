// Khởi toạ 1 instans
import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
//  create method get
export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};

export default request;
