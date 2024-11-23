import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const OnlyVideo = ({ user }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const videoRef = useRef(null);

  
  // Görünürlük kontrolü için kullanılır
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Eğer öğe görünürse, isVisible state'ini true yap
            observer.unobserve(entry.target); // Tekrar gözlemlemeyi durdur
          }
        });
      },
      {
        threshold: 0.1, // Görünürlük eşiği
      }
    );

    if (ref.current) {
      observer.observe(ref.current); // Referans alınan öğeyi gözlemle
    }


    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Bileşen unmount olduğunda gözlemi durdur
      }
    };
  }, []);

  return (
    <div>
      <div className="relative w-full h-[600px] mt-[-60px]">
        <Image
          src={'/images/projectImages/Section5Bg.png'}
          alt="image"
          layout='fill'
          className="absolute z-[-2] shadow-2xl"
        />
        <div className='w-full h-[600px] flex flex-col items-center relative'>
          <div className='w-[56%] h-[380px] mx-auto absolute bottom-0 z-10 rounded-t-full border-[10px] border-white border-b-0 overflow-hidden'>
            <div className='w-full h-full border-[10px] rounded-t-full border-transparent border-b-0 relative overflow-hidden z-20'>
              {/* İç katman */}
              <div className="absolute inset-0 opacity-50 z-10"></div>
              {/* Video */}
              <video 
              ref={videoRef}
              src={user.videos[1].videoPath} 
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
        </div>
      </div>

      <div ref={ref} className="relative w-full h-[300px] bg-white flex flex-col items-center justify-center">
        <h1 className="text-3xl text-[#F5B9BA] font-bold pb-4 w-[70%] text-center">Seni Seviyorum !</h1>
        {isVisible && (
         <TypeAnimation
         sequence={[
          user.videos[0].content,  // Doğrudan string olarak
          () => {}, // Callback fonksiyonu
        ]}
         speed={50} // Yazım hızı
         wrapper="span" // Elemanın türü  
         repeat={0} // Tekrar etme
         onComplete={() => {
           console.log("Yazma işlemi tamamlandı.");
         }}
         className='w-[70%] text-center text-black'
       />
        )}
      </div>
      <div className="w-full h-[100px] bg-[#ffffff] mt-[-1px]"></div>
    </div>
  );
};

export default OnlyVideo;
