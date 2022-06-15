import React from "react";
import Axios from "axios";

class Products extends React.Component {
	products = [];
	constructor(props) {
		super(props);
		this.fetchDetails();
	}
	fetchDetails = async () => {
		const response = await Axios.get("http://localhost:4000/products");
		this.products = [...this.products, response.data];
	};
	render() {
		return (
			<div className="Products">
				<h1>Products List</h1>
			</div>
		);
	}
}
export default Products;
