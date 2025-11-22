import axios from "axios";

const AUTH_URL = 'http://localhost:9002/api/auth'
export const api = {
    registration: (user) => axios.post(`${AUTH_URL}/register`, user).then(response => {
        console.log('Ответ от сервера:', response.data);
    }).catch(error => {
        console.error('Ошибка при отправке запроса:', error);
    }),
    login:(user) => axios.post(`${AUTH_URL}/login`, user).then(response => {
        console.log('Ответ от сервера:', response.data);
    }).catch(error => {
        console.error('Ошибка при отправке запроса:', error);
    }),
}

