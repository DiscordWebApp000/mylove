'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter,usePathname } from 'next/navigation'


function AdminHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  const router = useRouter()
  const activeLink = (url)=>{
    return url==pathname ? 'font-bold text-blue-500':"text-white"
  }
/*   const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  }
 */
  return (
    <header>
      <nav className="bg-white  border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href={'/admin'} className='flex items-center space-x-3 rtl:space-x-reverse'>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> AdminPanel</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link className={`block py-2 px-3   rounded md:bg-transparent   md:p-0 ${activeLink('/admin')} `} href={'/admin'}>
                Gösterge Paneli
                </Link>
               
              </li>
              <li>
                <Link className={`${activeLink('/admin/users')} block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} href={'/admin/users'}>
                Kullanıcılar
                </Link>
              </li>
              <li>
              <Link className={`${activeLink('/admin/videos')} block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} href={'/admin/videos'}>
                Videolar
                </Link>
              </li>
           
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AdminHeader;
