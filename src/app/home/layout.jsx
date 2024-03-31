import { metadata } from "../layout";

const Home = ({ children }) => {
  metadata.title = "Home Landing";
  return <>{children}</>;
};

export default Home;
