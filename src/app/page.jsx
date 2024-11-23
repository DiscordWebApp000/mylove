'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import data from '../../public/data.json'; // JSON verisini içeri aktar
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa'; // React Icons kullanarak sağ ok simgesi ekliyoruz


export default function Home() {
  const [userUrl, setUserUrl] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // JSON verisinde URL kontrolü yap
    const user = data.find((user) => user.url === userUrl);

    if (!user) {
      setError('Bu URL bulunamadı!');
    } else {
      setError('');
      // Eğer kullanıcı varsa, kullanıcıyı URL sayfasına yönlendir
      router.push(`/${userUrl}`);
    }
  };

  return (
    <div className="flex flex-col relative items-center justify-center h-screen max-w-[450px] mx-auto" >
      <Image src={'/images/projectImages/HomepageBg.png'} alt="image" fill className="absolute z-[-1]" />
      <Image src={'/images/projectImages/HomepageTopCloud.png'} alt="image" width={500} height={300} className="absolute top-0" />
      <Image src={'/images/projectImages/HomepageBottomCloud.png'} alt="image" width={500} height={300} className="absolute bottom-0 h-[200px]" />
      <h1 className="text-3xl mt-[-150px] ">SEVGILININ</h1>
      <h1 className="text-xl mb-2">ADINI GIR</h1>
      <p className="text-[7px] mb-4">Sevgilinin adını girerek sana hazırladığımız süprizi görebilirsin</p>

      <form onSubmit={handleSubmit} className='relative'>
        <input
          type="text"
          className="border border-white bg-transparent p-2 rounded-lg mb-4 text-center placeholder:text-white  "
          placeholder="Sevginiz"
          value={userUrl}
          onChange={(e) => setUserUrl(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
        />
        <button
          type="button"
          onClick={handleSubmit} // Ok simgesine tıklandığında formu gönder
          className="absolute left-2 top-5 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
        >
          <FaArrowRight className="text-white text-lg" />
        </button>
        {/* Buton kaldırıldı */}
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
