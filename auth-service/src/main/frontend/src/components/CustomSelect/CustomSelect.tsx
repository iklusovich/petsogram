import React, {FC, useState} from 'react';
import {TextField} from "../TextField";
import {IFieldName, ITypeProps} from "../TextField/ITextFieldProps";
import {ICustomSelectProps} from "./ICustomSelectProps";
import styles from "./customSelect.module.css"

export const CustomSelect: FC<ICustomSelectProps> = (props) => {

    const [isShowOptions, setIsShowOptions] = useState<boolean>(false);
    const {options, image, setOptionValue, optionValue} = props;
    const [isRevertImage, setIsRevertImage] = useState<boolean>(false);

    const toggleDropdownHandler = (isShow: boolean) => setIsShowOptions(isShow);


    const changeOptionValue = (option: string) => {
        toggleDropdownHandler(false);
        setOptionValue(option);
        setIsRevertImage(false);
    }

    const renderOptions = (options: string[]) =>
        <ul className={styles.optionsContainer}>
            {options.map(option =>
                <li key={option} onClick={()=>changeOptionValue(option) } className={styles.optionsItem}>{option}</li>
            )}
        </ul>

    return (
        <div className={styles.customSelectContainer}>
            <TextField
                toggleDropdownHandler={toggleDropdownHandler}
                fieldName={IFieldName.SEX}
                type={ITypeProps.SELECT}
                image={image}
                placeholder={options[0]}
                disabled={true}
                optionValue={optionValue}
                isRevertImage={isRevertImage}
                setIsRevertImage={setIsRevertImage}
            />
            {isShowOptions && renderOptions(options)}
        </div>
    );
}
