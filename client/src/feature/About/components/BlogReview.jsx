import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/blogReview.style.css";

// Recenzije za prikazivanje u Carousel-u
const reviews = [
  {
    name: "John Doe",
    review: "This is an amazing product! I highly recommend it.",
  },
  {
    name: "Jane Smith",
    review: "Great quality, really loved it!",
  },
  {
    name: "Emily Johnson",
    review: "It didn't work as expected. Quite disappointed.",
  },
  {
    name: "Sarah Lee",
    review: "Superb! A game-changer for me.",
  },
];

const BlogReview = () => {
  // Slick Carousel opcije
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Blog Reviews
      </Typography>

      {/* Carousel sa recenzijama */}
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <Card key={index} sx={{ margin: 2 }}>
            <CardContent>
              <Typography variant="h6" align="center" gutterBottom>
                {review.name}
              </Typography>
              <Typography variant="body1" align="center">
                {review.review}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default BlogReview;
