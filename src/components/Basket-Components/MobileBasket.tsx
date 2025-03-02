import prisma from "@/lib/db";
import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";

export default async function MobileBasket() {
	const basketItems = await prisma.basket.findMany();

	return (
		<Link
			href="/delivery"
			className="absolute top-[1.6rem] sm:top-[2.4rem] right-[7.9rem] sm:right-[9rem] z-[200] md:hidden"
		>
			{basketItems.length > 0 && (
				<div className="absolute -top-3 left-4 flex justify-center items-center w-5 h-5 bg-red-500 rounded-full text-sm text-white">
					{basketItems.length}
				</div>
			)}

			<RiShoppingCart2Line className="size-6" />
		</Link>
	);
}
