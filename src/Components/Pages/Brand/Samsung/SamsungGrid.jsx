import SamsungCard from './SamsungCard';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SamsungGrid = ({ samsungProducts }) => {
    return (

        <>
            <Swiper className='my-20'
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className=''> <img src="https://i.ibb.co/FKMt2my/pixel-c.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/FKMt2my/pixel-c.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/hyw0p9Q/nest-audio.webp" alt="" /></SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            <div className="grid grid-col-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    samsungProducts.map(product => <SamsungCard key={product._id} product={product}></SamsungCard>)
                }
            </div>
        </>
    );
};

SamsungGrid.propTypes = {
    samsungProducts: PropTypes.array
}
export default SamsungGrid;