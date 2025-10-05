import Navbar from "./Navbar";
import { Bookmark, Play } from "lucide-react";

const Homepage = () => {
    return(
        <>
        <Navbar />
        <section class="Hero-section">
            <div className="-mt-15 px-20 w-full h-[80vh] relative bg-cover bg-center flex items-end bg-[url('/poster.png')]">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent via-30% to-[#0D0C0F] opacity-100"></div>
                <div className="relative text-white space-y-3 pb-10 z-10">
                    <div className="w-fit px-4 py-1 mb-4 bg-[#0D0C0F] rounded-4xl z-10">
                        <span>Series</span>
                    </div>
                    <h1 className="text-4xl font-bold">Peacemaker Season 2</h1>
                    <p className="text-gray-400">8 Episodes • 2025 • Superhero • Action</p>
                    <p className="max-w-xl">
                        The continuing story of Peacemaker, a vainglorious superhero/supervillain who believes in peace at any cost — no matter how many people he has to kill. After a miraculous recovery from his duel with Bloodsport, Peacemaker soon discovers that his freedom comes at a price.
                    </p>
                    <div className="flex space-x-5">
                        <a href="#" className="flex items-center py-2 px-6 bg-red-800 rounded-md hover:bg-red-600 transition"><Play className="w-5 h-5 mr-2"/>Play</a>
                        <a href="#" className="flex items-center py-2 px-4 border text-white rounded-md hover:bg-white hover:text-black transition"><Bookmark className="w-5 h-5 mr-2"/>Add Watchlist</a>
                        <a href="#" className="flex items-center py-2 px-4 border text-white rounded-md hover:bg-white hover:text-black transition"><Bookmark className="w-5 h-5 mr-2"/>Add Watchlist</a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="w-full h-[80vh]">

            </div>
        </section>
        </>
    );
};

export default Homepage;