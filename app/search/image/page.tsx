"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ImageSearchResults from "@/app/components/searchComponents/ImageSearchResults";



// 클라이언트 컴포넌트
export default function ImageSearchPage() {
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");

    // 상태 관리 설정
    const [results, setResults] = useState(null);
    const [error, setError] = useState<string | null>(null); 
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({})

    // 데이터 가져오기
    useEffect(() => {
        async function fetchSearchResults() {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchTerm}`
                );
    
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
    
                const data = await response.json();
                console.log(data);
                setData(data);
                setResults(data.items);
            } catch (err) { // err를 여기서 선언해야 합니다.
                if (err instanceof Error) {
                    setError(err.message); // 안전하게 err.message를 사용합니다.
                } else {
                    setError("error occurred"); // 다른 타입의 에러 처리
                }
            } finally {
                setLoading(false);
            }
        }
    
        if (searchTerm) {
            fetchSearchResults();
        }
    }, [searchTerm]);
    

    // 로딩 상태 처리
    if (loading) {
        return <div>Loading...</div>;
    }

    // 에러 상태 처리
    if (error) {
        return <div>Error: {error}</div>;
    }

    // 검색 결과가 없을 경우의 처리
    if (!results || results.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center pt-10">
                <h1 className="mb-4 text-3xl">
                    No results found for {searchTerm}
                </h1>
                <p className="text-lg">
                    Try searching the web or images for something else.
                    <Link href="/" className="text-blue-500">Home</Link>
                </p>
            </div>
        );
    }

    // 검색 결과가 있을 경우
    return <div>{results && <ImageSearchResults results={data} />}</div>;
}
