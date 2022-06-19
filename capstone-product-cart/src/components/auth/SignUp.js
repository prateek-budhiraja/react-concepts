import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { v4 as uuid } from "uuid";
import { useState } from "react";
// import { Form } from "reactstrap";
import { Prompt } from "react-router-dom";

import "./authstyle.css";
import { Button } from "reactstrap";

const SignUp = () => {
	const [isBlocking, setIsBlocking] = useState(false);
	//YUP object for validation
	const SignUpValidations = Yup.object().shape({
		emailID: Yup.string()
			.email("Invalid Email")
			.required("Email ID is required"),
		firstName: Yup.string()
			.required("First name is required")
			.min(3, "First Name must be greater than 2 characters"),
		lastName: Yup.string()
			.required("Last name is required")
			.min(3, "Last Name must be greater than 2 characters"),
		phoneNum: Yup.string()
			.required("Phone number is required")
			.min(10, "Phone number should be 10 digits long")
			.max(10, "Phone number should be 10 digits long"),
		password: Yup.string()
			.required("Password is required")
			.min(5, "Password must be minimum 5 characters long"),
		confirmPassword: Yup.string()
			.required("Password is required")
			.oneOf([Yup.ref("password"), null], "Passwords must match"),
	});
	return (
		<div className="auth-form-wrapper  col-lg-8 col-md-8 col-10 mt-5 mb-5 p-5">
			<h1 className="text-success">Create a Super Store Account</h1>

			{/* formik implementation */}
			<Formik
				initialValues={{
					id: uuid(),
					firstName: "",
					lastName: "",
					emailID: "",
					phoneNum: "",
					password: "",
					confirmPassword: "",
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
								<div className="fs-5" htmlFor="firstName">
									First Name
								</div>
								{/* set the form is dirty, enable blocking */}
								<Field
									id="firstName"
									name="firstName"
									type="text"
									// className="field"
									onChange={(e) => {
										setIsBlocking(dirty);
										handleChange(e);
									}}
									value={values.firstName}
									className="p-2 col-12 rounded border-0"
								/>
								<div className="invalid-input">
									<ErrorMessage name="firstName" />
								</div>
							</div>
							<div className="p-3">
								<div className="fs-5" htmlFor="lastName">
									Last Name
								</div>
								{/* set the form is dirty, enable blocking */}
								<Field
									id="lastName"
									name="lastName"
									type="text"
									// className="field"
									onChange={(e) => {
										setIsBlocking(dirty);
										handleChange(e);
									}}
									value={values.lastName}
									className="p-2 col-12 rounded border-0"
								/>
								<div className="invalid-input">
									<ErrorMessage name="lastName" />
								</div>
							</div>
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
								<div className="fs-5" htmlFor="phoneNum">
									Phone Number
								</div>
								<Field
									id="phoneNum"
									name="phoneNum"
									type="number"
									min="0"
									onChange={(e) => {
										setIsBlocking(dirty);
										handleChange(e);
									}}
									value={values.phoneNum}
									className="p-2 col-12 rounded border-0"
								/>

								<div className="invalid-input">
									<ErrorMessage name="phoneNum" />
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

							<div className="p-3">
								<div className="fs-5" htmlFor="confirmPassword">
									Confirm Password
								</div>
								<Field
									id="confirmPassword"
									name="confirmPassword"
									type="password"
									onChange={(e) => {
										setIsBlocking(dirty);
										handleChange(e);
									}}
									value={values.confirmPassword}
									className="p-2 col-12 rounded border-0"
								/>

								<div className="invalid-input">
									<ErrorMessage name="confirmPassword" />
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

export default SignUp;
