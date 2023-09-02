import express from "express";
import { getCurrentUser, login, register } from "../Controllers/userController.js";
import { addProduct, getProduct } from "../Controllers/productController.js";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post("/get-current-user", getCurrentUser);

router.post("/add-product", addProduct);
router.get("/get-product", getProduct);


export default router;