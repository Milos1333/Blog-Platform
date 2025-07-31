import AboutHome from "./components/AboutHome";
import BlogCategories from "./components/BlogCategories";
import LandingPage from "./components/LandingPage";
import PlatformStats from "./components/PlatformStats";
import RecentBlogPosts from "./components/RecentBlogPosts";
import "./home.style.css";

const Home = ({ isLoggedIn, blogs, loading }) => {
  return (
    <div className="home-container">
      <LandingPage isLoggedIn={isLoggedIn} />
      <PlatformStats />
      <RecentBlogPosts blogs={blogs} loading={loading} />
      <BlogCategories />
      <AboutHome />
    </div>
  );
};

export default Home;
