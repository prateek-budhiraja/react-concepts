import React from "react";

const Product = (props) => {
	return (
		<tr>
			<td>{props.item.id}</td>
			<td>{props.item.prodName}</td>
			<td>{props.item.quantity}</td>
			<td>{props.item.price}</td>
		</tr>
	);
};
export default Product;
