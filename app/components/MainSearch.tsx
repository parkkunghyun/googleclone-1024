"use client"


import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMic } from "react-icons/md";

export default function MainSearch() {
    const router = useRouter()
    const [text, setText] = useState("")
    const [randomSearchLoading, setRandomSearchLoading] = useState(false)

    // search페이지로 전달하기
    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        // http://localhost:3000/search/web?searchTerm={단어}
        router.push(`/search/web?searchTerm=${text}`)
    }

    const randomSearch = async () => {
        setRandomSearchLoading(true)
        const response = await fetch('https://random-words-api.vercel.app/word/dutch')
        const data = await response.json()
        router.push(`/search/web?searchTerm=${data[0].word}`)
        setRandomSearchLoading(false)
    }

  return (
      <div className="w-full">
          <form onSubmit={handleSearch}
               className="flex border w-full items-center mt-5 mx-auto max-w-[90%] 
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

          <div className="flex justify-center gap-4 mt-4">
              <button onClick={handleSearch}
                  className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 focus-within:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow hover:ring-gray-200">
                  Google Search
              </button>

              <button onClick={randomSearch}
                    className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 focus-within:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow hover:ring-gray-200">
                  {randomSearchLoading ? "Loading..." : "I am Lucky"}
              </button>
          </div>
    </div>
  )
}
