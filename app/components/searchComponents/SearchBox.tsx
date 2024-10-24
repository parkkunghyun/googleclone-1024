"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMic } from "react-icons/md";


export default function SearchBox() {
    const searchParams = useSearchParams();
    const data = searchParams.get("searchTerm");

    const router = useRouter()
    const [text, setText] = useState(data || "")

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim())
            return;
        // http://localhost:3000/search/web?searchTerm={단어}
        router.push(`/search/web?searchTerm=${text}`)
    }

  return (
      <div>
           <form onSubmit={handleSearch}
                className="flex border w-full items-center  max-w-[90%] 
                border-gray-200 px-5 lg:max-w-2xl py-3 rounded-full
                hover:shadow-md
                focus-within:shadow-md
                transition-shadow
                sm:max-w-xl">
            <AiOutlineSearch className="text-2xl cursor-pointer"/>
            <input value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 ml-2 text-xl focus:outline-none" type="text" />
            <MdOutlineMic className="text-2xl cursor-pointer" />
        </form>
   </div>
  )
}
