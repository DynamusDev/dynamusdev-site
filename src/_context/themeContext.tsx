import React, { createContext, useContext } from 'react';
const Context: any = createContext({});

export function ThemeContextProvider({ children, ...props }) {
	return <Context.Provider value={{ ...props }}>{children}</Context.Provider>;
}

export function useThemetContext() {
	const context = useContext(Context);
	return context;
}