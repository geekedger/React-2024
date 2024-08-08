import React from "react";
import MainPage from "../src/components/MainPage/MainPage";
import { fetchData } from "../src/server/fetchData";

const Page = async ({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) => {
  const data = await fetchData({ searchParams });

  return <MainPage {...data} />;
};

export default Page;
