import { useState, useEffect } from "react";
import "./search.scss";
import { Input, Popover } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import searchAction from "../../redux/search/searchAction";

const Search = () => {
  const [query, setQuery] = useState();
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsReducer.data);
  const search = useSelector((state) => state.searchReducer.search);

  useEffect(() => {
    if (query) {
      const tempResult = productsList.filter((product) =>
      (product.title.toLowerCase()).includes(query.toLowerCase())
      );

      dispatch(searchAction(tempResult));
    } else {
      dispatch(searchAction());
    }
  }, [query]);

  const content = () => {
    return search?.map((item) => (
      <div className="product-suggestion">
        <span className="product-suggestion-img">
          <img src={item.image} alt="product-img" width="50" height="50" />
        </span>
        <span className="product-suggestion-title">{item.title}</span>
      </div>
    ));
  };



  return (
    <div className="search">
      <Popover
        placement="bottom"
        content={content}
        trigger="click"
        overlayStyle={{
          
          maxHeight:"50vh",
          overflow:"auto"
        }}
        title="Suggestion products :"
      >
        <span className="input-search">
          <Input
            type="text"
            placeholder="Search products..."
            className="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchOutlined  className="search-btn" />
        </span>
      </Popover>
    </div>
  );
};

export default Search;
