import 'styled-components';
import { CSSProp } from 'styled-components';

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
    };
  }
  
  export const styled: {
    [key: string]: any;
    div: any;
    main: any;
    header: any;
    footer: any;
    nav: any;
    a: any;
    button: any;
    input: any;
    section: any;
    p: any;
    h1: any;
    h2: any;
    h3: any;
    h4: any;
    h5: any;
    h6: any;
    span: any;
    article: any;
    aside: any;
    form: any;
    ul: any;
    li: any;
  };
} 