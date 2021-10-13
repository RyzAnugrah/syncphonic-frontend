import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import imgBannerAyo from "../../assets/images/homepage-banner-ayo.png";

const index = () => {
  return (
    <div>
      <div className="container-fluid bg-homepage p-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p className="homepage-title">Ayo, Warnai Duniamu dengan Musik</p>
              <p className="homepage-desc mt-4">
                Gabung dengan kami untuk meningkatkan kemampuan musik anda
              </p>
              <button className="btn btn-homepage mt-4 py-3" type="button">
                <Link
                  className="btn-homepage-text"
                  to="/syncphonic-frontend/signup"
                >
                  Bergabung Sekarang!
                </Link>
              </button>
            </div>
            <div className="col-md-6">
              <img
                src={imgBannerAyo}
                alt="homepage"
                className="img-fluid img-banner-ayo mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
