// import original module declarations
import 'styled-components';
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    textAlign: any;
    fontFamily: any;
    color: typeof Colors;
    device: any;
    typography: any;
  }
}
