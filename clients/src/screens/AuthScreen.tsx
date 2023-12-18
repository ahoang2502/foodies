import React, { useState } from "react";

import Login from "../shared/auth/Login";
import Signup from "../shared/auth/Signup";

const AuthScreen = () => {
	const [activeState, setActiveState] = useState("login");

	return (
		<div className="w-full fixed top-0 left-0 h-screen z-50 flex items-center justify-center bg-[#fefae127]">
			<div className="w-[40%] bg-zinc-100 rounded shadow-sm py-2 px-6">
				{activeState === "login" && <Login setActiveState={setActiveState} />}
				{activeState === "signup" && <Signup setActiveState={setActiveState} />}
			</div>
		</div>
	);
};

export default AuthScreen;
