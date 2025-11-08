export enum TitleSize {
    h1, h2, h3, h4, h5, h6
}

export enum TitleValues {
    SIGN_IN='Log In',
    REGISTRATION='Register now',
    SIGN_OUT ='SIGN_OUT',
    SIGN_UP ='SIGN_UP',
}

export interface ITitleProps {
    title: TitleValues;
    size: TitleSize
}





