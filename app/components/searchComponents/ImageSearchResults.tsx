import Link from "next/link";

export default function ImageSearchResults({ results }) {
  return (
    <div className="pb-24 mt-4">
      <div className="grid grid-cols-1 px-3 space-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.items?.map((result, index) => (
          <div className="mb-8" key={index}>
            <div className="group">
              {/* 이미지가 있는지 확인 */}
              {result.pagemap?.cse_image?.[0]?.src && (
                <Link href={result.link}>
                  <img
                    className="object-contain w-full transition-shadow duration-300 h-60 group-hover:shadow-xl"
                    src={result.pagemap.cse_image[0].src}
                    alt={result.title || "image"}
                  />
                </Link>
              )}

              {/* 제목 표시 */}
              {result.title && (
                <Link href={result.link}>
                  <h2 className="text-xl truncate group-hover:underline">
                    {result.title}
                  </h2>
                </Link>
              )}

              {/* displayLink 표시 */}
              {result.displayLink && (
                <Link href={result.link}>
                  <h2 className="text-gray-600 truncate group-hover:underline">
                    {result.displayLink}
                  </h2>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
