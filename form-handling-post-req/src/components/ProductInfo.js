import { useHistory } from "react-router-dom";

const ProductInfo = ({ match, location }) => {
	const {
		params: { prodName },
	} = match;
	const history = useHistory();
	return (
		<div className="ProductInfo">
			<h1>Product info page</h1>
			<h3>
				You have selected:{" "}
				<span className="productInternal">{prodName.toUpperCase()}</span>
			</h3>
			<button onClick={history.goBack}>Go Back</button>
		</div>
	);
};

export default ProductInfo;
