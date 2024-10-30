
/* import { redirect } from 'next/navigation'; */
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa'; 

export default function Home() {
 

/*   const handleSubmit = (e) => {
    e.preventDefault();
 
  }; */

  return (
    <div className="flex flex-col relative items-center justify-center h-screen max-w-[450px] mx-auto" >
      <Image src={'/images/projectImages/HomepageBg.png'} alt="image" fill className="absolute z-[-1]" />
      <Image src={'/images/projectImages/HomepageTopCloud.png'} alt="image" width={500} height={300} className="absolute top-0" />
      <Image src={'/images/projectImages/HomepageBottomCloud.png'} alt="image" width={500} height={300} className="absolute bottom-0 h-[200px]" />
      <h1 className="text-3xl mt-[-150px] ">SEVGILININ</h1>
      <h1 className="text-xl mb-2">ADINI GIR</h1>
      <p className="text-[7px] mb-4">Sevgilinin adını girerek sana hazırladığımız süprizi görebilirsin</p>

      <form z className='relative'>
        <input
          type="text"
          className="border border-white bg-transparent p-2 rounded-lg mb-4 text-center placeholder:text-white  "
          placeholder="Sevginiz"
          /* value={userUrl} */
          
        />
        <button
          type="button"
          className="absolute left-2 top-5 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
        >
          <FaArrowRight className="text-white text-lg" />
        </button>
        {/* Buton kaldırıldı */}
      </form>
{/*       {error && <p className="text-red-500">{error}</p>} */}
    </div>
  );
}
