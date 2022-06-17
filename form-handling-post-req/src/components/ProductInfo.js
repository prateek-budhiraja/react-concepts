import { useHistory } from "react-router-dom";

const ProductInfo = ({ match }) => {
	// extracting route info from url
	const {
		params: { prodName },
	} = match;
	// useHistory to go back to previous page
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
