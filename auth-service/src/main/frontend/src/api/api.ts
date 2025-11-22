import axios from "axios";
import {User} from "../redux/types/types";
//TODO Сделать парвильную реализацию успешного и фейлового запроса, пока хз как

const AUTH_URL = 'http://localhost:9002/api/auth';

export const api = {
    registration: (user: User) => axios.post(`${AUTH_URL}/register`, user).then(response => {
        console.log('Ответ от сервера:', response.data);
    }).catch(error => {
        console.error('Ошибка при отправке запроса:', error);
    }),

    login:(user: Pick<User, "password" | "username">) => axios.post(`${AUTH_URL}/login`, user).then(response => {
        console.log('Ответ от сервера:', response.data);
    }).catch(error => {
        console.error('Ошибка при отправке запроса:', error);
    }),

    existsUser: async (params: {value: string, type: string}): Promise<boolean> => {
        const {value, type} = params;
        const {data} = await axios.get(`/api/exists?value=${value}&type=${type}`);
        return data;
    }
};

