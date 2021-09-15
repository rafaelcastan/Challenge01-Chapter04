import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, A11y,  } from 'swiper';
import { Slide } from './slide';

import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css";




export const BannerAds = () => {


  return (

    <Swiper
      modules={[Navigation, Autoplay, Pagination, A11y]}
      navigation 
      autoplay={{
        "delay": 5000,
        "disableOnInteraction": false
      }}
      slidesPerView={1}
      loop={true} 
      pagination={{
        "clickable": true,
      }}
      style={{width:"100%", height:"100%"}}
    >
      <SwiperSlide>
        <Slide title="Europa" subtitle="O continente mais antigo" imageUrl="/Europa.jpg" />
      </SwiperSlide>

      <SwiperSlide>
        <Slide title="Ásia" subtitle="O maior continente" imageUrl="/Asia.jpg" />
      </SwiperSlide>

      <SwiperSlide>
        <Slide title="América do Norte" subtitle="O continente dos sonhadores" imageUrl="/AmericaDoNorte.jpg" />
      </SwiperSlide>

      <SwiperSlide>
        <Slide title="América do Sul" subtitle="O continente da diversidade" imageUrl="/AmericaDoSul.jpg" />
      </SwiperSlide>

      <SwiperSlide>
        <Slide title="África" subtitle="Um continente com muitas culturas" imageUrl="/Africa.jpg" />
      </SwiperSlide>

      <SwiperSlide>
        <Slide title="Oceania" subtitle="O continente das ilhas " imageUrl="/Oceania.jpg" />
      </SwiperSlide>
      
    </Swiper>
  );
};