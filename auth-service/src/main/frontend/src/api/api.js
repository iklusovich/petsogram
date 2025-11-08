import axios from "axios";

export const api = {
    auth: (user) => axios.post('http://localhost:9002/api/auth/register', user).then(response => {
        console.log('Ответ от сервера:', response.data);
    }).catch(error => {
        console.error('Ошибка при отправке запроса:', error);
    })}