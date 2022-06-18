import { useContext, useState } from "react";
import {
	Navbar,
	Nav,
	NavItem,
	NavbarBrand,
	NavbarToggler,
	Collapse,
} from "reactstrap";
import isLoggedIn from "../context/isLoggedIn";
import IndividualNavLink from "./IndividualNavLink";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const checkLogin = useContext(isLoggedIn);
	return (
		<Navbar color="dark" expand="md" dark>
			<IndividualNavLink
				label={"📥 Super Store"}
				route={"/"}
				isButton={false}
			/>
			<NavbarToggler color="light" onClick={() => setOpen(!open)} />
			<Collapse navbar isOpen={open}>
				<Nav navbar className="ms-auto">
					<NavItem>
						<IndividualNavLink
							label={"About"}
							route={"/about"}
							isButton={false}
						/>
					</NavItem>
					<NavItem>
						<IndividualNavLink
							label={"Products"}
							route={"/products"}
							isButton={false}
						/>
					</NavItem>
					{checkLogin ? (
						<>
							<NavItem>
								<IndividualNavLink
									label={"Profile"}
									route={"/profile"}
									isButton={true}
								/>
							</NavItem>
							<NavItem>
								<IndividualNavLink
									label={"Log Out"}
									route={"/logout"}
									isButton={true}
								/>
							</NavItem>
						</>
					) : (
						<>
							<NavItem>
								<IndividualNavLink
									label={"Sign Up"}
									route={"/signup"}
									isButton={true}
								/>
							</NavItem>
							<NavItem>
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

{
	/* <>
				<IndividualNavLink label={"About"} route={"/about"} />
				<IndividualNavLink label={"Products"} route={"/products"} />
			</>
			<>
				{checkLogin ? (
					<>
						<IndividualNavLink label={"Profile"} route={"/profile"} />
						<IndividualNavLink label={"Logout"} route={"/logout"} />
					</>
				) : (
					<>
						<IndividualNavLink label={"Sign Up"} route={"/signup"} />
						<IndividualNavLink label={"Sign In"} route={"/signin"} />
					</>
				)}
			</> */
}
{
	/* </div> */
}
