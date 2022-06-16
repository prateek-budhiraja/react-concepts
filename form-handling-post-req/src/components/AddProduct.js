import { Formik, Form, Field } from "formik";
import { v4 as uuid } from "uuid";

const AddProduct = () => {
	return (
		<div className="addproduct">
			<h1>Add a new Product</h1>
			<Formik
				initialValues={{
					id: uuid(),
					prodName: "",
					quantity: 0,
					price: 0,
				}}
				onSubmit={(values) => {
					console.log(JSON.stringify(values, null, 2));
				}}
			>
				<Form>
					<div className="inputproduct">
						<label htmlFor="prodName">Product Name</label>
						<Field
							id="prodName"
							name="prodName"
							type="text"
							className="field"
						/>
					</div>
					<br />
					<div className="inputproduct">
						<label htmlFor="quantity">Quantity</label>
						<Field
							id="quantity"
							name="quantity"
							type="number"
							className="field"
						/>
					</div>
					<br />
					<div className="inputproduct">
						<label htmlFor="price">Price</label>
						<Field id="price" name="price" type="number" className="field" />
					</div>
					<br />

					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</div>
	);
};

export default AddProduct;
