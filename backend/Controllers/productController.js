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