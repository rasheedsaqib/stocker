import {useEffect} from "react";

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
                    <div className="container"><a href="/" className="navbar-brand brand-logo mr-4 logo">Stocker</a>
                        <div id="navbarCollapse" className="navbar-collapse collapse justify-content-end mr-3">
                            <ul className="navbar-nav navbar-center">
                                <li className="nav-item active"><a href="#/" aria-current="page"
                                                                   className="nav-link text-white transition text-uppercase router-link-exact-active router-link-active">Home</a>
                                </li>
                                <li className="nav-item"><a href="/about"
                                                            className="nav-link text-white transition text-uppercase">About
                                    Us</a></li>
                                <li className="nav-item"><a href="/services"
                                                            className="nav-link text-white transition text-uppercase">Services</a>
                                </li>
                                <li className="nav-item dropdown"><a href="/portfolio" data-toggle="dropdown"
                                                                     className="nav-link dropdown-toggle text-white transition text-uppercase"> Portfolio </a>
                                </li>
                                <li className="nav-item"><a href="/blog"
                                                            className="nav-link text-white transition text-uppercase">Blog</a>
                                </li>
                                <li className="nav-item dropdown"><a href="/pages" data-toggle="dropdown"
                                                                     className="nav-link dropdown-toggle text-white transition text-uppercase"> Pages </a>
                                </li>
                            </ul>
                        </div>
                        <button className="btn text-white border round-button" type="submit">Contact</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;