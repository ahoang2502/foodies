import Link from "next/link";
import React from "react";

const navItems = [
	{
		title: "Home",
		url: "/",
	},
	{
		title: "About",
		url: "/about",
	},
	{
		title: "Restaurants",
		url: "/restaurants",
	},
	{
		title: "Popular",
		url: "/foods",
	},
	{
		title: "Contact",
		url: "/contact",
	},
];

const NavItems = ({ activeItem = 0 }: { activeItem?: number }) => {
	return (
		<div>
			{navItems.map((item, index) => (
				<Link
					href={item.url}
					key={item.url}
					className={`px-3 rounded-lg text-[14px] font-Poppins text-sm lg:text-[15px] font-medium lg:px-4 ${
						activeItem === index
							? "font-semibold text-white bg-[#bc6c25]"
							: "text-black"
					}`}
				>
					{item.title}
				</Link>
			))}
		</div>
	);
};

export default NavItems;
