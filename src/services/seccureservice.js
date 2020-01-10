import axios from 'axios';

export class HttpSecureService {
    constructor(){
        this.url = 'http://localhost:5000';
    }

    register(user){
        let resp = axios.post(`${this.url}/api/Auth/Register`, user,{
            'Content-Type':'application.json'
        });
        return resp;
    }

    login(user){
        let resp = axios.post(`${this.url}/api/Auth/Login`, user,{
            'Content-Type':'application.json'
        });
        return resp;
    }

    getdata(authData){
        console.log(authData.token);
        // const config = {
        //     'Authorization':`Bearer ${authData.token}`
        // };
        let resp = axios.get(`${this.url}/api/Products`,
         { headers: {"Authorization" : `Bearer ${authData.token}`} });
        return resp;
    }
}