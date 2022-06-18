import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

const IndividualNavLink = ({ label, route, isButton }) => {
	return (
		<NavLink
			activeClassName="active"
			to={route}
			style={{
				color: "#fff",
				padding: "10px",
				textDecoration: "none",
			}}
		>
			{isButton ? (
				<Button color={label === "Log Out" ? "danger" : "warning"} outline>
					{label}
				</Button>
			) : (
				<>{label}</>
			)}
		</NavLink>
	);
};

export default IndividualNavLink;
