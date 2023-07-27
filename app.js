import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";

const app = express();
app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

// app.use("/api", (req, res, next) => {
// 	res.send("Hello Titans");
// });

mongoose
	.connect(
		"mongodb+srv://jocatins:sphinx007@sphinxdb.gwd8s.mongodb.net/Blog?retryWrites=true&w=majority"
	)
	.then(() => {
		app.listen(4500);
	})
	.then(() => console.log("Connected Successfully!!"))
	.catch((err) => console.log(err));
