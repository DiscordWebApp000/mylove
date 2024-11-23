import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const VideoText = ({ user }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play(); // Video oynatmaya çalış
        } catch (error) {
          console.error("Video oynatılmadı:", error);
        }
      }
    };

    playVideo(); // Sayfa yüklendiğinde videoyu oynat
  }, []);

  return (
    <div className="relative w-full h-[800px]">
      <Image 
        src={'/images/projectImages/Section4Bg.png'} 
        alt="image" 
        layout='fill' 
        className="absolute z-[-1]" 
      />
      <div className='w-full h-[600px] flex flex-col items-center'>
        <div className='w-[56%] h-[380px] mx-auto mt-16 mb-10 relative z-10 rounded-t-full border-[10px] border-white border-b-0 overflow-hidden mt-[150px]'> 
          <div className='w-full h-full border-[10px] rounded-t-full border-transparent border-b-0 relative overflow-hidden z-20 '>
            <div className="absolute inset-0 opacity-50 z-10"></div>
            <video 
              ref={videoRef}
              src={user.videos[0].videoPath} 
              autoPlay 
              loop 
              muted
              playsInline // iOS için tam ekranı engelle
              webkit-playsinline // iOS için tam ekranı engelle
              preload="auto" // Videoyu önceden yükle
              style={{ pointerEvents: 'none' }}
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
          </div>
        </div>
        <div className='w-[70%] mx-auto text-center text-[#DF7579] text-sm'>
          <TypeAnimation
            sequence={[
              user.videos[0].content,
              () => {},
            ]}
            speed={50}
            wrapper="span"
            repeat={0}
            onComplete={() => {
              console.log("Yazma işlemi tamamlandı.");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoText;
