import React, {useEffect} from 'react';
import {Image} from "../Image";
import {ImageType} from "../Image/IImageProps";
import {animals as imageList} from "../Image/ImagesList";
import style from "./imageCarousel.module.css";

export const ImageCarousel = () => {


    const [images, setImages] = React.useState<ImageType[]>([
        ...Object.values(ImageType).slice(0, 4)
    ]);

    useEffect(() => {
        let counter = 0;
        const imagesArray  = Object.values(ImageType);
        const interval = setInterval(() => {
            counter++;
            if (counter > imagesArray.length - 4) {
                setImages(
                    [
                        ...imagesArray.slice(counter, imagesArray.length),
                        ...imagesArray.slice(0, counter)
                    ]
                        .slice(0,4));

            } else {
                setImages(imagesArray.slice(counter, counter + 4));
            }
            if (counter === imagesArray.length) {
                counter = 0;
            }

        }, 3000)

        return () => {
            clearInterval(interval);
        }
    }, []);

    const imageListRender = (images: ImageType[]) => {
        return <div className={style.carouselContainer}>
            <Image src={imageList[images[0]]} type={images[0]} className={style.prevItem}/>
            <Image src={imageList[images[1]]} type={images[1]} className={style.centerItem}/>
            <Image src={imageList[images[2]]} type={images[2]} className={style.preLastItem}/>
            <Image src={imageList[images[3]]} type={images[3]} className={style.lastItem}/>
        </div>
    }

    return (
        <div className={style.carouselContainer}>
            {imageListRender(images)}
        </div>
    );
};
