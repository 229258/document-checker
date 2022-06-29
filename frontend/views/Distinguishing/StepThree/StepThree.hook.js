import React, { useEffect, useState } from "react";

const useStepThree = (props) => {
  const { providedData } = props;

  console.log("providedData to", providedData);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!providedData) return;

    setData(providedData);
  }, [providedData]);

  return {
    data,
  };
};

export default useStepThree;
