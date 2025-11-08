import {ItemsData} from "../FormBody/ItemsData";

export interface IFormFooterProps {
    changeFormType: (formType: Pick<typeof ItemsData, "SIGN_UP" | "SIGN_IN">) => void;
}