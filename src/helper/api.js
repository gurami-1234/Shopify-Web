import axios from "assets/axios";

export const getProducts = async (limit,skip)=>{
    const resp = await axios.get("products",{
        params:{
            limit,
            skip
        }
    })
    console.log(resp.data);
    return resp.data.products
}

export const getSingleProduct = async(id)=>{
    const resp = await axios.get(`products/${id}`)
    console.log(resp);
    return resp.data
}