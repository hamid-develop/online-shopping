import "./card.scss";
import { Card, Row, Col } from "antd";

const ProductCard = ({ item }) => {
  const { Meta } = Card;

  return (
    <div className="card">
      <Row>
        <Col xs={24} md={8} lg={6}>
          <Card
            hoverable
            style={{ width: 190, height: 290, padding: 20 }}
            cover={<img alt={`${item.title}`} src={item.image} />}
          >
            <Meta title={item.title} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCard;
