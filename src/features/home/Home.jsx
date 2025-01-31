import { Link } from "react-router-dom";
import Illustration from "./Illustration";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SparklesText from "../../components/ui/sparkles-text";
import BlurIn from "../../components/ui/blur-in";
import Meteors from "../../components/ui/meteors"; // Import Meteors for comet effect

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Divyansh Chawla | Home</title>
      </Helmet>

      <div className="relative flex min-h-[75svh] items-center overflow-hidden ">
        
        {/* Meteors Component for comet effect */}
        <Meteors number={30} />

        <div className="animate-in fade-in zoom-in delay-0 duration-1000 absolute left-10 z-10 gap-y-0 text-[12rem] font-extrabold leading-none text-bgText max-sm:hidden">
          <h1>CODE</h1>
          <h1>CREATE</h1>
          <h1>CONQUER</h1>
        </div>

        <div className="relative z-20 flex flex-col items-center gap-y-10 p-4 md:w-full md:flex-row md:items-center md:justify-between md:px-28">
          <div>
            <h2 className="animate-in fade-in zoom-in delay-0 duration-1000 text-3xl font-bold text-[#eee] md:text-5xl xl:text-8xl">
              <SparklesText text="Divyansh Chawla" />
            </h2>
            <div className="typewriter w-max">
              <h2 className="text-xl font-bold text-[#eee] md:text-3xl ">
                Aspiring Data Scientist 
              </h2>
            </div>
            <Link to="/projects">
              <button className="animate-in fade-in zoom-in delay-0 duration-1000 mt-10 bg-accentColor px-6 py-2.5 font-medium text-white md:px-3 md:text-xl xl:ml-10">
                View Work
              </button>
            </Link>

            <Link to="/contact">
              <button className="animate-in fade-in zoom-in delay-0 duration-1000 ml-3 border-2 border-accentColor px-5 py-2 text-textColor md:ml-6 md:px-3 md:text-xl">
                Contact Me
              </button>
            </Link>

            <a
              href="https://drive.google.com/file/d/10tAtQHo4CbN5tFbe6q42hRgbTdAgB2Bo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="animate-in fade-in zoom-in delay-0 duration-1000 mt-3 bg-accentColor px-4 py-2.5 font-medium text-white md:mt-0 md:ml-6 md:px-3 md:text-xl xl:ml-6">
                View Resume
              </button>
            </a>
          </div>

          <Illustration />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Home;
