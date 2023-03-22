import * as Yup from "yup";

const schema = Yup.object({}).shape({
	name: Yup.string().required(),
	price: Yup.number().required(),
	description: Yup.string(),
	status: Yup.boolean(),
});

export default schema;
