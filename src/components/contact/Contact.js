const Contact = () => {
    return (
        <div className="container">
            <div data-wow-delay="0.1s" data-wow-duration="1s" className="title-section wow fadeInUp">
                <div className="subtitle-hr d-flex align-items-center"><h6
                    className="subtitle theme-color text-uppercase position-relative">CONTACT</h6>
                    <hr/>
                </div>
                <h2 className="title text-md-left text-center f-40">Get In Touch</h2>
            </div>
            <div data-wow-delay="0.1s" data-wow-duration="1s" className="wow fadeInUp">
                <div className="row">
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-12 col-sm-4 py-sm-4 contact-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-2 col-md-3">
                                        <div className="text-md-left text-center">
                                            <div
                                                className="icon-block transition bg-light d-inline-block rounded-circle p-3">
                                                <span
                                                    className="icon mdi mdi-map-marker d-flex align-items-center justify-content-center theme-color transition"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-9">
                                        <div className="text-md-left text-center mt-lg-0 mt-4"><h5
                                            className="theme-color f-20">Location:</h5><a
                                            href="https://www.google.com/maps" target="_blank"
                                            className="text-dark text-chat"> A108 Adam Street, New York, NY 535022 </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-4 col-6 py-4 contact-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-2 col-md-3">
                                        <div className="text-md-left text-center">
                                            <div
                                                className="icon-block transition bg-light d-inline-block rounded-circle p-3">
                                                <span
                                                    className="icon  mdi mdi-phone d-flex align-items-center justify-content-center theme-color transition"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-9">
                                        <div className="text-md-left text-center mt-lg-0 mt-4"><h5
                                            className="theme-color f-20">Email:</h5><a href="mailto:info@yourdomain.com"
                                                                                       className="text-dark text-chat">info@yourdomian.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-4 col-6 py-4 contact-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-2 col-md-3">
                                        <div className="text-md-left text-center">
                                            <div
                                                className="icon-block transition bg-light d-inline-block rounded-circle p-3">
                                                <span
                                                    className="icon  mdi mdi-email d-flex align-items-center justify-content-center theme-color transition"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-9">
                                        <div className="text-md-left text-center mt-lg-0 mt-4"><h5
                                            className="theme-color f-20">Call:</h5><a href="tel:+19876543210"
                                                                                      className="text-dark text-chat">+1
                                            987 654 3210</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <form className="contact_form common-input-form mt-md-4">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group"><input name="name" id="name" type="text"
                                                                       placeholder="Your Name"
                                                                       className="form-control border-0"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group"><input name="email" id="email" type="email"
                                                                       placeholder="Your Email"
                                                                       className="form-control border-0"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group"><input name="subject" id="subject" type="text"
                                                                       placeholder="Subject"
                                                                       className="form-control border-0"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group"><textarea name="comments" id="comments" rows="6"
                                                                          placeholder="Message"
                                                                          className="form-control border-0"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-left">
                                    <button type="submit" value="Send"
                                            className="mt-4 btn theme-btn contact-form-btn border-0">Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;