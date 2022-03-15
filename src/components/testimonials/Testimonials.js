import ClientImg from '../../images/client.jpeg';

const Testimonials = () => {

    const testimonial = (
        <div className="active" style={{width: '550px', marginBottom: '10rem'}}>
            <div data-wow-delay="0.2s" data-wow-duration="1s" className="px-3 item wow d-flex">
                <div className="user-pics overflow-hidden mx-auto">
                    <img src={ClientImg} alt="" className="img-fluid" />
                </div>
                <div className="clients-card bg-white px-4 text-start d-flex flex-column justify-content-center">
                    <div className="user-txt text-sm-left">
                        <div className="use-info"><h5 className="theme-color">Mamo 69</h5><p className="f-14">Company
                            CEO</p></div>
                    </div>
                    <div className="shadow-md"><p className="m-0 text-sm-left f-16 font-weight-medium">
                        <em> It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.</em></p></div>
                </div>
            </div>
        </div>
    );

    return(
        <div className='container'>
            <div className="subtitle-hr d-flex align-items-center mt-5">
                <h6 className="subtitle text-white text-uppercase position-relative">TESTIMONIALS</h6>
                <hr className="white-border" />
            </div>

            <div id="testimonialsCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#testimonialsCarousel" data-slide-to="0" className="active dummy" />
                    <li data-target="#testimonialsCarousel" data-slide-to="1" className="dummy" />
                    <li data-target="#testimonialsCarousel" data-slide-to="2" className="dummy" />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='d-flex justify-content-between' style={{margin: '0 -1rem'}}>
                            {testimonial}
                            {testimonial}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='d-flex justify-content-between' style={{margin: '0 -1rem'}}>
                            {testimonial}
                            {testimonial}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='d-flex justify-content-between' style={{margin: '0 -1rem'}}>
                            {testimonial}
                            {testimonial}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;