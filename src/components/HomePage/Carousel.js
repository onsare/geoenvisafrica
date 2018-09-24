import React from "react";

const Carousel = () => {
  return (
    <div className="container background-light-grey pt40 pb40 border-top">
      <div>
        <div className="row">
          <div className="col-sm-4" data-sr="enter left">
            <div
              id="homeCarousel2"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#homeCarousel2"
                  data-slide-to="0"
                  className="active"
                />
                <li data-target="#homeCarousel2" data-slide-to="1" />
                <li data-target="#homeCarousel2" data-slide-to="2" />
              </ol>

              <div className="carousel-inner">
                <div className="item active">
                  <div
                    style={{
                      backgroundImage: "url('images/backgrounds/stock2.jpg')",
                      height: "260px"
                    }}
                  />
                </div>
                <div className="item">
                  <div
                    style={{
                      backgroundImage: "url('images/backgrounds/stock7.jpg')",
                      height: "260px"
                    }}
                  />
                </div>
                <div className="item">
                  <div
                    style={{
                      backgroundImage: "url('images/backgrounds/stock1.jpg')",
                      height: "260px"
                    }}
                  />
                </div>
              </div>

              <a
                className="left carousel-control"
                href="#homeCarousel2"
                role="button"
                data-slide="prev"
              >
                <span
                  className="ion-ios7-arrow-left carousel-arrow-left"
                  aria-hidden="true"
                />
              </a>
              <a
                className="right carousel-control"
                href="#homeCarousel2"
                role="button"
                data-slide="next"
              >
                <span
                  className="ion-ios7-arrow-right carousel-arrow-right"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div className="col-sm-8" data-sr="enter right">
            <div className="heading mb20 mt30-xs">
              <h4>
                <span className="ion-beaker mr15" />
                The Studio
              </h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eu risus libero. Donec et lorem lacinia,{" "}
              <a
                className="tooltip-active"
                data-toggle="tooltip"
                data-placement="top"
                title="Tooltip on top"
              >
                adipiscing
              </a>{" "}
              nunc nec, hendrerit sapien. Sed in scelerisque tortor. Praesent
              porttitor odio non ullamcorper gravida.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eu risus libero. Donec et lorem lacinisent porttitor odio non
              ullamcorper gravida.
            </p>

            <ul className="list-arrow-2-color no-margin">
              <li>
                <small>
                  Etiam mollis pharetra adipiscing. Etiam porta in sem vitae
                  suscipit.{" "}
                </small>
              </li>
              <li>
                <small>
                  Consectetur adipiscing elit. Maecenas tempsam suscipit
                  sagittis vestibulum.
                </small>
              </li>
              <li>
                <small>Nulla volutpat aliquam velit</small>
              </li>
              <li>
                <small>Faucibus porta lacus fringilla vel</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
