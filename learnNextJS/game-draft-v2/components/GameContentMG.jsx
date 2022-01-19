import Image from "next/image";
import { useContext, useState } from "react";

import AppContext from "../context/AppContext";

export default function GameContent({
  styles,
  messageImg,
  volcanoImg,
  volcano,
}) {
  const { pageIndex } = useContext(AppContext);
  const [heroName, setHeroName] = useState("");

  const nameHanlder = (e) => {
    setHeroName(e.target.value);
    localStorage.setItem("heroName", heroName);
  };

  return (
    <div className={styles.position}>
      {/* message */}
      <div className={styles.messageImg}>
        <div className={styles.image}>
          <Image
            src={messageImg}
            alt="volcano"
            quality="50"
            objectFit="cover"
          />
        </div>
        <p className={styles.message}>
          {volcano[pageIndex].message}{" "}
          <form action="">
            <input
              type="text"
              name="heroName"
              id="heroName"
              onChange={nameHanlder}
            />
          </form>
        </p>

        <div className={styles.volcanoImg}>
          <Image src={volcanoImg} alt="volcano" />
        </div>
      </div>
    </div>
  );
}
