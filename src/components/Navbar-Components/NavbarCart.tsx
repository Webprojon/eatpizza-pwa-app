import Link from "next/link";
import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";

export default function NavbarCart() {
	return (
		<Link href="/delivery" className="relative sm:hidden">
			<div className="absolute -top-3 left-4 flex justify-center items-center w-5 h-5 bg-red-500 rounded-full text-sm text-white">
				1
			</div>
			<RiShoppingCart2Line className="size-6" />
		</Link>
	);
}
