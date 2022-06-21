import { createContext } from "react";

let logIn = true;
const setLogIn = (foo) => {
	logIn = foo;
};

const UserContext = createContext({});

export default UserContext;
