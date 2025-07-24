import { useState, useEffect } from "react";
import "./about.style.css";
import AboutBlog from "./components/AboutBlog";
import BlogReview from "./components/BlogReview";
import CreateReview from "./components/CreateReview";
import Creator from "./components/Creator";
import HeroAboutPage from "./components/HeroAboutPage";
import LocationMap from "./components/LocationMap";
import MotivationalMessage from "./components/MotivationalMessage";
import ApiService from "../../core/ApiService";

const About = ({ isLoggedIn, username, userImage }) => {
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

  const fetchReviews = async () => {
    try {
      setLoadingReviews(true);
      const data = await ApiService.getReviews();
      setReviews(data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    } finally {
      setLoadingReviews(false);
    }
  };

  const handleDeleteReview = async (id) => {
    try {
      await ApiService.deleteReview(id);
      await fetchReviews();
    } catch (error) {
      console.error("Failed to delete review:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      <HeroAboutPage />
      <Creator />
      <MotivationalMessage />
      <AboutBlog />
      <BlogReview
        reviews={reviews}
        loading={loadingReviews}
        onDeleteReview={handleDeleteReview}
        username={username}
      />
      <CreateReview
        isLoggedIn={isLoggedIn}
        username={username}
        userImage={userImage}
        onReviewCreated={fetchReviews}
      />

      <LocationMap />
    </div>
  );
};

export default About;
