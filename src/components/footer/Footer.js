import FbImg from  '../../images/facebook.png';
import TwitterImg from  '../../images/twitter.png';
import LinkedinImg from  '../../images/linkedin.png';

const Footer = () => {
    return(
        <footer className="section footer position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-3 mt-sm-0 mt-4">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <h5 className="text-white">Emergency Care</h5>
                                <a href="tel:+911234567890" className="text-white transition">+91 12345 67890</a></li>
                            <li className="mt-4">
                                <h5 className="text-white">Working Time</h5>
                                <a href="/" className="text-white mb-0 transition">We are open 24/7</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-5 col-sm-5 link-border-right mt-sm-0 mt-4">
                        <h5 className="footer-title text-white">Links</h5>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <ul className="footer_menu_list list-unstyled mb-0">
                                    <li>
                                        <a href="/" className="text-white f-14 d-inline-block transition">Home</a>
                                    </li>
                                    <li>
                                        <a href="#Aboutus" className="text-white f-14 d-inline-block transition">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#Features" className="text-white f-14 d-inline-block transition">Features</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <ul className="footer_menu_list list-unstyled mb-0">
                                    <li>
                                        <a href="#how_it_works" className="text-white f-14 d-inline-block transition">How it works</a>
                                    </li>
                                    <li>
                                        <a href="#Clients" className="text-white f-14 d-inline-block transition">Clients</a>
                                    </li>
                                    <li>
                                        <a href="#Contactus" className="text-white f-14 d-inline-block transition">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 my-sm-0 mt-4">
                        <h5 className="footer-title text-white text-sm-right text-left">Follow Us</h5>
                        <div className="footer_menu_list list-unstyled mb-0 text-sm-right text-left" style={{marginLeft: '-0.5rem'}}>
                            <a href="/" className="transition icn-block d-inline-block transition">
                                <img src={FbImg} className='icon mx-2' alt='SM' />
                            </a>
                            <a href="/" className="transition icn-block d-inline-block transition">
                                <img src={TwitterImg} className='icon mx-2' alt='SM' />
                            </a>
                            <a href="/" className="transition icn-block d-inline-block transition">
                                <img src={LinkedinImg} className='icon mx-2' alt='SM' />
                            </a>
                        </div>
                        <div className="pt-4"><p className="mb-0 text-sm-right text-left text-white"> © 2022 Stocker. All Rights Reserved.</p></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;