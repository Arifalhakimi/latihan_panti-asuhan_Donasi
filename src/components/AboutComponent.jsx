import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageAbout from "../assets/img/frame28.png";
const AboutComponent = () => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleFullText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className="about-component">
            <Container>
                <Row>
                    <Col>
                        <h1 className="fw-bold ">Tentang Kami</h1>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col lg={4} className="image-about">
                        <img src={ImageAbout} alt="About" className="img-fluid" data-aos="fade-up" data-aos-duration="1000" />
                    </Col>
                    <Col lg={8} className='text-about'>
                        <h1 className='judul-text fw-bold'>
                            Panti Asuhan Masjid Gelora Indah
                        </h1>
                        <p className={`about-text ${showFullText ? 'full-text' : ''}`} data-aos="fade-up" data-aos-duration="1000" >
                        Merupakan panti asuhan yang berada di Kabupaten Banyumas. Panti asuhan ini merawat dan mendidik anak-anak yatim piatu serta anak-anak terlantan. Panti Asuhan Anak Yatim Piatu & Terlantar Masjid Gelora Indah memenuhi kebutuhan anak-anak yang dirawatnya mulai dari makanan hingga sekolahnya.
                            {showFullText ? (
                                <h1 className='animate__animated animate__hinge animate__delay-1s'>KENA PRANK :-) </h1>
                            ) : null}
                        </p>
                        {!showFullText && (
                            <button className="btn btn-link  " onClick={toggleFullText} data-aos="fade-up" data-aos-duration="1000">
                                Baca Selengkapnya
                            </button>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutComponent;
