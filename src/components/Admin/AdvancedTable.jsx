
"use client";
import React, { useState, useEffect } from 'react';
import Button from '../Button';

const AdvancedTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [searchInput, setSearchInput] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch(`http://188.132.197.240:8080/api/v1/users`);
      const result = await response.json();

   
      setData(result.data); 
    } catch (error) {
      console.error("Sunucuda Sorun Oluştu:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
  

    fetchData();
  }, []);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }
  if(data){
    console.log(data)
  }

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Url
              </th>
              <th scope="col" className="px-6 py-3">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.email}
                </th>
                <td className="px-6 py-4">
                  {user.urls.map((u,i)=>(
                    <span key={i}>{u.url}</span>
                  ))}
                </td>
                <td className="px-6 py-4 space-x-3">
                  <Button className="bg-blue-600">Düzenle</Button>
                  <Button className="bg-red-700">Sil</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdvancedTable;
