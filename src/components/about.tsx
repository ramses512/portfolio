import * as React from "react";

type MyProps = {
  id: string;
  bounceLeft: string;
  fadeInLeft: string;
  fadeInRight: string;
  fadeIn: string;
  tada: string;
};
export default class About extends React.Component<MyProps> {
  render() {
    return (
      <div
        id="about-container"
        className="content-containers container text-center mt-5"
      >
        <h1 id="about" className={this.props.bounceLeft}>
          About
        </h1>
        <div className="row" style={{ marginTop: 2 + "rem" }}>
          <div className="col-12 col-lg-12 hidden">
            <img
              className={"img-fluid " + this.props.fadeIn}
              src="../assets/img/myImage.png"
              alt=""
              style={{
                borderRadius: 50 + "%",
                height: 250 + "px"
              }}
            />
            <p className={"mytext pt-3 " + this.props.fadeIn}>
              <em>“Truth can only be found in one place: the code.”</em> -{" "}
              <strong>Robert C. Martin</strong>
            </p>
          </div>
          <div
            className={
              "text-left col-12 col-sm-12 col-md-12 col-lg-6 mt-3 " +
              this.props.fadeInLeft
            }
          >
            <h5 className="text-center">Front-end</h5>
            <span>HTML5</span>
            <span className={"pull-right"}>100%</span>
            <div className="progress">
              <div
                className="progress-bar  wow slideInLeft"
                role="progressbar"
                style={{ width: 100 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>CSS3</span>
            <span className={"pull-right"}>80%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 80 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>Javascript</span>
            <span className={"pull-right"}>90%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 90 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>Angular</span>
            <span className={"pull-right"}>90%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 90 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>ReactJS</span>
            <span className={"pull-right"}>50%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 50 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>TypeScript</span>
            <span className={"pull-right"}>70%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 70 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>Webpack</span>
            <span className={"pull-right"}>60%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>SASS</span>
            <span className={"pull-right"}>60%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>Ionic</span>
            <span className={"pull-right"}>60%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <div
            className={
              "text-left col-12 col-sm-12 col-md-12 col-lg-6 mt-3 " + this.props.fadeInRight
            }
          >
            <h5 className="text-center">Back-end</h5>
            <span>NodeJS</span>
            <span className={"pull-right"}>60%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>NestJS</span>
            <span className={"pull-right"}>60%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>PHP</span>
            <span className={"pull-right"}>70%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 70 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>Laravel</span>
            <span className={"pull-right"}>70%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 70 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>SonarQube</span>
            <span className={"pull-right"}>50%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 50 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>Docker</span>
            <span className={"pull-right"}>60%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>Git</span>
            <span className={"pull-right"}>80%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 80 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>Mongo/MySQL/Oracle</span>
            <span className={"pull-right"}>60%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <span>Java/Kotlin Spring Boot</span>
            <span className={"pull-right"}>50%</span>
            <div className="progress">
              <div
                className="progress-bar wow slideInLeft"
                role="progressbar"
                style={{ width: 50 + "%" }}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
