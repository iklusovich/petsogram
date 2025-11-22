import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store/store";

export const Loader = () => {
    const {registry: {loading}} = useSelector((state: RootState) => state);
    return (
        <div>
            {loading && <div>1</div>}
        </div>
    );
};
