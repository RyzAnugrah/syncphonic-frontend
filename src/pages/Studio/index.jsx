import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { publicRequest } from "../../requestMethods";
import { studioStart } from "../../redux/studioRedux";
import Spinner from "../../components/Spinner";

import "./style.css";
import { FaSearch } from "react-icons/fa";
import imgStudioBanner from "../../assets/images/studio-banner.png";
import imgAlatBanner from "../../assets/images/alat-banner.png";
import imgStudioCard1 from "../../assets/images/studio-card-1.png";
// import imgStudioCard from "../../assets/images/studio-card-2.png";
// import imgStudioCard from "../../assets/images/studio-card-3.png";

const Studio = () => {
  const studios = useSelector((state) => state.studio.allStudio);
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(true);
  const [studiosResults, setStudiosResults] = useState([]);

  const handleChangeStatus = (e) => {
    setStudiosResults(studios && studios);
    if (e.target.value) {
      setStudiosResults(
        studios &&
          studios.filter(
            (studio) =>
              studio.studio_status.toLowerCase() ===
              e.target.value.toLowerCase()
          )
      );
    }
  };

  const handleChangeDay = (e) => {
    setStudiosResults(studios && studios);
    if (e.target.value) {
      setStudiosResults(
        studios &&
          studios.filter(
            (studio) =>
              studio.studio_available_day.toLowerCase() ===
              e.target.value.toLowerCase()
          )
      );
    }
  };

  const handleChangeName = (e) => {
    console.log(e.target.value);
    setStudiosResults(studios && studios);
    if (e.target.value) {
      setStudiosResults(
        studios &&
          studios.filter((studio) =>
            studio.studio_name
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          )
      );
    }
  };

  useEffect(() => {
    const getStudio = async (dispatch) => {
      try {
        const res = await publicRequest.get("/studio");
        dispatch(studioStart(res.data));
      } catch (err) {
        console.log(err.message);
      }
    };

    getStudio(dispatch);
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  useEffect(() => {
    setStudiosResults(studios && studios);
  }, [studios]);

  return spinner ? (
    <Spinner />
  ) : (
    <div>
      <div className="container-fluid bg-color-studio py-4">
        {/* {studios && console.log(studios)}
        {studios && console.log(studiosResults)} */}
        <div className="row">
          <div className="col-md-12">
            <div
              id="carouselCaption"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={imgStudioBanner}
                    alt="carousel"
                    className="d-block studio-carousel-img mx-auto"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={imgAlatBanner}
                    alt="carousel"
                    className="d-block studio-carousel-img mx-auto"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselCaption"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselCaption"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-4 studio-list-container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3 mx-auto mt-4 text-center">
                <div className="form-floating">
                  <select
                    className="form-select text-center"
                    id="studioStatus"
                    aria-label="studio-status"
                    onChange={handleChangeStatus}
                  >
                    <option defaultValue value="">
                      Semua
                    </option>
                    <option value="buka">Buka</option>
                    <option value="tutup">Tutup</option>
                  </select>
                  <label htmlFor="studioStatus">Pilih Status Studio</label>
                </div>
              </div>
              <div className="col-md-3 mx-auto mt-4 text-center">
                <div className="form-floating">
                  <select
                    className="form-select text-center"
                    id="studioHari"
                    aria-label="studio-hari"
                    onChange={handleChangeDay}
                  >
                    <option defaultValue value="">
                      Semua
                    </option>
                    <option value="senin">Senin</option>
                    <option value="selasa">Selasa</option>
                    <option value="rabu">Rabu</option>
                    <option value="kamis">Kamis</option>
                    <option value="jumat">Jumat</option>
                    <option value="sabtu">Sabtu</option>
                    <option value="minggu">Minggu</option>
                  </select>
                  <label htmlFor="studioHari">Pilih Ketersediaan Hari</label>
                </div>
              </div>
              <div className="col-md-3 mx-auto mt-4 text-center">
                <form>
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control form-control-search"
                          id="inputSearch"
                          placeholder="studio-rock"
                          onChange={handleChangeName}
                        />
                        <label htmlFor="inputSearch">
                          Coba Cari "Studio Rock"
                        </label>
                      </div>
                      <span className="input-group-text">
                        <FaSearch />
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 studio-list-container">
          <div className="col-md-12">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {studiosResults &&
                studiosResults.map((studio) => (
                  <div className="col" key={studio.id}>
                    <div className="card studio-card p-2 m-2">
                      <div className="row px-2 mt-2">
                        <div className="col-md-12">
                          <p className="studio-card-title">
                            {studio.studio_name}
                          </p>
                        </div>
                      </div>
                      <div className="row px-2">
                        <div className="col-4">
                          <button
                            className={`btn ${
                              studio.studio_status.toLowerCase() === "open" ||
                              studio.studio_status.toLowerCase() === "buka"
                                ? "studio-card-btn-status"
                                : "studio-card-btn-status-close"
                            }`}
                          >
                            {studio.studio_status}
                          </button>
                        </div>
                        <div className="col-8 text-end">
                          <p className="studio-card-capacity">
                            {`Kapasitas ${studio.studio_capacity} Orang`}
                          </p>
                        </div>
                      </div>
                      <div className="row px-2 mt-2">
                        <div className="col-md-12">
                          <img
                            src={imgStudioCard1}
                            alt="card"
                            className="img-fluid studio-card-img"
                          />
                        </div>
                      </div>
                      <div className="row px-2 mt-2">
                        <div className="col-7">
                          <div className="row">
                            <div className="col-md-12">
                              <p className="studio-card-capacity">Harga</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <p className="studio-card-desc-price">
                                {`Rp.${studio.studio_price}/Jam`}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-5 text-end">
                          <Link to={`/syncphonic-frontend/studio/${studio.id}`}>
                            <button
                              className="btn studio-card-btn-detail"
                              type="button"
                            >
                              Detail
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="row mt-4 studio-list-container">
          <div className="col-md-2 mx-auto text-center">
            <button className="btn studio-load-more py-3" type="button">
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
