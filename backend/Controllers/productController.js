import product from "../Models/product.js";

export const addProduct = async (req,res) =>{
    try {
        const {name, category, image, price} = req.body;

        const response = await product.find({}).exec();
        // console.log(response);
        if(!response) {
            let products = new product ({
                name,
                category,
                image,
                price
            });
            await products.save();
            return res.status(200).json({success: true, message: "Products Added"});
        } else{
            return res.status(400).json({success: false, message: "Product already Added"});
        }
    } catch (error) {
        return res.status(500).json({success:false, message: error});
    }
}

export const getProduct = async (req,res) => {
    try {
        const product = await product.find({}).exec();
        console.log(product, "rere");
        if(product){
            return res.status(200).json({success:true, message: "This is the List of your products", product});
        }else{
            return res.status(404).json({success:false, message: "Product not found"});
        }
    } catch (error) {
        return res.status(500).json({success:false, message: error});
}
}