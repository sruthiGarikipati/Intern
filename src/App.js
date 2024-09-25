import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="rooms">
        <Rooms />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="location">
        <Location/>
      </section>
      <Footer/>
     
    </div>
  );
}

export default App;






