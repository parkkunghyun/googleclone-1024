import Link from 'next/link';
import Parser from 'html-react-parser';
//import PaginationButtons from './PaginationButtons';

// search information 타입 정의
interface SearchInformation {
  formattedTotalResults: string;
  formattedSearchTime: string;
}

// 개별 검색 결과의 타입 정의
interface ResultItem {
  displayLink: string;
  link: string;
    title: string;
    formattedUrl: string;
    htmlSnippet: string;
    image: {
        contextLink: string;
    };
}

// 전체 결과의 타입 정의
interface WebSearchResultsProps {
  results: {
    searchInformation?: SearchInformation;
    items?: ResultItem[];
  };
}


export default function WebSearchResults({ results }: WebSearchResultsProps) {
  return (
    <div className='w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='mt-3 mb-5 text-sm text-gray-600'>
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div className='max-w-xl mb-8' key={result.link}>
          <div className='flex flex-col group'>
            <Link href={result.link}>{result.formattedUrl}</Link>
            <Link
              href={result.link}
              className='text-xl font-medium text-blue-800 truncate group-hover:underline decoration-blue-800'
            >
              {result.title}
            </Link>
          </div>
          <p className='text-gray-600'>{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      {/* <PaginationButtons /> */}
    </div>
  );
}