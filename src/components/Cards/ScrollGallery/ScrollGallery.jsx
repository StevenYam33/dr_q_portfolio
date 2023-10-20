import React from 'react';
import "./ScrollGallery.css"
import data from '../../../Data/data.json'
import Heading from '../../Heading/Heading';
import { ThumbsGallery } from '../ThumbsGallery/ThumbsGallery';
import ScrollSlide from './ScollSlide'

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import { Keyboard, Mousewheel,Navigation } from 'swiper/modules';

// import images and urls
import ToowoombaCover from "../../../Assets/Images/Placements/Toowoomba/Toowoomba_cover.jpeg"
import EndoCover from "../../../Assets/Images/Endo/Case_1.jpg"
import ProsCover from "../../../Assets/Images/Pros_Dentures/dentures_before.jpeg"
const toowoombaImages = require.context('../../../Assets/Images/Placements/Toowoomba', true);
const toowoombaImagesUrls = toowoombaImages.keys().map(image => toowoombaImages(image));
const endoImages = require.context('../../../Assets/Images/Endo/', true);
const endoImagesUrls = endoImages.keys().map(image => endoImages(image));
const prosImages = require.context('../../../Assets/Images/Pros_Dentures', true);
const prosImagesUrls = prosImages.keys().map(image => prosImages(image));

export const ScrollGallery = ({ openModal }) => {
    const getHeading = data.headings.find(item => item.id === "gallery");
    const getToowoomba = data.photos.find(item => item.id === "Toowoomba");
    const getEndo = data.photos.find(item => item.id === "Endo");
    const getPros = data.photos.find(item => item.id === "Pros");

  return (
    <div className='scrollGallery'>
        <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0 , opacity: 1 }}
            transition={{ duration: 1 }}
            className='scrollSwiper-intro'
        >
            <Heading title={getHeading.title} subtitle={getHeading.subtitle} />
        </motion.div>

        <div className="scrollSwiper-content">
            <div className="swiper-button">
                <div className="image-swiper-button-prev">
                    <Icon icon="iconoir:arrow-left" width="40" height="40" />
                </div>
                <div className="image-swiper-button-next">
                    <Icon icon="iconoir:arrow-right" width="40" height="40" />
                </div>
            </div>

            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                mousewheel={true}
                keyboard={{
                    enabled: true,
                }}
                navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                    disabledClass: "swiper-button-disabled",
                }}
                breakpoints={{
                    650: { slidesPerView: 1.5},
                }}
                modules={[ Keyboard, Mousewheel, Navigation ]}
                className="scrollSwiper"
            >
                <SwiperSlide>
                    <ScrollSlide
                        initial= {-200}
                        delay= {0}
                        imageSrc={ToowoombaCover}
                        title={getToowoomba.title}
                        id={getToowoomba.id}
                        intro={getToowoomba.intro}
                        onClick={() => openModal(<ThumbsGallery imageUrls={toowoombaImagesUrls} />)}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ScrollSlide
                        initial= {200}
                        delay= {0.25}
                        imageSrc={EndoCover}
                        title={getEndo.title}
                        id={getEndo.id}
                        intro={getEndo.intro}
                        onClick={() => openModal(<ThumbsGallery imageUrls={endoImagesUrls} />)}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ScrollSlide
                        initial= {-200}
                        delay= {0.5}
                        imageSrc={ProsCover}
                        title={getPros.title}
                        id={getPros.id}
                        intro={getPros.intro}
                        onClick={() => openModal(<ThumbsGallery imageUrls={prosImagesUrls} />)}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    )
}
