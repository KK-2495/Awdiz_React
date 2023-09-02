import { useParams } from "react-router-dom";
import AuthProtected from "./AuthProtected"
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../ApiConfig";
import axios from "axios";

const SingleProduct = () => {
  const[product, setProduct] = useState();
  const {id} = useParams();
    console.log(product)
    useEffect(() =>{
      const getSingleProduct = async () =>{
        try {
          const response = await axios.post("http://localhost:8000/api/v1/get-single-product", {productId: id});
          if(response.data.success){
            setProduct(response.data.product);
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      } 
      getSingleProduct();
    },[id])
  return (
    <AuthProtected>
    <div>
        <h1>{product?.name}</h1>
    </div>
     </AuthProtected>
  )
}

export default SingleProduct;