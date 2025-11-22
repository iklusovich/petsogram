import React, { useEffect, useMemo } from 'react';
import { Image } from "../Image";
import { ImageType } from "../Image/IImageProps";
import { animals as imageList } from "../Image/ImagesList";
import style from "./imageCarousel.module.css";

type CarouselImageType = Exclude<ImageType, ImageType.LOGO>;

const CAROUSEL_IMAGES: CarouselImageType[] = Object.values(ImageType)
    .filter((type): type is CarouselImageType => type !== ImageType.LOGO);

export const ImageCarousel = () => {
    const [startIndex, setStartIndex] = React.useState(0);

    const currentImages = useMemo(() => {
        const len = CAROUSEL_IMAGES.length;
        return Array.from({ length: 4 }, (_, i) =>
            CAROUSEL_IMAGES[(startIndex + i) % len]
        );
    }, [startIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex(prev => (prev + 1) % CAROUSEL_IMAGES.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const classNames = [
        style.prevItem,
        style.centerItem,
        style.preLastItem,
        style.lastItem
    ];

    return (
        <div className={style.carouselContainer}>
            {currentImages.map((type, index) => (
                <Image
                    key={`${type}-${index}`}
                    src={imageList[type]}
                    type={type}
                    className={classNames[index]}
                />
            ))}
        </div>
    );
};