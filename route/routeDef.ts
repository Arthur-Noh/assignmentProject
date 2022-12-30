import IssueDetail from '../pages/issueDetail';
import IssueList from '../pages/issueList';

const IssueScreens = {
    IssueList: {
        initialParams: {},
        component: IssueList,
    },
    IssueDetail: {
        initialParams: {},
        component: IssueDetail,
    }
};

type defaultParam = {
    defaultValue?: string,
} | undefined;

export type AppStackParamList = {
    Main: defaultParam,

    IssueList: defaultParam,
    IssueDetail: defaultParam,
};

export const AppStackDef = {
    ...IssueScreens,
};

const AppStackPageList = {
    IssueList: 'IssueList',
    IssueDetail: 'IssueDetail',
} as const;
type ObjectLiteral<T extends { [i: string]: any }> = T[keyof T];
export type AppStackType = ObjectLiteral<typeof AppStackPageList>;