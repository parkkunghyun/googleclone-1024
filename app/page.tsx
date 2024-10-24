import Image from "next/image";
import MainHeader from "./components/MainHeader";
import Link from "next/link";
import MainSearch from "./components/MainSearch";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <MainHeader/>
      <div className="flex flex-col items-center justify-center w-full mt-24">
        <Link className="" href="/">
          <Image priority={true} style={{width: "auto"}} alt="google logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" width={300} height={120} />
        </Link>
        <MainSearch />
      </div>
    </div>
  );
}
