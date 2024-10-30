"use client"
import { useEffect, useState } from "react";
import Image from 'next/image';
import { MusicPlayer, HangingImages, ImagesAndNotes, VideoText, OnlyVideo, ImagesAndText, WavesAnimation } from '../components';
import { FaArrowUp } from 'react-icons/fa';
export default function User({user}) {
  console.log(user)
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [rotation, setRotation] = useState(0);
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsScrolledUp(true);
      setRotation(0);
    } else {
      setIsScrolledUp(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 
  const handleScrollUp = () => {
    setRotation(180);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-[450px] mx-auto">
    <div className="w-full h-full">
      <div className="w-full h-[450px] relative flex justify-center items-center">
        <Image src="/images/projectImages/ContentFirst.png" alt="image" fill className="absolute inset-0 z-10" />
        <Image src={user.images[0].imagePath} alt={user.images[0].content} width={350} height={350} />
      </div>
    {/*   <HangingImages user={user} />
      <div className="relative w-full h-[100px] mt-[-111px] mb-[-60px] z-20">
        <Image src="/images/projectImages/animation1.png" alt="animation1" width={650} height={350} className="overflow-hidden" />
      </div> */}

{/*       <HangingImages user={user} />
      <div className="relative w-full h-[100px] mt-[-111px] mb-[-60px] z-20">
        <Image src="/images/projectImages/animation1.png" alt="animation1" width={650} height={350} className="overflow-hidden" />
      </div> */}

{/*       <ImagesAndNotes user={user} /> */}
      <div className="relative w-full h-[110px] mt-[-111px] mb-[-60px] z-20">
        <Image src="/images/projectImages/animation2.png" alt="animation2" width={650} height={350} className="overflow-hidden" />
      </div>
{/* 
      <VideoText user={user} />
      <OnlyVideo user={user} /> */}

      <div className="relative w-full h-[110px] mt-[-111px] mb-[-78px] z-20">
        <Image src="/images/projectImages/animation3.png" alt="animation3" width={650} height={350} className="overflow-hidden" />
      </div>

     {/*  <ImagesAndText user={user} />
 */}
      <div className="relative w-full h-[100px] z-10 mt-[-50px] mb-[-50px]">
        <div className="absolute left-0 top-10 w-full h-[10px] bg-black"></div>
        <button
          className="absolute flex justify-center items-center top-5 right-[44%] z-20 w-[50px] h-[50px] rounded-full bg-black transition-transform duration-500 text-xl active:text-2xl active:bg-[#EEEEE9] text-white active:text-black"
          onClick={handleScrollUp}
        >
          <FaArrowUp />
        </button>
      </div>

      <div className="w-full h-[500px] flex items-center justify-center bg-white">
      {/*   <MusicPlayer audioTracks={user.musics} /> */}
      </div>

      <div className="w-full h-[100px] flex items-center justify-center bg-white mt-[-1px]">
        <WavesAnimation />
      </div>
    </div>
  </div>
  );
}
