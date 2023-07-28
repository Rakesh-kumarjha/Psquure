import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import styled from "styled-components";

const StarContainer = styled.div`
  display: flex;
`;

const Rating = ({ value }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value - fullStars >= 0.5;

  return (
    <StarContainer>
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={`full-star-${index}`} />
      ))}
      {hasHalfStar && <FaStarHalfAlt />}
    </StarContainer>
  );
};

export default Rating;
