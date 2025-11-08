import React, {FC} from 'react';
import {IImageProps} from "./IImageProps";

export const Image:FC<IImageProps> = (props) => {

    const {src, className, type, width=150, height=150} = props;

    return (
        <div>
        <img
            src={src}
            width={width}
            height={height}
            alt={type}
            className={className}/>
        </div>
    );
};
