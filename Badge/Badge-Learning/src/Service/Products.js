import api from "../axios";

export const getProduct=async(page)=>{
    const res=await api.get('/products')

    console.log("API Return ",res.data);
    
    return res.data
}
export default getProduct