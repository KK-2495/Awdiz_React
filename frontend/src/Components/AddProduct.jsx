import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import api from '../ApiConfig/index';

const AddProduct = () => {

    const[product, setProduct] = useState({ name: "", category: "",image:"", price: "" });
    console.log(product, "-product");

    const handleChange = (event) =>{
        setProduct({...product,[event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(product.name && product.category && product.image && product.price){
            try {
                const response = await api.post("/add-product",{product})
                if(response.data.success){
                    product({name:"", category: "", image:"", price: ""})
                    toast.success(response.data.message);
                }
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }else{
            toast.error("Name, Category and price are required..");
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Product Name' name='name' onChange={handleChange} className='border-[1px] border-black outline-none mb-1' /> <br />
            <input type="text" placeholder='Category Name' name='category' onChange={handleChange}  className='border-[1px] border-black outline-none mb-1' /> <br />
            <input type="text" placeholder='Product url' name='image' onChange={handleChange}  className='border-[1px] border-black outline-none mb-1' /> <br />
            <input type="number" placeholder='Set Your Price' name='price' onChange={handleChange}  className='border-[1px] border-black outline-none mb-1' /> <br />
            <input type="submit" value="Add Product" className='border-[1px] border-red-700 '  /> <br />
        </form>
    </div>
  )
}

export default AddProduct;