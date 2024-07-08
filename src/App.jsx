import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Tech from "./components/Tech";



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Project />
      <Tech />
      <About />
      <Contact/>
      <Footer />
      
    </div>
  );
}

export default App;
