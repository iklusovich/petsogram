import {useSelector} from "react-redux";
import {RootState} from "../store/store";

//TODO create all selectors for auth, registration, existing. PS may be use library reselect

export const selectExists = (state: RootState) => state.exist.isExists;

export const useExistsValue = () => useSelector(selectExists);
