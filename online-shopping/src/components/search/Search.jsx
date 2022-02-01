import { useState, useEffect } from "react";
import "./search.scss";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import searchAction from "../../redux/search/searchAction";

const Search = () => {
  const [query, setQuery] = useState();
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsReducer.data);
  
  useEffect(() => {
    if (query) {
      const tempResult = productsList.filter((product) =>
        product.title.includes(query)
      );
      dispatch(searchAction(tempResult));
    } else {
      dispatch(searchAction());
    }
  }, [query]);

  return (
    <div className="search">
      <span className="input-search">
        <Input
          type="text"
          placeholder="Search products..."
          className="input"
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchOutlined className="search-btn" />
      </span>
    </div>
  );
};

export default Search;
