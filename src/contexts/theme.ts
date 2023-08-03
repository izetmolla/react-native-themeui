import { ButtonProps } from "../components/Button/types";

export interface PseudoComponentProps<T> {
  _light?: T
  _dark?: T
}

interface ThemeUiTypes {
  mode: 'light' | 'dark';
  colors: {
    light: {
      Box: BoxProps['style']
      Text: TextProps['style']
      Button: ButtonProps['style']
    },
    dark: {
      Box: BoxProps['style']
      Text: TextProps['style']
      Button: ButtonProps['style']
    }
  }
  components: {
    Button: {}
    Box: {},
    Text: {
      style: {
        color: string;
      }
    }
  }
}

export const colors: { light: any, dark: any } = {
  light: {
    Box: {
      backgroundColor: 'white',
    },
    Text: {
      color: "black"
    },
    Button: {
      backgroundColor: 'blue'
    }
  },
  dark: {
    Box: {
      backgroundColor: 'black',
    },
    Text: {
      color: "white"
    },
    Button: {
      backgroundColor: 'blue'
    }
  }
}
const theme: ThemeUiTypes = {
  mode: 'light',
  colors: colors,
  components: {
    Box: {
      backgroundColor: 'red',
    },
    Text: {
      style: {
        color: "white"
      }
    },
    Button: {
      style: {
        backgroundColor: 'blue'
      }
    }
  }
};



interface ThemeActionTypes {
  setThemeMode: (mode: 'light' | 'dark') => void;
}


export interface BoxProps {
  style?: {
    backgroundColor?: string;
  }
}
export interface TextProps {
  style?: {
    color?: string;
  }
}

export { ThemeUiTypes, ThemeActionTypes };
export default theme;
