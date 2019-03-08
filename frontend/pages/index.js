import React from "react";
import NavBar from "../components/Navbar";
import Banner from "../components/Banner";

export default props => (
  <>
    <Banner {...props} />
    <div className="container-fluid bg-white">
      <div className="container py-5">
        <h1>What is NSCC 360°?</h1>
        <hr className="w-75" />
        <div className="row">
          <div className="col-md-7 py-5">
            <p>
              The Institute of Technology Campus is located in the north end of
              Halifax and enjoys incredible views of the Bedford Basin. The
              campus has undergone a major transformation with a new library,
              learning commons and fresh, updated street presence. Students
              enjoy a full-service cafeteria, an exercise room and a vibrant
              Student Association. The campus is easily accessible by bus and is
              within walking distance of cafés, bakeries, restaurants, shops and
              banks.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="w-100"
              src="/static/vr-headset.png"
              alt="vr-headset"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <iframe
              className="d-block mx-auto w-100 border-0 shadow"
              height="400"
              src="/vr/index.html"
              //src="http://localhost:8081/index.html"
              
            />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <p>
              NSCC 360° was created to give you a little taste of all the
              benefits the campus provides. It also gives you an idea of what
              the facilities look like. If you have a VR-headset you can use it
              to make a virtual tour through the campus. If you don't have one,
              don't worry! Use you favorite browser to navigate through the
              pages. We hope you have a fun and a great time at NSCC 360°!
            </p>
          </div>
        </div>
        <h4 className="pt-5 text-center">How is the IT Campus layout?</h4>
        <hr className="w-75" />
        <div className="row">
          <div className="col-md-4">
            <img
              className="w-100"
              src="/static/campus.svg"
              alt="NSCC campus map"
            />
          </div>
          <div className="col-md-8 py-5">
            <p>
              The IT campus is divided into 4 wings; A wing, B wings, C wing and D wing, as shown in the picture aside.
              You start you experience entering in the campus by the front entrance of A wing. You can find the library and Student
              service in this wing. You can then move forward to the other wings using the VR. Enjoy your experience!
            </p>
          </div>
        </div>
        <footer>
          <hr />
          <p className="text-center">NSCC 2019 &copy; All Rights Reserved</p>
        </footer>
      </div>
    </div>
  </>
);
