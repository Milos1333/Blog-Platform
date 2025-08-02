import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ApiService from "../../../core/ApiService";
import "../styles/createReview.style.css";
import { useToast } from "../../../components/Toast/Toast";

const CreateReview = ({ isLoggedIn, username, userImage, onReviewCreated }) => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const { show } = useToast();

  // Handles form submission: validates input, sends review to API, and triggers a success toast
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      show("error", "Error", "Please enter a review title.");
      return;
    }

    if (title.length > 200) {
      show("error", "Error", "Review title must not exceed 100 characters.");
      return;
    }

    try {
      await ApiService.createReview({ title, username, userImage });
      show("success", "Success", "Review submitted successfully!");
      setTitle("");
      if (onReviewCreated) {
        onReviewCreated();
      }
    } catch (error) {
      console.error("Failed to submit review:", error);
      alert("Failed to submit review, please try again later.");
    }
  };

  return (
    <div className="main-wrapper-review">
      <div className="create-review">
        <h2>Write a Review</h2>
        <form className="review-form" onSubmit={handleSubmit}>
          <textarea
            placeholder="Review title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rows={3}
          />
          {isLoggedIn ? (
            <button type="submit">Submit Review</button>
          ) : (
            <button type="button" onClick={() => navigate("/login")}>
              You must log in first
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateReview;
