import User from "../Models/User.js";
import Product from "../Models/product.js";

export const addProduct = async (req,res) =>{
    try {
        const {name, category, image, price} = req.body;    
        const products = new Product ({
            name,
            category, 
            image,
            price
        });
        await products.save();
        return res.status(200).json({success: true, message: "Products Added"});
    } catch (error) {
        return res.status(500).json({success:false, message: error});
    }
}

export const getProduct = async (req,res) => {
    try {
        const product = await Product.find().exec();
        if(product){
            res.status(200).json({status: 200, success: true, product: product});
        }
    } catch (error) {
        return res.status(500).json({success:false, message: "Internal server error"});
}
}

export const getSingleProduct = async (req,res) =>{
    try {
        const {productId} = req.body;
        const product = await Product.findById(productId).exec();
        console.log(product);
        if(!product) return res.status(404).json({status: 404, success:false, message:"Product not found"});
        return res.status(200).json({status: 200, success: true, product: product});
    } catch (error) {
        return res.status(500).json({success:false, message: "Internal server error"});
        
    }
}

export const addCart = async (req,res) =>{
    try {
        const {productId, userId} = req.body;
        if(!productId) return res.status(400).json({status: 400, success: false, message: "Product Id is required..!"});
        if(!userId) return res.status(400).json({status: 400, success: false, message:"User id is required."});

        const user = await User.findById(userId).exec();
        if (!user) return res.status(404).json({ status: 404, success: false, message: "User not found" });

        if (user.cartProduct.includes(productId)) {
            return res.status(400).json({ status: 400, success: false, message: "Product is already in the cart" });
        }

        user.cartProduct.push(productId);
        const updatedUser = await user.save();

        return res.status(200).json({ status: 200, success: true, message: "Added to Cart", user: updatedUser });

    } catch (error) {
        return res.status(500).json({status:500, success: false, message: error});
    }
}

export const getCartProducts = async (req,res) =>{
    try {
      const {userId} = req.body;
      if(!userId) return res.status(400).json({status: 400, success:false, message:"User Id is required"});
      const user = await User.findById(userId);
        if(!user) return res.status(400).json({status: 400, success:false, message:"User not found"});

      const cartItem = user?.cartProduct;
      console.log(cartItem,"cartt")
      let cartProducts = [];
      let totalPrice = 0;
      for(var i=0; i < cartItem.length; i++){
        console.log(cartItem[i],"hello");
        const product = await Product.findById(cartItem[i]);
        totalPrice += product?.price;
        cartProducts.push(product);
      }
      console.log(cartProducts,"end");
      return res.status(200).json({status:200, success:true, cartProducts:cartProducts, totalPrice})
    } catch (error) {
        return res.status(500).json({status:500, success: false, message: error});
    }
}


