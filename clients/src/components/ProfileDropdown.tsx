"use client";

import {
	Avatar,
	Divider,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

const ProfileDropdown = () => {
	const [signedIn, setSignedIn] = useState(false);

	return (
		<div className="flex items-center gap-4">
			{signedIn ? (
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Avatar
							as="button"
							className="transition-transform"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1200px-Missing_avatar.svg.png"
						/>
					</DropdownTrigger>

					<DropdownMenu aria-label="profile-actions" variant="flat">
						<DropdownItem key="profile" className="h-14 gap-2">
							<p className="">
								Signed in as
								<span className="font-semibold"> support@fishtaoh.com</span>
							</p>
						</DropdownItem>
						<DropdownItem key="settings">My Profile</DropdownItem>
						<DropdownItem key="all_orders">All Orders</DropdownItem>
						<DropdownItem key="">Apply for seller account</DropdownItem>

						<DropdownItem key="logout" className="text-rose-500" color="danger">
							Logout
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			) : (
				<CgProfile className="text-3xl cursor-pointer text-black" />
			)}
		</div>
	);
};

export default ProfileDropdown;
