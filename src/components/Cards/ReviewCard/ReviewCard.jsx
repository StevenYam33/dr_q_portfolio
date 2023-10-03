import React, { useRef} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules';

import { Icon } from '@iconify/react';

function formatDate(timestamp) {
    const parts = timestamp.split(" ");
    const dateParts = parts[0].split("/");
  
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    return formattedDate;
}

function ratingToStars(rating) {
    switch (rating) {
        case "Excellent":
            return (
                <div className='stars-container'>
                    <Icon icon="ph:star-fill" />
                    <Icon icon="ph:star-fill" />
                    <Icon icon="ph:star-fill" />
                    <Icon icon="ph:star-fill" />
                </div>
            )
            ;
        case "Good":
            return (
                <div className='stars-container'>
                    <Icon icon="ph:star-fill" />
                    <Icon icon="ph:star-fill" />
                    <Icon icon="ph:star-fill" />
                    <Icon icon="ph:star-bold" />
                </div>
            );
        case "Average":
            return (
                <div className='stars-container'>
                    <Icon icon="ph:star-fill" />
                    <Icon icon="ph:star-fill" />
                    <Icon icon="ph:star-bold" />
                    <Icon icon="ph:star-bold" />
                </div>
            );
        case "Poor":
            return (
                <div className='stars-container'>
                    <Icon icon="ph:star-fill" />
                    <Icon icon="ph:star-bold" />
                    <Icon icon="ph:star-bold" />
                    <Icon icon="ph:star-bold" />
                </div>
            );
        default:
            return "";
    }
}

export const ReviewCard = ({ items }) => {
    const swiperRef = useRef(null);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
    
            if (swiperRef.current && swiperRef.current.autoplay && swiperRef.current.autoplay.paused) {
                progressContent.current.textContent = '►';
            } else {
                progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
    };

    const handleAutoplayProgressClick = () => {
        if (swiperRef.current) {
            const autoplayInstance = swiperRef.current.autoplay;
            if (autoplayInstance.paused) {
                autoplayInstance.resume();
            } else {
                autoplayInstance.pause();
            }
        }
    };

    return (
        <Swiper
                spaceBetween={300}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                keyboard={{
                    enabled: true,
                }}
                navigation={true}
                modules={[Autoplay, Keyboard, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="review-swiper"
            >
            {items.map((item, index) => (
                <SwiperSlide key={index} className="review-card">
                    <Icon className='quote normal' icon="iconoir:quote" rotate={2} />
                    <Icon className='quote upside-down' icon="iconoir:quote" />
                    <div className='date'>{formatDate(item.Timestamp)}</div>
                    <ul className='rating-list'>
                        <li className='rating-item'>
                            <p className='rating-titles'>Friendliness: </p>
                            {ratingToStars(item.Friendliness)}
                        </li>
                        <li className='rating-item'>
                            <p className='rating-titles'>Communication: </p>
                            {ratingToStars(item.Communication)}
                        </li>
                        <li className='rating-item'>
                            <p className='rating-titles'>Skills: </p>
                            {ratingToStars(item.Skills)}
                        </li>
                        <li className='rating-item'>
                            <p className='rating-titles'>Satisfaction: </p>
                            {ratingToStars(item.Satisfaction)}
                        </li>
                        <li className='rating-item'>
                            <p className='rating-titles'>Professionalism: </p>
                            {ratingToStars(item.Professionalism)}
                        </li>
                    </ul>
                    <div className='comment-container'>
                        <div className="comment">
                            <p className='comment-title'>Comments: </p>
                            <p className='comment-content'>{item["Comments"]  || "N/A"}</p>
                        </div>
                        <div className="comment">                            
                            <p className='comment-title'>Suggestions: </p>
                            <p className='comment-content'>{item["Suggestions for improvement"]  || "N/A"}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div
            className="autoplay-progress" 
            slot="container-end"
            onClick={handleAutoplayProgressClick}
            >
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span 
                ref={progressContent}
                ></span>
            </div>
        </Swiper>
    );
}