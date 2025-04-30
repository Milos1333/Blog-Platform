import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/blogReview.style.css";
import ImageCreator from "../../../assets/AboutPageImages/creatorOfBlog.jpg";

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
  {
    name: "Isabella Hayes",
    review: `"This blog has become part of my morning routine. The content is refreshing, motivational, and beautifully presented. Highly recommended."`,
    image: ImageCreator,
  },
  {
    name: "James Parker",
    review: `"I appreciate the mix of tutorials, personal stories, and project showcases. It’s clear the author is passionate about what he does."`,
    image: ImageCreator,
  },
];

const BlogReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px", // <<< ovo je ključno
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Box className="blog-review-container">
      <div className="review-title">
        <hr />
        <h2>Blog Reviews</h2>
        <hr />
      </div>

      <Slider {...settings} className="blog-review-slider">
        {reviews.slice(-6).map((review, index) => (
          <Card key={index} className="blog-review-card">
            <CardContent className="blog-review-card-content">
              <img
                src={review.image}
                alt={review.name}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              />
              <Typography className="blog-review-name">
                {review.name}
              </Typography>
              <p className="blog-review-text">{review.review}</p>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default BlogReview;
