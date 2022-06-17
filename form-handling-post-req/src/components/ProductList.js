import { useContext } from "react";
import IndividualProduct from "./IndividualProduct";
import ProductContext from "./ProductContext";

const ProductList = () => {
	const context = useContext(ProductContext);
	// console.log(context);
	return (
		<>
			<thead>
				<tr>
					<th>Product Name</th>
					<th>Quantity</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{context.map((item) => (
					<IndividualProduct item={item} key={item["id"]} />
				))}
			</tbody>
		</>
	);
};

export default ProductList;
