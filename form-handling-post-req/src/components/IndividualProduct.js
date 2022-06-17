import { Link } from "react-router-dom";

// display table values
const IndividualProduct = ({ item }) => {
	return (
		<tr>
			<td>
				{/* link to product information page */}
				<Link to={`/products/${item["prodName"]}`} className="prodLink">
					{item["prodName"]}
				</Link>
			</td>
			<td>{item["quantity"]}</td>
			<td>{item["price"]}</td>
		</tr>
	);
};
export default IndividualProduct;
