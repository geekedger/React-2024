import React from "react";
import MainPage, { MainPageProps } from "../src/components/MainPage/MainPage";
import getServerSideProps from "../src/server/getServerSideProps";

const IndexPage: React.FC<MainPageProps> = (props) => {
  return <MainPage {...props} />;
};

export { getServerSideProps };
export default IndexPage;
