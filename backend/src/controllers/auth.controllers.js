import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {

    if(!fullName || !email || !password){
        return res.status(400).json({ message: "All fields are required" });

    }
    if (password < 6) {
        return res.status(400).json({ message: "Password length must be at least 6 characters" });
    }
    

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "email already exist" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUSer = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUSer) {
//generate JWT toke here
generateToken(newUSer._id,res)
await newUSer.save();

res.status(201).json({
    _id:newUSer._id,
    fullName:newUSer.fullName,
    email:newUSer.email,
    profilePic:newUSer.profilePic
})

    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log("Error in signup controller",error.message);
    res.status(500).json({message:"Internal Server Error"})
  }
};
export const login = (req, res) => {
  res.send("login route");
};
export const logout = (req, res) => {
  res.send("logout route");
};
