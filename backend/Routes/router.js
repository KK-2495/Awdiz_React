import express from "express";
import { getCurrentUser, login, register } from "../Controllers/userController.js";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post("/get-current-user", getCurrentUser)


export default router;