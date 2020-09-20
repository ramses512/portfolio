import className from "classnames/bind";
import * as React from "react";
import styles from "./index.scss";
import Banner from "../../molecules/banner";

const cx = className.bind(styles);

interface Props {
  bounceIn: string;
  aboutRef: object;
}

const Background: React.FC<Props> = props => {
  const { bounceIn, aboutRef } = props;

  return (
    <div id="my-background" className={cx("background")}>
      <Banner bounceIn={bounceIn} aboutRef={aboutRef} />
    </div>
  );
};

export default Background;
