import React from 'react';

// import './ExperiencesCards.css'
import './ExperiencesCard.css';
import data from "../../../Data/data.json"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards, Keyboard, Pagination} from 'swiper/modules';

export const ExperiencesCard = () => {
  return (
    <>
      <Swiper
      effect={'cards'}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      keyboard={{
        enabled: true,
      }}
      modules={[EffectCards, Keyboard, Pagination]}
      className="experience-swiper"
      >
        {data.experiences.map((experience, index) => (
          <SwiperSlide key={index} className="experience-card">
            <div className='experience-card-heading'>
              <p className='experience-address'>{experience.company} <br /> {experience.address}</p>
              <p className='experience-date'>{experience.startDate} - {experience.endDate}</p>
            </div>
            <ul className='responsibilities-cotainer'>
              {experience.responsibilities.map((responsibility, index) => (
                <li className='responsibilities' key={index}>{responsibility}</li>
                ))}
            </ul>
                <h1 className='experience-title'>{experience.title}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
