import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { publicRequest } from "../../../requestMethods";
import { instrumentDetailStart } from "../../../redux/instrumentRedux";
import Spinner from "../../../components/Spinner";

import "./style.css";

const Detail = () => {
  const instrument = useSelector(
    (state) =>
      state.instrument &&
      state.instrument.detailInstrument &&
      state.instrument.detailInstrument.result
  );
  const dispatch = useDispatch();
  let { id } = useParams();

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const getInstrumentDetail = async (dispatch) => {
      try {
        const res = await publicRequest.get(`/instrument/${id}`);
        dispatch(instrumentDetailStart(res.data));
      } catch (err) {
        console.log(err.message);
      }
    };
    getInstrumentDetail(dispatch);
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  return spinner ? (
    <Spinner />
  ) : (
    <div>
      <div className="bg-color-instrument-detail">
        <div className="row justify-content-center g-0 px-1 py-4 instrument-detail-list-container">
          {instrument && console.log(instrument)}
          <div className="row justify-content-between">
            <div className="align-items-center col-8 col-md-3 px-0 my-auto">
              <h1 className="align-items-center my-auto instrument-detail-text-title">
                {instrument && instrument.instrument_name}
              </h1>
            </div>
            <div className="col-4 col-md-2 text-end px-0">
              <button
                className={`btn ${
                  (instrument &&
                    instrument.instrument_status.toLowerCase() ===
                      "available") ||
                  (instrument &&
                    instrument.instrument_status.toLowerCase() === "tersedia")
                    ? "instrument-detail-btn-status"
                    : "instrument-detail-btn-status-close"
                }`}
              >
                {instrument && instrument.instrument_status}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 px-0 pt-3">
              <img
                src={instrument && instrument.instrument_img.replace('"', "")}
                alt="instrument"
                className="img-fluid instrument-detail-img-banner"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-5 col-6 px-0">
              <div className="row">
                <div className="col-md-12">
                  <p className="instrument-detail-text-desc">Harga</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="instrument-detail-text-title margin-up">
                    {`Rp.${instrument && instrument.instrument_price}/Hari`}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6 px-0">
              <div className="row">
                <div className="col-md-12">
                  <p className="instrument-detail-text-desc">Kategori</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="instrument-detail-text-title margin-up">
                    {instrument && instrument.instrument_brand}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 px-0">
              <Link
                to={`${
                  (instrument &&
                    instrument.instrument_status.toLowerCase() ===
                      "available") ||
                  (instrument &&
                    instrument.instrument_status.toLowerCase() === "tersedia")
                    ? `/syncphonic-frontend/instrument/checkout/${id}`
                    : `/syncphonic-frontend/instrument/${id}`
                }`}
              >
                <button
                  type="button"
                  className={`btn py-3 ${
                    (instrument &&
                      instrument.instrument_status.toLowerCase() ===
                        "available") ||
                    (instrument &&
                      instrument.instrument_status.toLowerCase() === "tersedia")
                      ? "instrument-detail-btn-sewa"
                      : "instrument-detail-btn-sewa-close"
                  }`}
                >
                  Sewa Instrument
                </button>
              </Link>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-12 px-0">
              <p className="instrument-detail-text-title mb-3">Deskripsi</p>
              <p className="instrument-detail-text-desc">
                {instrument && instrument.instrument_desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
