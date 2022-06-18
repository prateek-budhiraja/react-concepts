import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Products from "./components/products/Products";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/products" component={Products} />
				<Route path="/profile" component={Profile} />
				<Route path="*" component={PageNotFound} />
			</Switch>
		</Router>
	);
}

export default App;

{
	/* <Route path="/products/:prodName" component={ProductInfo} />
				<Route path="/products" component={Products} />
				<Route path="/addproduct" component={AddProduct} />
				<Route path="/error" component={Error} />
				<Route path="**" component={PageNotFound} /> */
}
