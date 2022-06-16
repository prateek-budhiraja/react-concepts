const IndividualProduct = ({ item }) => {
	return (
		<tr>
			<td>{item["prodName"]}</td>
			<td>{item["quantity"]}</td>
			<td>{item["price"]}</td>
		</tr>
	);
};
export default IndividualProduct;
