// importing components
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing components
import NavBar from "./components/nav/NavBar";
import About from "./components/static-pages/About";
import Home from "./components/static-pages/Home";
import Products from "./components/products/Products";
import PageNotFound from "./components/static-pages/PageNotFound";
import Profile from "./components/static-pages/Profile";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import LogOut from "./components/auth/LogOut";
import UserContext from "./components/context/UserContext";
import { useContext, useEffect, useState } from "react";
import Error from "./components/static-pages/Error";
// import Test from "./components/Test";

function App() {
	// const { isLoggedIn } = useContext(UserContext);

	const [isLoggedIn, setIsLoggedIn] = useState();

	useEffect(() => setIsLoggedIn(true), []);

	return (
		<Router>
			<UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
				<NavBar />
				{/* <Test /> */}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/products" component={Products} />
					<Route path="/profile" component={Profile} />
					<Route path="/signup" component={SignUp} />
					<Route path="/signin" component={SignIn} />
					<Route path="/logout" component={LogOut} />
					<Route path="/error" component={Error} />
					<Route path="*" component={PageNotFound} />
				</Switch>
			</UserContext.Provider>
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
