import { IoLocationOutline } from "react-icons/io5";
import { MdRestaurantMenu } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { RiMessage2Line } from "react-icons/ri";

export const LINKS = [
	{
		id: 1,
		href: "/",
		icon: <MdRestaurantMenu className="size-6" />,
		label: "Menu",
	},
	{
		id: 2,
		href: "/delivery",
		icon: <TbTruckDelivery className="size-6" />,
		label: "Delivery",
	},
	{
		id: 3,
		href: "/feedback",
		icon: <RiMessage2Line className="size-6" />,
		label: "Feedback",
	},
	{
		id: 4,
		href: "/address",
		icon: <IoLocationOutline className="size-6" />,
		label: "Address",
	},
];
