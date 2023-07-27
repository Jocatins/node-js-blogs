import express from "express";
import {
	getAllUsers,
	signUpUsers,
	login,
} from "../controllers/user-controller";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/signup", signUpUsers);
router.post("/login", login);

export default router;
