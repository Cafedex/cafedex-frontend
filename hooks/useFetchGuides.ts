import {useQuery, UseQueryResult} from '@tanstack/react-query';
import { fetchGuides } from '@/app/api/fetchGuides';
import { Guide } from '@/app/types/apiTypes';


export const useFetchGuides = (): UseQueryResult<Guide[], Error> => {
    return useQuery<Guide[], Error>({
        queryKey: ['guides'],
        queryFn: fetchGuides,
        staleTime: 1000 * 60 * 5,  // Data is considered fresh for 5 minutes
        refetchOnWindowFocus: false, // Prevent refetching on window focus
      });
    }