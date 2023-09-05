import express from "express";
import { getCurrentUser, login, register } from "../Controllers/userController.js";
import { addCart, addProduct, getProduct, getSingleProduct } from "../Controllers/productController.js";
import BuyerRoutes from "./BuyerRoutes.js";

const router = express.Router();


router.use("/buyer", BuyerRoutes);

router.post('/register', register);
router.post('/login', login);
router.post("/get-current-user", getCurrentUser);

router.post("/add-product", addProduct);
router.get("/get-product", getProduct);
router.post("/get-single-product", getSingleProduct);



export default router;