import React, {FC} from 'react';
import {ITextFieldProps} from "./ITextFieldProps";
import styles from "./textField.module.css"
import cn from "classnames"
import {Image} from "../Image"
import {ImageType} from "../Image/IImageProps";
import {Field} from "formik";
import {ErrorField} from "../Form/ErrorField";

export const TextField: FC<ITextFieldProps> = (props) => {

    const {
        type,
        placeholder,
        image,
        toggleDropdownHandler,
        setIsRevertImage,
        isRevertImage,
        fieldName,
        value,
        touched,
        errors
    } = props;

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
                value={value}
                placeholder={placeholder}
                className={cn({
                    [styles.item]: true,
                    [styles.error]:  !!touched[fieldName] && !!errors[fieldName]
                })}
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
            <ErrorField touched={touched} errors={errors} nameField={fieldName}/>
        </div>
    );
};

