import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function MainHeader() {
  return (
      <header className="flex items-center justify-end gap-4 my-4 mr-4 md:mr-8">
          <Link className="text-lg hover:underline" href="https://mail.google.com/mail">Gmail</Link>
          <Link className="text-lg hover:underline" href="https://www.google.com/imghp?hl=ko&ogbl">Images</Link>
          <TbGridDots className="p-2 text-4xl bg-transparent border border-transparent rounded-full cursor-pointer hover:scale-105 hover:bg-gray-200" />
          <button className="px-4 py-2 font-medium text-white transition-shadow bg-blue-500 border rounded-md hover:shadow-md">Sign in</button>
    </header>
  )
}
