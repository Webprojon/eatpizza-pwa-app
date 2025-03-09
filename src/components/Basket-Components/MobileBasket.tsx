import prisma from "@/lib/db";
import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";

export default async function MobileBasket() {
	const basketItems = await prisma.basket.findMany();

	return (
		<Link href="/delivery" className="md:hidden">
			{basketItems.length > 0 && (
				<div className="absolute top-[1rem] right-[7.2rem] sm:top-[1.4rem] sm:right-[7.5rem] flex justify-center items-center w-5 h-5 bg-red-500 rounded-full text-sm text-white">
					{basketItems.length}
				</div>
			)}

			<RiShoppingCart2Line className="size-6" />
		</Link>
	);
}
