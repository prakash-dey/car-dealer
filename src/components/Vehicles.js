// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide from './Slide';

function Vehicles() {
    const carImg = ['image/v1.png', '/image/v2.png', '/image/v3.png', '/image/v4.png', '/image/v5.png', '/image/v6.png'];
    return (
        <section class="vehicles" id="vehicles">
            <h1 class="heading"> popular <span>vehicles</span> </h1>

            <div class="swiper vehicles-slider">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    // navigation
                    pagination={{ clickable: true },{el:".swiper-pagination"}}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')} className="swiper-wrapper"
                    centeredSlides={true}
                    loop={true}
                    breakpoints={{
                        // when window width is >= 640px
                        0: {
                          slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                          }
                      }}
                >
                    {carImg.map((el) => <SwiperSlide className='slide'> <Slide img={el} />
                    </SwiperSlide>)}


                </Swiper>
                <div class="swiper-pagination"></div>
            </div>

        </section>




    );
}

export default Vehicles