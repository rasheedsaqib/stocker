import Navbar from "./components/navbar/Navbar";
import parallex from './images/parallax.f5bbfeb5.jpg';

function App() {

    const carouselItem = (
        <div className="row align-items-center">
            <div className="col-lg-7">
                <div data-wow-delay="0.1s" data-wow-duration="1s" className="content wow fadeInUp"
                     style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s;"><h2
                    className="banner-title text-lg-left text-center text-white text-uppercase"> GROW YOUR BUSINESS<br>WITH
                    US</h2><p className="text-white text-lg-left text-center para-txt font-weight-medium f-16"> simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. </p>
                    <div className="mt-md-4 mb-4 text-lg-left text-center"><a href="#"
                                                                              className="btn theme-btn text-white">GET
                        STARTED</a></div>
                </div>
            </div>
            <div className="col-lg-5">
                <div data-wow-delay="0.3s" data-wow-duration="1s" className="banner-img-02 wow fadeInUp"
                     style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s;"><img
                    src={pa} alt="" className="img-fluid" /></div>
            </div>
        </div>
    );

    return (

        <div className='parallax' style={{backgroundImage: `url(${parallex})`}}>
            <div className='overlay' />
            <div className='container mt-5'>
                <Navbar/>

                <div id="top-carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#top-carousel" data-slide-to="0" className="active" style={{background: 'rgba(255,255,255,0.5)', width: '20px', height: '20px', borderRadius: '20px', margin: '0.5rem'}} />
                        <li data-target="#top-carousel" data-slide-to="1" style={{background: 'rgba(255,255,255,0.5)', width: '20px', height: '20px', borderRadius: '20px', margin: '0.5rem'}} />
                        <li data-target="#top-carousel" data-slide-to="2" style={{background: 'rgba(255,255,255,0.5)', width: '20px', height: '20px', borderRadius: '20px', margin: '0.5rem'}} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div style={{height: '500px', width: '500px', background: 'red'}} />
                        </div>
                        <div className="carousel-item">
                            <div style={{height: '500px', width: '500px', background: 'blue'}} />
                        </div>
                        <div className="carousel-item">
                            <div style={{height: '500px', width: '500px', background: 'green'}} />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;
