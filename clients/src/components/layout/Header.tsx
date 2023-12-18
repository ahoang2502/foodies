import React from "react";

import styles from "@/src/utils/style";
import NavItems from "../NavItems";
import ProfileDropdown from "../ProfileDropdown";

const Header = () => {
	return (
		<header className="w-full bg-[#fff0dc] p-2">
			<div className="w-[90%] m-auto flex items-center justify-between">
				<div className=" flex flex-col space-y-0 items-center justify-center">
					<h1
						className={`${styles.logo} text-black font-bold text-large md:text-2xl`}
					>
						Foodies
					</h1>

					<p className="text-black  text-xs font-mono ">FUSION</p>
				</div>
				<NavItems />

				<ProfileDropdown />
			</div>
		</header>
	);
};

export default Header;
