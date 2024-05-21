import React from 'react';
import { useState, useEffect } from "react"
import './style.css';
export default function Test(){
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res)=> res.json())
            .then((json) => {
                console.log(json);
                setProducts(json);
            })
    }, []);
    return (
        <div style={{padding: '30px'}}>
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Category</td>
                        <td>image</td>
                        <td>Rating</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>(
                        <tr>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td><img src={product.image} width={90} height={90}/></td>
                            <td>{product.rating.rate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}