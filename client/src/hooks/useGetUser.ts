import jwt from 'jsonwebtoken';

const useGetUser = () => {
    const token = localStorage.getItem('access_token') || '';

    const decode: any = jwt.decode(token);

    delete decode.iat;
    delete decode.exp;
    delete decode.__v;

    return decode;
};

export default useGetUser;
