import React from "react";

export interface IImageProps extends React.HTMLAttributes<HTMLImageElement> {
    src: string;
    type: ImageType;
    width?: number | string;
    height?: number | string;
}

export enum ImageType {
    CAT='cat',
    DOG='dog',
    PARROT='parrot',
    RAT='rat',
    FISH='fish',
    PIG='pig',
    HAMSTER='hamster',
    LOGO='logo',
}
