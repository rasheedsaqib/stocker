import PhoneImg from '../../images/phone-call.png';
import EmailImg from '../../images/email.png';
import MapImg from '../../images/map.png';

const Contact = () => {
    return(
        <div className='container my-5'>
            <div className="title-section">
                <div className="subtitle-hr d-flex align-items-center"><h6
                    className="subtitle theme-color text-uppercase position-relative text-primary m-0">CONTACT</h6>
                    <hr className='ms-2' />
                </div>
                <h2 className="title text-md-left text-start f-40">Get In Touch</h2>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <div className="col-md-12 col-sm-4 py-sm-4 contact-item">
                        <div className="row align-items-start">
                            <div className="col-lg-2 col-md-3">
                                <div className="text-md-left text-start">
                                    <div className="icon-block transition bg-light d-inline-block rounded-circle p-3">
                                        <img src={MapImg} alt="phone" className="icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-9">
                                <div className="text-md-left text-start mt-lg-0 mt-4">
                                    <h5 className="theme-color f-20">Location:</h5>
                                    <a href="https://www.google.com/maps" target="_blank" className="text-dark text-chat">
                                        A108 Adam Street, New York, NY 535022
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-4 py-sm-4 contact-item">
                        <div className="row align-items-start">
                            <div className="col-lg-2 col-md-3">
                                <div className="text-md-left text-start">
                                    <div className="icon-block transition bg-light d-inline-block rounded-circle p-3">
                                        <img src={EmailImg} alt="phone" className="icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-9">
                                <div className="text-md-left text-start mt-lg-0 mt-4">
                                    <h5 className="theme-color f-20">Email:</h5>
                                    <a href="https://www.google.com/maps" target="_blank" className="text-dark text-chat">
                                        info@yourdomian.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-4 py-sm-4 contact-item">
                        <div className="row align-items-start">
                            <div className="col-lg-2 col-md-3">
                                <div className="text-md-left text-start">
                                    <div className="icon-block transition bg-light d-inline-block rounded-circle p-3">
                                        <img src={PhoneImg} alt="phone" className="icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-9">
                                <div className="text-md-left text-start mt-lg-0 mt-4">
                                    <h5 className="theme-color f-20">Call:</h5>
                                    <a href="https://www.google.com/maps" target="_blank" className="text-dark text-chat">
                                        +1 987 654 3210
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <form className="contact_form common-input-form mt-md-4">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="name" id="name" type="text" placeholder="Your Name" className="form-control custom-input border-0" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="email" id="email" type="email" placeholder="Your Email" className="form-control custom-input border-0" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input name="subject" id="subject" type="text" placeholder="Subject" className="form-control custom-input border-0" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <textarea name="comments" id="comments" rows="6" placeholder="Message" className="form-control custom-input border-0" style={{height: '200px'}} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-left">
                                <button type="submit" value="Send" className="mt-4 btn theme-btn contact-form-btn contact-btn">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact;