import Colors from './Colors';
import Typography from './Typography';
import { HomeSpacing } from './Spacing';
import { Device } from './Device';

export type ThemeType = {
    textAlign: any;
    fontFamily: any;
    color: any;
    typography: any;
    device: any;
    spacing: any;
};

export const Theme: ThemeType = {
    textAlign: ['left', 'center', 'right'], // used in old insight flow
    fontFamily: ['"Inter", sans-serif;', '"Gilroy", sans-serif;'], // used in old insight flow
    color: Colors,
    device: Device,
    typography: Typography,
    spacing: HomeSpacing,
};

export default Theme;
