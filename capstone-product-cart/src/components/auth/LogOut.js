import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./authstyle.css";
import UserContext from "../context/UserContext";

const LogOut = () => {
	const { setIsLoggedIn } = useContext(UserContext);
	const [overlay, setOverlay] = useState(false);
	const history = useHistory();
	useEffect(() => {
		setOverlay(true);
		setTimeout(() => {
			history.push("/");
			setIsLoggedIn(false);
			setOverlay(false);
		}, 3000);
	}, []);

	return (
		<>
			<div className={`logout-overlay ${overlay}`}>Logging Out...</div>
		</>
	);
};

export default LogOut;
