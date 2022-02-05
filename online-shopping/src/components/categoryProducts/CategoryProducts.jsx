import { useEffect } from "react";
import "./categoryProducts.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getCategoryProductsAction from "../../redux/categoryProducts/getCategoryProductsAction";
import { Skeleton, Row, Col } from "antd";
import ProductCard from "../productCard/ProductCard";

import men from "../../assets/images/menAll.jpg"
import women from "../../assets/images/womens.jpg";
import electronics from "../../assets/images/electronic.jpg";
import jewelery from "../../assets/images/jeweleryAll.jpg";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state) => state.categoryProductsReducer
  );

  useEffect(() => {
    dispatch(getCategoryProductsAction.getCategoryProducts(categoryName));
  }, [categoryName]);

  const dataImg = {
    men,
    women,
    jewelery,
    electronics,
  };

  if (loading && !data.length) return <Skeleton />;

  if (error) return <div>Some thing get Wrong..!</div>;

  let imageSrc = "";

  Object.entries(dataImg).forEach(([key, value]) => {
    if (categoryName.includes(key)) {
      imageSrc = value;
    }
  });

  return (
    <>
      <img src={imageSrc} alt="" className="category-banner" />
      <Row gutter={[0, 32]}>
        {data?.map((item) => (
          <Col
            sm={24}
            md={12}
            lg={8}
            style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
            key={item.id}
          >
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CategoryProducts;
