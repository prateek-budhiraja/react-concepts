import { useContext, useState } from "react";
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import isLoggedIn from "../context/isLoggedIn";
import IndividualNavLink from "./IndividualNavLink";
import "./navstyle.css";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const checkLogin = useContext(isLoggedIn);
	return (
		<Navbar color="dark" expand="md" dark className="fs-5">
			<IndividualNavLink
				label={"📥 Super Store"}
				route={"/"}
				isButton={false}
			/>
			<NavbarToggler color="light" onClick={() => setOpen(!open)} />
			<Collapse navbar isOpen={open} className="collapse-menu">
				<Nav navbar className="ms-auto">
					<NavItem className="nav-item">
						<IndividualNavLink
							label={"About"}
							route={"/about"}
							isButton={false}
						/>
					</NavItem>
					<NavItem className="nav-item">
						<IndividualNavLink
							label={"Products"}
							route={"/products"}
							isButton={false}
						/>
					</NavItem>
					{checkLogin ? (
						<>
							<NavItem className="nav-item">
								<IndividualNavLink
									label={"Profile"}
									route={"/profile"}
									isButton={true}
								/>
							</NavItem>
							<NavItem className="nav-item">
								<IndividualNavLink
									label={"Log Out"}
									route={"/logout"}
									isButton={true}
								/>
							</NavItem>
						</>
					) : (
						<>
							<NavItem className="nav-item">
								<IndividualNavLink
									label={"Sign Up"}
									route={"/signup"}
									isButton={true}
								/>
							</NavItem>
							<NavItem className="nav-item">
								<IndividualNavLink
									label={"Sign In"}
									route={"/signin"}
									isButton={true}
								/>
							</NavItem>
						</>
					)}
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default NavBar;
