export interface IImageProps extends React.HTMLAttributes<HTMLImageElement> {
    src: string;
    type: ImageType | ArrowImageType;
    width?: number;
    height?: number;
}

export enum ImageType {
    CAT='cat',
    DOG='dog',
    PARROT='parrot',
    RAT='rat',
    FISH='fish',
    PIG='pig',
    HAMSTER='hamster',
}

export enum ArrowImageType {
    ARROW='arrow',
    PET_FOR_ARROW='pet_for_arrow',
}
