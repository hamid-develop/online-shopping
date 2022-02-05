import "./header.scss";
import { ShoppingOutlined} from "@ant-design/icons";
import Search from '../search/Search'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <Link to="/">
        <h1>G-Star Raw</h1>
        </Link>
      </div>
        <Search />
      <div className="card-btn">
        <ShoppingOutlined />
      </div>
    </div>
  );
};

export default Header;
