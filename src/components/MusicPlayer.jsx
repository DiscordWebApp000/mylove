import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import {FaStepBackward, FaStepForward, } from 'react-icons/fa';
import { SlSocialSpotify } from "react-icons/sl";
import { IoIosPause, IoIosPlay } from 'react-icons/io';
import { RxLoop } from 'react-icons/rx';

const MusicPlayer = ({ audioTracks }) => {
  const tracks = audioTracks;

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loop, setLoop] = useState(false);
  const audioRef = useRef(null);

  const { imagePath, title, artist, musicPath } = tracks[currentTrack];

  useEffect(() => {
    if (audioRef.current) {
      // Otomatik oynatma
      audioRef.current.play().catch((error) => {
        console.error('Oynatma hatası:', error);
      });
      setIsPlaying(true); // Oynatıldığında durumu güncelle
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [currentTrack]);

  useEffect(() => {
    let interval;
    if (isPlaying && audioRef.current) {
      interval = setInterval(() => {
        setProgress(audioRef.current.currentTime);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Oynatma hatası:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    if (tracks.length > 1) {
      const nextTrack = (currentTrack + 1) % tracks.length;
      setCurrentTrack(nextTrack);
    } else {
      audioRef.current.currentTime = audioRef.current.duration;
    }
    setProgress(0);
  };

  const handlePrevious = () => {
    if (tracks.length > 1) {
      const prevTrack = (currentTrack - 1 + tracks.length) % tracks.length;
      setCurrentTrack(prevTrack);
    } else {
      audioRef.current.currentTime = 0;
    }
    setProgress(0);
  };

  const handleLoopToggle = () => {
    setLoop(!loop);
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  return (
    <div className="w-[350px] bg-[#f7fafc] rounded-lg p-4 flex flex-col items-center">
      <div className="relative h-[200px] w-[90%] overflow-hidden">
        <Image src={imagePath} alt="Cover" layout="fill" objectFit="cover" />
      </div>

      <div className="flex items-center my-4 w-full justify-center">
      <SlSocialSpotify className="text-black text-3xl mr-4" />
        <Image src={'/images/projectImages/MusicItem.png'} alt="" width={130} height={50} />
      </div>

      <div className="text-black w-full">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs">{artist}</p>
      </div>

      <audio
        ref={audioRef}
        src={musicPath}
        loop={loop}
        onEnded={() => {
          if (loop) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          } else {
            handleNext();
          }
        }}
      />

      <input
        type="range"
        value={progress}
        onChange={handleTimeChange}
        min={0}
        max={audioRef.current ? audioRef.current.duration : 0}
        className="w-full mt-2"
      />

      <div className="text-black mt-2 w-full flex justify-between text-sm">
        <span>{audioRef.current ? Math.floor(progress / 60) + ':' + String(Math.floor(progress % 60)).padStart(2, '0') : '0:00'}</span>
        <span>{audioRef.current ? Math.floor(audioRef.current.duration / 60) + ':' + String(Math.floor(audioRef.current.duration % 60)).padStart(2, '0') : '0:00'}</span>
      </div>

      <div className="flex items-center mb-2 relative w-full justify-center">
        <FaStepBackward className="text-black text-2xl cursor-pointer" onClick={handlePrevious} />
        {isPlaying ? (
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center ml-4">
            <IoIosPause className="text-white text-4xl cursor-pointer p-2" onClick={togglePlay} />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center ml-4">
            <IoIosPlay className="text-white text-4xl cursor-pointer p-2 ml-1" onClick={togglePlay} />
          </div>
        )}
        <FaStepForward className="text-black text-2xl cursor-pointer ml-4" onClick={handleNext} />
        <RxLoop className={`absolute text-black text-xl cursor-pointer ml-4 right-0 ${loop ? 'text-blue-400' : ''}`} onClick={handleLoopToggle} />
      
      </div>

      

      
    </div>
  );
};

export default MusicPlayer;
