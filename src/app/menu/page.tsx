import prisma from "@/lib/db";
import ProductCards from "@/components/ProductCards";
import DesktopBasket from "@/components/Basket-Components/DesktopBasket";

export default async function Products() {
	const products = await prisma.products.findMany();

	return (
		<section className="max-w-[1250px] mx-auto my-8 flex flex-row justify-center lg:justify-between">
			<div className="px-2 sm:px-0 sm:mt-0">
				<ProductCards products={products} />
			</div>
			<DesktopBasket />
		</section>
	);
}
