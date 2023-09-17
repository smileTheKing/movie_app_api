import axios from "axios";

const   baseUrl = import.meta.env.VITE_API_URL;

const getApi = axios.create({
    baseURL:baseUrl,
    params:{apikey:import.meta.env.VITE_API_TOKEN}
    
})

export default getApi;


