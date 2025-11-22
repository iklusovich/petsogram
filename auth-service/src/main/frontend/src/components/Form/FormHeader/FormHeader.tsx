import React, {FC} from 'react';
import {Title} from '../../Title'
import {IFormHeaderProps} from "./IFormHeaderProps";

export const FormHeader:FC<IFormHeaderProps> = (props) => {

    const {title, size, loading} = props;

    return (
        <>
            <Title
                loading={loading}
                size={size}
                title={title}
            />
        </>
    );
};

