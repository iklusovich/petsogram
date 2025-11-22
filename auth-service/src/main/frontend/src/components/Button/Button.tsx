import React, {FC, useCallback, useMemo} from 'react';
import {ButtonViews, IButtonProps} from "./IButtonProps";
import style from "./button.module.css"
import cn from "classnames";
import {logoImage} from "../Image/ImagesList";
import {Logo} from "../Logo";

export const Button: FC<IButtonProps> = React.memo(({
                                                        type,
                                                        value,
                                                        view,
                                                        onClick,
                                                        isDisabled,
                                                        changeFormType
                                                    }) => {
    const [isHover, setIsHover] = React.useState(false);

    const handleHoverChange = useCallback((isHovering: boolean) => {
        setIsHover(isHovering);
    }, []);

    const signUpText = useMemo(() => {
        if (!changeFormType) return null;
        return (
            <p>
                Do you have
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation(); // ОСТАНАВЛИВАЕМ распространение!
                        changeFormType();
                    }}
                    className={style.link}
                >
                    account
                </button>
                ?
            </p>
        );
    }, [changeFormType]);

    const signInText = useMemo(() => {
        if (!changeFormType) return null;
        return (
            <p>
                Don't have an
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation(); // ОСТАНАВЛИВАЕМ распространение!
                        changeFormType();
                    }}
                    className={style.link}
                >
                    account
                </button>
                ?
            </p>
        );
    }, [changeFormType]);


    const logoComponent = useMemo(() => {
        const isSignUp = view === ButtonViews.SIGN_UP;
        const shouldShowBlackLogo = isSignUp ? isHover : !isHover;
        const logoSrc = shouldShowBlackLogo ? logoImage.logoBlack : logoImage.logo;

        return (
            <Logo
                src={logoSrc}
                {...(isSignUp ? {} : { changeImage: handleHoverChange })}
            />
        );
    }, [view, isHover, handleHoverChange]);

    const buttonClasses = useMemo(() =>
            cn({
                [style.btn]: true,
                [style.buttonSignIn]: view === ButtonViews.SIGN_IN,
                [style.buttonSignUp]: view === ButtonViews.SIGN_UP,
            }),
        [view]
    );

    return (
        <div className={style.buttonContainer} onClick={onClick}>
            {view === ButtonViews.SIGN_UP && signUpText}
            {view === ButtonViews.SIGN_IN && signInText}
            <button
                onMouseEnter={() => handleHoverChange(true)}
                onMouseLeave={() => handleHoverChange(false)}
                disabled={isDisabled}
                className={buttonClasses}
                type={type}
            >
                {value}
            </button>
            <div className={style.buttonImage}>
                {logoComponent}
            </div>
        </div>
    );
});
