import { Row, Col, Container, Button } from "reactstrap";
import IndividualNavLink from "../nav/IndividualNavLink";

import "./styles.css";

const Home = () => {
	return (
		// <Container className="home">
		<Row className="w-100">
			<Col className="home-content p-0 col-lg-6 col-md-6 col-12 mx-0 text-center">
				<h1 className="text-primary w-100">📥 Super Store</h1>
				<pre className="w-100 text-muted">
					{`Inventory management software 
designed for Indian businesses`}
				</pre>
				<IndividualNavLink
					isButton={true}
					label={"SIGN UP"}
					route={"/signup"}
				/>
				<IndividualNavLink
					isButton={true}
					label={"SIGN IN"}
					route={"/signin"}
				/>
			</Col>
			<Col className="col-lg-6 col-md-6 col-0">
				<img
					src={process.env.PUBLIC_URL + "/static/images/landing.jpeg"}
					className="col-lg-12 col-md-12 col-0"
				/>
			</Col>
		</Row>
		// </Container>
	);
};

export default Home;
