import React from "react";
import ProductsList from "./ProductsList";
import productData from "../data/productData";

export default class AllProductsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: productData, //getting json data in state
		};
	}
	render() {
		return (
			<>
				<h1>Product List</h1>
				<ProductsList items={this.state.items} />
			</>
		);
	}
}
