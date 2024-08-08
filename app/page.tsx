import React from "react";
import MainPage from "../src/components/MainPage/MainPage";
import { fetchData } from "../src/server/fetchData";

const Page = async ({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) => {
  // Вызов fetchData для получения данных
  const data = await fetchData({ searchParams });

  // Возврат компонента с полученными данными
  return <MainPage {...data} />;
};

export default Page;
