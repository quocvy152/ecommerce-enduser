import "./DownloadApp.css";
import { images } from "../../assets/assets";

const DownloadApp = () => {
  return (
    <div className="container-footer-download-app">
      <h1>Để Có Được Trải Nghiệm Tốt Hơn Hãy Tải Ứng Dụng Của Chúng Tôi</h1>

      <div className="group-btn-download-app">
        <div className="wrap-btn-download-ch-play">
          <img src={images.ic_ch_play} alt="" className="img-btn-ch-play" />
          <div className="btn-download-ch-play">
            <p className="tooltip-btn-download">GET IT ON</p>
            <p className="brand-store">Google Play</p>
          </div>
        </div>

        <div className="wrap-btn-download-app-store">
          <img src={images.ic_app_store} alt="" className="img-btn-app-store" />
          <div className="btn-download-app-store">
            <p className="tooltip-btn-download">Download on the</p>
            <p className="brand-store">App Store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
