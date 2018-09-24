import React from "react";
const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-xs-12 no-padding"
            style={{ marginBottom: "-7px" }}
          >
            <iframe
              style={{ border: "0px none", borderColor: "#fff", width: "100%" }}
              height="350"
              src="https://maps.google.com/maps?q=Hurlingham%20Court%2C%20Argwings%20Kodhek%20Road%2C%20Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>
      <section>
        <div className="container background-light-grey pt40 pb40">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <div className="heading mb20">
                <h4>
                  <span className="ion-android-mail mr15" />
                  Send us a Message
                </h4>
              </div>
              <p className="mb20">
                Location: Hurlingham Court, Argwings Kodhek Road, Nairobi <br />
                P.O.Box 5696 - 00100, Nairobi, Kenya <br />
                Tel. +254 716 690 547 / +254735 362 100 <br />
                Email: info@geoenvisafrica.com
              </p>
              <form role="form">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Name"
                    className="form-control"
                    id="InputName"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control"
                    id="InputEmail1"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    id="InputMessage"
                    rows="7"
                  />
                </div>
                <button type="submit" className="btn btn-rw btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
