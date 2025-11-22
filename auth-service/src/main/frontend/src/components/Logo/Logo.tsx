import React, {FC} from 'react';
import {Image} from '../Image';
import {ImageType} from "../Image/IImageProps";
import {ILogoProps} from './ILogoProps';
import style from "./logo.module.css"

export const Logo: FC<ILogoProps> = ({src, changeImage}) =>
    <Image
        onMouseEnter={() => changeImage ? changeImage(true) : {} }
        onMouseLeave={() => changeImage ? changeImage(false) : {}}
        className={style.logo}
        height={200}
        src={src}
        type={ImageType.LOGO}
    />


