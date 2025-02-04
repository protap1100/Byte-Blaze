import Hero from "../Components/Hero";
import wave from '../../src/assets/wave.svg'
const Home = () => {
    return (
        <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-132px)]">
            <Hero></Hero>  
            <img className="absolute bottom-0 w-full" src={wave} alt="" />          
        </div>
    );
};

export default Home;