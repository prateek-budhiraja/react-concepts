import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Switch,
} from "react-router-dom";
import About from "./components/About";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import ProductInfo from "./components/ProductInfo";
import PageNotFound from "./components/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		{/* Navigation links for routing with styling */}
		<NavLink
			activeClassName="active"
			to="/"
			style={{
				color: "#fff",
				background: "#02B290",
				padding: "10px",
				borderRadius: "5px",
				textDecoration: "none",
				margin: "10px",
			}}
		>
			About
		</NavLink>
		<NavLink
			activeClassName="active"
			to="/products"
			style={{
				color: "#fff",
				background: "#02B290",
				padding: "10px",
				borderRadius: "5px",
				margin: "10px",
				textDecoration: "none",
			}}
		>
			Products
		</NavLink>
		{/* Actual routes */}
		<Switch>
			<Route exact path="/" component={About} />
			<Route path="/products/:prodName" component={ProductInfo} />
			<Route path="/products" component={Products} />
			<Route path="/addproduct" component={AddProduct} />
			<Route path="**" component={PageNotFound} />
		</Switch>
	</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
