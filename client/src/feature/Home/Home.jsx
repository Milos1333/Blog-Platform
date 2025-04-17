import BlogCategories from "./components/BlogCategories";
import LandingPage from "./components/LandingPage";
import PlatformStats from "./components/PlatformStats";
import RecentBlogPosts from "./components/RecentBlogPosts";
import "./home.style.css";

const Home = () => {
  return (
    <div className="home-container">
      <LandingPage />
      <PlatformStats />
      <RecentBlogPosts />
      <BlogCategories />
    </div>
  );
};

export default Home;
