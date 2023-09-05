import { Col, Container, Row } from "react-bootstrap";
import retroPc from "../../assets/image-retro-pcs.jpg";
import laptops from "../../assets/image-top-laptops.jpg"
import gaming from "../../assets/image-gaming-growth.jpg"
const CardNews = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={4} className="border-0">
          <div className="d-flex">
            <img className="w-25" src={retroPc} alt="" />
            <Col lg={7} className="ms-3">
                <h2 className="text-secondary">01</h2>
                <a className="text-decoration-none" href="">
                <h5 className="fw-bold text-dark" id="newsCard">Reviving Retro PCs</h5>
                </a>
                <p className="fs-6">What happens when old PC's are given modern upgrades?</p>
            </Col>
          </div>
        </Col>
        <Col lg={4} className="border-0">
          <div className="d-flex">
            <img className="w-25" src={laptops} alt="" />
            <Col lg={7} className="ms-3">
                <h2 className="text-secondary">02</h2>
                <a href="" className="text-decoration-none text-dark">
                <h5 className="fw-bold newsCard">Top 10 Laptops of 2022</h5>
                </a>
                <p className="fs-6">Our best picks for various needs and budgets</p>
            </Col>
          </div>
        </Col>
        <Col lg={4} className="border-0">
          <div className="d-flex">
            <img className="w-25" src={gaming} alt="" />
            <Col lg={7} className="ms-3">
                <h2 className="text-secondary">03</h2>
                <a href="" className="text-decoration-none text-dark">
                <h5 className="fw-bold newsCard">The Growth of Gaming</h5>
                </a>
                <p className="fs-6">How the pandemic has sparked fresh opportunities.</p>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardNews;
