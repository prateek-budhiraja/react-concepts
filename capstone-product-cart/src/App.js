import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import About from "./components/About";

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/about" component={About} />
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
