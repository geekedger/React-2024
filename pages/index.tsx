import MainPage from "../src/components/MainPage/MainPage";
import getServerSideProps from "../src/server/getServerSideProps";

const IndexPage = (props) => {
  return <MainPage {...props} />;
};

export { getServerSideProps };
export default IndexPage;
