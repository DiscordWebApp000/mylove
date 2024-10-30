"use client"
import { useState } from "react"
export default function UserAdd(){
  const [email, setEmail] = useState('');
  const [loadinguser, setLoadinguser] = useState(false);
 async function Createuser(){
    setLoadinguser(true)
    try {
      const response = await fetch('http://188.132.197.240:8080/api/v1/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
      });

      const data = await response.json();
      console.log('User added:', data);
      
    } catch (error) {
      console.error('Error adding user:', error);
    }
    setLoadinguser(false)
    
  };
return (
  <div className="mb-4">
  <h1 className="text-3xl mb-6 text-center text-white">Hesap Oluştur</h1>
    <form onClick={Createuser} className='flex flex-col justify-center items-center gap-5'>
    <label className="block text-white font-semibold">Email:</label>
    <input
      type="email"
      value={email}
      placeholder="example@gmail.com"
      onChange={(e) => setEmail(e.target.value)}
      className="mt-1 block text-black w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    <button type='submit' disabled={loadinguser} className='disabled:opacity-50 bg-blue-500 rounded-2xl px-4 py-2 text-white w-max'>Ekle</button>
    </form>

  </div>
  



)
}
