import CountryLookUp from "./CountryLookUp";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
            <div className="px-8 py-3 border-b">
                {/* 나라를 의미 */}
                <CountryLookUp/>
            </div>

            <div className="flex flex-col items-center justify-between px-8 py-3 sm:flex-row space-y-7 sm:space-y-0">
                <ul className="flex items-center space-x-6">
                    <li className="cursor-pointer hover:underline">About</li>
                    <li className="cursor-pointer hover:underline">Advertising</li>
                    <li className="cursor-pointer hover:underline">Business</li>
                    <li className="cursor-pointer hover:underline">How Search works</li>
                </ul>

                <ul className="flex items-center space-x-6">
                    <li className="cursor-pointer hover:underline">Privacy</li>
                    <li className="cursor-pointer hover:underline">Terms</li>
                    <li className="cursor-pointer hover:underline">Settings</li>
                </ul>
            </div>
        </footer>
    );
}
