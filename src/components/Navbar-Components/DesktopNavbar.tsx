import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import NavbarLogo from "./NavbarLogo";
import ThemeIcons from "./ThemeIcons";
import TabletNavbar from "./TabletNavbar";
import MobileNavbar from "./MobileNavbar";
import userImg from "../../../public/general-imgs/manimg.webp";
import Image from "next/image";
import MobileBasket from "../Basket-Components/MobileBasket";
import SelectCategory from "./SelectCategory";
import NavbarLinks from "./NavbarLinks";

export default async function DesktopNavbar() {
	return (
		<>
			<header className="bg-slate-100 dark:bg-slate-900 sticky top-0 z-50 border-b border-gray-300 dark:border-gray-600 tracking-wider">
				<nav className="h-[9vh] sm:h-[11vh] max-w-[1250px] mx-auto flex items-center justify-between px-3 xl:px-0">
					<div className="sm:hidden flex items-center gap-x-3">
						<Image
							src={userImg}
							alt="user img"
							className="w-9 h-9 rounded-full object-cover"
						/>
						<span className="font-semibold text-lg">Welcome John!</span>
					</div>

					<NavbarLogo />
					<NavbarLinks />

					<div className="flex items-center gap-x-7">
						<MobileBasket />
						<SelectCategory />
						<ThemeIcons />

						<Link
							href="/address"
							className="hidden md:flex items-center bg-gradient-green bg-gradient-green-hover font-semibold text-white transition-all rounded-md py-[.5rem] px-3"
						>
							<FaLocationDot className="mr-2 animate-bounce" />
							Enter your address
						</Link>
						<TabletNavbar />
					</div>
				</nav>
			</header>

			<MobileNavbar />
		</>
	);
}
