import React from 'react'
import Image from 'next/image'

const ImagesAndNotes = ({ user }) => {
  return (
    <div className="w-full h-[650px] bg-[#F1B8BD] mt-[-1px] relative overflow-hidden">
            {/* Görsel ve metin bloğu */}
            <div className="w-full h-[250px] flex items-center justify-center relative mt-[50px]">
              <div className="w-[180px] h-[180px] z-10 relative">
                <Image src={'/images/projectImages/FrameLeft.png'} alt="image" width={180} height={180} className="absolute" />
                <div className="relative h-[140px] w-[135px] overflow-hidden z-[-3] transform rotate-[-8deg] ml-[28px] mt-[18px]">
                  <Image src={user.images[5].imagePath} alt="image3" layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className="w-[200px] h-[250px] z-10 relative mt-20 p-4 pr-0 pl-8 relative right-0 rotate-[10deg]">
                <Image src={'/images/projectImages/RightNote.png'} alt="image" width={170} height={250} className="absolute" />
                <p className="text-[8px] font-bold text-red-500 absolute z-20 left-8 top-10 p-4 rotate-[1deg] ">
                 {user.images[5].content}
                </p>
              </div>
            </div>

            <div className="w-full h-[250px] flex items-center justify-center relative">
            <div className="w-[200px] h-[250px] z-10 relative mt-0 p-4 pr-0 pl-0 relative right-0 rotate-[-10deg]">
                <Image src={'/images/projectImages/LeftNote.png'} alt="image" width={170} height={250} className="absolute" />
                <p className="text-[8px] font-bold text-red-500 absolute z-20 right-8  top-16 p-4 rotate-[1deg] ">
                {user.images[6].content}
                </p>
              </div>
              <div className="w-[180px] h-[180px] z-10 relative">
                <Image src={'/images/projectImages/FrameRight.png'} alt="image" width={180} height={180} className="absolute" />
                <div className="relative h-[140px] w-[130px] overflow-hidden z-[-3] transform rotate-[14deg] ml-[21px] mt-[18px]">
                  <Image src={user.images[6].imagePath} alt="image3" layout="fill" objectFit="cover" />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center top-0 mt-[-50px]">
              <h1 className="text-lg font-bold text-[#E5AFB3] z-0 opacity-90">
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
                Gözlerin, masmavi bir deniz gibidir benim için. Her bakışında kaybolurum, derinliklerine dalıp giderim. Sana olan sevgim,
                o denizin sonsuzluğu gibidir. Seninle geçirdiğim her an, bir şiirin mısralarında saklıdır. Kalbim seninle çarpar, adını
                fısıldar durur. ...
              </h1>
            </div>
          </div>
  )
}

export default ImagesAndNotes