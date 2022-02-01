import "./header.scss";
import { ShoppingOutlined} from "@ant-design/icons";
import Search from '../search/Search'

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <h1>G-Star Raw</h1>
      </div>
        <Search />
      <div className="card-btn">
        <ShoppingOutlined />
      </div>
    </div>
  );
};

export default Header;
