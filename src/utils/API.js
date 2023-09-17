<<<<<<< HEAD





=======
>>>>>>> e620e218f428e18e27d43de5f519b92513be7e79
import axios from "axios";

const   baseUrl = import.meta.env.VITE_API_URL;

const getApi = axios.create({
    baseURL:baseUrl,
    params:{apikey:import.meta.env.VITE_API_TOKEN}
    
})

export default getApi;


