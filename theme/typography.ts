import { fontScaler } from '../helper/scaler';

export interface ITypography {
    weight: {
        regular: string,
        medium: string,
        semiBold: string,
        bold: string,
    };
    size: {
        s1: number,
        s2: number,
        s3: number,
        m1: number,
        m2: number,
        m3: number,
        l1: number,
        l2: number,
        l3: number,
    };
}

export const typography: ITypography = {
    weight: {
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
    },
    size: {
        s1: fontScaler(12),
        s2: fontScaler(13),
        s3: fontScaler(14),
        m1: fontScaler(15),
        m2: fontScaler(16),
        m3: fontScaler(17),
        l1: fontScaler(18),
        l2: fontScaler(19),
        l3: fontScaler(20),
    },
};