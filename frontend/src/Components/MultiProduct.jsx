import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"
import api from "../ApiConfig";

const MultiProduct = () => {
    const router = useNavigate();

    const [products, setProducts] = useState();


    useEffect(() =>{
      const getProducts = async () =>{
        try {
          const response = await api.get("/get-product");
          if(response.data.success){
            setProducts(response.data.products);
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      }
      getProducts();
    },[])

  return (
    <div>
        <h1>MultiProduct</h1>
        {products?.length ? <div>
                {products.map((product) => (
                    <div>
                        <img src={product.img} alt="Img" />
                        <h1>Product Name : {product.name}</h1>
                        <h4>Product Price : {product.price}</h4>
                    </div>
                ))}
            </div> : <div>Loading..</div>}
    </div>
  )
}

export default MultiProduct;