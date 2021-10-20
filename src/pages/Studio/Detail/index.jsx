import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

import imgCta from "../../../assets/images/homepage-cta.png";

const index = () => {
  return (
    <div>
      <div className="container-fluid bg-color-studio-detail py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="studio-detail-text-title">Studio Jazz</p>
            </div>
            <div className="col-md-12">
              <img src={imgCta} alt="studio" className="img-fluid" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-2 mt-4">
              <button className="btn studio-detail-btn-user">10 Orang</button>
            </div>
            <div className="col-md-2 mt-4">
              <button className="btn studio-detail-btn-status">
                Available
              </button>
            </div>
            <div className="col-md-4 mt-3">
              <p className="studio-detail-desc-price">Rp.500.000/Jam</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <p className="studio-detail-desc-spec">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
                nunc aenean netus leo placerat iaculis. Feugiat elementum vitae
                facilisis integer ac id donec cursus. Vulputate dolor fermentum
                scelerisque dui, porta dolor velit. Sit non ut lorem orci
                lectus. Vivamus tellus amet, integer et elementum lacinia quam
                convallis arcu. Aliquet non suspendisse odio iaculis donec ut
                volutpat eu pellentesque. Nec etiam eget congue at etiam purus.
                Risus diam elementum pellentesque vitae euismod vitae donec
                orci. Nibh purus libero integer ipsum diam sit nunc. Erat
                blandit nullam lectus massa nulla non accumsan. Nulla posuere
                dignissim morbi eget vitae. Elementum varius bibendum ultrices
                sit convallis. Metus nunc, sapien tempor velit nibh viverra
                sapien augue. In sit in dui amet fames auctor. Aliquet eu
                volutpat at non vel. Pulvinar ac id tristique diam in ultricies.
                Eu odio nulla elit velit. Vitae sollicitudin vel aliquet nibh.
                Ut molestie augue odio sit tempor. Porttitor dolor ac, nulla
                integer at id. Proin aliquet fringilla at diam. At sem tortor
                tempus est risus, mattis porta congue. Aliquet lorem eu nullam
                donec purus arcu mattis sapien. I
              </p>
            </div>
            <div className="col-md-5 offset-md-1 mt-4">
              <p className="studio-detail-form-title">Form Sewa</p>
              <div className="row bg-color-form-row p-4">
                <div className="col-md-12">
                  <form>
                    <div className="form-group">
                      <label htmlFor="inputPilihHari">Pilih Hari</label>
                      <input
                        type="date"
                        className="form-control form-control-sewa"
                        id="inputPilihHari"
                      />
                    </div>
                    <div className="form-group mt-4">
                      <label htmlFor="inputDurasi">Durasi</label>
                      <input
                        type="text"
                        className="form-control form-control-sewa"
                        id="inputDurasi"
                      />
                    </div>
                    <button type="submit" className="btn btn-sewa">
                      Sewa
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
