


/// url \: http://www.omdbapi.com/?i=tt3896198&apikey=705d1d7

import axios from "axios";

const   baseUrl = ' http://www.omdbapi.com';

const getApi = axios.create({
    baseURL:baseUrl,
    params:{apikey:'af5a9886'}
    
})

export default getApi;


