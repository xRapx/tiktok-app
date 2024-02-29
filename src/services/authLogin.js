import * as httpRequest from '~/units/httpRequest';

const login = async (email, password) => {
    try {
        const res = await httpRequest.post('/auth/login', {
            email,
            password,
        });

        return res.data;
    } catch (err) {
        return { errCode: err.response.status };
    }
};

export default login;
