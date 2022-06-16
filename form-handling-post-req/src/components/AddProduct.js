import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";

const AddProduct = () => {
	const ProductSchema = Yup.object().shape({
		prodName: Yup.string()
			.min(3, "Product name must be greater than 3 characters")
			.required("Product name is required"),
		quantity: Yup.number()
			.required("Quantity is required")
			.integer("Quantity must be a integer")
			.positive("Quantity must not be negative"),
		price: Yup.number()
			.required("Price is required")
			.min(1, "Price must be greater than 0")
			.positive("Price must not be negative")
			.integer("Price must be a integer"),
	});
	return (
		<div className="addproduct">
			<h1>Add a new Product</h1>
			<Formik
				initialValues={{
					id: uuid(),
					// 	prodName: "",
					// 	quantity: 0,
					// 	price: 0,
				}}
				validationSchema={ProductSchema}
				onSubmit={(values) => {
					console.log(JSON.stringify(values, null, 2));
				}}
			>
				<Form>
					<div className="inputproduct">
						<div className="label" htmlFor="prodName">
							Product Name
						</div>
						<Field
							id="prodName"
							name="prodName"
							type="text"
							className="field"
						/>
						<div className="invalid-input">
							<ErrorMessage name="prodName" />
						</div>
					</div>
					<br />
					<div className="inputproduct">
						<div className="label" htmlFor="quantity">
							Quantity
						</div>
						<Field
							id="quantity"
							name="quantity"
							type="number"
							className="field"
						/>
						<div className="invalid-input">
							<ErrorMessage name="quantity" className="invalid-input" />
						</div>
					</div>
					<br />
					<div className="inputproduct">
						<div className="label" htmlFor="price">
							Price
						</div>
						<Field id="price" name="price" type="number" className="field" />
					</div>
					<div className="invalid-input">
						<ErrorMessage name="price" className="invalid-input" />
					</div>
					<br />

					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</div>
	);
};

export default AddProduct;
