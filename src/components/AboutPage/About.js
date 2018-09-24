import React from "react";

const About = () => {
  return (
    <div className="container background-light-grey">
      <section className="content-40mg ">
        <div>
          <p className="lead text-center fadeInLeft-animated mb40 fadeInLeft animated">
            Dont underestimate the <b>Jedi.</b>
          </p>

          {/* <!-- Begin Carousel --> */}
          <div
            id="aboutCarousel"
            className="carousel slide"
            data-ride="carousel"
          >
            {/* <!-- Indicators --> */}
            <ol className="carousel-indicators">
              <li data-target="#aboutCarousel" data-slide-to="0" className="" />
              <li data-target="#aboutCarousel" data-slide-to="1" className="" />
              <li
                data-target="#aboutCarousel"
                data-slide-to="2"
                className="active"
              />
            </ol>

            {/* <!-- Wrapper for slides --> */}
            <div className="carousel-inner">
              <div className="item">
                <img
                  className="img-responsive"
                  src="images/backgrounds/bg2.jpg"
                  alt="Carousel Image"
                />
              </div>
              <div className="item">
                <img
                  className="img-responsive"
                  src="images/backgrounds/bg3.jpg"
                  alt="Carousel Image"
                />
              </div>
              <div className="item active">
                <img
                  className="img-responsive"
                  src="images/backgrounds/bg4.jpg"
                  alt="Carousel Image"
                />
              </div>
            </div>

            {/* <!-- Controls --> */}
            <a
              className="left carousel-control"
              href="#aboutCarousel"
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
              href="#aboutCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="ion-ios7-arrow-right carousel-arrow-right"
                aria-hidden="true"
              />
            </a>
          </div>
          {/* <!-- End Carousel --> */}

          {/* <!-- Begin Content 1 --> */}
          <div className="row mt40">
            {/* <!-- Begin Tabs --> */}
            <div className="col-sm-8">
              <ul className="nav nav-tabs" role="tablist">
                <li className="active">
                  <a
                    href="#home3"
                    role="tab"
                    data-toggle="tab"
                    aria-expanded="true"
                  >
                    <span className="fa fa-home" /> Team
                  </a>
                </li>
                <li className="">
                  <a
                    href="#profile3"
                    role="tab"
                    data-toggle="tab"
                    aria-expanded="false"
                  >
                    <span className="fa fa-user" /> Mission
                  </a>
                </li>
                <li className="">
                  <a
                    href="#messages3"
                    role="tab"
                    data-toggle="tab"
                    aria-expanded="false"
                  >
                    <span className="fa fa-envelope-square" />
                  </a>
                </li>
              </ul>
              <div className="tab-content tab-default">
                <div
                  className="tab-pane fadeIn-animated fadeIn animated active"
                  id="home3"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  et ante metus. Vestibulum id vestibulum sapien, non convallis
                  purus. Pellentesque habitant morbi tristique senectus et netus
                  et malesuada fames ac turpis egestas. Nullam vestibulum
                  rhoncus leo. Suspendisse vulputate elementum dui. Duis
                  tristique auctor dolor in lobortis. Donec pretium laoreet
                  purus non tempus. Morbi sit amet dolor ut sapien dictum porta
                  et a ipsum.
                </div>
                <div
                  className="tab-pane fadeIn-animated fadeIn animated"
                  id="profile3"
                >
                  <div
                    className="col-md-2 hidden-xs hidden-sm"
                    style={{ paddingLeft: "0 !important" }}
                  >
                    <a
                      href="#"
                      className="thumbnail br-50 flipInY-animated flipInY animated"
                    >
                      <img
                        className="img-circle img-responsive"
                        src="images/projects/thumbs/print1.jpg"
                        alt="Thumbnail"
                      />
                    </a>
                  </div>
                  Aliquam consectetur felis a posuere pulvinar. Etiam pulvinar
                  varius arcu, non varius metus consequat id. Sed consequat
                  imperdiet mi, in mattis libero fringilla in. Sed accumsan dui
                  turpis, quis ultrices ipsum aliquam a. Donec ullamcorper orci
                  eleifend, vulputate tortor bibendum, ullamcorper arcu.
                  Phasellus nec neque porttitor. Pellentesque vel hendrerit
                  ligula. Suspendisse potenti. Nullam dignissim tortor id ante
                  consectetur mollis.
                </div>
                <div
                  className="tab-pane fadeIn-animated fadeIn animated"
                  id="messages3"
                >
                  Vivamus ac nisl sed metus aliquet lacinia vitae ut magna.
                  Vivamus non nulla diam. Etiam pellentesque ornare hendrerit.
                  Phasellus sit amet mattis purus. Sed eget magna sed neque
                  interdum lacinia. Praesent luctus tincidunt tortor tristique
                  suscipit. Nunc mollis, ligula vel feugiat aliquet, dolor odio
                  laoreet velit, sit amet tristique leo enim a augue.
                  Pellentesque vel hendrerit ligula. Suspendisse potenti. Nullam
                  dignissim tortor id ante consectetur mollis.
                </div>
              </div>
            </div>
            {/* <!-- /column -->
						<!-- End Tabs --> */}

            {/* <!-- Quick Info --> */}
            <div className="col-sm-4">
              <div className="heading text-center mt30-xs">
                <h4>Quick info</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
                ante metus. Vestibulum id vestibulum sapien, non convallis
                purus.{" "}
                <a
                  className="tooltip-active"
                  data-toggle="tooltip"
                  data-placement="right"
                  title=""
                  data-original-title="Tooltip on right"
                >
                  Pellentesque
                </a>{" "}
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Nullam vestibulum rhoncus leo. Pellentesque vel
                hendrerit ligula. Suspendisse potenti.
              </p>
            </div>
          </div>
          {/* <!-- /row -->
					<!-- End Content 1 --> */}

          {/* <!-- Begin Content 2 --> */}
          <div className="row mt30">
            {/* <!-- Goals --> */}
            <div className="col-sm-6">
              <div className="heading">
                <h4>This years goals</h4>
              </div>
              <blockquote className="mb10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
              ante metus. Vestibulum id vestibulum sapien, non convallis purus.
              Pellentesque habitant morbi tristique.
            </div>

            {/* <!-- Help --> */}
            <div className="col-sm-6">
              <div className="heading mt15-xs">
                <h4>How can you help?</h4>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
              ante metus. Vestibulum id vestibulum sapien, non convallis purus.
              Pellentesque habitant morbi tristique senectus.
              <ul className="list-arrow-color no-margin mt15 mb0">
                <li>
                  Etiam sodales mi vulputate metus iaculis, eleifend aliquet mi
                  imperdiet.
                </li>
                <li> Nam at purus commodo, mollis lacus non, commodo dui.</li>
                <li>Nulla volutpat aliquam velit</li>
              </ul>
            </div>
          </div>
          {/* <!-- /row -->
					<!-- End Content 2 --> */}
        </div>
        {/* <!-- /container --> */}
      </section>
    </div>
  );
};

export default About;
