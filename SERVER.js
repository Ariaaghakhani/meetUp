import axios from "axios";

const API_URL = 'https://66b4d9dd9f9169621ea49b31.mockapi.io'

export default {
    getEvents(){
        return axios({
            method:'get',
            url:`${API_URL}/events`,
        })
    }
}