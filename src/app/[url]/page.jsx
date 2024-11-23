'use client';
import { useState, useEffect } from 'react';
import { MusicPlayer , HangingImages, ImagesAndNotes, VideoText, OnlyVideo, ImagesAndText, WavesAnimation} from '@/components';
import Image from 'next/image';
import data from '../../../public/data.json';
import { FaArrowUp } from 'react-icons/fa';

export default function UserPage({ params }) {
  const { url } = params;
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false); // Ok butonu için state
  const [rotation, setRotation] = useState(0); // Okun döndüğünü göstermek için

  const user = data.find((user) => user.url === url);

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    if (inputPassword.length === user.password.length) {
      if (user.password === inputPassword) {
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Şifre yanlış!');
      }
    } else {
      setIsAuthenticated(false);
    }
  };

  const handleScrollUp = () => {
    setRotation(180); // Ok işaretini 180 derece döndür
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsScrolledUp(true); // En yukarıdaysa true
      setRotation(0); // Başlangıç konumuna geri dön
    } else {
      setIsScrolledUp(false); // Scroll aşağıdaysa false
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!user) {
    return <p className="text-center mt-10">Kullanıcı bulunamadı!</p>;
  }

  if (isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen max-w-[450px] mx-auto">
        <div className="w-full h-full">
          {/* İlk görsel */}
          <div className="w-full h-[450px] relative flex justify-center items-center">
            <Image src="/images/projectImages/ContentFirst.png" alt="image" fill className="absolute inset-0 z-10" />
            <Image src={user.images[0].imagePath} alt="image" width={350} height={350} />
          </div>

          {/* İkinci görsel seti */}
          <HangingImages user={user} />

          {/* Animasyon 1 */}
          <div className="relative w-full h-[100px] mt-[-111px] mb-[-60px] z-20">
            <Image src="/images/projectImages/animation1.png" alt="animation1" width={650} height={350} className="overflow-hidden" />
          </div>

          {/* Üçüncü bölüm */}
          <ImagesAndNotes user={user} />

          {/* Animasyon 2 */}
          <div className="relative w-full h-[110px] mt-[-111px] mb-[-60px] z-20">
            <Image src="/images/projectImages/animation2.png" alt="animation2" width={650} height={350} className="overflow-hidden" />
          </div>

          {/* Dördüncü bölüm */}
          <VideoText user={user} />

          {/* Beşinci bölüm */}
          <OnlyVideo user={user} />

          {/* Animasyon 3 */}
          <div className="relative w-full h-[110px] mt-[-111px] mb-[-78px] z-20">
            <Image src="/images/projectImages/animation3.png" alt="animation3" width={650} height={350} className="overflow-hidden" />
          </div>

          {/* Yedinci bölüm */}
          <ImagesAndText user={user} />

          {/* Scroll-up button */}
          <div className="relative w-full h-[100px] z-10 mt-[-50px] mb-[-50px]">
            <div className="absolute left-0 top-10 w-full h-[10px] bg-black"></div>
            <button
              className="absolute flex justify-center items-center top-5 right-[44%] z-20 w-[50px] h-[50px] rounded-full bg-black transition-transform duration-500 text-xl active:text-2xl active:bg-[#EEEEE9] text-white  active:text-black "
              
              onClick={handleScrollUp}
            >
              <FaArrowUp   />
            </button>
          </div>

          {/* Sekizinci bölüm */}
          <div className="w-full h-[500px] flex items-center justify-center bg-white">
            <MusicPlayer audioTracks={user.musics} />
          </div>

          <div className="w-full h-[100px] flex items-center justify-center bg-white mt-[-1px]">
            <WavesAnimation />
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-[450px] mx-auto flex flex-col items-center justify-center h-screen bg-cover relative bg-[url('/images/projectImages/PasswordBg.png')]">
      <div className=" relative  w-full h-[250px] flex items-center justify-center">
        <Image src="/images/projectImages/ChainHeart.png" alt="Background" width={300} height={300} />
        <input
          type="password"
          className="  absolute  z-10 p-2 rounded-lg mb-10 w-[100px] h-[35px] bg-white shadow-lg shadow-gray-400 text-center text-xl text-red-500 placeholder:text-red-300"
          placeholder="••••"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="flex flex-col w-full top-8 relative h-[100px]">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-xl text-red-500 font-extrabold pb-2">LÜTFEN ŞİFRENİ GİR</h1>
          <h2 className="text-sm text-red-500 font-extrabold">GÜZELLİKLER SENİ BEKLİYOR</h2>
        </div>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </div>
      <div className="w-full h-[200px] absolute bottom-0 ">
        <Image src="/images/projectImages/PasswordCloud.png" alt="Background" fill />
      </div>
    </div>
  );
}
