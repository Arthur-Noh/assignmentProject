import { ImageSourcePropType } from "react-native";

export type HeaderButtonType = 'text' | 'image';

/**
 * NOTE:
 * If you want to use text header
 * type='text', fill 'text' option.
 * Also if you want to use image header
 * type='image', fill 'image' option.
 */
export interface IHeaderButton {
    type: HeaderButtonType;
    text?: string;
    image?: ImageSourcePropType;
    onPress: () => void;
    disabled?: boolean;
}