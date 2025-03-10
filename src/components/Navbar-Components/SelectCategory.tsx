"use client";
import { useGlobalContext } from "@/context/global-context";
import { useState } from "react";
import { VscSettings } from "react-icons/vsc";

export default function SelectCategory() {
	const [isOpen, setIsOpen] = useState(false);
	const { setSelectValue } = useGlobalContext();

	const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
		const target = event.currentTarget as HTMLSpanElement;
		const value = target.innerText.toLowerCase();
		setSelectValue(value);
		toggleModal();
	};

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<div
				className={`absolute top-[4.8rem] right-3 px-6 py-3 flex flex-col gap-y-4 text-lg sm:hidden bg-slate-100 dark:bg-slate-900 rounded-md
				${isOpen ? "flex" : "hidden"}
				`}
			>
				<span onClick={handleClick}>All Products</span>
				<span onClick={handleClick}>Pizzas</span>
				<span onClick={handleClick}>Sauces</span>
				<span onClick={handleClick}>Drinks</span>
				<span onClick={handleClick}>Creams</span>
			</div>

			<VscSettings onClick={toggleModal} className="sm:hidden size-6" />
		</div>
	);
}
