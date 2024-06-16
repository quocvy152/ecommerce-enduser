import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import "./Home.css";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import SocialMedia from "@/components/SocialMedia/SocialMedia";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <div>
      <Header />

      <ExploreMenu category={category} setCategory={setCategory} />

      <ProductDisplay category={category} />      

      <SocialMedia />
      
      <DownloadApp />
    </div>
  );
};

export default Home;
