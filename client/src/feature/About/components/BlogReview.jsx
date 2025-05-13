import React from "react";
import { Carousel } from "primereact/carousel";
import { Card } from "primereact/card";
import ImageCreator from "../../../assets/AboutPageImages/creatorOfBlog.jpg";
import "../styles/blogReview.style.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const reviews = [
  {
    name: "Amanda Blake",
    review: `"I stumbled upon this blog while looking for design inspiration—and I’m so glad I did. Every post feels like a creative spark. Keep it up!"`,
    image: ImageCreator,
  },
  {
    name: "Thomas Reed",
    review: `"Clean layout, engaging topics, and genuinely useful content. I’ve bookmarked the site and visit it regularly for new updates."`,
    image: ImageCreator,
  },
  {
    name: "Sophia Bennett",
    review: `"What I love about this blog is the personality behind it. It feels authentic, not like mass-produced content. The visual design is stunning too!"`,
    image: ImageCreator,
  },
  {
    name: "Liam Carter",
    review: `"As someone who works in digital marketing, this blog is a hidden gem. It offers fresh perspectives with just the right tone and visuals."`,
    image: ImageCreator,
  },
  {
    name: "Chloe Patterson",
    review: `"Every time I read a new article, I end up learning something useful. The writing is clear and concise, and the design tips are spot-on."`,
    image: ImageCreator,
  },
  {
    name: "Ethan Mitchell",
    review: `"Great balance of aesthetics and substance. I especially enjoy the posts where the author shares his personal journey and creative process."`,
    image: ImageCreator,
  },
];

const BlogReview = () => {
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

  const reviewTemplate = (review) => {
    return (
      <div className="p-2">
        <Card
          className="text-center blog-review-card"
          style={{ padding: "24px" }}
        >
          <img
            src={review.image}
            alt={review.name}
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
            {review.name}
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
            {review.review}
          </p>
        </Card>
      </div>
    );
  };

  return (
    <div className="blog-review-container">
      <div className="review-title">
        <hr />
        <h2 style={{ fontSize: "32px", marginTop: "0px" }}>Blog Reviews</h2>
        <hr />
      </div>

      <Carousel
        value={reviews}
        itemTemplate={reviewTemplate}
        numVisible={3}
        numScroll={1}
        autoplayInterval={3000}
        circular
        responsiveOptions={responsiveOptions}
        showIndicators
      />
    </div>
  );
};

export default BlogReview;
