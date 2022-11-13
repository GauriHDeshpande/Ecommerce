import { AxiosInstance } from "../../utils/AxiosInstance";

export const signIn = async (user) => {
    const URL = '/auth/signin';
    try {
        const response = await AxiosInstance.post(URL, user);
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const signUp = async (user) => {
    const URL = '/auth/signup';
    try {
        const response = await AxiosInstance.post(URL, user);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}