import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";

const HelloWorld = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) return;

    const getHelloWorldData = async () => {
      const response = await fetch(`/api/hello/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const helloWorld = await response.json();
      setData(JSON.stringify(helloWorld.data));
    };

    getHelloWorldData();
  }, [id]);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Hello World Data !</h1>
      <h3 className={styles.title}>Data you've received: {data}</h3>
    </div>
  );
};

export default HelloWorld;
