import {useEffect} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    useEffect(() => {
        window.onscroll = () => {
            const nav = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                nav.classList.add('sticky-header');
            } else {
                nav.classList.remove('sticky-header');
            }
        }
    });

    return (
        <div style={{width: '100%'}}>
            <div className='width'>
                <nav className="navbar navbar-expand-lg navbar-inner fixed-top custom-nav sticky w-100 rounded-0 mb-0">
                    <div className="menu-overlay"></div>
                    <div className="container"><Link to="/" className="navbar-brand brand-logo mr-4 logo">Stocker</Link>
                        <div id="navbarCollapse" className="navbar-collapse collapse justify-content-end mr-3">
                            <ul className="navbar-nav navbar-center">
                                <li className="nav-item active">
                                    <Link to="/" aria-current="page" className="nav-link text-white transition text-uppercase router-link-exact-active router-link-active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link text-white transition text-uppercase">About Us</Link></li>
                                <li className="nav-item">
                                    <Link to="/services" className="nav-link text-white transition text-uppercase">Services</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to="/stock" className="nav-link text-white transition text-uppercase">Stock</Link>
                                </li>
                            </ul>
                        </div>
                        <Link to='/contact' className="btn text-white border round-button" type="submit">Contact</Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;