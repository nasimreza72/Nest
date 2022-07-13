import axios from "axios";

export const fetchData = async (url)=>{
    try {
        const response = await axios.get(url)
        return response;
    } catch (error) {
        return error;
    }
}

export const fetchDataPrivate = async(url)=>{
    const token = JSON.parse(localStorage.getItem("activeUser")).token;
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    try {
        const response = await axios.get(url,config)
        return response;
    } catch (error) {
        return error;
    }
} 