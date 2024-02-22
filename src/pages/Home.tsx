import { FadeText } from "../components/FadeText";
import { HomeSlice } from "../components/HomeSlice";
import { MaskText } from "../components/MaskText";

const Home = () => {
  return (
    <>
      <HomeSlice />
      <FadeText />
      <MaskText />
    </>
  );
};

export default Home;
