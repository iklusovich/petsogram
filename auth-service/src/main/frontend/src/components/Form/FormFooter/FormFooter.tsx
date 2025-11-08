import React, {FC} from 'react';
import {Button} from "../../Button";
import {ItemsData} from "../FormBody/ItemsData";
import {ButtonViews} from "../../Button/IButtonProps";
import styles from "./formfooter.module.css";
import {IFormFooterProps} from "./IFormFooterProps";
import {fetchRegistryAction} from "../../../redux/actions/actions";
import {useDispatch} from "react-redux";


export const FormFooter:FC<IFormFooterProps> = (props) => {


const dispatch = useDispatch();


    const handleRegistry = () => {
        dispatch(fetchRegistryAction(
            {
                id: "11",
                username: "11",
                password: "11",
                sex: "male1",
                phone: "31111"
            }
        ))
    }

    return (
        <div className={styles.buttonContainer}>
            <Button
                type="submit"
                value={ItemsData.SIGN_IN}
                view={ButtonViews.SIGN_IN}
                onClick={()=>{
                    console.log(2)
                }}
            />
            <Button
                type="button"
                value={ItemsData.SIGN_UP}
                view={ButtonViews.SIGN_UP}
                onClick={handleRegistry}
            />
        </div>
    );
};

