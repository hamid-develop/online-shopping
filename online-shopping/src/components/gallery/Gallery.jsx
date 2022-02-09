import "./gallery.scss";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import menwomen from "../../assets/images/menwomen.jpg";
import women from "../../assets/images/women.jpg";
import men from "../../assets/images/men.jpg";
import jewelery from "../../assets/images/jewelery.jpg";
import electronic from "../../assets/images/digital.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <Row gutter={(0, 4)}>
        <Col xs={24} md={12} lg={12}>
          <img src={menwomen} alt="menwomen" className="menwomen" />
        </Col>
        <Col xs={24} lg={12} md={12}>
          <Row gutter={(0, 1)}>
            <Col lg={12} md={12} xs={24}>
              <Link to={"/category/women's%20clothing"}>
                <img src={women} alt="women" className="women" />
              </Link>
            </Col>
            <Col lg={12} md={12} xs={24}>
              <Link to={"/category/men's%20clothing"}>
                <img src={men} alt="men" className="men" />
              </Link>
            </Col>
          </Row>
          <Row gutter={(0, 1)}>
            <Col lg={12} md={12} xs={24}>
              <Link to={"/category/electronics"}>
                <img src={electronic} alt="electronic" className="electronic" />
              </Link>
            </Col>
            <Col lg={12} md={12} xs={24}>
              <Link to={"/category/jewelery"}>
                <img src={jewelery} alt="jewelery" className="jewelery" />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
