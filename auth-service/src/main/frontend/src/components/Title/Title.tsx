import React, {FC} from 'react';
import {ITitleProps, TitleSize} from "./ITitleProps";
import cn from 'classnames';
import style from './title.module.css';
import {ImageCarousel} from "../ImageCarousel";


export const Title: FC<ITitleProps> = (props) => {

    const {title, size, loading} = props;

    return (
        <div className={style.titleContainer}>
            <ImageCarousel/>
            <div className={style[cn({
                h1: size === TitleSize.h1,
                h2: size === TitleSize.h2,
                h3: size === TitleSize.h3,
                h4: size === TitleSize.h4,
            })]}>
                {!loading ? title : "Loading"}
            </div>
        </div>
    );
};
