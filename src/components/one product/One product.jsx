import { useState, useEffect } from "react";
import axios from "axios"
function Oneproduct(){
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        axios.get("https://dummyjson/products/1").then(response=>{
            setProduct(response.data)
        });
    },[]);
    
    if (!product){
        return <p>Kraunama...</p>
    }
    
    return(
        <>
        <Card style={{width:}}></Card>
        </>
    )
}
export default Oneproduct