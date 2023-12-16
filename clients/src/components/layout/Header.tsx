import React from "react";

import styles from "@/src/utils/style";
import NavItems from "../NavItems";
import ProfileDropdown from "../ProfileDropdown";

const Header = () => {
	return (
		<header className="w-full bg-[#fefae0] p-2">
			<div className="w-[90%] m-auto flex items-center justify-between">
				<h1 className={`${styles.logo} text-black font-bold text-large md:text-2xl`}>Fishta-oh</h1>
				<NavItems />

				<ProfileDropdown />
			</div>
		</header>
	);
};

export default Header;
