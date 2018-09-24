import React from "react";

const Slider = () => {
  return (
    // <!-- Start Slider Revolution --></li>
    <div className="container background-light-grey pb40">
      <div className="row">
        <div className="col-md-4">
          <img
            src="images/logos/geo-logo.jpeg"
            alt="GeoenvisAfrica"
            width="100%"
          />
          <div className="text-center pt40">
            <a className="btn btn-social-icon btn-twitter btn-lg">
              <i className="fa fa-twitter" />
            </a>
            <a className="btn btn-social-icon btn-instagram btn-lg">
              <i className="fa fa-instagram" />
            </a>
            <a className="btn btn-social-icon btn-facebook btn-lg">
              <i className="fa fa-facebook" />
            </a>

            <a className="btn btn-social-icon btn-linkedin btn-lg">
              <i className="fa fa-linkedin" />
            </a>
            <a className="btn btn-social-icon btn-google-plus btn-lg">
              <i className="fa fa-google-plus" />
            </a>
          </div>
        </div>
        <div style={{ padding: 0 }} className="col-md-8">
          <div className="rev_slider_wrapper">
            <div className="rev_slider" data-version="5.0" id="slider1">
              <ul>
                <li
                  data-delay="9000"
                  data-description="Raleway Bootstrap Template"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed="default"
                  data-param1="test"
                  data-rotate="0"
                  data-slotamount="default"
                  data-title="Raleway Intro"
                  data-thumb="images/slider/geo-hub.jpeg"
                  data-transition="slideremoveup"
                >
                  {/* <!-- MAIN IMAGE --> */}
                  <img
                    alt=""
                    data-bgfit="cover"
                    data-bgposition="center center"
                    data-bgrepeat="no-repeat"
                    data-no-retina=""
                    height="800"
                    src="images/slider/geo-hub.jpeg"
                    style={{ backgroundColor: "#000" }}
                    width="1732"
                  />

                  <div
                    className="tp-caption color-main fa fa-adn"
                    data-x="center"
                    data-y="105"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:10px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:10px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{ fontFamily: "FontAwesome", fontSize: "71px" }}
                  />

                  <div
                    className="tp-caption"
                    data-x="center"
                    data-y="196"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:50px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:50px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      padding: "0px 3px",
                      fontSize: "46px",
                      visibility: "visible",
                      borderBottom: "2px solid rgba(255, 255, 255, 0.24)",
                      color: "#fff",
                      fontFamily: "'Raleway' sans-serif"
                    }}
                  >
                    Welcome to <span className="heavy">Raleway</span>.
                  </div>

                  <div
                    className="tp-caption"
                    data-x="center"
                    data-y="295"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:150px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:150px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      padding: "0px 3px",
                      fontSize: "24px",
                      visibility: "visible",
                      color: "#e0e0e0",
                      fontFamily: "'Open Sans' sans-serif",
                      textAlign: "center"
                    }}
                  >
                    <p>
                      Raleway is a responsive template perfect for any web
                      project, with over <br />
                      100+ pages of features, components, and pages.
                    </p>
                  </div>
                </li>

                {/* <!-- Slide 2 --> */}
                <li
                  data-delay="10000"
                  data-description="Some Description"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed="default"
                  data-param1="test"
                  data-rotate="0"
                  data-slotamount="default"
                  data-thumb="images/slider/capacity.jpeg"
                  data-title="Features"
                  data-transition="slideremoveleft"
                >
                  {/* <!-- MAIN IMAGE --> */}
                  <img
                    alt=""
                    data-bgfit="cover"
                    data-bgposition="center center"
                    data-bgrepeat="no-repeat"
                    data-no-retina=""
                    height="800"
                    src="images/slider/capacity.jpeg"
                    style={{ backgroundColor: "#000" }}
                    width="1732"
                  />

                  <div
                    className="tp-caption"
                    data-x="320"
                    data-y="105"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:10px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:10px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      color: "#fff",
                      fontSize: "35px",
                      fontFamily: "'Raleway' sans-serif",
                      fontWeight: 200,
                      border: "2px solid #fff",
                      padding: "0 17px"
                    }}
                  >
                    A variety of features, for <strong>various</strong> needs.
                  </div>

                  <div
                    className="tp-caption background-mainsub"
                    data-x="320"
                    data-y="195"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="x:100px;opacity:0;s:1200;e:Power3.easeOut;"
                    data-transform_out="y:100px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      color: "#fff",
                      fontSize: "27px",
                      fontFamily: "'FontAwesome' sans-serif",
                      lineHeight: "50px",
                      textAlign: "center",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                      borderRadius: "50%"
                    }}
                  >
                    <span className="fa fa-check" />
                  </div>

                  <div
                    className="tp-caption"
                    data-x="390"
                    data-y="200"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="x:130px;opacity:0;s:1200;e:Power3.easeOut;"
                    data-transform_out="y:130px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      color: "#fff",
                      fontSize: "24px",
                      fontFamily: "'Open Sans' sans-serif",
                      fontWeight: 300
                    }}
                  >
                    Fully responsive, on <strong>all</strong> devices.
                  </div>

                  <div
                    className="tp-caption background-mainsub"
                    data-x="320"
                    data-y="260"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="x:160px;opacity:0;s:1200;e:Power3.easeOut;"
                    data-transform_out="y:160px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      color: "#fff",
                      fontSize: "27px",
                      fontFamily: "'FontAwesome' sans-serif",
                      lineHeight: "50px",
                      textAlign: "center",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                      borderRadius: "50%"
                    }}
                  >
                    <span className="fa fa-check" />
                  </div>

                  <div
                    className="tp-caption"
                    data-x="390"
                    data-y="265"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="x:190px;opacity:0;s:1200;e:Power3.easeOut;"
                    data-transform_out="y:190px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      color: "#fff",
                      fontSize: "24px",
                      fontFamily: "'Open Sans' sans-serif",
                      fontWeight: 300
                    }}
                  >
                    A variety of pages for a multi purpose website.
                  </div>

                  <div
                    className="tp-caption background-mainsub"
                    data-x="320"
                    data-y="324"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="x:220px;opacity:0;s:1200;e:Power3.easeOut;"
                    data-transform_out="y:220px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      color: "#fff",
                      fontSize: "27px",
                      fontFamily: "'FontAwesome' sans-serif",
                      lineHeight: "50px",
                      textAlign: "center",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                      borderRadius: "50%"
                    }}
                  >
                    <span className="fa fa-check" />
                  </div>

                  <div
                    className="tp-caption"
                    data-x="390"
                    data-y="329"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="x:260px;opacity:0;s:1200;e:Power3.easeOut;"
                    data-transform_out="y:260px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      color: "#fff",
                      fontSize: "24px",
                      fontFamily: "'Open Sans' sans-serif",
                      fontWeight: 300
                    }}
                  >
                    Easy to use and customize. + labeled clean code
                  </div>

                  <div
                    className="tp-caption"
                    data-x="325"
                    data-y="395"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:70px;opacity:0;s:1000;e:Power3.easeOut;"
                    data-transform_out="y:70px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      color: "#fff",
                      fontSize: "17px",
                      fontFamily: "'Open Sans' sans-serif",
                      fontWeight: 300
                    }}
                  >
                    <strong>+ and much more</strong>
                  </div>
                </li>

                {/* <!-- Slide 3 --> */}

                <li
                  data-delay="9000"
                  data-description="Raleway Bootstrap Template"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed="default"
                  data-param1="test"
                  data-rotate="0"
                  data-slotamount="default"
                  data-title="Raleway Intro"
                  data-thumb="images/slider/mapping.jpeg"
                  data-transition="slideremoveup"
                >
                  {/* <!-- MAIN IMAGE --> */}
                  <img
                    alt=""
                    data-bgfit="cover"
                    data-bgposition="center center"
                    data-bgrepeat="no-repeat"
                    data-no-retina=""
                    height="800"
                    src="images/slider/mapping.jpeg"
                    style={{ backgroundColor: "#000" }}
                    width="1732"
                  />

                  <div
                    className="tp-caption color-main fa fa-adn"
                    data-x="center"
                    data-y="105"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:10px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:10px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{ fontFamily: "FontAwesome", fontSize: "71px" }}
                  />

                  <div
                    className="tp-caption"
                    data-x="center"
                    data-y="196"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:50px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:50px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      padding: "0px 3px",
                      fontSize: "46px",
                      visibility: "visible",
                      borderBottom: "2px solid rgba(255, 255, 255, 0.24)",
                      color: "#fff",
                      fontFamily: "'Raleway' sans-serif"
                    }}
                  >
                    Welcome to <span className="heavy">Raleway</span>.
                  </div>

                  <div
                    className="tp-caption"
                    data-x="center"
                    data-y="295"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:150px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:150px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      padding: "0px 3px",
                      fontSize: "24px",
                      visibility: "visible",
                      color: "#e0e0e0",
                      fontFamily: "'Open Sans' sans-serif",
                      textAlign: "center"
                    }}
                  >
                    <p>
                      Raleway is a responsive template perfect for any web
                      project, with over <br />
                      100+ pages of features, components, and pages.
                    </p>
                  </div>
                </li>
                {/* <!-- Slide 4 --> */}
                <li
                  data-delay="9000"
                  data-description="Raleway Bootstrap Template"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed="default"
                  data-param1="test"
                  data-rotate="0"
                  data-slotamount="default"
                  data-title="Raleway Intro"
                  data-thumb="images/slider/insite.jpeg"
                  data-transition="slideremoveup"
                >
                  {/* <!-- MAIN IMAGE --> */}
                  <img
                    alt=""
                    data-bgfit="cover"
                    data-bgposition="center center"
                    data-bgrepeat="no-repeat"
                    data-no-retina=""
                    height="800"
                    src="images/slider/insite.jpeg"
                    style={{ backgroundColor: "#000" }}
                    width="1732"
                  />

                  <div
                    className="tp-caption color-main fa fa-adn"
                    data-x="center"
                    data-y="105"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:10px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:10px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{ fontFamily: "FontAwesome", fontSize: "71px" }}
                  />

                  <div
                    className="tp-caption"
                    data-x="center"
                    data-y="196"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:50px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:50px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      padding: "0px 3px",
                      fontSize: "46px",
                      visibility: "visible",
                      borderBottom: "2px solid rgba(255, 255, 255, 0.24)",
                      color: "#fff",
                      fontFamily: "'Raleway' sans-serif"
                    }}
                  >
                    Welcome to <span className="heavy">Raleway</span>.
                  </div>

                  <div
                    className="tp-caption"
                    data-x="center"
                    data-y="295"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:150px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:150px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      padding: "0px 3px",
                      fontSize: "24px",
                      visibility: "visible",
                      color: "#e0e0e0",
                      fontFamily: "'Open Sans' sans-serif",
                      textAlign: "center"
                    }}
                  >
                    <p>
                      Raleway is a responsive template perfect for any web
                      project, with over <br />
                      100+ pages of features, components, and pages.
                    </p>
                  </div>
                </li>

                <li
                  data-delay="9000"
                  data-description="Raleway Bootstrap Template"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed="default"
                  data-param1="test"
                  data-rotate="0"
                  data-slotamount="default"
                  data-title="Raleway Intro"
                  data-thumb="images/slider/environment.jpeg"
                  data-transition="slideremoveup"
                >
                  <img
                    alt=""
                    data-bgfit="cover"
                    data-bgposition="center center"
                    data-bgrepeat="no-repeat"
                    data-no-retina=""
                    height="800"
                    src="images/slider/environment.jpeg"
                    style={{ backgroundColor: "#000" }}
                    width="1732"
                  />

                  <div
                    className="tp-caption color-main fa fa-adn"
                    data-x="center"
                    data-y="105"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:10px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:10px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{ fontFamily: "FontAwesome", fontSize: "71px" }}
                  />

                  <div
                    className="tp-caption"
                    data-x="center"
                    data-y="196"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:50px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:50px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      padding: "0px 3px",
                      fontSize: "46px",
                      visibility: "visible",
                      borderBottom: "2px solid rgba(255, 255, 255, 0.24)",
                      color: "#fff",
                      fontFamily: "'Raleway' sans-serif"
                    }}
                  >
                    Welcome to <span className="heavy">Raleway</span>.
                  </div>

                  <div
                    className="tp-caption"
                    data-x="center"
                    data-y="295"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:150px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:150px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      padding: "0px 3px",
                      fontSize: "24px",
                      visibility: "visible",
                      color: "#e0e0e0",
                      fontFamily: "'Open Sans' sans-serif",
                      textAlign: "center"
                    }}
                  >
                    <p>
                      Raleway is a responsive template perfect for any web
                      project, with over <br />
                      100+ pages of features, components, and pages.
                    </p>
                  </div>
                </li>

                <li
                  data-delay="9000"
                  data-description="Raleway Bootstrap Template"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed="default"
                  data-param1="test"
                  data-rotate="0"
                  data-slotamount="default"
                  data-title="Raleway Intro"
                  data-thumb="images/slider/ict.jpeg"
                  data-transition="slideremoveup"
                >
                  <img
                    alt=""
                    data-bgfit="cover"
                    data-bgposition="center center"
                    data-bgrepeat="no-repeat"
                    data-no-retina=""
                    height="800"
                    src="images/slider/ict.jpeg"
                    style={{ backgroundColor: "#000" }}
                    width="1732"
                  />

                  <div
                    className="tp-caption color-main fa fa-adn"
                    data-x="center"
                    data-y="105"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:10px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:10px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{ fontFamily: "FontAwesome", fontSize: "71px" }}
                  />

                  <div
                    className="tp-caption"
                    data-x="center"
                    data-y="196"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:50px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:50px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      padding: "0px 3px",
                      fontSize: "46px",
                      visibility: "visible",
                      borderBottom: "2px solid rgba(255, 255, 255, 0.24)",
                      color: "#fff",
                      fontFamily: "'Raleway' sans-serif"
                    }}
                  >
                    Welcome to <span className="heavy">Raleway</span>.
                  </div>

                  <div
                    className="tp-caption"
                    data-x="center"
                    data-y="295"
                    data-speed="600"
                    data-start="1200"
                    data-end="9400"
                    data-endspeed="600"
                    data-transform_idle="o:1;"
                    data-transform_in="y:150px;opacity:0;s:700;e:Power3.easeOut;"
                    data-transform_out="y:150px;opacity:0;s:500;e:Power2.easeInOut;"
                    style={{
                      padding: " 0px 3px",
                      fontSize: "24px",
                      visibility: "visible",
                      color: "#e0e0e0",
                      fontFamily: "'Open Sans' sans-serif",
                      textAlign: "center"
                    }}
                  >
                    <p>
                      Raleway is a responsive template perfect for any web
                      project, with over <br />
                      100+ pages of features, components, and pages.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
