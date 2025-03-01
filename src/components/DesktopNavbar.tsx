"use client";
import Image from "next/image";
import logo from "../../public/general-imgs/logo.png";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import { FaLocationDot, FaMoon } from "react-icons/fa6";
import { HiOutlineSun } from "react-icons/hi";
import { useTheme } from "@/context/theme-context";
import { LINKS } from "@/lib/data";
import { usePathname } from "next/navigation";
import { VscSettings } from "react-icons/vsc";

export default function DesktopNavbar() {
	const { theme, toggleTheme } = useTheme();
	const pathname = usePathname();

	return (
		<>
			<header className="bg-slate-100 dark:bg-slate-900 sticky top-0 z-50 border-b border-gray-300 dark:border-gray-600 tracking-wider">
				<nav className="h-[10vh] sm:h-[11vh] max-w-[1250px] mx-auto flex items-center justify-between px-3 xl:px-0">
					<span className="sm:hidden font-semibold text-lg">Welcome John!</span>
					<Link href="/" className="hidden sm:flex items-center cursor-pointer">
						<Image
							alt="logo"
							src={logo}
							quality="95"
							priority={true}
							className="animate-spin-3s w-[2.3rem] h-[2.3rem] mr-3"
						/>
						<span className="font-semibold">Eat Pizza</span>
					</Link>

					<div className="hidden md:flex md:gap-x-6 lg:gap-x-12 text-[17px] font-medium">
						{LINKS.slice(0, 3).map((link) => (
							<Link
								key={link.id}
								href={link.href}
								className="flex items-center gap-x-[8px]"
							>
								{link.icon} {link.label}
							</Link>
						))}
					</div>

					<div className="flex items-center gap-x-6">
						<div className="sm:hidden cursor-pointer border p-[.4rem] md:p-[.5rem] rounded-md border-gray-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
							<VscSettings className="size-6" />
						</div>

						<div
							onClick={toggleTheme}
							className="cursor-pointer border p-[.4rem] md:p-[.5rem] rounded-md border-gray-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
						>
							{theme === "light" ? (
								<FaMoon className="size-6" />
							) : (
								<HiOutlineSun className="size-6" />
							)}
						</div>

						<Link
							href="/address"
							className="hidden md:flex items-center bg-gradient-green bg-gradient-green-hover font-semibold text-white transition-all rounded-md py-[.5rem] px-3"
						>
							<FaLocationDot className="mr-2 animate-bounce" />
							Enter your address
						</Link>

						<MobileNavbar />
					</div>
				</nav>
			</header>

			<header className="h-[9vh] flex justify-center sm:hidden bg-slate-100 dark:bg-slate-900 fixed bottom-0 w-full z-50 border-t border-gray-300 dark:border-gray-600 tracking-wider">
				<nav className="flex items-center w-full max-w-[410px] justify-between px-3">
					{LINKS.map((link) => (
						<Link
							key={link.id}
							href={link.href}
							className={`flex flex-col items-center gap-y-1 text-[12px]
								${pathname === link.href && "text-red-600"}
								`}
						>
							{link.icon} {link.label}
						</Link>
					))}
				</nav>
			</header>
		</>
	);
}
