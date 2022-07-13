import axios from "axios";

export const postData = async (url,data)=>{
    try {
        const response = await axios.post(url,data)
        return response;
    } catch (error) {
        return error;
    }
}

export const postDataPrivate = async(url,data)=>{
    const token = JSON.parse(localStorage.getItem("activeUser")).token;
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    try {
        //axios.post(URL, data, config).then(...)
        const response = await axios.post(url,data,config)
        return response;
    } catch (error) {
        return error;
    }
} 