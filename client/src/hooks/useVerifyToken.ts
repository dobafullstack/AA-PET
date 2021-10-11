import jwt from 'jsonwebtoken'

const useVerifyToken = () => {
    const token = localStorage.getItem('access_token') || "";
    let result = false;

    if (!Boolean(token)) {
        return result;
    }

    try {
        jwt.verify(token, process.env.REACT_APP_SECRET_JWT);

        result = true;
    } catch (error) {
        console.log(error);

        localStorage.removeItem('access_token')

        result = false;
    }
        

    return result;
}

export default useVerifyToken;