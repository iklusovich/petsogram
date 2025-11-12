import React, {FC} from 'react';
import {Button} from "../../Button";
import {ItemsData} from "../FormBody/ItemsData";
import {ButtonViews} from "../../Button/IButtonProps";
import styles from "./formfooter.module.css";
import {IFormFooterProps} from "./IFormFooterProps";

export const FormFooter: FC<IFormFooterProps> = (props) => {

    const {handleSubmit, isSubmitting, formType, changeFormType} = props;

    return (
        <div className={styles.buttonContainer}>
            {formType === ButtonViews.SIGN_IN && <Button
                type="submit"
                value={ItemsData.SIGN_IN}
                view={ButtonViews.SIGN_IN}
                onClick={handleSubmit}
                isDisabled={isSubmitting}
                changeFormType={changeFormType}
            />}
            {formType === ButtonViews.SIGN_UP && <Button
                type="submit"
                value={ItemsData.SIGN_UP}
                view={ButtonViews.SIGN_UP}
                onClick={handleSubmit}
                isDisabled={isSubmitting}
                changeFormType={changeFormType}
            />}
        </div>
    );
};

