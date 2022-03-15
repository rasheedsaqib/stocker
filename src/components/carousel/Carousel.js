import banner from "../../images/main-banner-01.png";

const Caurousel = props => {

    const carouselItem = (
        <div className="row align-items-center">
            <div className="col-lg-7">
                <div data-wow-delay="0.1s" data-wow-duration="1s" className="content wow fadeInUp text-start"
                     style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s'}}><h1
                    className="banner-title text-lg-left text-start text-white text-uppercase"> GROW YOUR BUSINESS<br />WITH
                    US</h1><p className="text-white text-lg-left text-start para-txt font-weight-medium f-16"> simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. </p>
                    <div className="mt-md-4 mb-4 text-lg-left text-start"><a href="/"
                                                                             className="btn theme-btn text-white round-button border">GET
                        STARTED</a></div>
                </div>
            </div>
            <div className="col-lg-5">
                <div data-wow-delay="0.3s" data-wow-duration="1s" className="banner-img-02 wow fadeInUp"
                     style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s'}}><img
                    src={banner} alt="" className="img-fluid" /></div>
            </div>
        </div>
    );

    return(
        <div id="top-carousel" className="carousel slide" style={{marginTop: '2rem'}} data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#top-carousel" data-slide-to="0" className="active rounded-icon" />
                <li data-target="#top-carousel" data-slide-to="1" className='rounded-icon' />
                <li data-target="#top-carousel" data-slide-to="2" className='rounded-icon'/>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    {carouselItem}
                </div>
                <div className="carousel-item">
                    {carouselItem}
                </div>
                <div className="carousel-item">
                    {carouselItem}
                </div>
            </div>
        </div>
    )
}

export default Caurousel;