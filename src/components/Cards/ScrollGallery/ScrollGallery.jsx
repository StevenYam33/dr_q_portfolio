import React from 'react';
import "./ScrollGallery.css"
import data from '../../../Data/data.json'
import Heading from '../../Heading/Heading';
import { ThumbsGallery } from '../ThumbsGallery/ThumbsGallery';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Mousewheel, Scrollbar } from 'swiper/modules';

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
        <Swiper
            spaceBetween={30}
            slidesPerView={1.5}
            mousewheel={true}
            scrollbar={{
                draggable: true,
            }}
            modules={[ Mousewheel, Scrollbar ]}
            className="scrollSwiper"
        >
            <SwiperSlide>
                <motion.div
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0 , opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='scrollSlide'
                >
                    <img src={ToowoombaCover} alt="Toomwoomba" />
                    <div className="description-container" onClick={() => openModal(<ThumbsGallery imageUrls={toowoombaImagesUrls} />)}>
                        <div className="desc-heading">
                            <div className="title">{getToowoomba.title}</div>
                            <div className="id">{getToowoomba.id}</div>
                        </div>
                        <div className="intro">{getToowoomba.intro}</div>
                    </div>
                </motion.div>
            </SwiperSlide>

            <SwiperSlide>
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0 , opacity: 1 }}
                    transition={{ duration: 1, delay: 1}}
                    className='scrollSlide'
                >
                    <img src={EndoCover} alt="Endo" />
                    <div className="description-container" onClick={() => openModal(<ThumbsGallery imageUrls={endoImagesUrls} />)}>
                        <div className="desc-heading">
                            <div className="title">{getEndo.title}</div>
                            <div className="id">{getEndo.id}</div>
                        </div>
                        <div className="intro">{getEndo.intro}</div>
                    </div>
                </motion.div>
            </SwiperSlide> 

            <SwiperSlide>
                <motion.div
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0 , opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className='scrollSlide'
                >
                    <img src={ProsCover} alt="Pros" />
                    <div className="description-container" onClick={() => openModal(<ThumbsGallery imageUrls={prosImagesUrls} />)}>
                        <div className="desc-heading">
                            <div className="title">{getPros.title}</div>
                            <div className="id">{getPros.id}</div>
                        </div>
                        <div className="intro">{getPros.intro}</div>
                    </div>
                </motion.div>

            </SwiperSlide>
        </Swiper>
    </div>
    )
}
