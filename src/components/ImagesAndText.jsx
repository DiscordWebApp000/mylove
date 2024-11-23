import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const ImagesAndText = ({ user }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Görünürlük kontrolü için kullanılır
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
    <div className="w-full h-[600px] bg-[#F3AFB0] mt-[-1px] relative overflow-hidden flex items-center  flex-col">
      {/* Görsel ve metin bloğu */}
      <div className="w-full h-[350px] flex items-center justify-center relative">
        <div className="w-[300px] h-[250px] z-10 relative">
          <Image src={'/images/projectImages/ImageAndText.png'} alt="image" width={290} height={220} className="absolute " />
          <div className="relative h-[280px] w-[248px] overflow-hidden z-[-3]  ml-[30px] mt-[22px]">
            <Image src={user.images[7].imagePath} alt="image3" layout="fill" objectFit="cover" />
          </div>
        </div>

       
      </div>

      <div ref={ref} className="w-[350px] h-[150px] flex items-center justify-center relative">
        {isVisible && (
          <TypeAnimation
          sequence={[
            user.images[7].content,  // Doğrudan string olarak
            () => {}, // Callback fonksiyonu
          ]}
            speed={150} // Yazım hızı
            wrapper="p" // Elemanın türü
            repeat={0} // Tekrar etme
            className="w-[70%] text-base font-bold italic text-black text-center z-10 "
          />
        )}
      </div>

      <div className="absolute inset-0 flex items-center justify-center top-0 mt-10">
        <h1 className="text-lg font-bold text-[#F5B9BA] z-0 opacity-90">
          Gözlerin, masmavi bir deniz gibidir benim için. Her bakışında kaybolurum, derinliklerine dalıp giderim. Sana olan sevgim,
          o denizin sonsuzluğu gibidir. Seninle geçirdiğim her an, bir şiirin mısralarında saklıdır. Kalbim seninle çarpar, adını
          fısıldar durur. ...
          Gözlerin, masmavi bir deniz gibidir benim için. Her bakışında kaybolurum, derinliklerine dalıp giderim. Sana olan sevgim,
          o denizin sonsuzluğu gibidir. Seninle geçirdiğim her an, bir şiirin mısralarında saklıdır. Kalbim seninle çarpar, adını
          fısıldar durur. ...
          Gözlerin, masmavi bir deniz gibidir benim için. Her bakışında kaybolurum, derinliklerine dalıp giderim. Sana olan sevgim,
          o denizin sonsuzluğu gibidir. Seninle geçirdiğim her an, bir şiirin mısralarında saklıdır. Kalbim seninle çarpar, adını
          fısıldar durur. ...
          Gözlerin, masmavi bir deniz gibidir benim için. Her bakışında kaybolurum, derinliklerine dalıp giderim. Sana olan sevgim,
          o denizin sonsuzluğu gibidir. Seninle geçirdiğim her an, bir şiirin mısralarında saklıdır. Kalbim seninle çarpar, adını
          fısıldar durur. ...
        </h1>
      </div>
    </div>
  );
}

export default ImagesAndText;
