import React from "react";

const Hero = () => {
  return (
    <div className=" container background-light-grey pt40 pb40 border-bottom">
      <div>
        <div className="row">
          <div className="col-sm-4 fadeInUp-animated text-center">
            <span className="fa fa-gears bordered-icon-sm bordered-icon-color" />
            <h4 className="mt15">Vision.</h4>
            <p className="p15xs no-margin">
              To Place Africa in a Better Position on the World's Development
              Map.
            </p>
          </div>

          <div className="col-sm-4 fadeInUp-animated text-center mt20-xs">
            <span className="fa fa-envelope bordered-icon-sm bordered-icon-color" />
            <h4 className="mt15">Mission.</h4>
            <p className="p15xs no-margin">
              Playing an Environmentally Friendly Significant Role Towards
              Developing Africa by Supporting Development Agendas Touching on
              Geospatial, Physical Planning, and ICT.
            </p>
          </div>

          <div className="col-sm-4 fadeInUp-animated text-center mt20-xs">
            <span className="fa fa-globe bordered-icon-sm bordered-icon-color" />
            <h4 className="mt15">Core Values.</h4>
            <p className="p15xs no-margin">
              <ul>
                <li>Professionalism</li>
                <li>Innovation</li>
                <li>Quality</li>
                <li>Integrity</li>
                <li>Team Work</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
