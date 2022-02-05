import './card.scss'
import { Card } from "antd";

const ProductCard = ({ item }) => {
  const { Meta } = Card;

  return (
    <div className="card">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={`${item.title}`} src={item.image}
        width='100'
        height='200'
        />}
      >
        <Meta title={item.title} />
      </Card>
    </div>
  );
};

export default ProductCard;
