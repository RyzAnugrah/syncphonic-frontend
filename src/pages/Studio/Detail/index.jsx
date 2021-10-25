import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import imgStudioDetailBanner from "../../../assets/images/studio-detail-banner.png";

const index = () => {
  return (
    <div>
      <div className="container-fluid bg-color-studio-detail py-4">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-8 col-md-3">
              <p className="studio-detail-text-title">Studio Rock</p>
            </div>
            <div className="col-4 col-md-2 text-end">
              <button className="btn studio-detail-btn-status">Buka</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img
                src={imgStudioDetailBanner}
                alt="studio"
                className="img-fluid studio-detail-img-banner"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-12">
                  <p className="studio-detail-text-desc">Harga</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="studio-detail-text-title margin-up">
                    Rp.500.000/Jam
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12">
                  <p className="studio-detail-text-desc">
                    Tersedia setiap hari
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="studio-detail-text-title margin-up">Rabu</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <Link to="/syncphonic-frontend/studio/checkout/1">
                <button
                  type="button"
                  className="btn studio-detail-btn-sewa py-3"
                >
                  Sewa Studio
                </button>
              </Link>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-12">
              <p className="studio-detail-text-desc">
                Alat musik dan band bisa disewa secara satuan ataupun secara
                lengkap full band. Biaya sewa alat musik itu bervariasi dengan
                selisih harga yang tidak terlalu besar, yakni di kisaran 100
                ribu Rupiah per hari per satuan alat band, tergantung pada
                merknya. Berikut rincian perkiraan harganya.
              </p>
              <p className="studio-detail-text-desc">Kelengkapan:</p>
              <ul className="studio-detail-text-list">
                <li>Ground Stage 8 Box</li>
                <li>Subwoofer Double 18″ (4 pcs)</li>
                <li>Monitor Active (2 pcs)</li>
                <li>Mikrofon Wireless (2 pcs)</li>
                <li>Mic Cable (4 pcs)</li>
                <li>Mixer Digital</li>
                <li>Stand Mic (4 pcs)</li>
                <li>DI Box Behringer (4 pcs)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
