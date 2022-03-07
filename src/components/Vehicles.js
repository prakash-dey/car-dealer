// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide from './Slide';

function Vehicles(props) {
    const carImg = ["../image/v1.png","../image/v2.png","image/v3.png","image/v4.png" ,"image/v5.png", "image/v6.png" ]
    return (
        <section class="vehicles" id="vehicles">

            <h1 class="heading"> popular <span>vehicles</span> </h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className='slide'> <Slide /> </SwiperSlide>
                <SwiperSlide className='slide'> <Slide /> </SwiperSlide>
                <SwiperSlide className='slide'> <Slide /> </SwiperSlide>
                <SwiperSlide className='slide'> <Slide />  </SwiperSlide>
            </Swiper>
        </section>




    );
}

export default Vehicles