import express from "express";
import {
	addBlog,
	getAllBlogs,
	updateBlog,
	getByBlogID,
	deleteBlog,
	getByUserID,
} from "../controllers/blog-controllers";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getByBlogID);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getByUserID);

export default blogRouter;
