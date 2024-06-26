import { Link } from 'react-router-dom'
import { images } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='container-footer' id='mobile-app'>
        <div className="content-footer" id='content-footer'>
            <div className="container-footer-info-company">
                <div className="content-footer-left">
                    <p className='company-name'>Viva Wool</p>
                    <div className="description-about-company">
                        <p>Chào mừng bạn đến với Viva Wool - công ty hàng đầu trong sản xuất các sản phẩm handmade từ len. Chúng tôi tự hào mang đến cho khách hàng những sản phẩm len độc đáo, từ áo len, khăn choàng, móc khoá đến đồ trang trí, tất cả đều được làm bằng tay với sự khéo léo và tâm huyết. Viva Wool cam kết mang đến sự ấm áp và phong cách qua từng sản phẩm chất lượng cao, đáp ứng mọi sở thích và nhu cầu của bạn. Khám phá ngay bộ sưu tập của chúng tôi để cảm nhận sự khác biệt!</p>
                    </div>                
                    <div className="group-btn-social-company">
                        <div className="wrap-btn-facebook">
                            <Link to='https://www.facebook.com/anhvy2105'>
                                <img src={images.ic_facebook} alt="" className="btn-facebook" />
                            </Link>
                        </div>
                        <div className="wrap-btn-twitter">
                            <Link to='https://x.com'>
                                <img src={images.ic_twitter} alt="" className="btn-twitter" />
                            </Link>
                        </div>
                        <div className="wrap-btn-linkedin">
                            <Link to='https://www.linkedin.com/in/vy-pham-34b01b184'>
                                <img src={images.ic_linkedin} alt="" className="btn-linkedin"></img>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="content-footer-center">
                    <h1>CÔNG TY VIVA WOOL</h1>
                    <ul className='list-item-info-company'>
                        <li>Trang chủ</li>
                        <li>Về chúng tôi</li>
                        <li>Giao hàng</li>
                        <li>Chính sách bảo mật</li>
                    </ul>
                </div>

                <div className="content-footer-right">
                    <h1>LIÊN HỆ CHÚNG TÔI</h1>
                    <ul className='list-item-get-in-touch'>
                        <li>+028809871256</li>
                        <li>contact.vivawool@gmail.com</li>
                    </ul>
                </div>
            </div>

            <hr className="footer-hr" />

            <p className='footer-copy-right'>Copyright 2024 © vivawool.com.vn | Content by Viva Group | All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer