import React from 'react'
import {Link, useParams} from 'react-router-dom'
import data from '../assets/data'

const Detail = () => {
    const {id} = useParams()
    const product = data.find(i => i.id === Number(id))
    console.log(product);
  return (
    <div>
        <img src={product.img} alt={product.name} />
    </div>
  )
}

export default Detail