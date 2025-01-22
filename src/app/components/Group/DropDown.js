"use client";
import { useState } from "react";
import styles from "./group.module.css";
import Modal from "./Modal";
import arrow from "./arrow-left.png";
import Image from "next/image";

const Dropdown = ({}) => {
  const [currentSelection, setCurrentSelection] = useState({
    title: "RECOMMENDED",
    order: "recommended",
  });
  const dropdownOptions = [
    { title: "RECOMMENDED", order: "recommended" },
    { title: "NEWEST FIRST", order: "newestfirst" },
    { title: "POPULAR", order: "popular" },
    { title: "PRICE: HIGH TO LOW", order: "pricehightolow" },
    { title: "PRICE: LOW TO HIGH", order: "pricelowtohigh" },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [buttonCoordinates, setButtonCoordinates] = useState({
    top: 0,
    left: 0,
  });

  const toggleModalVisibility = (e) => {
    setIsModalVisible(!isModalVisible);
    const buttonRect = e.target.getBoundingClientRect();
    setButtonCoordinates({
      top: buttonRect.bottom + window.scrollY, // Align the modal below the button
      left: buttonRect.left + window.scrollX, // Align the modal to the leftmost side of the button
    });
  };

  return (
    <div className={`${styles.container} ${styles.dropdownWrapper}`}>
      <div style={{ position: "relative" }} className={styles.dropdown}>
        <button
          className={styles.dropdownButton}
          onClick={toggleModalVisibility}
        >
          <span className={styles.buttonText}>{currentSelection.title}</span>
          <Image
            style={{ transform: "rotate(-90deg)" }}
            src={arrow}
            alt="arrow left"
            height={16}
            width={16}
            className={styles.arrowIcon}
          />
        </button>
        {isModalVisible && (
          <Modal
            DropDownItems={dropdownOptions}
            top={buttonCoordinates.top}
            left={buttonCoordinates.left}
            setShow={setIsModalVisible}
            setSelected={setCurrentSelection}
            selected={currentSelection}
          />
        )}
      </div>
    </div>
  );
};

export default Dropdown;
