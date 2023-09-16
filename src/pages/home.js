import DownloadAndPressRelease from "@/components/HomePage/DwonloadAndPressRelease";
// import Header from "@/components/HomePage/Header/Header";
import LatestNews from "@/components/HomePage/LatestNews";
import NewsAndMedia from "@/components/HomePage/NewsAndMedia";
import SecondTopHeader from "@/components/HomePage/SecondTopHeader";
import Services from "@/components/HomePage/Services";
import Teacher from "@/components/HomePage/Teacher";


const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <LatestNews />
      {/* <TopBanner /> */}
      <Services />
      <SecondTopHeader />
      {/* <Notice /> */}
      <DownloadAndPressRelease />
      <Teacher />
      <NewsAndMedia />
    </div>
  );
};

export default HomePage;
