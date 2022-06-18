import { useContext } from "react";
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
	const checkLogin = useContext(isLoggedIn);
	return (
		<Navbar color="dark">
			<IndividualNavLink
				label={"📥 Super Store"}
				route={"/"}
				isButton={false}
			/>
			{/* <NavbarToggler onClick={function noRefCheck() {}} />
				<Collapse navbar> */}
			<Nav navbar className="">
				<NavItem className="">
					<IndividualNavLink
						label={"About"}
						route={"/about"}
						isButton={false}
					/>
					<IndividualNavLink
						label={"Products"}
						route={"/products"}
						isButton={false}
					/>
					{checkLogin ? (
						<>
							<IndividualNavLink
								label={"Profile"}
								route={"/profile"}
								isButton={true}
							/>
							<IndividualNavLink
								label={"Log Out"}
								route={"/logout"}
								isButton={true}
							/>
						</>
					) : (
						<>
							<IndividualNavLink
								label={"Sign Up"}
								route={"/signup"}
								isButton={true}
							/>
							<IndividualNavLink
								label={"Sign In"}
								route={"/signin"}
								isButton={true}
							/>
						</>
					)}
				</NavItem>
			</Nav>
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
