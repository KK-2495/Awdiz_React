import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-hot-toast';
import api from '../ApiConfig';

  const Cart = () => {
    const [cartProduct, setCartProduct] = useState([]);
    console.log(cartProduct);
    const [totalPrice, setTotalPrice ] = useState(0);
    const {state} = useContext(AuthContext);
    console.log(state);

    useEffect(() => {
      const getCartProducts = async () => {
        try {
          const response = await api.post("/buyer/get-cartproducts", { userId: state?.user?._id });
          if (response.data.success) {
            setCartProduct(response.data.cartProducts);
            setTotalPrice(response.data.totalPrice);
            toast.success("Cart products loaded successfully");
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      };
  
      if (state?.user?._id) {
        getCartProducts();
      }
    }, [state]);


  return (
    <div >
        <h1 className='underline'>Your Cart Items</h1>
      {cartProduct?.length ? <div className='flex justify-between'>
        <div>
          {cartProduct.map((product) =>(
            <div key={product._id}>
              <div>
                <div>{product.name}</div>
                <div>{product.image}</div>
                <div>{product.price}</div>
              </div>
            </div>
          ))}
        </div>
          <div className='text-red-600'>Total Price:{totalPrice}</div>
        </div> :<div> Loading... </div> }
    </div>
  )
}

export default Cart;