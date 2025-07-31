import { useState } from "react";
import { Carousel } from "primereact/carousel";
import { Card } from "primereact/card";
import DeleteModal from "../../../components/deleteModal/deleteModal";
import "../styles/blogReview.style.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import deleteReviewIcon from "../../../assets/BlogPageImages/recycle-bin.png";
import { useToast } from "../../../components/Toast/Toast";

const BlogReview = ({ reviews, loading, onDeleteReview, username }) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const { show } = useToast();

  const openDeleteModal = (id) => {
    setSelectedReviewId(id);
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    if (selectedReviewId !== null) {
      onDeleteReview(selectedReviewId);
      setSelectedReviewId(null);
      setDeleteModalVisible(false);
      show("success", "Success", "Review deleted successfully.");
    }
  };

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "650px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  const reviewTemplate = (review) => {
    return (
      <div className="p-2" key={review.id} style={{ position: "relative" }}>
        <Card
          className="text-center blog-review-card"
          style={{ padding: "24px", position: "relative" }}
        >
          <img
            src={review.userImage || "default-profile.png"}
            alt={review.username || "User"}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              marginBottom: "16px",
            }}
          />

          <h3
            className="blog-review-name"
            style={{ marginBottom: "8px", fontSize: "18px" }}
          >
            {review.username || "Anonymous"}
          </h3>
          <p
            className="blog-review-text"
            style={{
              fontStyle: "italic",
              fontSize: "14px",
              lineHeight: "22px",
              color: "#555555",
              textAlign: "center",
            }}
          >
            {review.title}
          </p>
          {review.username === username && (
            <img
              className="delete-icon-review"
              src={deleteReviewIcon}
              alt="Delete review"
              onClick={() => openDeleteModal(review.id)}
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "10px",
                right: "10px",
              }}
            />
          )}
        </Card>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="loading-reviews">
        <p>Loading reviews...</p>
      </div>
    );
  }

  if (!reviews.length) {
    return (
      <div className="loading-reviews">
        <p>No reviews yet.</p>
      </div>
    );
  }

  return (
    <div className="blog-review-container">
      <div className="review-title">
        <hr />
        <h2 style={{ fontSize: "32px", marginTop: "0px" }}>Blog Reviews</h2>
        <hr />
      </div>

      <Carousel
        value={sortedReviews.slice(0, 9)}
        itemTemplate={reviewTemplate}
        numVisible={3}
        numScroll={1}
        autoplayInterval={3000}
        circular
        responsiveOptions={responsiveOptions}
        showIndicators
      />

      <DeleteModal
        visible={deleteModalVisible}
        setVisible={setDeleteModalVisible}
        onConfirm={confirmDelete}
        title="Confirm Delete"
        message="Are you sure you want to delete this review?"
      />
    </div>
  );
};

export default BlogReview;
