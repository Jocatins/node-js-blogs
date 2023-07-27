import express from "express";
import {
	addBlog,
	getAllBlogs,
	updateBlog,
	getByBlogID,
	deleteBlog,
} from "../controllers/blog-controllers";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getByBlogID);
blogRouter.delete("/:id", deleteBlog);

export default blogRouter;