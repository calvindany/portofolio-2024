import { metadata } from "../layout";

const Home = ({ children }) => {
  metadata.title = "Project Detail";
  return <>{children}</>;
};

export default Home;
