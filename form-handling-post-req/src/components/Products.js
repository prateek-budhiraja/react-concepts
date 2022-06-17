import React, { useEffect, useState } from "react";
import Axios from "axios";
import IndividualProduct from "./IndividualProduct";
import { Link, Prompt } from "react-router-dom";

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
				{/* prints table */}
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{products.map((item) => (
						<IndividualProduct item={item} key={item["id"]} />
					))}
				</tbody>
			</table>
			{/* Takes to add product page */}
			<Link to="/addproduct">
				<button>Add Product</button>
			</Link>
		</div>
	);
};

export default Products;
