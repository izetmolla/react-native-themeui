import { IconProps } from '../components/Icon/types';
import { ButtonProps } from '../components/Button/types';
import { IPressableProps } from '..//components/Pressable/types';
import { ImageProps } from '../components/Image/types';
import { InputProps, TextInputProps } from '../components/Input/types';

export interface PseudoComponentProps<T> {
  _light?: T;
  _dark?: T;
}
interface NavigationTypes {
  colors: {
    background: string;
    border: string;
    card: string;
    notification: string;
    primary: string;
    text: string;
  };
  dark: boolean;
}

interface ComponentTypes {
  Input: InputProps['style'];
  Image: ImageProps['style'];
  Pressable: IPressableProps['style'];
  Icon: IconProps;
  Navigation: NavigationTypes;
  Box: BoxProps['style'];
  Text: TextProps['style'];
  Button: ButtonProps;
  TextInput: TextInputProps;
}

interface ThemeUiTypes {
  mode: 'light' | 'dark';
  colors: {
    light: ComponentTypes;
    dark: ComponentTypes;
  };
}

export const colors: { light: any; dark: any } = {
  light: {
    Navigation: {
      colors: {
        background: 'rgb(242, 242, 242)',
        border: 'rgb(216, 216, 216)',
        card: 'rgb(255, 255, 255)',
        notification: 'rgb(255, 59, 48)',
        primary: 'rgb(0, 122, 255)',
        text: 'rgb(28, 28, 30)',
      },
      dark: false,
    },
    Input: {
      backgroundColor: 'rgb(242, 242, 242)',
    },
    Image: {},
    Icon: {
      color: 'rgb(28, 28, 30)',
    },
    Box: {
      backgroundColor: 'white',
    },
    Text: {
      color: 'rgb(28, 28, 30)',
    },
    Button: {
      backgroundColor: 'blue',
    },
    TextInput: {
      inputStyles: {
        color: 'rgb(28, 28, 30)',
      },
    },
  },
  dark: {
    Navigation: {
      colors: {
        background: 'rgb(1, 1, 1)',
        border: 'rgb(39, 39, 41)',
        card: 'rgb(18, 18, 18)',
        notification: 'rgb(255, 69, 58)',
        primary: 'rgb(10, 132, 255)',
        text: 'rgb(229, 229, 231)',
      },
      dark: true,
    },
    Input: {
      backgroundColor: 'rgb(1, 1, 1)',
    },
    Image: {},
    Icon: {
      color: 'rgb(229, 229, 231)',
    },
    Box: {
      backgroundColor: 'black',
    },
    Text: {
      color: 'rgb(229, 229, 231)',
    },
    Button: {
      backgroundColor: 'blue',
    },
    TextInput: {
      inputStyles: {
        color: 'rgb(229, 229, 231)',
      },
    },
  },
};
const theme: ThemeUiTypes = {
  mode: 'light',
  colors: colors,
};

interface ThemeActionTypes {
  setThemeMode: (mode: 'light' | 'dark') => void;
}

export interface BoxProps {
  style?: {
    backgroundColor?: string;
  };
}
export interface TextProps {
  style?: {
    color?: string;
  };
}

export { ThemeUiTypes, ThemeActionTypes };
export default theme;
