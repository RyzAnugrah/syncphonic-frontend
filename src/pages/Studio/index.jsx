import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { publicRequest } from "../../requestMethods";
import { studioStart } from "../../redux/studioRedux";
import Spinner from "../../components/Spinner";

import "./style.css";
import { FcClearFilters } from "react-icons/fc";
import imgStudioBanner from "../../assets/images/studio-banner.png";
import imgAlatBanner from "../../assets/images/alat-banner.png";

const Studio = () => {
  const studios = useSelector(
    (state) => state.studio && state.studio.allStudio
  );
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(true);
  const [results, setResults] = useState(studios);
  const countPerPage = 3;
  const [count, setCount] = useState(countPerPage);

  const handleChangeStatus = (e) => {
    if (e.target.value) {
      setResults(
        results &&
          results.filter(
            (result) =>
              result.studio_status.toLowerCase() ===
              e.target.value.toLowerCase()
          )
      );
    } else {
      setResults(studios && studios);
    }
    setCount(countPerPage);
  };

  const handleChangeDay = (e) => {
    if (e.target.value) {
      setResults(
        results &&
          results.filter(
            (result) =>
              result.studio_available_day.toLowerCase() ===
              e.target.value.toLowerCase()
          )
      );
    } else {
      setResults(studios && studios);
    }
    setCount(countPerPage);
  };

  const handleChangeCapacity = (e) => {
    if (e.target.value) {
      setResults(
        results &&
          results.filter(
            (result) => result.studio_capacity <= parseInt(e.target.value)
          )
      );
    } else {
      setResults(studios && studios);
    }
    setCount(countPerPage);
  };

  const handleChangeName = (e) => {
    setResults(studios && studios);
    if (e.target.value) {
      setTimeout(() => {
        setResults(
          results &&
            results.filter((result) =>
              result.studio_name
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            )
        );
      }, 500);
    }
    setCount(countPerPage);
  };

  const handleLoadReset = () => {
    setResults(studios && studios);
    setCount(countPerPage);
    setSpinner(true);
    setTimeout(() => setSpinner(false), 1000);
  };

  const handleLoadMore = () => {
    setCount(studios && count < results.length && count + countPerPage);
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
    setResults(studios && studios);
  }, [studios]);

  return spinner ? (
    <Spinner />
  ) : (
    <div>
      <div className="bg-color-studio">
        {studios && console.log(results)}
        {/* {studios && console.log(results.length)}
        {studios && console.log(count)} */}
        <div className="row justify-content-center g-0 px-3 py-4 studio-list-container">
          <div className="col-md-12">
            <div
              id="carouselCaption"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner carousel-border">
                <div className="carousel-item active" data-bs-interval="5000">
                  <img
                    src={imgStudioBanner}
                    alt="carousel"
                    className="d-block studio-carousel-img mx-auto"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
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
        <div className="mt-3 g-0 px-3 py-0 studio-list-container">
          <h1 className="page-title">Sewa Studio</h1>
        </div>
        <div className="row mt-0 justify-content-center g-0 px-3 py-0 studio-list-container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 mx-auto mt-4 text-center">
                <div className="form-floating h-100">
                  <select
                    className="form-select h-100 text-center"
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
              <div className="col-md-4 mx-auto mt-4 text-center">
                <div className="form-floating h-100">
                  <select
                    className="form-select h-100 text-center"
                    id="studioDay"
                    aria-label="studio-day"
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
                  <label htmlFor="studioDay">Pilih Ketersediaan Hari</label>
                </div>
              </div>
              <div className="col-md-4 mx-auto mt-4 text-center">
                <div className="form-floating h-100">
                  <select
                    className="form-select h-100 text-center"
                    id="studioCapacity"
                    aria-label="studio-capacity"
                    onChange={handleChangeCapacity}
                  >
                    <option defaultValue value="">
                      Semua
                    </option>
                    <option value="10">{"<"} 10 Orang</option>
                    <option value="20">{"<"} 20 Orang</option>
                    <option value="30">{"<"} 30 Orang</option>
                    <option value="40">{"<"} 40 Orang</option>
                    <option value="50">{"<"} 50 Orang</option>
                    <option value="100">{"<"} 100 Orang</option>
                  </select>
                  <label htmlFor="studioCapacity">Pilih Kapasitas</label>
                </div>
              </div>
              <div className="col-md-6 mx-auto mt-4 text-center">
                <input
                  type="search"
                  className="form-control form-control-lg form-control-search h-100"
                  id="inputSearch"
                  placeholder='Cari "Studio Rock" ⌨'
                  onChange={handleChangeName}
                />
              </div>
              <div className="col-md-6 mx-auto mt-4 text-center">
                <button
                  className="btn studio-load-more py-3 h-100"
                  type="button"
                  onClick={handleLoadReset}
                >
                  Reset Filter
                  <FcClearFilters className="studio-icon-filter" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 studio-list-container">
          <div className="col-md-12">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {results && results.length !== 0 ? (
                results.slice(0, count).map((studio) => (
                  <div className="col" key={studio.id}>
                    <div className="card studio-card p-2 m-1 my-auto">
                      <div className="row px-2 mt-2">
                        <div className="col-md-12">
                          <p className="studio-card-title">
                            {studio.studio_name}
                          </p>
                        </div>
                      </div>
                      <div className="row px-2">
                        <div className="col-lg-4 col-md-6 col-6 my-auto">
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
                        <div className="col-lg-8 col-md-6 col-6 text-end my-auto">
                          <p className="studio-card-capacity my-auto">
                            {`Kapasitas ${studio.studio_capacity} Orang`}
                          </p>
                        </div>
                      </div>
                      <div className="row px-2 mt-3">
                        <div className="col-md-12">
                          <img
                            src={studio.studio_img.replace('"', "")}
                            alt="card"
                            className="img-fluid studio-card-img"
                          />
                        </div>
                      </div>
                      <div className="row px-2 mt-2">
                        <div className="col-lg-7 col-sm-6">
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
                        <div className="col-lg-5 col-sm-6 text-end">
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
                ))
              ) : (
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <p className="studio-data-null text-center">
                        Tidak ada data
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row mt-4 studio-list-container">
          <div className="col-md-3 mx-auto px-3 text-center">
            {results && count < results.length && (
              <button
                className="btn studio-load-more py-3 mb-4"
                type="button"
                onClick={handleLoadMore}
              >
                Load more
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
