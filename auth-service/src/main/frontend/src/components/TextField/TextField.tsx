import React, {FC} from 'react';
import {ITextFieldProps} from "./ITextFieldProps";
import styles from "./textField.module.css"
import cn from "classnames"
import {Image} from "../Image"
import {ImageType} from "../Image/IImageProps";
import {Field} from "formik";

export const TextField: FC<ITextFieldProps> = (props) => {

    const {type, placeholder, image, toggleDropdownHandler, optionValue, setIsRevertImage, isRevertImage, fieldName} = props;

    const onShowOptionsHandler = () => {
        if (toggleDropdownHandler && setIsRevertImage) {
            setIsRevertImage(!isRevertImage);
            toggleDropdownHandler(!isRevertImage);
        }
        return;
    }

    const imagesClasses = {
        imageContainer: styles.imageContainer,
        revert: styles.revert,
    }

    return (
        <div className={styles.textFieldContainer}>
            <Field
                id={fieldName}
                name={fieldName}
                type={type}
                value={optionValue}
                placeholder={placeholder}
                className={cn(styles.item)}
            />
            {image && <div onClick={onShowOptionsHandler} className={cn({
                [imagesClasses.imageContainer]: true,
                [imagesClasses.revert]: isRevertImage
            })}>
                <Image
                    src={image}
                    type={ImageType.CAT}
                    width={20}
                    height={20}
                />
            </div>
            }
        </div>
    );
};

