import React from "react";

const Accordion = () => {
  return (
    <div className=" container background-light-grey pt40 pb40 border-bottom">
      <div>
        <div className="row">
          <div className="col-sm-12 mb20">
            <div className="heading">
              <h4>About us</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6" data-sr="enter left">
            <div className="panel-group" id="accordion">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                    >
                      We have over <b>30+</b> features pages.
                    </a>
                  </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in">
                  <div className="panel-body">
                    We built this template keeping in mind the features you
                    might need on your next project. Giving you a variety of
                    components to utilize, a variety of pages to build on, and
                    all of the plugins you might need, already configured for
                    Bootstrap 3. Aliquam erat volutpat. Aenean euismod nisl sed
                    justo pharetra, et pretium mauris porttitor. Mauris luctus
                    justo eget tempus ornare. Pellentesque vitae sollicitudin
                    ante.
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseTwo"
                    >
                      We like pre built <i>components</i>.
                    </a>
                  </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse">
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Anim pariatur. Aliquam erat
                    volutpat. Aenean euismod nisl sed justo pharetra, et pretium
                    mauris porttitor. Mauris luctus justo eget tempus ornare.
                    Pellentesque vitae sollicitudin ante.
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseThree"
                    >
                      We like to sleep.
                    </a>
                  </h4>
                </div>
                <div id="collapseThree" className="panel-collapse collapse">
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Anim pariatur. Aliquam erat
                    volutpat. Aenean euismod nisl sed justo pharetra, et pretium
                    mauris porttitor. Mauris luctus justo eget tempus ornare.
                    Pellentesque vitae sollicitudin ante.
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="pages-about-us-team.html"
                className="btn btn-rw btn-primary"
              >
                About us
              </a>
            </div>
          </div>

          <div className="col-sm-6" data-sr="enter bottom">
            <img
              src="images/showcase.png"
              className="img-responsive showcase-image"
              alt="Responsive Showcase 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
