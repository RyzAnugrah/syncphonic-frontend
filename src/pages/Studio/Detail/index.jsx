import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { publicRequest } from "../../../requestMethods";
import { studioDetailStart } from "../../../redux/studioRedux";
import Spinner from "../../../components/Spinner";

import "./style.css";
import imgStudioDetailBanner from "../../../assets/images/studio-detail-banner.png";

const Detail = () => {
  const studio = useSelector(
    (state) => state.studio.detailStudio && state.studio.detailStudio.result
  );
  const dispatch = useDispatch();
  let { id } = useParams();

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const getStudioDetail = async (dispatch) => {
      try {
        const res = await publicRequest.get(`/studio/${id}`);
        dispatch(studioDetailStart(res.data));
      } catch (err) {
        console.log(err.message);
      }
    };
    getStudioDetail(dispatch);
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  return spinner ? (
    <Spinner />
  ) : (
    <div>
      <div className="container-fluid bg-color-studio-detail py-4">
        <div className="container">
          {studio && console.log(studio)}
          <div className="row justify-content-between">
            <div className="col-8 col-md-3">
              <p className="studio-detail-text-title">
                {studio && studio.studio_name}
              </p>
            </div>
            <div className="col-4 col-md-2 text-end">
              <button
                className={`btn ${
                  (studio && studio.studio_status.toLowerCase() === "open") ||
                  (studio && studio.studio_status.toLowerCase() === "buka")
                    ? "studio-card-btn-status"
                    : "studio-card-btn-status-close"
                }`}
              >
                {studio && studio.studio_status}
              </button>
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
                    {`Rp.${studio && studio.studio_price}/Jam`}
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
                  <p className="studio-detail-text-title margin-up">
                    {studio && studio.studio_available_day}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <Link
                to={`${
                  (studio && studio.studio_status.toLowerCase() === "open") ||
                  (studio && studio.studio_status.toLowerCase() === "buka")
                    ? `/syncphonic-frontend/studio/checkout/${id}`
                    : `/syncphonic-frontend/studio/${id}`
                }`}
              >
                <button
                  type="button"
                  className={`btn py-3 ${
                    (studio && studio.studio_status.toLowerCase() === "open") ||
                    (studio && studio.studio_status.toLowerCase() === "buka")
                      ? "studio-detail-btn-sewa"
                      : "studio-detail-btn-sewa-close"
                  }`}
                >
                  Sewa Studio
                </button>
              </Link>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-12">
              <p className="studio-detail-text-desc">
                {studio && studio.studio_desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
