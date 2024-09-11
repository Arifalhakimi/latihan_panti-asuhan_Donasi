import { Container, Row, Col } from "react-bootstrap";
import ImageDetail from "../assets/img/imageDetail.png"
const DetailProgramPage = () => {
    return (
        <div className="detailProgramPage">
            <div className="detail min-vh-100">
                <Container>
                    <Row>
                        <Col className="image" lg={6}>
                            <img src={ImageDetail} alt="" />
                        </Col>
                        <Col className="text" lg={6}>
                            <div className="">
                                <h3 className="d-flex text-align-center justify-content-center">Program Pendidikan</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default DetailProgramPage