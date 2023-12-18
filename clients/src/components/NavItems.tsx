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
					className={`px-3 rounded-lg text-[14px] font-Poppins text-sm lg:text-[15px] text-black font-medium lg:px-4 ${
						activeItem === index && "font-semibold bg-[#ffc060]"
					}`}
				>
					{item.title}
				</Link>
			))}
		</div>
	);
};

export default NavItems;
