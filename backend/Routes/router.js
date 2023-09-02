import express from "express";
import { getCurrentUser, login, register } from "../Controllers/userController.js";
import { addProduct, getProduct, getSingleProduct } from "../Controllers/productController.js";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post("/get-current-user", getCurrentUser);

router.post("/add-product", addProduct);
router.get("/get-product", getProduct);
router.post("/get-single-product", getSingleProduct);


export default router;