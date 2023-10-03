import React, { useState } from 'react';
import "./ThumbsGallery.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ThumbsGallery = ({ imageUrls }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='thumbsGallery'>
            <Swiper
                loop={true}
                spaceBetween={500}
                slidesPerView={1}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null, }}
                modules={[ Navigation, Thumbs]}
                className="thumbsSwiper-top"
            >
                {imageUrls.map((imageUrl, index) => (
                    <SwiperSlide key={index}>
                        <LazyLoadImage src={imageUrl} alt={`Image ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="thumbsSwiper-bot"
            >
                {imageUrls.map((imageUrl, index) => (
                    <SwiperSlide key={index}>
                        <LazyLoadImage src={imageUrl} alt={`Image ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
