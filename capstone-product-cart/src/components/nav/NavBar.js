import { useContext, useState } from "react";
import {
	Navbar,
	Nav,
	NavItem,
	NavbarToggler,
	Collapse,
	NavbarBrand,
} from "reactstrap";
import UserContext from "../context/UserContext";
import IndividualNavLink from "./IndividualNavLink";
import "./navstyle.css";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const { isLoggedIn } = useContext(UserContext);
	return (
		<Navbar color="dark" expand="md" dark className="fs-5">
			<NavbarBrand onClick={() => setOpen(false)}>
				<IndividualNavLink
					label={"📥 Super Store"}
					route={"/"}
					isButton={false}
				/>
			</NavbarBrand>
			<NavbarToggler color="light" onClick={() => setOpen(!open)} />
			<Collapse navbar isOpen={open} className="collapse-menu">
				<Nav navbar className="ms-auto">
					<NavItem className="nav-item" onClick={() => setOpen(false)}>
						<IndividualNavLink
							label={"About"}
							route={"/about"}
							isButton={false}
						/>
					</NavItem>
					<NavItem className="nav-item" onClick={() => setOpen(false)}>
						<IndividualNavLink
							label={"Products"}
							route={"/products"}
							isButton={false}
						/>
					</NavItem>
					{isLoggedIn ? (
						<>
							<NavItem className="nav-item" onClick={() => setOpen(false)}>
								<IndividualNavLink
									label={"Profile"}
									route={"/profile"}
									isButton={true}
								/>
							</NavItem>
							<NavItem className="nav-item" onClick={() => setOpen(false)}>
								<IndividualNavLink
									label={"Log Out"}
									route={"/logout"}
									isButton={true}
								/>
							</NavItem>
						</>
					) : (
						<>
							<NavItem className="nav-item" onClick={() => setOpen(false)}>
								<IndividualNavLink
									label={"Sign Up"}
									route={"/signup"}
									isButton={true}
								/>
							</NavItem>
							<NavItem className="nav-item" onClick={() => setOpen(false)}>
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
