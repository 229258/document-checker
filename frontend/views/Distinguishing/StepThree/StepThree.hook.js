import React, { useEffect, useState } from "react";

const useStepThree = () => {
  if (typeof window !== "undefined") {
    const possibleCountries = localStorage.getItem("data");

    if (!possibleCountries) return [];

    return JSON.parse(possibleCountries);
  }
};

export default useStepThree;
