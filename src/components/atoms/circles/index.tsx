import className from "classnames/bind";
import * as React from "react";
import styles from "./index.scss";

const cx = className.bind(styles);

const Circles: React.FC = () => {

  return (
    <div className={cx("area")}>
    <ul className={cx("circles")}>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  );
};

export default Circles;
