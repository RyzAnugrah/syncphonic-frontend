import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import imgStudioCheckoutBanner from "../../../assets/images/studio-checkout-banner.png";

const Checkout = () => {
  return (
    <div>
      <div className="container-fluid bg-color-checkout py-2">
        <div className="container py-4">
          <div className="row bg-color-checkout-row p-2">
            <div className="col-md-6">
              <img
                src={imgStudioCheckoutBanner}
                alt="checkout"
                className="img-fluid img-hero-checkout"
              />
            </div>
            <div className="col-md-6 p-4">
              <p className="checkout-title">Sewa Studio</p>
              <form>
                <div className="form-group">
                  <label htmlFor="inputNamaLengkap">Nama Lengkap</label>
                  <input
                    type="text"
                    className="form-control form-control-checkout"
                    id="inputNamaLengkap"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputEmail">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-checkout"
                    id="inputEmail"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputNamaStudio">Nama Studio</label>
                  <input
                    type="text"
                    className="form-control form-control-checkout"
                    id="inputNamaStudio"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputDurasi">Durasi</label>
                  <select
                    className="form-select form-control-checkout"
                    aria-label="durasi-label"
                    id="inputDurasi"
                  >
                    <option defaultChecked value="1">
                      Rp. 500.000 - 1 jam
                    </option>
                    <option value="2">Rp. 1000.000 - 3 jam</option>
                    <option value="3">Rp. 1500.000 - 4 jam</option>
                  </select>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputTanggal">Tanggal Sewa</label>
                  <input
                    type="date"
                    className="form-control form-control-checkout"
                    id="inputTanggal"
                  />
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <Link to="/syncphonic-frontend/studio/1">
                      <button type="button" className="btn btn-batal py-2">
                        Batal
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <button type="submit" className="btn btn-checkout py-2">
                      Checkout
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
