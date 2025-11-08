import React, {FC} from 'react';
import {Title} from '../../Title'
import {IFormHeaderProps} from "./IFormHeaderProps";

export const FormHeader:FC<IFormHeaderProps> = (props) => {

    const {title, size} = props;

    return (
        <Title
            size={size}
            title={title}
        />
    );
};

