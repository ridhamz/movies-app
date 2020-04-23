import http from './httpService';
//import { apiUrl } from '../config.json';
import jwtDecode from 'jwt-decode';


const apiEndpoint = "/auth";

http.setJwt(getJwt())

export async function login(email, password){
    const { data: jwt } = await http.post(apiEndpoint,{email, password})
    localStorage.setItem('token',jwt);
}

export  function logout(){
  localStorage.removeItem('token');
}

export function getCurrentUser(){
    try{
    const jwt = localStorage.getItem('token');
    const user = jwtDecode(jwt);
    return user;
     }
     catch(ex)
       { 
         return null;
        }
}

export function loginWithJwt(jwt){
    localStorage.setItem('token',jwt);
}

export function getJwt(){
    return localStorage.getItem('token');
}