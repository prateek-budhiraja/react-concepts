import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, Prompt } from "react-router-dom";
import ProductContext from "./ProductContext";
import ProductList from "./ProductList";

const Products = () => {
	// creating state
	const [products, setProducts] = useState([]);

	// getting data from json server when the page loads
	useEffect(() => {
		async function fetchDetails() {
			const response = await Axios.get("http://localhost:4000/products");
			setProducts(response.data);
		}
		fetchDetails();
	}, []);

	return (
		<div className="Products">
			<h1>Products List</h1>
			<table>
				{/* Prompt to restrict user to go away from page */}
				<Prompt
					when={true}
					message={(loc) =>
						`Are you sure you want to go to ${loc.pathname} page?`
					}
				/>
				<ProductContext.Provider value={products}>
					<ProductList />
				</ProductContext.Provider>
			</table>
			{/* Button to add product page */}
			<Link to="/addproduct">
				<button>Add Product</button>
			</Link>
		</div>
	);
};

export default Products;
