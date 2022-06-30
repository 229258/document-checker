import React, { useEffect, useState } from "react";

const useStepThree = () => {
  if (typeof window !== "undefined") {
    const possibleCountries = localStorage.getItem("test");

    return JSON.parse(possibleCountries);
  }
};

export default useStepThree;
