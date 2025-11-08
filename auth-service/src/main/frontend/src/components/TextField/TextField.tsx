import React, {FC, useEffect, useRef, useState} from 'react';
import {ITextFieldProps} from "./ITextFieldProps";
import styles from "./textField.module.css"
import cn from "classnames"
import {Image} from "../Image"
import {ImageType} from "../Image/IImageProps";

export const TextField: FC<ITextFieldProps> = (props) => {

    const {type, placeholder, image, value, closeSelect} = props;
    const [isRevertImage, setIsRevertImage] = useState<boolean>(true);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setIsRevertImage(prev => !prev);
    }, [closeSelect]);

    const imagesClasses = {
        imageContainer: styles.imageContainer,
        revert: styles.revert,
    }

    return (
        <div className={styles.textFieldContainer}>
            <input
                name="revert"
                type={type}
                placeholder={placeholder}
                className={cn(styles.item)}
                value={value}
                ref={inputRef}
            />
            {image && <div className={cn({
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

