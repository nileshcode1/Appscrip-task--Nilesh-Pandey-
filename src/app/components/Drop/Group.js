// "use client";
// import styles from "./group.module.css";
// import arrowLeft from "./arrow-left.png";
// import Image from "next/image";
// import Dropdown from "./DropDown";
// import { UseContext } from "../Context";

// const Group = () => {
//   const {ShowFilter, SetShowFilter, TotalProducts} = UseContext();
  
//   return (
//     <div className={styles.container}>
//       <p className={styles.totalitems} style={{ whiteSpace: "nowrap" }}>{TotalProducts} ITEMS</p>
//       <button className={styles.filterbtn_mobile} onClick={() => SetShowFilter(!ShowFilter)}>FILTER</button>
//       <button
//         className={styles.filterbtn}
//         onClick={() => SetShowFilter(!ShowFilter)}
//       >
//         {ShowFilter ? (
//           <>
//             <Image src={arrowLeft} alt="arrow left" height={16} width={16} />
//             <span>HIDE FILTER</span>
//           </>
//         ) : (
//           <>
//             <Image className={styles.arrow_right} src={arrowLeft} alt="arrow right" height={16} width={16} />
//             <span>SHOW FILTER</span>
//           </>
//         )}
//       </button>

//       {/* Using <select> element for dropdown */}
//       <div style={{marginLeft: "auto"}}>
//         <Dropdown />
       
//       </div>
//     </div>
//   );
// };

// export default Group;

"use client";
import styles from "./group.module.css";
import arrowLeft from "./arrow-left.png";
import Image from "next/image";
import Dropdown from "./DropDown";
import { UseContext } from "../Context";
import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Group = () => {
  const { ShowFilter, SetShowFilter, TotalProducts } = UseContext();
  const size = useWindowSize();

  const isMobile = size.width <= 768;

  return (
    <div className={styles.container}>
      {!isMobile && (
        <p className={styles.totalitems} style={{ whiteSpace: "nowrap" }}>
          {TotalProducts} ITEMS
        </p>
      )}
      {isMobile ? (
        <p className={styles.filterbtn_mobile}>FILTER</p>
      ) : (
        <button
          className={styles.filterbtn}
          onClick={() => SetShowFilter(!ShowFilter)}
        >
          {ShowFilter ? (
            <>
              <Image src={arrowLeft} alt="arrow left" height={16} width={16} />
              <span>HIDE FILTER</span>
            </>
          ) : (
            <>
              <Image
                className={styles.arrow_right}
                src={arrowLeft}
                alt="arrow right"
                height={16}
                width={16}
              />
              <span>SHOW FILTER</span>
            </>
          )}
        </button>
      )}

      {/* Using <select> element for dropdown */}
      <div style={{ marginLeft: "auto" }}>
        <Dropdown />
      </div>
    </div>
  );
};

export default Group;
