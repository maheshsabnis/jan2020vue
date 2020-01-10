import axios from 'axios';
export class HttpService {
    constructor(){
        this.url = 'https://apiapptrainingnewapp.azurewebsites.net';
    }

    getData(){
        let res = axios.get(`${this.url}/api/Products`);
        return res;
    }
    postData(product){
        console.log(JSON.stringify(product))
        let res = axios.post(`${this.url}/api/Products`, product,{
            'Content-Type':'application/json'
        });
        return res;
    }
    putData(id,product) {
        let res = axios.put(`${this.url}/api/Products/${id}`, product,{
            'Content-Type':'application/json'
        });
        return res;
    }
    deleteData(id){
        let res = axios.delete(`${this.url}/api/Products/${id}`);
        return res;
    }
}