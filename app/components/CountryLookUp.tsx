"use client";

import { useEffect, useState } from "react";

export default function CountryLookUp() {
    const [country, setCountry] = useState('South Korea');
    
    useEffect(() => {
        const getCountry = async () => {
            try {
                const response = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`);
                
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                
                const data = await response.json();
                //console.log("data => ",data);  // 응답 데이터를 로그로 출력
                setCountry(data.country);
            } catch (error) {
                console.error('Failed to fetch country data:', error);  // 에러를 출력
            }
        };
        
        getCountry();
    }, []);
    
    return (
        <div className="text-md">
            {country ? country : 'Loading...'}
        </div>
    );
}
