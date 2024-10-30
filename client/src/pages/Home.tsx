import AppSidebar from "@/components/AppSidebar";
import GamesDisplay from "@/components/GamesDisplay";
import Navbar from "@/components/Navbar";
const Home = () => {
   
    return (
      <div className="bg-black h-full w-full flex  text-white gap-4">
        <div className="flex flex-col items-center">
         <AppSidebar/>
        </div>
            <div className="w-full">
                <Navbar />
                <GamesDisplay/>
        </div>
      </div>
    );
}

export default Home