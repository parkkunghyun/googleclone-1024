import Image from 'next/image'
import Link from 'next/link'
import SearchBox from './SearchBox'
import { TbGridDots } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";

export default function SearchHeader() {
  return (
    <div className='flex items-center justify-between gap-2 mx-2 mt-6'>
      <Link className="" href="/">
          <Image priority={true} style={{width: "auto"}} alt="google logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" width={100} height={40} />
      </Link>

      <div className='flex-1'>
        <SearchBox/>
      </div>

      <div className='flex items-center gap-2 mr-2 md:mr-4'>
        <CiSettings className='p-1 text-4xl bg-transparent border border-transparent rounded-full cursor-pointer hover:scale-105 hover:bg-gray-200'/>
        <TbGridDots className="p-2 text-4xl bg-transparent border border-transparent rounded-full cursor-pointer hover:scale-105 hover:bg-gray-200" />
        <button className="px-4 py-2 text-white transition-shadow bg-blue-500 border rounded-md font-sm hover:shadow-md">Sign in</button>
      </div>
    </div>
  )
}
