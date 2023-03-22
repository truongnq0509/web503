import createError from "http-errors";
import product from "./product";

export default function routes(app) {
	app.use("/api/v1/products", product);

	app.use((req, res, next) => {
		next(createError.NotFound("Not Found!"));
	});

	app.use((err, req, res, next) => {
		res.status(err.status || 500).json({
			error: {
				status: err.status || 500,
				message: err.message || "Internal Server",
			},
		});
	});
}
