import User from "../models/User";
import bcrypt from "bcryptjs";

// GET ALL USERS
export const getAllUsers = async (req, res, next) => {
	let users;
	try {
		users = await User.find();
	} catch (err) {
		console.log(err);
	}
	if (!users) {
		return res.status(404).json({ message: "No Users Found" });
	}
	return res.status(200).json({ users });
};

// POST/ CREATE USERS
export const signUpUsers = async (req, res, next) => {
	const { name, email, password } = req.body;

	let existingUser;
	try {
		existingUser = await User.findOne({ email });
	} catch (err) {
		return console.log(err);
	}
	if (existingUser) {
		return res.status(400).json({ message: "User Already Exists" });
	}
	const hashedPassword = bcrypt.hashSync(password);

	const user = new User({
		name,
		email,
		password: hashedPassword,
		blogs: [],
	});

	try {
		await user.save();
	} catch (err) {
		return console.log(err);
	}
	return res.status(201).json({ user });
};

// LOGIN USER --- POST method
export const login = async (req, res, next) => {
	const { email, password } = req.body;
	let existingUser;

	try {
		existingUser = await User.findOne({ email });
	} catch (err) {
		return console.log(err);
	}
	if (!existingUser) {
		return res.status(404).json({ message: "User not Found" });
	}
	const isPassWordCorrect = bcrypt.compare(password, existingUser.password);

	if (!isPassWordCorrect) {
		return res.status(400).json({ message: "Incorrect Password" });
	}
	return res.status(200).json({ message: "Login Successful!!!" });
};
