import React, { createContext, useContext } from 'react';
const Context = createContext({});

export function AppContextProvider({ children, ...props }) {
	return <Context.Provider value={{ ...props }}>{children}</Context.Provider>;
}

export function useApp() {
	const context = useContext(Context);
	return context;
}