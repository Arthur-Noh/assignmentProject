import Main from '../pages/main';

const MainScreens = {
    Main: {
        initialParams: {},
        component: Main,
    },
};

type defaultParam = {
    defaultValue?: string,
} | undefined;

export type AppStackParamList = {
    Main: defaultParam,
};

export const AppStackDef = {
    ...MainScreens,
};

const AppStackPageList = {
    Main: 'Main',
} as const;
type ObjectLiteral<T extends { [i: string]: any }> = T[keyof T];
export type AppStackType = ObjectLiteral<typeof AppStackPageList>;