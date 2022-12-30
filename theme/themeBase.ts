import { typography } from './typography';
import { white, gray, black, primary } from './palette';
import { scaler } from '../helper/scaler';

const colors = {
    white,
    gray,
    black,
    primary,
};

const base = {
    templatePadding: scaler(15),
};

export default {
    colors,
    base,
    typography,
};