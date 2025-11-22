import React, {FC} from 'react';
import {IImageProps} from "./IImageProps";

export const Image:FC<IImageProps> = (props) => {

    const {type, width=150, height=150} = props;

    return (
        <div>
        <img
            width={width}
            height={height}
            alt={type}
            {...props}
        />
        </div>
    );
};
