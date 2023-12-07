import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

const useProducts = () => {
  const { data, error, isLoading, mutate } = useSWR(
    '/api/products/get-all',
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      refreshInterval: 0,
    },
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useProducts;
