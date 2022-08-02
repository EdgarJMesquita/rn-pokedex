import useSWRInfinite from "swr/infinite";
import { useState } from "react";
import { fetcher } from "../services/api";

type Param =
  | {
      name: string;
      value: string;
    }
  | undefined;

type Options = {
  params?: Param[];
  refreshInterval?: number;
};

export function useInfiniteScroll<T = any>(path: string, options?: Options) {
  const [hasPaginationEnded, setPaginationEnded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isRefreshing, setRefreshing] = useState(false);

  function parseParam(param: Param) {
    if (!param) return "";
    return `&${param.name}=${param.value}`;
  }

  const getKey: GetKey<ListPagination<T>> = (pageIndex, previousPage) => {
    if (previousPage && !previousPage.results.length) {
      //setPaginationEnded(!previousPage.results.length);
      return null;
    }
    /* if (previousPage) {
      const { to, total, per_page } = previousPage.models;
      // console.log(Math.ceil(total / per_page));
      // console.log(to + 15 >= total);
      setPaginationEnded(to + 15 >= total);
      // setPaginationEnded(to + (total - per_page) >= total);
    } */
    const params = options?.params?.map(parseParam).join("") || "";
    const limit = 15;
    const offset = pageIndex * 15;
    return `${path}?offset=${offset}&limit=${limit}${params}`;
  };
  const { data, setSize, mutate, error, isValidating, size } = useSWRInfinite<
    ListPagination<T>
  >(getKey, fetcher, {
    refreshInterval: options?.refreshInterval,
  });

  async function nextPage() {
    if (isLoading || hasPaginationEnded || isValidating) return;
    setLoading(true);
    await setSize(size + 1);
    setLoading(false);
  }

  async function onRefresh() {
    setRefreshing(true);
    await mutate();
    setRefreshing(false);
  }

  function resetPagination() {
    setPaginationEnded(false);
    setSize(1);
  }

  return {
    data: data?.flatMap((item) => item.results),
    error,
    nextPage,
    hasPaginationEnded,
    onRefresh,
    isRefreshing,
    size,
    resetPagination,
    isLoading,
  };
}
