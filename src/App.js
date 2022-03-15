import Navbar from "./components/navbar/Navbar";
import parallex from './images/parallax.f5bbfeb5.jpg';
import parallex2 from './images/clients-bg.eeca2c84.jpg'
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

function App() {
    return (
        <>
            <div className='parallax' style={{backgroundImage: `url(${parallex})`}}>
                <div className='overlay' />
                <div className='container mt-5'>
                    {/*<Navbar/>*/}
                </div>
            </div>
            <div style={{height: '50vh'}} />

            <div className='parallax' style={{backgroundImage: `url(${parallex2})`}}>
                <div className='overlay' />
                <Testimonials />
            </div>

            <Contact />
        </>
    );
}

export default App;
