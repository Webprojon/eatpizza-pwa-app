"use client";
import React, { useState, createContext, useContext } from "react";

type GlobalContextProviderProps = {
	children: React.ReactNode;
};

type GlobalDataType = {
	selectValue: string;
	setSelectValue: React.Dispatch<React.SetStateAction<string>>;
};

const defaultGlobalContextValue: GlobalDataType = {
	selectValue: "all products",
	setSelectValue: () => {},
};

const GlobalContext = createContext<GlobalDataType>(defaultGlobalContextValue);

export default function GlobalContextProvider({
	children,
}: GlobalContextProviderProps) {
	const [selectValue, setSelectValue] = useState<string>("all products");

	const contextValue: GlobalDataType = {
		selectValue,
		setSelectValue,
	};

	return (
		<GlobalContext.Provider value={contextValue}>
			{children}
		</GlobalContext.Provider>
	);
}

export function useGlobalContext() {
	const context = useContext(GlobalContext);

	if (!context) {
		console.warn("useGlobalContext must be used within GlobalContextProvider");
	}

	return context || defaultGlobalContextValue;
}
