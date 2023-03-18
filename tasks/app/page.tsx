import Image from "next/dist/client/image";
import CarWheels from "./components/carTyre";
import FrontLight from "./components/heaLight";
import NavBar from "@/app/components/NavBar";
import Team from "@/app/components/Team";
import Review from "./components/Reviews";
import Subscribe from "@/app/components/Subscribe";
import HeaderPag from "./components/HeaderPag";
import Pricing from "./components/Pricing";
import Features from "@/app/components/Features";
import FlexBasis from "./components/FlexBasis";
import AutoMargin from "./components/AutoMargin";

export default function Home() {
  return ( 
    <main>
      {/* <div className="flex justify-center bg-pink-400	">
        <div className="mx-4 order-last">
          <Image className="rounded-full my-3" alt = "Profile pic" src="/profile.png" height={120} width="120"/>
        </div>
        <div className="mx-4 self-center text-center">
          <h1 className="text-6xl font-bold text-blue-700">Hi! Saud Ahmed</h1>
          <h2 className="text-3xl font-semibold text-blue-300">i am happy to learn web3.0</h2>
          <button className= "my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-400 hover:h-12 hover:w-18 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300" >Learn More</button>
        </div>
      </div>

      <div>
      <p className="text-xs text-red-500" >this is 12px font size</p>
      <p className="text-lg text-red-600">this is 18px font size</p>
      <p className="text-2xl text-red-700">this is 24 px font size</p>
      <div className="h-24 w-24 bg-blue-500 hover:scale-125"></div>
      <CarWheels/>
      
      <div className="flex space-x-1">
        <FrontLight/>
        <FrontLight/>
      </div>
      

      </div>
     */}

     {/* <NavBar/>
     <Subscribe/>
     <Team/>
     <Review/> */}

     {/* <HeaderPag/>
     <Pricing/>
     <Features/> */}

     {/* <FlexBasis/> */}
     <AutoMargin/>

    </main>
  )
}
