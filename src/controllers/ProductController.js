import Product from "../models/product";
import createError from "http-errors";
import productSchema from "../validations/product";
import { ValidationError } from "yup";

export async function get(req, res, next) {
	try {
		if (req.params.id) {
			const product = await Product.findOne({
				_id: req.params.id,
			});

			if (!product) {
				throw createError.BadRequest("Sản phẩm không tồn tại");
			}

			return res.json({
				message: "Successfully",
				data: product,
			});
		} else {
			const products = await Product.find({});

			return res.json({
				message: "Successfully",
				data: products,
			});
		}
	} catch (error) {
		next(error);
	}
}

export async function create(req, res, next) {
	try {
		await productSchema.validate(
			{
				...req.body,
			},
			{
				abortEarly: false,
			}
		);

		const response = await Product.create({
			...req.body,
		});

		return res.status(201).json({
			message: "Successfully",
		});
	} catch (error) {
		if (error instanceof ValidationError) {
			const errors = {};
			error.inner.forEach((e) => (errors[e.path] = e.message));
			console.log(errors);
			return next(createError.BadRequest(errors));
		}

		next(error);
	}
}

export async function update(req, res, next) {
	try {
		await productSchema.validate(
			{
				...req.body,
			},
			{
				abortEarly: false,
			}
		);

		const response = await Product.updateOne(
			{
				_id: req.params.id,
			},
			{
				...req.body,
			}
		);

		return res.json({
			message: "Successfully",
		});
	} catch (error) {
		if (error instanceof ValidationError) {
			const errors = {};
			error.inner.forEach((e) => (errors[e.path] = e.message));
			console.log(errors);
			return next(createError.BadRequest(errors));
		}

		next(error);
	}
}

export async function remove(req, res, next) {
	try {
		const response = await Product.deleteOne({
			_id: req.params.id,
		});

		return res.json({
			message: "Successfully",
		});
	} catch (error) {
		next(error);
	}
}
