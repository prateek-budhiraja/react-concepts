import React, { useEffect, useState } from "react";
import Axios from "axios";
import IndividualProduct from "./IndividualProduct";

const Products = () => {
	// creating state
	const [products, setProducts] = useState([]);

	// getting data from json server
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
				<thead>
					<tr>
						<th>ID</th>
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
		</div>
	);
};

export default Products;
