import axios from "axios";
import {User} from "../redux/types/types";
import {actions} from "../redux/actions/actions";

//TODO Сделать парвильную реализацию успешного и фейлового запроса, пока хз как

const AUTH_URL = 'http://localhost:9002/api/auth';
const {setUserTokenAction} = actions;

export const api = {
    registration: (user: User) => axios.post(`${AUTH_URL}/register`, user).then(response => {
        const {token} = response.data;
        if (token) {
            setUserTokenAction(token);
            localStorage.setItem('token', token);
        }
    }).catch(error => {
        console.error('Ошибка при отправке запроса:', error);
    }),

    login: (user: Pick<User, "password" | "username">) => axios.post(`${AUTH_URL}/login`, user).then(response => {
        const {token} = response.data;
        if (token) {
            setUserTokenAction(token);
            localStorage.setItem('token', token);
        }
    }).catch(error => {
        console.error('Ошибка при отправке запроса:', error);
    }),

    existsUser: async (params: { value: string, type: string }): Promise<boolean> => {
        const response = await axios.get(`${AUTH_URL}/exists`, {
            params: {
                value: params.value,
                type: params.type
            }
        });
        return response.data;
    }
};

