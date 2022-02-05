import "./gallery.scss";
import menwomen from "../../assets/images/menwomen.jpg";
import women from "../../assets/images/women.jpg";
import men from "../../assets/images/men.jpg";
import jewelery from "../../assets/images/jewelery.jpg";
import electronic from "../../assets/images/digital.jpg";

const Gallery = () => {
  return (
    <div className="container">
      <div className="row col-lg-12">
        <div className="col-lg-6 left-img">
          <img src={menwomen} alt="menwomen"/>
        </div>
        <div className="col-lg-6">
          <div className="row col-lg-12">
            <div className="col-lg-6">
              <img src={women} alt="women" width="290" />
            </div>
            <div className="col-lg-6">
              <img src={men} alt="men" width="290" />
            </div>
            <div className="row col-lg-12">
              <div className="col-lg-6">
                <img src={jewelery} alt="jewelery" width="290" />
              </div>
              <div className="col-lg-6">
                <img src={electronic} alt="electronic" width="290" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
