import className from "classnames/bind";
import * as React from "react";
import styles from "./index.scss";
import Circles from "../../atoms/circles";
import Button from "../../atoms/button";
import ReactTypingEffect from "react-typing-effect";

const cx = className.bind(styles);
interface Props {
  bounceIn: string;
  aboutRef: any;
}

const Banner: React.FC<Props> = props => {
  const { bounceIn, aboutRef } = props;

  return (
    <div>
      <Circles />
      <div className={cx("top-container", "flex")}>
        <ReactTypingEffect
          text={["Hello, I'm Ramsés Fernández.", "I'm a Full-Stack Developer."]}
          //staticText={'HELLO'}
          speed={100}
          cursor={"☕"}
          typingDelay={500}
          eraseDelay={500}
        />
        <Button
          className={["work-button", bounceIn]}
          type="button"
          onClick={() => {
            let node = document.getElementById(aboutRef.current.props.id);
            window.scrollTo({
              top: node.offsetTop,
              behavior: "smooth"
            });
          }}
          value="View my work"
        ></Button>
      </div>
    </div>
  );
};

export default Banner;
