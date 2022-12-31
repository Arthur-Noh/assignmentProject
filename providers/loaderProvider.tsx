import React, { createContext, ReactNode, useState } from 'react';

interface ILoaderProvider {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoaderContext = createContext<ILoaderProvider | undefined>(undefined);

const LoaderProvider = React.memo(({ children } : { children: ReactNode }) => {
    const [ loading, setLoading ] = useState<boolean>(false);

    return (
        <LoaderContext.Provider value={{
            loading,
            setLoading
        }}>
            {children}
        </LoaderContext.Provider>
    );
});

export default LoaderProvider;