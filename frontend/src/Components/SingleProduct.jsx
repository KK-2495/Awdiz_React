import { useNavigate, useParams } from "react-router-dom";
import AuthProtected from "./AuthProtected"
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../ApiConfig";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const SingleProduct = () => {
  const router = useNavigate();
  const[product, setProduct] = useState();
  const{state} = useContext(AuthContext);
  const {id} = useParams();

  const addProduct = async () =>{
    if(id && state?.user){
      try {
        const response = await api.post("/buyer/add-cart",{ productId: id, userId: state?.user?._id});
        toast.success(response.data.message);
        router("/cart");
      } catch (error) {
        console.log("first")
        toast.error(error.response.data.message);
      }
    }
  }

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
    <div className="flex justify-between ">
        <div>
        <h1>{product?.name}</h1>
        <img src={product?.image} alt="productImage" />
        <p>{product?.price}</p>
        </div>
        <div>
          <button className="p-2 bg-orange-600" onClick={addProduct} >Add to Cart</button>
        </div>
    </div>
     </AuthProtected>
  )
}

export default SingleProduct;