import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";
import Axios from "axios";
import { useState } from "react";
import { Prompt, useHistory } from "react-router-dom";

const AddProduct = () => {
	// isBlocking used in Prompt
	const [isBlocking, setIsBlocking] = useState(false);
	// used in go back button
	const history = useHistory();
	//YUP object for validation
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
			{/* formik implementation */}
			<Formik
				initialValues={{
					id: uuid(),
					prodName: "",
					quantity: "",
					price: "",
				}}
				// passing validation
				validationSchema={ProductSchema}
				// post values from form to json server
				onSubmit={(values, { resetForm }) => {
					setIsBlocking(false);
					Axios.post("http://localhost:4000/products", values)
						.then(function (response) {
							console.log(response);
							resetForm();
						})
						.catch(function (error) {
							console.log(error);
							history.push("/error");
						});
				}}
			>
				{({ values, handleChange, dirty }) => (
					<Form>
						{/* Prompt if isBlocking is true */}
						<Prompt
							when={isBlocking}
							message="Are you sure you want to leave this page?"
						/>

						<div className="inputproduct">
							<div className="label" htmlFor="prodName">
								Product Name
							</div>
							{/* set the form is dirty, enable blocking */}
							<Field
								id="prodName"
								name="prodName"
								type="text"
								className="field"
								onChange={(e) => {
									setIsBlocking(dirty);
									handleChange(e);
								}}
								value={values.prodName}
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
								onChange={(e) => {
									setIsBlocking(dirty);
									handleChange(e);
								}}
								value={values.quantity}
								className="field"
							/>

							<div className="invalid-input">
								<ErrorMessage name="quantity" />
							</div>
						</div>
						<br />
						<div className="inputproduct">
							<div className="label" htmlFor="price">
								Price
							</div>
							<Field
								id="price"
								name="price"
								type="number"
								onChange={(e) => {
									setIsBlocking(dirty);
									handleChange(e);
								}}
								value={values.price}
								className="field"
							/>
						</div>
						<div className="invalid-input">
							<ErrorMessage name="price" />
						</div>
						<br />

						<button type="submit">Submit</button>
						<button onClick={history.goBack}>Back</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default AddProduct;
