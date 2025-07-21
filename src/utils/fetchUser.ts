import useSWR from "swr";

export const useFetchUser = () => {
  const fetcher = (url: string) =>
    fetch(url, {
      credentials: "include",
    }).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/user/me`,
    fetcher,
    {
      revalidateOnFocus: true,
      refreshInterval: 5 * 60 *1000,
    }
  );

  if (error) {
    return { data: null, isLoading: false };
  }

  return { data, isLoading };
};
