import React from 'react'
import './Achievements.scss'
import java from '../../assets/templateImg/certificates/java.jpg'
import dsa from '../../assets/templateImg/certificates/dsa.jpg'
import front from '../../assets/templateImg/certificates/front.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from 'react-icons/ai'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Achievements = () => {
  return (
    <section id="education">
      <h5>My Achievements</h5>
      <h2>Achievements</h2>
      <h5 className='swipe'> <AiOutlineDoubleLeft/> <span>Swipe</span>    <AiOutlineDoubleRight/></h5>
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={70}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
       className='container achievements_cont'
    >
      
    <div className="my_slide">
       
        <SwiperSlide className='certi_slide'>
          
          <div className="image"><img src={java} alt="" /></div>
          {/* <h5>Introduction to Java</h5> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className="image"><img src={dsa} alt="" /></div>
          {/* <h5>DSA in Java</h5> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className="image"><img src={front} alt="" /></div>
          {/* <h5>Frontend development</h5> */}
        </SwiperSlide>
      </div>
    </Swiper>
    </section>
  )
}

export default Achievements
