import { Container, Row, Col } from "react-bootstrap";
import ImageDetail from "../assets/img/imageDetail.png"
import { detail_donatur } from "../data/index";
const DetailProgramPage = () => {
    return (
        <div className="detailProgramPage">
            <div className="detail min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className="d-flex justify-content-center align-items-center">
                        {/* Image Section */}
                        <Col className="image text-center mb-4 mb-lg-0" lg={6}>
                            <img src={ImageDetail} alt="Detail Program" className="img-fluid rounded shadow" />
                        </Col>

                        {/* Text Section */}
                        <Col className="text" lg={6}>
                            <div className="text-progress mb-4">
                                <h3 className="text-center mb-3">Program Pendidikan</h3>
                                <div className="progress bg-light mb-3">
                                    <div className="progress-bar bg-success" style={{ width: "30%" }}>
                                        30%
                                    </div>
                                </div>
                                <div className="total-hari d-flex justify-content-between mb-4">
                                    <div className="total">
                                        <p className="mb-0 fw-bold">Terkumpul: 1.200.000</p>
                                    </div>
                                    <div className="hari">
                                        <p className="mb-0">Sisa Hari: 17 Hari</p>
                                    </div>
                                </div>
                            </div>

                            {/* Deskripsi Section */}
                            <div className="deskripsi text-justify">
                                <h6>Deskripsi :</h6>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sed debitis veniam consequuntur illo assumenda iusto a tempore, quas praesentium laboriosam velit mollitia provident doloribus rerum culpa! Iste, blanditiis modi.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="donatur">
                            <h3 className="text-center mb-4">Daftar Donatur</h3>
                            {detail_donatur.map((detail) => (
                                <div className="daftar-donatur-container shadow p-3 rounded" key={detail.id}>
                                    <div className="donatur-item d-flex align-items-center mb-3">
                                        <img src={detail.img} alt="Donatur" className="donatur-img rounded-circle me-3" />
                                        <div className="daftar-nama">
                                            <p className="mb-1 fw-bold"> {detail.nama} </p>
                                            <p className="mb-0 text-muted"> {detail.jumlah} </p>
                                        </div>
                                        <div className="tanggal ms-auto text-end">
                                            <p className="mb-0 text-muted"> {detail.tanggal} </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}
export default DetailProgramPage