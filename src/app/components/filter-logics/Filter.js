"use client";

import { useState } from "react";
import styles from "./filter.module.css";
import Image from "next/image";
import arrowDown from "./arrow-down.png";
import arrowUp from "./arrow-up.png";
import { UseContext } from "../Context";

const Filter = () => {
  const { ShowFilter } = UseContext();
  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: { men: false, women: false, babyAndKids: false },
    occasion: { all: false },
    work: { all: false },
    fabric: { all: false },
    segment: { all: false },
    suitableFor: { all: false },
    rawMaterials: { all: false },
    pattern: { all: false },
  });
  const [expanded, setExpanded] = useState({
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const toggleCheckbox = (category, subCategory) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [subCategory]: !prev[category][subCategory],
      },
    }));
  };

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const renderSection = (key, label) => (
    <div className={styles.section} key={key}>
      <div className={styles.sectionHeader} onClick={() => toggleSection(key)}>
        <h3 className={styles.header}>{label}</h3>
        <Image
          src={expanded[key] ? arrowUp : arrowDown}
          alt="arrow"
          height={16}
          width={16}
        />
      </div>
      {expanded[key] && (
        <div className={styles.options}>
          {Object.keys(filters[key]).map((subKey) => (
            <label key={subKey}>
              <input
                type="checkbox"
                checked={filters[key][subKey]}
                onChange={() => toggleCheckbox(key, subKey)}
              />
              <span>{subKey.replace(/([A-Z])/g, " $1")}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  if (!ShowFilter) return null;

  return (
    <div className={styles.sidebar}>
      {/* Customizable Section */}
      <div className={`${styles.section} ${styles.customizable}`}>
        <label>
          <input
            type="checkbox"
            checked={filters.customizable}
            onChange={() =>
              setFilters((prev) => ({
                ...prev,
                customizable: !prev.customizable,
              }))
            }
          />
          <span style={{ fontWeight: "bold" }}>CUSTOMIZABLE</span>
        </label>
      </div>

      {/* Dynamic Sections */}
      {Object.entries({
        idealFor: "IDEAL FOR",
        occasion: "OCCASION",
        work: "WORK",
        fabric: "FABRIC",
        segment: "SEGMENT",
        suitableFor: "SUITABLE FOR",
        rawMaterials: "RAW MATERIALS",
        pattern: "PATTERN",
      }).map(([key, label]) => renderSection(key, label))}
    </div>
  );
};

export default Filter;
