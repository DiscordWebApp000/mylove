'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { useRouter,usePathname } from 'next/navigation';
import User from '@/components/User';

export default function UserPage() {
    const url = usePathname().slice(1)
  const [password, setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if(localStorage.getItem('user')){
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  const fetcher = async (e) => {

try {
  const response = await fetch(e, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, password })
  });
  const data = await response.json();
  console.log(data);
  if(data.error==null){
    setUser(data.data);
    localStorage.setItem('user', JSON.stringify(data.data));
    setError(null);
    return user;
  }

  if(data.error.errorCode==401){
    setError('Hatalı Sifre');
    return;
  }
  if(data.error.errorCode==404){
    console.log(url)
    setError('URL Bulunamadı');
    return;
  }
} catch (error) {
  
  setError('Kullanıcı Bulunamadı');
}
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await fetcher(`http://188.132.197.240:8080/api/v1/urls/compare`);
    setLoading(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


   if(user && JSON.parse(localStorage.getItem('user')).url===url ){
    return <User user={user} />
  } 
  return (
    <div className="relative max-w-[450px] mx-auto flex flex-col items-center justify-center h-screen bg-cover bg-[url('/images/projectImages/PasswordBg.png')]">
      <div className="relative w-full h-[250px] flex items-center justify-center">
        <Image src="/images/projectImages/ChainHeart.png" alt="Background" width={300} height={300} />
        <form className="flex flex-col absolute" onSubmit={handleSubmit}>
            {process.env.API_URL}
          <input
            type="password"
            className="z-10 p-2 rounded-lg mb-5 w-[100px] h-[35px] bg-white shadow-lg shadow-gray-400 text-center text-xl text-red-500 placeholder:text-red-300"
            placeholder="••••"
            value={password}
            onChange={handlePasswordChange}
          />
          <button disabled={loading}
            className="disabled:opacity-50  z-10 font-extrabold rounded-lg align-middle w-[100px] h-[35px] bg-white shadow-lg shadow-gray-400 text-center text-xl text-red-500"
            type="submit"
          >
            Gir
          </button>
        </form>
      </div>

      <div className="flex flex-col w-full top-8 relative h-[100px]">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-xl text-red-500 font-extrabold pb-2">LÜTFEN ŞİFRENİ GİR</h1>
          <h2 className="text-sm text-red-500 font-extrabold">GÜZELLİKLER SENİ BEKLİYOR</h2>
        </div>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </div>

      <div className="w-full h-[200px] absolute bottom-0">
        <Image src="/images/projectImages/PasswordCloud.png" alt="Background" fill />
      </div>
    </div>
  );
}


