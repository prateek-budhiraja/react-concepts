import { Link } from "react-router-dom";

const IndividualProduct = ({ item }) => {
	return (
		<tr>
			<td>
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
