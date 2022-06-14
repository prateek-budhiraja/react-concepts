import React from "react";
import Product from "./Product";

const ProductsList = (props) => {
	return (
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
				{props.items.map((item) => (
					<Product item={item} key={item.id} />
				))}
			</tbody>
		</table>
	);
};
export default ProductsList;
