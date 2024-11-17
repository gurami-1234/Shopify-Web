import axios from "assets/axios";

export const getProducts = async ()=>{
    const resp = await axios.get("products")
    console.log(resp);   
}