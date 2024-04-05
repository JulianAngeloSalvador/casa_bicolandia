import express from "express";
import {
  fetchAllUsers,
  fetchUser,
  userLogin,
  userRegister,
  userValidate,
} from "../controller/userController.js";

const router = express.Router();

// user validation route
router.post("/validate", userValidate);

// user registration
router.post("/register", userRegister);

// user login
router.post("/login", userLogin);

// fetched a user
router.get("/:id", fetchUser);

// fetched all user
router.get("/", fetchAllUsers);

export default router;
