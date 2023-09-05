import express  from "express";
import { addCart, getCartProducts } from "../Controllers/productController.js";

const router = express.Router();

router.post("/add-cart", addCart);
router.post("/get-cartproducts", getCartProducts);

export default router;