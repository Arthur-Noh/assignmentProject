import 'styled-components';
import { IWhite, IGray, IBlack, IPrimary } from './palette';
import { ITypography } from './typography';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: IWhite,
            gray: IGray,
            black: IBlack,
            primary: IPrimary
        };
        base: {
            templatePadding: number,
        };
        typography: ITypography;
    }
}