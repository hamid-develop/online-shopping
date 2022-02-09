import { useEffect } from "react";
import "./category.scss";
import { useDispatch, useSelector } from "react-redux";
import categoryAction from "../../redux/category/categoryAction";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";

const Category = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state) => state.categoryReducer
  );
  useEffect(() => {
    dispatch(categoryAction.getCategory());
  }, []);

  if (loading && !data.length) return <Skeleton />;

  if (error) return <div>Something get wrong..!</div>;

  return (
    <div className="category">
      {data?.map((item) => (
        <div>
          <Link to={`/category/${item}`}>
            <h3 className="title">{item}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
