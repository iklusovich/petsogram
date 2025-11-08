import React, {FC, useState} from 'react';
import {TextField} from "../TextField";
import {ITypeProps} from "../TextField/ITextFieldProps";
import {ICustomSelectProps} from "./ICustomSelectProps";
import styles from "./customSelect.module.css"

export const CustomSelect: FC<ICustomSelectProps> = (props) => {

    const [isShowOptions, setIsShowOptions] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const {options, image} = props;

    const toggleOptions = () => setIsShowOptions(!isShowOptions);


    const changeGenderValue = (option: string) => {
        setValue(option);
    }

    const closeSelect = () => {

        setIsShowOptions(false);
        return isShowOptions;
    }

    const renderOptions = (options: string[]) =>
        <ul className={styles.optionsContainer}>
            {options.map(option =>
                <li key={option} onClick={() => changeGenderValue(option)} className={styles.optionsItem}>{option}</li>
            )}
        </ul>

    return (
        <div className={styles.customSelectContainer} onClick={toggleOptions}>
            <TextField
                type={ITypeProps.SELECT}
                image={image}
                placeholder={options[0]}
                disabled={true}
                value={value}
                closeSelect = {closeSelect}
            />
            {isShowOptions && renderOptions(options)}
        </div>
    );
}
