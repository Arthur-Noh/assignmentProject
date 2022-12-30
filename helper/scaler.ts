import { Dimensions, Platform } from "react-native";
import { getBottomSpace, getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";

/**
 * safe iPhoneX: 44,
 * unsafe iPhoneX: 30,
 * other iPhones: 20,
 * android: StatusBar.currentHeight
 */
const statusBarHeight = getStatusBarHeight();

/**
 * iPhoneX: 34,
 * others: 0
 */
const bottomSpace = getBottomSpace();

/** XD dimensions */
const basicDimensions = {
    width: 375,
    height: 812,
};

const deviceDimensions = {
    width: Dimensions.get('screen').width,
    height: isIphoneX() || Platform.OS === 'android' ?
        Dimensions.get('screen').height - (statusBarHeight + bottomSpace) :
        Dimensions.get('screen').height,
};

const scaler = (width: number): number => {
    const scale = deviceDimensions.width / basicDimensions.width;
    return Math.round(width * scale);
};

const fontScaler = (fontSize: number): number => {
    const scale = Math.sqrt(deviceDimensions.height / basicDimensions.height);
    return Math.round(fontSize * scale);
};

export {
    scaler,
    fontScaler,
};