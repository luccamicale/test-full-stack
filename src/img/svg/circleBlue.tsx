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

export default function CircleBlue() {
  return (
    <StyledCircle xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
      {/* Círculo azul */}
      <circle cx="20.3333" cy="20" r="19" fill="#2C7EF8" stroke="#2C7EF8" strokeWidth="2" />

      {/* Número "3" blanco */}
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="20" fill="white">
        3
      </text>
    </StyledCircle>
  );
}
