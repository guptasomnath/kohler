import { useEffect, useState } from "react";

export const useQuery = <T, E = Error>(url: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<E | null>(null);
    const [response, setResponse] = useState<T | null>(null);

    const getData = async () => {
        try {
            const data = await fetch(url);
            const result = await data.json();
            if (!data.ok) {
                setError(result);
                setResponse(null);
            } else {
                setResponse(result as T);
                setError(null);
            }
        } catch (error) {
            setResponse(null);
            setError(error as E);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, [])

    return { isLoading, error, response }
};
