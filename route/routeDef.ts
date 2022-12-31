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

type IssueDetailParam = {
    commentId: number;
};

export type AppStackParamList = {
    IssueList: defaultParam,
    IssueDetail: IssueDetailParam,
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