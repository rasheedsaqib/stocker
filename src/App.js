import Navbar from "./components/navbar/Navbar";
import parallex from './images/parallax.f5bbfeb5.jpg';
import parallex2 from './images/clients-bg.eeca2c84.jpg'
import Caurousel from "./components/carousel/Carousel";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Team from "./components/team/Team";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import Table from "./components/table/Table";
import Graph from "./components/graph/Graph";

function App() {

    return (

        <>
            <div className='parallax' style={{backgroundImage: `url(${parallex})`}}>
                <div className='overlay' />
                <div className='container mt-5'>
                    <Navbar/>
                    <Caurousel />
                </div>
            </div>

            <Routes>
                <Route path='/' element={(
                    <>
                        <About />
                        <Services />
                        <Team />

                        <div className='parallax p-0' style={{backgroundImage: `url(${parallex2})`}}>
                            <div className='overlay' />
                            <div className='container'>
                                <Testimonials />
                            </div>
                        </div>

                        <Contact />
                    </>
                )} />

                <Route path='/about' element={(
                    <>
                        <About />
                        <Team />
                    </>
                )} />

                <Route path='/services' element={(
                    <>
                        <Services />
                    </>
                )} />

                <Route path='/stock' element={(
                    <>
                        <Table />
                        <Graph />
                    </>
                )} />

                <Route path='/contact' element={(
                    <>
                        <Contact />
                    </>
                )} />
            </Routes>

            <Footer />

        </>
    );
}

export default App;
