import React, { createContext, ReactNode, useState } from 'react';
import { IssueDTO } from '../interface/types';


interface IIssueProvider {
    issueList: Array<IssueDTO>;
    setIssueList: React.Dispatch<React.SetStateAction<Array<IssueDTO>>>;
    detailIssue: IssueDTO;
    setDetailIssue: React.Dispatch<React.SetStateAction<IssueDTO>>;
}

export const IssueContext = createContext<IIssueProvider | undefined>(undefined);

const IssueProvider = React.memo(({ children }: { children: ReactNode }) => {
    const [ issueList, setIssueList ] = useState<Array<IssueDTO>>([]);
    const [ detailIssue, setDetailIssue ] = useState<IssueDTO>({} as IssueDTO);

    return (
        <IssueContext.Provider value={{
            issueList,
            setIssueList,
            detailIssue,
            setDetailIssue,
        }}>
            {children}
        </IssueContext.Provider>
    );
});

export default IssueProvider;