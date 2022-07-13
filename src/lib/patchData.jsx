import axios from "axios";

export const updateData = async (url,data)=>{
    try {
        const response = await axios.patch(url,data)
        return response;
    } catch (error) {
        return error;
    }
}

export const updateDataPrivate = async(url,data)=>{
    const token = JSON.parse(localStorage.getItem("activeUser")).token;
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    try {
        const response = await axios.patch(url,data,config)
        return response;
    } catch (error) {
        return error;
    }
} 