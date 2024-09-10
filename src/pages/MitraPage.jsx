import { Container, Row, Col } from "react-bootstrap";
import { kegiatan } from "../data/index";
// import HeroImage from "../assets/img/logo_home.png";
// import { manfaatMitra } from "../data";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import RegistrasiFormMitra from "../components/RegistrasiFormMitra";
const mitra = () => {
    return (
        <>
            <div className='mitra-page '>
                <div className="mitra w-100 ">
                    <Container>
                        <Row>
                            <Col className="manfaat-mitra">
                                <h1 className='text-center fw-bold'>Kegiatan</h1>
                                <p className='text-center'>Berbagai kegiatan yang dilakukan anak anak panti asuhan  masjid gelora indah </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="kegiatan d-flex flex-wrap justify-content-center">
                                {kegiatan.map((item) => (
                                    <div className="kegiatan-card shadow rounded-3 m-2" key={item.id}>
                                        <img src={item.image} alt={item.judul} className="kegiatan-image rounded-top" />
                                        <div className="card-body p-3">
                                            <h5 className="card-title text-center mb-2">{item.judul}</h5>
                                            <p className="card-subtitle text-muted text-center">{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </Col>
                            {/* <div className="kegiatan d-flex" >
                                {kegiatan.map((kegiatan) => (
                                    <Col key={kegiatan.id} className="kegiatan-box "
                                        >
                                        <div className="card rounded-2 ">
                                            <img src={kegiatan.image} alt="" className="w-100 mb-2 rounded-top" />
                                            <div className="card-title">{kegiatan.judul}</div>
                                            <div className="card-title">{kegiatan.title}</div>
                                        </div>
                                    </Col>
                                ))}
                            </div> */}
                        </Row>
                        {/* <Row>
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
                                className="mySwiper "
                            >
                                {manfaatMitra.map((manfaat) => {
                                    return (
                                        <SwiperSlide key={manfaat.id} className=' shadow'>
                                            <h4 className="title ">{manfaat.title}</h4>
                                            <h6 className="desc">{manfaat.desc} </h6>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>

                        </Row> */}
                    </Container>
                </div>
                <div>
                    {/* <RegistrasiFormMitra /> */}
                </div>
            </div>
        </>
    )
}

export default mitra