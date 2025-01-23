import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/script'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Details = () => {

    const [product, setProduct] = useState([])
    const {id} = useParams()
    const getProduct = async()=>{
        try {
            const res = await axios(`${BASE_URL}/products/${id}`)
            setProduct(res.data)
        } catch (error) {
            console.log(error);
        }   
    }

    useEffect(() => {
      getProduct()
    }, [id])
    
  return (
    <>
    {
        product && <div className="product">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    }
    </>
  )
}

export default Details