'use client';
import { useState } from 'react';

const AdminPanel = () => {
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [images, setImages] = useState(Array(9).fill({ imagePath: '', content: '' })); // 9 resim için başlangıç durumu
  const [videos, setVideos] = useState(Array(2).fill({ videoPath: '', content: '' })); // 2 video için başlangıç durumu
  const [musics, setMusics] = useState(Array(2).fill({ title: '', artist: '', musicPath: '', imagePath: '' })); // 2 müzik için başlangıç durumu

  const handleImageChange = (index, key, value) => {
    const newImages = images.map((image, i) => 
      i === index ? { ...image, [key]: value } : image
    );
    setImages(newImages);
  };

  const handleVideoChange = (index, key, value) => {
    const newVideos = videos.map((video, i) => 
      i === index ? { ...video, [key]: value } : video
    );
    setVideos(newVideos);
  };

  const handleMusicChange = (index, key, value) => {
    const newMusics = musics.map((music, i) => 
      i === index ? { ...music, [key]: value } : music
    );
    setMusics(newMusics);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      email,
      urls: [
        {
          id: Math.ceil(Math.random() * 1000), // Örnek ID, gerektiği gibi ayarlayabilirsiniz
          url,
          images: images.map(({ imagePath, content }) => ({ imagePath, content })),
          videos: videos.map(({ videoPath, content }) => ({ videoPath, content })),
          musics: musics.map(({ title, artist, musicPath, imagePath }) => ({ title, artist, musicPath, imagePath })),
        },
      ],
    };
    
    console.log('New user:', newUser);

    try {
      const response = await fetch('http://188.132.197.240:8080/api/v1/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();
      console.log('User added:', data);
      // Başarılı ekleme durumunda gerekli işlemleri yapabilirsiniz.
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full md:w-1/2 text-black">
        <h1 className="text-3xl mb-6 text-center text-gray-800">Add New User</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <h2 className="text-xl mb-4 text-gray-800">Images (9 total):</h2>
        {images.map((image, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 font-semibold">Image {index + 1}:</label>
            <input
              type="text"
              value={image.imagePath}
              onChange={(e) => handleImageChange(index, 'imagePath', e.target.value)}
              placeholder="Image Path"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={image.content}
              onChange={(e) => handleImageChange(index, 'content', e.target.value)}
              placeholder="Content"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <h2 className="text-xl mb-4 text-gray-800">Videos (2 total):</h2>
        {videos.map((video, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 font-semibold">Video {index + 1}:</label>
            <input
              type="text"
              value={video.videoPath}
              onChange={(e) => handleVideoChange(index, 'videoPath', e.target.value)}
              placeholder="Video Path"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={video.content}
              onChange={(e) => handleVideoChange(index, 'content', e.target.value)}
              placeholder="Content"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <h2 className="text-xl mb-4 text-gray-800">Music (2 total):</h2>
        {musics.map((music, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 font-semibold">Music {index + 1}:</label>
            <input
              type="text"
              value={music.title}
              onChange={(e) => handleMusicChange(index, 'title', e.target.value)}
              placeholder="Music Title"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={music.artist}
              onChange={(e) => handleMusicChange(index, 'artist', e.target.value)}
              placeholder="Artist"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={music.musicPath}
              onChange={(e) => handleMusicChange(index, 'musicPath', e.target.value)}
              placeholder="Music Path"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={music.imagePath}
              onChange={(e) => handleMusicChange(index, 'imagePath', e.target.value)}
              placeholder="Image Path (optional)"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
