import React from "react";
import styled from "styled-components";

const StyledCircle = styled.svg`
  width: 40px;
  height: 40px;

  @media only screen and (max-width: 740px) {
    width: 20px;
    height: 20px;
    margin-left: 30%;
  }
`;

export default function CircleWhite() {
  return (
    <StyledCircle xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
      {/* Círculo blanco */}
      <circle cx="20" cy="20" r="19" stroke="#2C7EF8" strokeWidth="2" />

      {/* Número "4" azul */}
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="20" fill="#2C7EF8">
        4
      </text>
    </StyledCircle>
  );
}
