import { AxiosInstance } from "../../utils/AxiosInstance";

export const getAllCategory = async () => {
    const URL = '/categories';
    try {
        const response = await AxiosInstance.post(URL);
        console.log(response);
    } catch (error) {
        throw error;
    }
}