import { User } from "../models/User.js";
import bcrypt from "bcrypt";

const errorHandler = (error, res) => {
  return res.send(error);
};

const noUserHandler = (res) => {
  return res.send({ message: "No user found" });
};

export const userValidate = async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email }).select("email");
    res.send(true);
  } catch (err) {
    errorHandler(err, res);
  }
};

export const userRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        message: "Email is already registered. Please login",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    let newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.json({ success: true, message: "Account registered" });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await User.findOne({ email });
    if (result == null) {
      noUserHandler(res);
    }

    const isPassCorrect = bcrypt.compareSync(password, result.password);
    if (!isPassCorrect) {
      return res.send({ message: "Invalid login" });
    } else {
      return res.send({ message: "Login successfully" });
    }
  } catch (error) {
    errorHandler(error, res);
  }
};

export const fetchUser = async (req, res) => {
  const { id } = req.user;
  try {
    const fetchedUser = await User.findById(id).select("-password");
    if (!fetchedUser) {
      noUserHandler();
    } else {
      return res.send(fetchedUser);
    }
  } catch (error) {
    errorHandler(error, res);
  }
};

export const fetchAllUsers = async (res) => {
  try {
    const fetchedUsers = await User.find({ isAdmin: false }).select(
      "-password"
    );
    return res.send(fetchedUsers);
  } catch (error) {
    errorHandler(error, res);
  }
};
