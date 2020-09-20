import className from "classnames/bind";
import * as React from "react";
import styles from "./index.scss";

const cx = className.bind(styles);

interface Props {
  type: "button" | "submit" | "reset";
  className?: string[];
  value: string;
  onClick(): void;
}

const Button: React.FC<Props> = props => {
  const { type, value, className = ["btn-primary"], onClick } = props;

  return (
    <button className={cx(...className)} type={type} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
