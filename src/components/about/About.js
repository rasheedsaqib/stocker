import AboutImg from '../../images/about-img.png';

const About = props => {
    return(
        <div data-wow-delay="0.6s" data-wow-duration="1s" className="about-bottom-section wow fadeInUp container pt-5 pb-5">
            <div className="title-section">
                <div className="subtitle-hr d-flex align-items-center"><h6
                    className="subtitle theme-color text-uppercase position-relative text-primary m-0">ABOUT</h6>
                    <hr className='ms-2' />
                </div>
                <h2 className="title text-md-left text-start f-40">About Stocker</h2>
            </div>
            <div className="mt-4">
                <div className="row align-items-center">
                    <div className="col-lg-5"><img src={AboutImg} alt="about-img.png"
                                                   className="w-100 img-fluid" /></div>
                    <div className="col-lg-7 mt-lg-0 mt-4"><h1 className="font-sm-24">Complete Business Solutions in One
                        Place</h1><p>It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English.</p><p>It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                        <ul className="about-list pl-4 mb-0">
                            <li className="position-relative mb-4">It is a long established fact that a reader will be
                                distracted by the readable.
                            </li>
                            <li className="position-relative mb-4">It is a long established fact that a reader will be
                                distracted by the readable.
                            </li>
                            <li className="position-relative">It is a long established fact that a reader will be
                                distracted by the readable.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;