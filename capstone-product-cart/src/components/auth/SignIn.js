import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
// import { Form } from "reactstrap";
import { Prompt } from "react-router-dom";

import "./authstyle.css";
import { Button } from "reactstrap";

const SignIn = () => {
	const [isBlocking, setIsBlocking] = useState(false);
	//YUP object for validation
	const SignUpValidations = Yup.object().shape({
		emailID: Yup.string()
			.email("Invalid Email")
			.required("Email ID is required"),
		password: Yup.string()
			.required("Password is required")
			.min(5, "Password must be minimum 5 characters long"),
	});
	return (
		<div className="auth-form-wrapper  col-lg-8 col-md-8 col-10 mt-5 mb-5 p-5">
			<h1 className="text-success">Sign In</h1>
			<h5 className="text-muted">Use Your Registered Account</h5>

			{/* formik implementation */}
			<Formik
				initialValues={{
					emailID: "",
					password: "",
				}}
				// passing validation
				validationSchema={SignUpValidations}
				// post values from form to json server
				// onSubmit={(values, { resetForm }) => {
				// 	setIsBlocking(false);
				// 	Axios.post("http://localhost:4000/products", values)
				// 		.then(function (response) {
				// 			console.log(response);
				// 			resetForm();
				// 		})
				// 		.catch(function (error) {
				// 			console.log(error);
				// 			history.push("/error");
				// 		});
				// }}
			>
				{({ values, handleChange, dirty }) => (
					<Form>
						{/* Prompt if isBlocking is true */}
						<Prompt
							when={isBlocking}
							message="Are you sure you want to leave this page?"
						/>
						<div className="auth-form">
							<div className="p-3">
								<div className="fs-5" htmlFor="emailID">
									Email ID
								</div>
								{/* set the form is dirty, enable blocking */}
								<Field
									id="emailID"
									name="emailID"
									type="text"
									// className="field"
									onChange={(e) => {
										setIsBlocking(dirty);
										handleChange(e);
									}}
									value={values.emailID}
									className="p-2 col-12 rounded border-0"
								/>
								<div className="invalid-input">
									<ErrorMessage name="emailID" />
								</div>
							</div>
							<div className="p-3">
								<div className="fs-5" htmlFor="password">
									Password
								</div>
								<Field
									id="password"
									name="password"
									type="password"
									onChange={(e) => {
										setIsBlocking(dirty);
										handleChange(e);
									}}
									value={values.password}
									className="p-2 col-12 rounded border-0"
								/>

								<div className="invalid-input">
									<ErrorMessage name="password" />
								</div>
							</div>
						</div>
						<div className="p-3">
							<Button color="success" block>
								SIGN UP
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SignIn;
