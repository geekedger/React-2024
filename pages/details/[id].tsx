// pages/details/[id].tsx

import React from "react";
import DetailedCard from "../../src/components/DetailedCard/DetailedCard";
import { useRouter } from "next/router";
import Home from "../index";

const DetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Home>{id && <DetailedCard id={id as string} />}</Home>;
};

export default DetailPage;
