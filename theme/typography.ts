import { fontScaler } from "../helper/scaler";

export interface ITypography {
    weight: {
        regular: string,
        medium: string,
        semiBold: string,
        bold: string,
    };
    size: {
        xxs1: number,
        xxs2: number,
        xxs3: number,
        xs1: number,
        xs2: number,
        xs3: number,
        s1: number,
        s2: number,
        s3: number,
        m1: number,
        m2: number,
        m3: number,
        l1: number,
        l2: number,
        l3: number,
        xl1: number,
        xl2: number,
        xl3: number,
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
        xxs1: fontScaler(8),
        xxs2: fontScaler(9),
        xxs3: fontScaler(10),
        xs1: fontScaler(11),
        xs2: fontScaler(12),
        xs3: fontScaler(13),
        s1: fontScaler(14),
        s2: fontScaler(15),
        s3: fontScaler(16),
        m1: fontScaler(17),
        m2: fontScaler(18),
        m3: fontScaler(19),
        l1: fontScaler(20),
        l2: fontScaler(21),
        l3: fontScaler(22),
        xl1: fontScaler(23),
        xl2: fontScaler(24),
        xl3: fontScaler(25),
    },
};