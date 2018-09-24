import React from "react";

const Footer = () => {
  return (
    <footer className="container footer-light">
      <div className="container">
        <div className="row">
          {/* <!-- About --> */}
          <div className="col-sm-3">
            <div className="heading-footer">
              <h4>About</h4>
            </div>
            <p>
              Raleway Bootstrap 3 Template is what you need for your next
              project or client.
            </p>
            <a href="features.html" className="btn btn-primary btn-rw mt10">
              Buy now
            </a>
          </div>

          {/* <!-- Social --> */}
          <div className="col-sm-3 mg25-xs">
            <div className="heading-footer">
              <h4>Social Networks</h4>
            </div>
            <a className="btn btn-social-icon btn-twitter btn-lg">
              <i className="fa fa-twitter" />
            </a>
            <a className="btn btn-social-icon btn-instagram btn-lg">
              <i className="fa fa-instagram" />
            </a>
            <a className="btn btn-social-icon btn-facebook btn-lg">
              <i className="fa fa-facebook" />
            </a>
            <a className="btn btn-social-icon btn-vimeo btn-lg">
              <i className="fa fa-vimeo-square" />
            </a>
            <a className="btn btn-social-icon btn-linkedin btn-lg">
              <i className="fa fa-linkedin" />
            </a>
            <a className="btn btn-social-icon btn-google-plus btn-lg">
              <i className="fa fa-google-plus" />
            </a>
            <a className="btn btn-social-icon btn-adn btn-lg">
              <i className="fa fa-adn" />
            </a>
            <a className="btn btn-social-icon btn-bitbucket btn-lg">
              <i className="fa fa-bitbucket" />
            </a>
            <a className="btn btn-social-icon btn-tumblr btn-lg">
              <i className="fa fa-tumblr" />
            </a>
            <a className="btn btn-social-icon btn-flickr btn-lg">
              <i className="fa fa-flickr" />
            </a>
          </div>

          {/* <!-- Contact --> */}
          <div className="col-sm-3 mg25-xs">
            <div className="heading-footer">
              <h4>Contact us</h4>
            </div>
            <p>
              <span className="ion-home footer-info-icons" />
              <small className="address">
                Hurlingham Court, Argwings Kodhek Road, Nairobi
              </small>
            </p>
            <p>
              <span className="ion-email footer-info-icons" />
              <small className="address">
                <a href="mailto:info@geoenvisafrica.com">
                  info@geoenvisafrica.com
                </a>
              </small>
            </p>
            <p>
              <span className="ion-ios7-telephone footer-info-icons" />
              <small className="address">
                +254 716 690 547 / +254735 362 100{" "}
              </small>
            </p>
          </div>

          {/* <!-- Recent Work --> */}
          <div className="col-sm-3 hidden-xs">
            <div className="heading-footer">
              <h4>Recent Work</h4>
            </div>
            {/* <!-- <div className="col-xs-4 recent-work-padding">
			                    <a href="images/projects/web2.jpg" className="thumbnail image-zoom-link">
			                      <img src="images/projects/thumbs/web2.jpg" alt="..." className="thumbnail img-responsive">
			                    </a>
			                </div>
			                <div className="col-xs-4 recent-work-padding">
			                    <a href="images/projects/web3.jpg" className="thumbnail image-zoom-link">
			                      <img src="images/projects/thumbs/web3.jpg" alt="..." className="thumbnail img-responsive">
			                    </a>
			                </div>
			                <div className="col-xs-4 recent-work-padding">
			                    <a href="images/projects/illustration1.jpg" className="thumbnail image-zoom-link">
			                      <img src="images/projects/thumbs/illustration1.jpg" alt="..." className="thumbnail img-responsive">
			                    </a>
			                </div> --> */}
          </div>
        </div>
        {/* <!-- /row --> */}

        {/* <!-- Copyright --> */}
        <div className="row">
          <hr />
          <div className="col-sm-11 col-xs-10">
            <p className="copyright">
              © 2018 geoenvisafrica. All rights reserved.
            </p>
          </div>
          <div className="col-sm-1 col-xs-2 text-right">
            <a href="#" className="scroll-top">
              <div className="footer-scrolltop-holder">
                <span className="ion-ios7-arrow-up footer-scrolltop" />
              </div>
            </a>
          </div>
        </div>
        {/* <!-- /row --> */}
      </div>
      {/* <!-- /container --> */}
    </footer>
  );
};

export default Footer;
