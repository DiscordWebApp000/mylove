import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HangingImages = ({ user }) => {
  const [showSecondText, setShowSecondText] = useState(false); // İkinci metni göstermek için state

  const firstMessage = user.images[1].content;
  const secondMessage = user.images[2].content;

  useEffect(() => {
    // İlk metin yazıldıktan sonra ikinci metni göster
    const timeout = setTimeout(() => {
      setShowSecondText(true);
    }, firstMessage.length * 100 + 500); // İlk metin yazımı ve gecikme

    return () => clearTimeout(timeout); // Cleanup
  }, []);

  return (
    <div className='w-full h-auto'>
      <div className="w-full h-[180px] relative flex justify-center items-center mt-[-1px]">
        <div className="absolute inset-0 z-10">
          <Image src={'/images/projectImages/ContentSecond.png'} alt="image" fill />
        </div>
        <div className="absolute inset-0 flex justify-between items-center w-full px-4 z-0">
          {user.images.slice(1, 5).map((img, index) => (
            <div
              key={index}
              className={`relative h-[110px] w-[108px] overflow-hidden ${
                index === 0
                  ? 'transform rotate-[6deg] mb-4 ml-2 z-[-1]'
                  : index === 3
                  ? 'transform rotate-[8deg] mb-2 z-[-4]'
                  : 'z-[-2]'
              }`}
            >
              <Image src={img.imagePath} alt={`image${index}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[100px] flex flex-col justify-center items-center bg-[#EBC1CE] mt-[-1px]">
        {/* İlk metni yazdırıyoruz */}
        <h1 className="text-xl text-red-500 font-extrabold pb-2">
        <TypeAnimation
          sequence={[
            firstMessage, // İlk metin
            () => {}, // Callback
          ]}
          speed={250} // Yazım hızı
          wrapper="span" // Elemanın türü
          repeat={0} // Tekrar etme
          
          cursor={false} // Kursun görünürlüğünü kapatma
        />
        </h1>
        {/* İlk metin tamamlandığında ikinci metni gösteriyoruz */}
        {showSecondText && (
          <h2 className="text-sm text-red-500 font-extrabold">
            <TypeAnimation
              sequence={[
                secondMessage, // İkinci metin
                () => {}, // Callback
              ]}
              speed={250} // Yazım hızı
              wrapper="span" // Elemanın türü
              repeat={0} // Tekrar etme
              
            />
          </h2>
        )}
      </div>
      <div className="w-full h-[100px] bg-[#EBC1CE] mt-[-1px]"></div>
    </div>
  );
};

export default HangingImages;
