import React, { createContext, ReactNode, useState } from 'react';
import { IssueListDTO } from '../interface/types';


interface IIssueProvider {
    issueList: Array<IssueListDTO>;
    setIssueList: React.Dispatch<React.SetStateAction<Array<IssueListDTO>>>;
}

export const IssueContext = createContext<IIssueProvider | undefined>(undefined);

const IssueProvider = React.memo(({ children }: { children: ReactNode }) => {
    const [ issueList, setIssueList ] = useState<Array<IssueListDTO>>([]);

    return (
        <IssueContext.Provider value={{
            issueList,
            setIssueList,
        }}>
            {children}
        </IssueContext.Provider>
    );
});

export default IssueProvider;