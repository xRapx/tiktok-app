// Khởi toạ 1 instans
import axios from 'axios';

console.log(process.env.REACT_APP_BASE_URL);

export const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
//  create method get
export const get = async (path, option = {}) => {
    const response = await httpRequest.get(path, option);
    return response.data;
};
export const post = async (path, data, options) => {
    const response = await httpRequest.post(path, data, options);
    console.log(response);
    return response;
};
// export const patch = async (path, data, options) => {
//     const response = await httpRequest.patch(path, data, options);

//     return response;
// };

// export const deleted = async (path, options) => {
//     const response = await httpRequest.delete(path, options);

//     return response;
// };
