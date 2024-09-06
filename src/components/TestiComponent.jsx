import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';

import { dataSwiper } from "../data/index"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const TestiComponent = () => {
    return (
        <div className='testimonial '>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center fw-blod my-5'>Testimoni</h1>
                    </Col>
                </Row>
                <Row>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {dataSwiper.map((dataTesti) => {
                            return <SwiperSlide key={dataTesti.id} className='swiper shadow'>
                                <div className='people'>
                                    <img src={dataTesti.image} alt="" />
                                    <div className="image">
                                        <h5 className='mt-3'> {dataTesti.name} </h5>
                                    </div>
                                </div>
                                <div className="text mt-3 mx-2">
                                    <p className='desc'> {dataTesti.desc} </p>
                                </div>
                            </SwiperSlide>
                        })}
                    </Swiper>
                </Row>
            </Container>
        </div>
    )
}

export default TestiComponent