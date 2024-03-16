import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import video from "../assets/GoogleLogo.mp4"
const Home = () => {
    return <div className="flex h-[100vh] flex-col  ">
        <HomeHeader />
        <main className="grow flex justify-center ">
            <div className="w-full  px-5 flex flex-col  items-center mt-44 ">
              
                <video autoPlay muted loop src={video} className="w-[172px] leading-tight md:w-[272px] "></video>
                <SearchInput />
                <div className="flex gap-2 text-[#3c4043] mt-8">
                    <button className="h-9 px-4 bg-[#f8f9fa] rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 text-[12px] md:text-[20px] ">Google Search</button>

                    <button className="h-9 px-4 bg-[#f8f9fa] rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 text-[12px] md:text-[20px] ">I'm feeling lucky</button>
                </div>
            </div>
        </main>

        <Footer/>
    </div>;
};

export default Home;
