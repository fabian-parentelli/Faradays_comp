declare module 'faradays_comp' {

    // Propiedades para los Iconos
    export interface IconProps {
        color?: string;
        size?: string;
        onClick?: () => void;
        backCol?: string;
        bold?: string;
    }

    // Propiedades para el Spinner
    export interface SpinnerProps {
        color?: string;
        size?: string;
    }

    // Propiedades para el Snackbar
    export interface SnackbarProps {
        snack: {
            open: boolean;
            message: string;
            status: 'error' | 'success' | 'info' | 'warning';
        };
        duration?: number;
    }

    // Propiedades para el Loader
    export interface LoaderProps {
        open?: boolean;
        color?: string;
    }

    // Propiedades para Autocomplete
    export interface AutoCompleteProps {
        options?: any[];
        labelKey?: string;
        setData?: (selectedOption: any) => void;
        inputStyles?: {          // Nuevo objeto con propiedades para el input
            height?: string;
            width?: string;
            placeholder?: string;
        };
    }

    // Propiedades para ScrollToTop
    export interface ScrollToTopProps {
        children: React.ReactNode;
    }

    // Propiedades para TextAreaExpand
    export interface TextAreaExpandProps {
        placeholder?: string;
        value: string;
        handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
        name?: string;
        required?: boolean;
        style?: {
            width?: string;
            border?: string;
            borderRadius?: string;
            color?: string;
            backgroundColor?: string;
        };
    }

    // Exportación de los componentes
    export const IconCheck: React.FC<IconProps>;
    export const IconCross: React.FC<IconProps>;
    export const IconInfo: React.FC<IconProps>;
    export const IconWarning: React.FC<IconProps>;
    export const IconMenu: React.FC<IconProps>;
    export const IconHome: React.FC<IconProps>;
    export const IconNetworks: React.FC<IconProps>;
    export const IconBag: React.FC<IconProps>;
    export const IconMessage: React.FC<IconProps>;
    export const IconBell: React.FC<IconProps>;
    export const IconApp: React.FC<IconProps>;
    export const IconCode: React.FC<IconProps>;
    export const IconBook: React.FC<IconProps>;
    export const IconIcons: React.FC<IconProps>;
    export const IconUsers: React.FC<IconProps>;
    export const IconUser: React.FC<IconProps>;
    export const IconNews: React.FC<IconProps>;
    export const IconCopy: React.FC<IconProps>;
    export const IconDots: React.FC<IconProps>;
    export const IconCalendar: React.FC<IconProps>;
    export const IconClipBoard: React.FC<IconProps>;
    export const IconClock: React.FC<IconProps>;
    export const IconCreditCard: React.FC<IconProps>;
    export const IconMap: React.FC<IconProps>;
    export const IconFacebook: React.FC<IconProps>;
    export const IconX: React.FC<IconProps>;
    export const IconYoutube: React.FC<IconProps>;
    export const IconLinkedin: React.FC<IconProps>;
    export const IconInstagram: React.FC<IconProps>;
    export const IconNpm: React.FC<IconProps>;

    export const Spinner: React.FC<SpinnerProps>;

    export const Snackbar: React.FC<SnackbarProps>;

    export const Loader: React.FC<LoaderProps>;

    export const AutoComplete: React.FC<AutoCompleteProps>;

    export const ScrollToTop: React.FC<ScrollToTopProps>;

    export const TextAreaExpand: React.FC<TextAreaExpandProps>;
}