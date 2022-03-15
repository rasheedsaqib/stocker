import MemberImg from "../../images/member.jpeg";

const Team = () => {

    const member = (
        <div className="col-12">
            <div className="border bg-white transition text-center p-3">
                <div className="rounded-circle overflow-hidden team-img mx-auto"><img
                    src={MemberImg} alt="team-01.jpg" className="rounded-circle img-fluid w-75 mb-5" /></div>
                <div className="team-desc d-flex flex-column align-items-center">
                    <h4 className="f-18 mb-0 theme-color">Awais Mamo</h4>
                    <h6 className="my-2 f-16 font-weight0bold">Company CEO</h6>
                    <p className='f-12 w-75'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <a href="/" className="mx-2 d-inline-block social-icon transition">
                        <i className="mdi theme-color mdi-facebook transition f-34" />
                    </a>
                    <a href="/" className="mx-2 d-inline-block social-icon transition">
                        <i className="mdi theme-color mdi-twitter transition f-34" />
                    </a>
                    <a href="/" className="mx-2 d-inline-block social-icon transition">
                        <i className="mdi theme-color mdi-google-plus transition f-34" />
                    </a>
                </div>
            </div>
        </div>
    );

    return(

    <div data-wow-delay="0.6s" data-wow-duration="1s" className="about-bottom-section wow fadeInUp container pt-5 pb-5">
        <div className="title-section">
            <div className="subtitle-hr d-flex align-items-center"><h6
                className="subtitle theme-color text-uppercase position-relative text-primary m-0">TEAM</h6>
                <hr className='ms-2' />
            </div>
            <h2 className="title text-md-left text-start f-40">Meet our Team</h2>
        </div>
        <div className="mt-4">
            <div className="row align-items-center">
                <div className='col-4'>
                    {member}
                </div>

                <div className='col-4'>
                    {member}
                </div>

                <div className='col-4'>
                    {member}
                </div>
            </div>
        </div>
    </div>

    )
}

export default Team;