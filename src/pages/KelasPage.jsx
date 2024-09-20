// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";
import { useNavigate } from "react-router-dom";


const KelasPage = () => {
  //   const [bengkel, setBengkel] = useState([]);
  //   useEffect(() => {
  //     const fetchOrders = async () => {
  //         try {
  //             const response = await axios.get('http://localhost:7730/api/v1/kelas');
  //             console.log('Bengkel:', response.data);
  //             setBengkel(response.data);
  //         } catch (error) {
  //             console.error('Error fetching orders:', error);
  //         }
  //     };

  //     fetchOrders();
  // }, []);

  const navigate = useNavigate();
  const navigateDonasi = useNavigate();
  const handleClick = () => {
    navigate("/detail")
  }
  const handleClick1 = () => {
    navigateDonasi("/donasi")
  }
  return (
    <div className="service-page">
      <div className="service min-vh-100">
        <Container >
          <Row>
            <Row className="g-4">
              {semuaKelas.map((kelas) => (
                <Col
                  key={kelas.id}
                  lg={4}
                  md={6}
                  sm={12}
                  className="card-container"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={kelas.delay}
                >
                  <div className="card shadow rounded-2">
                    {/* Image Section */}
                    <img
                      src={kelas.image}
                      alt={kelas.nama}
                      className="w-100 mb-2 rounded-top"
                    />

                    {/* Title Section */}
                    <div className="alamatservice d-flex justify-content-center align-items-center">
                      <h4 className="card-title"> {kelas.nama} </h4>
                    </div>

                    {/* Progress Bar */}
                    <div className="progress bg-white mb-3">
                      <div className="progress-bar" style={{ width: `${kelas.progressBar}` }}>
                        {kelas.progressBar}
                      </div>
                    </div>

                    {/* Detail Section */}
                    <div className="detail d-flex justify-content-between">
                      <div className="col-9">
                        <div className="icon-detail d-flex align-items-center mb-2">
                          <i className="bi bi-coin"></i>
                          <p className="mb-0">Terkumpul: {kelas.terkumpul}</p>
                        </div>
                        <div className="icon-detail d-flex align-items-center">
                          <i className="bi bi-calendar2-event"></i>
                          <p className="mb-0">Sisa Hari: {kelas.waktu}</p>
                        </div>
                      </div>
                      <div className="button-program col-3 d-flex flex-column gap-2">
                        <button className="btn btn-success btn-sm rounded-5" onClick={() => handleClick('/detail')} >Detail</button>
                        <button className="btn btn-success btn-sm rounded-5" onClick={() => handleClick1('/donasi') } >Donasi</button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

          </Row>
        </Container>
      </div>
    </div>
  );
}

export default KelasPage