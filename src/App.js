import Navbar from "./components/navbar/Navbar";
import parallex from './images/parallax.f5bbfeb5.jpg';

function App() {

    console.log(parallex);

    return (

        <div className='parallax' style={{backgroundImage: `url(${parallex})`}}>
            <Navbar/>

        </div>
    );
}

export default App;
