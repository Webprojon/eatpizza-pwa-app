import { IoLocationOutline } from "react-icons/io5";
import {
	MdOutlineDeliveryDining,
	MdOutlineFeedback,
	MdRestaurantMenu,
} from "react-icons/md";

export const LINKS = [
	{
		id: 1,
		href: "/",
		icon: <MdRestaurantMenu className="size-7 sm:size-6" />,
		label: "Menu",
	},
	{
		id: 2,
		href: "/delivery",
		icon: <MdOutlineDeliveryDining className="size-7 sm:size-6" />,
		label: "Delivery",
	},
	{
		id: 3,
		href: "/feedback",
		icon: <MdOutlineFeedback className="size-7 sm:size-6" />,
		label: "Feedback",
	},
	{
		id: 4,
		href: "/address",
		icon: <IoLocationOutline className="size-7 sm:size-6" />,
		label: "Address",
	},
];
