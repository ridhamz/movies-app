import http from './httpService';
//import { apiUrl } from '../config.json';
//import { toast } from 'react-toastify';

const apiEndpoint = "/users";

/*function getUserUrl(id){
    return `${apiEndpoint}/${id}`;
}*/

export function register(user){
    return http.post(apiEndpoint,{
        email: user.username,
        name: user.name,
        password: user.password
    })
}
