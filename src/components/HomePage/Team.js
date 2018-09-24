import React from "react";

const Team = () => {
  return (
    <section className=" container content-bordered background-light-grey pt40 pb40">
      <div>
        <div className="row">
          <div className="col-xs-12">
            <p className="lead text-center">
              The{" "}
              <b>
                <mark>Team</mark>
              </b>
            </p>
            <hr style={{ width: "400px" }} className="double-hr mt30 mb30" />
          </div>
        </div>

        <div className="row team-content-holder">
          <div className="team-member-holder" data-sr="enter left">
            <div className="col-sm-1">
              <img
                src="images/team-member-1.jpg"
                className="img-responsive br-2 team-member-img"
                alt="Team Member 1"
              />
            </div>
            <div className="col-sm-3">
              <h4 className="team-member-name">James Adams</h4>

              <div className="team-description">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                  Integer a elit turpis. Phasellus non varius mi.
                </p>

                <a href="#">
                  <span className="ion-social-twitter team-ico mr15" />
                </a>
                <a href="#">
                  <span className="ion-social-facebook team-ico mr15" />
                </a>
                <a href="#">
                  <span className="ion-social-googleplus-outline team-ico" />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member-holder mt30-xs" data-sr="enter top">
            <div className="col-sm-1">
              <img
                src="images/team-member-2.jpg"
                className="img-responsive br-2 team-member-img"
                alt="Team Member 2"
              />
            </div>
            <div className="col-sm-3">
              <h4 className="team-member-name">Steven Rolo</h4>

              <div className="team-description">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                  Integer a elit turpis. Phasellus non varius mi.
                </p>

                <a href="#">
                  <span className="ion-social-twitter team-ico mr15" />
                </a>
                <a href="#">
                  <span className="ion-social-facebook team-ico mr15" />
                </a>
                <a href="#">
                  <span className="ion-social-googleplus-outline team-ico" />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member-holder mt30-xs" data-sr="enter right">
            <div className="col-sm-1">
              <img
                src="images/team-member-3.jpg"
                className="img-responsive br-2 team-member-img"
                alt="Team Member 3"
              />
            </div>
            <div className="col-sm-3">
              <h4 className="team-member-name">John Bender</h4>

              <div className="team-description">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                  Integer a elit turpis. Phasellus non varius mi.
                </p>

                <a href="#">
                  <span className="ion-social-twitter team-ico mr15" />
                </a>
                <a href="#">
                  <span className="ion-social-facebook team-ico mr15" />
                </a>
                <a href="#">
                  <span className="ion-social-googleplus-outline team-ico" />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member-holder mt30-xs" data-sr="enter bottom">
            <div className="col-sm-2 mt30-lg">
              <img
                src="images/team-member-4.jpg"
                className="img-responsive br-2 team-member-img"
                alt="Team Member 1"
              />
            </div>
            <div className="col-sm-4 mt30-lg">
              <h4 className="team-member-name">Louis Stevens</h4>

              <div className="team-description">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                  Integer a elit turpis. Phasellus non varius mi. Nam bibendum
                  in mauris at sollicitudin lacinia. Nam bibendum in mauris at
                  sollicitudin lacinia.
                </p>

                <a href="#">
                  <span className="ion-social-twitter team-ico mr15" />
                </a>
                <a href="#">
                  <span className="ion-social-facebook team-ico mr15" />
                </a>
                <a href="#">
                  <span className="ion-social-googleplus-outline team-ico" />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member-holder mt30-xs" data-sr="enter bottom">
            <div className="col-sm-2 mt30-lg">
              <img
                src="images/team-member-3.jpg"
                className="img-responsive br-2 team-member-img"
                alt="Team Member 2"
              />
            </div>
            <div className="col-sm-4 mt30-lg">
              <h4 className="team-member-name">John Doe</h4>

              <div className="team-description">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                  Integer a elit turpis. Phasellus non varius mi. Nam bibendum
                  in mauris at sollicitudin lacinia. Nam bibendum in mauris at
                  sollicitudin lacinia.
                </p>

                <a href="#">
                  <span className="ion-social-twitter team-ico mr15" />
                </a>
                <a href="#">
                  <span className="ion-social-facebook team-ico mr15" />
                </a>
                <a href="#">
                  <span className="ion-social-googleplus-outline team-ico" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
