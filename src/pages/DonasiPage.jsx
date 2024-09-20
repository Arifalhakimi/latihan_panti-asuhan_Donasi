import { Container, Row, Col } from "react-bootstrap";
import ImageDetail from "../assets/img/imageDetail.png";
import { donasi_donatur } from "../data/index";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';




const DonasiPage = () => {
    return (
        <div className="donasiPage">
            <div className="donasi min-vh-100">
                <Container>
                    <Row className="image">
                        <div className="image-donasi">
                            <img src={ImageDetail} alt="" />
                        </div>
                    </Row>
                    <Row className="nominal">
                        <div className="d-flex align-item-center justify-content-center mt-2 mb-2">
                            <h1>Program Pendidikan</h1>
                        </div>
                        <Col>
                            <div className="text">
                                <h3>Masukan Nominal Donasi</h3>
                            </div>
                            <div className="nominal-donasi">
                                {donasi_donatur.map((donasi) => (
                                    <div className="angka " key={donasi.id}>
                                        <div className="angka-donasi">
                                            <p className="d-flex">{donasi.jumlah}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="nominal-lainnya">
                                <Form className="form-nominal-lainnya">
                                    <Form.Group className="mb-3">
                                        <Form.Label className="form-text">Jumlah Lainnya</Form.Label>
                                        <Form.Control className="form-control mx-auto" type="text" placeholder="Masukan Jumlah Lainnya" id="jumlah_lain" />
                                    </Form.Group>
                                    <Form.Group className="pilih-pembayaran mb-3">
                                        <Form.Label className="form-text">Pilih Pembayaran</Form.Label>
                                        <Dropdown className="dropdown-pilihpembayaran">
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Pilih Pembayaran
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Qris</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">BRI</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">BCA</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Form.Group>
                                    <Form.Group className="text-form">
                                        <Form.Label className="text-data"> Masukan Data lengkap Di Bawah Ini </Form.Label>
                                        <div className="nama">
                                            <div className="nama__form">
                                                <Form.Label className="form-nama1">Masukan Nama Lengkap</Form.Label>
                                                <Form.Label className="form-nama2">Sembunyikan Nama  </Form.Label>
                                            </div>
                                            <div>
                                                <Form.Control className="form-control mx-auto " type="text" placeholder="Masukan Jumlah Lainnya" />
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="form-text">Masukan Nomor Telepon</Form.Label>
                                        <Form.Control id="no_telepon" className="form-control mx-auto" type="text" placeholder="Masukan No Telepon" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="form-text">Masukan Email</Form.Label>
                                        <Form.Control id="email" className="form-control mx-auto" type="text" placeholder="Masukan Email" />
                                    </Form.Group>
                                    <Form.Group className="form-text-area">
                                        <Form.Label className="form-text">Masukan Email</Form.Label>
                                        <Form.Control className="textarea" as="textarea" aria-label="With textarea" id="text-area" />
                                    </Form.Group>
                                    <div className="button-form">
                                    <Button className="buton-formnominal mt-2 mb-2" type="submit">Lanjutkan Pembayaran</Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default DonasiPage;