import React from "react";

export default function CircleWhite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      {/* Círculo blanco */}
      <circle cx="20" cy="20" r="19" stroke="#2C7EF8" strokeWidth="2" />

      {/* Número "4" azul */}
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="20" fill="#2C7EF8">
        4
      </text>
    </svg>
  );
}
