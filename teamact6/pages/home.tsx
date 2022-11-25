import Navbar from "../components/Navbar";
import Homes from "../components/Homes";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div>
            <Homes />
            <Navbar />
            <About />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;