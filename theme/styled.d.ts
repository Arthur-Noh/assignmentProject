import 'styled-components';
import { IWhite, IGray, IBlack, IRed, IPrimary } from './palette';
import { ITypography } from './typography';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: IWhite,
            gray: IGray,
            black: IBlack,
            red: IRed,
            primary: IPrimary
        };
        base: {
            templatePadding: number,
            viewPadding: number,
            smallComponentPadding: number,
            mediumComponentPadding: number,
            largeComponentPadding: number,
            smallRadius: number,
            largeRadius: number,
        };
        typography: ITypography;
    }
}