import CanonCard from './CanonCard';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CanonGrid = ({ canonProducts }) => {


    return (
        <>
            <Swiper className='my-10'
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide > <img className=' flex items-center mx-auto justify-center' src="https://i.ibb.co/2MXX8Wf/3.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img className=' flex items-center mx-auto justify-center' src="https://i.ibb.co/br7J23Q/2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className=' flex items-center mx-auto justify-center' src="https://i.ibb.co/sH4Z5ZS/8.jpg" alt="" /></SwiperSlide>              

            </Swiper>
            <div className="grid grid-col-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    canonProducts.map(product => <CanonCard key={product._id} product={product}></CanonCard>)
                }
            </div>
        </>
    );
};

CanonGrid.propTypes = {
    canonProducts: PropTypes.array
}
export default CanonGrid;