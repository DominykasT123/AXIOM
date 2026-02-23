import { useState, useEffect } from "react";
import axios from "axios";
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
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>{product.title}</Card.Text>
            <Card.Text>{product.price}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
        </Card.Body>
    </Card>
        </>
    )
}
export default Oneproduct