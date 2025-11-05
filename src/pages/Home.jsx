import React from "react";
import HeroSlider from "../components/HeroSlider";
import ExperienceSection from "../components/ExperienceSection";
import StoriesSection from "../components/StoriesSection";
import VideoSection from "../components/VideoSection";
import SecondSlider from "../components/SecondSlider";
import axios from "axios"
export default function Home() {
    const check=async(e)=>{
      try {
        console.log("in")
        axios.defaults.withCredentials=true
        const {data}=axios.get(`${import.meta.env.VITE_BASE_URL}/api/auth/check`);
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div>
            <button className="cursor-pointer z-100 p-4 bg-blue-500" onClick={check}>CHECK AUTH</button>
      
      <VideoSection />
      <HeroSlider />
      <SecondSlider />
      <ExperienceSection />
      <StoriesSection />
    </div>
  );
}
