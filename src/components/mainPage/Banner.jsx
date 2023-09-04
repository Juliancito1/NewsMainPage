import {Container,Row,Col, Button} from "react-bootstrap"
import ImgBanner from "../../assets/image-web-3-desktop.jpg"
const Banner = () => {
    return (
        <Container className="mt-4">
            <Row>
            <Col lg={8}>
            <section>
                <img src={ImgBanner} className="w-100"></img>
            </section>
            </Col>
            <Col lg={4}>
                <Container>

                </Container>
            </Col>
            <Col lg={4}>
                <aside>
            <h3 className="display-4 fw-bold">The Brigth Future of Web 3.0?</h3>
                </aside>
            </Col>
            <Col lg={4} className="mt-3">
                <p className="lead fs-5">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is really fulfilling its promise?</p>
                <div>
                    <Button className="btn btn-dark rounded-0" id="btnRead"><span>R E A D </span> <span className="ms-3"> M O R E</span></Button>
                </div>
            </Col>
            </Row>
        </Container>
    );
};

export default Banner;