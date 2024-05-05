"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => console.log("clicked")}
      >
        Add product
      </button>
    </div>
  );
};

export default AddToCart;
