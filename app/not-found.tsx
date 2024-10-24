import Link from 'next/link'
import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function notFound() {
  return (
      <div className='flex flex-col items-center justify-center h-screen bg-black'>
          <p className='mb-8 text-4xl font-extrabold text-white'>경로를 찾지 못했습니다ㅠㅠ</p>
          <Link href="/" className='flex items-center gap-4 text-2xl font-bold text-white'>
              <FaRegArrowAltCircleRight className='text-4xl'/>
              메인으로 돌아가기</Link>
    </div>
  )
}
