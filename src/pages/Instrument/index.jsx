import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { publicRequest } from "../../requestMethods";
import { instrumentStart } from "../../redux/instrumentRedux";
import Spinner from "../../components/Spinner";

import "./style.css";
import { FcClearFilters } from "react-icons/fc";
import imgStudioBanner from "../../assets/images/studio-banner.png";
import imgAlatBanner from "../../assets/images/alat-banner.png";

const Instrument = () => {
  const instruments = useSelector(
    (state) => state.instrument && state.instrument.allInstrument
  );
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(true);
  const [results, setResults] = useState(instruments);
  const countPerPage = 3;
  const [count, setCount] = useState(countPerPage);

  const handleChangeStatus = (e) => {
    if (e.target.value) {
      setResults(
        results &&
          results.filter(
            (result) =>
              result.instrument_status.toLowerCase() ===
              e.target.value.toLowerCase()
          )
      );
    } else {
      setResults(instruments && instruments);
    }
    setCount(countPerPage);
  };

  const handleChangeCategory = (e) => {
    if (e.target.value) {
      setResults(
        results &&
          results.filter(
            (result) =>
              result.instrument_brand.toLowerCase() ===
              e.target.value.toLowerCase()
          )
      );
    } else {
      setResults(instruments && instruments);
    }
    setCount(countPerPage);
  };

  const handleChangeCapacity = (e) => {
    if (e.target.value) {
      setResults(
        results &&
          results.filter(
            (result) => result.instrument_count <= parseInt(e.target.value)
          )
      );
    } else {
      setResults(instruments && instruments);
    }
    setCount(countPerPage);
  };

  const handleChangeName = (e) => {
    setResults(instruments && instruments);
    if (e.target.value) {
      setTimeout(() => {
        setResults(
          results &&
            results.filter((result) =>
              result.instrument_name
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            )
        );
      }, 500);
    }
    setCount(countPerPage);
  };

  const handleLoadReset = () => {
    setResults(instruments && instruments);
    setCount(countPerPage);
    setSpinner(true);
    setTimeout(() => setSpinner(false), 1000);
  };

  const handleLoadMore = () => {
    setCount(instruments && count < results.length && count + countPerPage);
  };

  useEffect(() => {
    const getInstrument = async (dispatch) => {
      try {
        const res = await publicRequest.get("/instrument");
        dispatch(instrumentStart(res.data));
      } catch (err) {
        console.log(err.message);
      }
    };
    getInstrument(dispatch);
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  useEffect(() => {
    setResults(instruments && instruments);
  }, [instruments]);

  return spinner ? (
    <Spinner />
  ) : (
    <div>
      <div className="bg-color-instrument">
        {instruments && console.log(results)}
        {/* {instruments && console.log(results.length)}
        {instruments && console.log(count)} */}
        <div className="row justify-content-center g-0 px-3 py-4 instrument-list-container">
          <div className="col-md-12">
            <div
              id="carouselCaption"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner carousel-border">
                <div className="carousel-item active" data-bs-interval="5000">
                  <img
                    src={imgAlatBanner}
                    alt="carousel"
                    className="d-block instrument-carousel-img mx-auto"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                  <img
                    src={imgStudioBanner}
                    alt="carousel"
                    className="d-block instrument-carousel-img mx-auto"
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
        <div className="mt-3 g-0 px-3 py-0 instrument-list-container">
          <h1 className="page-title">Sewa Instrument</h1>
        </div>
        <div className="row mt-0 justify-content-center g-0 px-3 py-0 instrument-list-container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 mx-auto mt-4 text-center">
                <div className="form-floating h-100">
                  <select
                    className="form-select h-100 text-center"
                    id="instrumentStatus"
                    aria-label="instrument-status"
                    onChange={handleChangeStatus}
                  >
                    <option defaultValue value="">
                      Semua
                    </option>
                    <option value="tersedia">Tersedia</option>
                    <option value="kosong">Kosong</option>
                  </select>
                  <label htmlFor="instrumentStatus">Pilih Status</label>
                </div>
              </div>
              <div className="col-md-4 mx-auto mt-4 text-center">
                <div className="form-floating h-100">
                  <select
                    className="form-select h-100 text-center"
                    id="instrumentCategory"
                    aria-label="instrument-category"
                    onChange={handleChangeCategory}
                  >
                    <option defaultValue value="">
                      Semua
                    </option>
                    <option value="elektrik">Elektrik</option>
                    <option value="digital">Digital</option>
                  </select>
                  <label htmlFor="instrumentCategory">Pilih Kategori</label>
                </div>
              </div>
              <div className="col-md-4 mx-auto mt-4 text-center">
                <div className="form-floating h-100">
                  <select
                    className="form-select h-100 text-center"
                    id="instrumentCapacity"
                    aria-label="instrument-capacity"
                    onChange={handleChangeCapacity}
                  >
                    <option defaultValue value="">
                      Semua
                    </option>
                    <option value="10">{"<"} 10 Barang</option>
                    <option value="20">{"<"} 20 Barang</option>
                    <option value="30">{"<"} 30 Barang</option>
                    <option value="40">{"<"} 40 Barang</option>
                    <option value="50">{"<"} 50 Barang</option>
                    <option value="100">{"<"} 100 Barang</option>
                  </select>
                  <label htmlFor="instrumentCapacity">Pilih Jumlah Ketersediaan Barang</label>
                </div>
              </div>
              <div className="col-md-6 mx-auto mt-4 text-center">
                <input
                  type="search"
                  className="form-control form-control-lg form-control-search h-100"
                  id="inputSearch"
                  placeholder='Cari "Keyboard" ⌨'
                  onChange={handleChangeName}
                />
              </div>
              <div className="col-md-6 mx-auto mt-4 text-center">
                <button
                  className="btn instrument-load-more py-3 h-100"
                  type="button"
                  onClick={handleLoadReset}
                >
                  Reset Filter
                  <FcClearFilters className="instrument-icon-filter" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 instrument-list-container">
          <div className="col-md-12">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {results && results.length !== 0 ? (
                results.slice(0, count).map((instrument) => (
                  <div className="col" key={instrument.id}>
                    <div className="card instrument-card p-2 m-1 my-auto">
                      <div className="row px-2 mt-2">
                        <div className="col-md-12">
                          <p className="instrument-card-title">
                            {instrument.instrument_name}
                          </p>
                        </div>
                      </div>
                      <div className="row px-2">
                        <div className="col-lg-6 col-md-6 col-6 my-auto">
                          <button
                            className={`btn ${
                              instrument.instrument_status.toLowerCase() ===
                                "available" ||
                              instrument.instrument_status.toLowerCase() ===
                                "tersedia"
                                ? "instrument-card-btn-status"
                                : "instrument-card-btn-status-close"
                            }`}
                          >
                            {instrument.instrument_status}
                          </button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 text-end my-auto">
                          <p className="instrument-card-capacity my-auto">
                            {instrument.instrument_brand}
                          </p>
                        </div>
                      </div>
                      <div className="row px-2 mt-3">
                        <div className="col-md-12">
                          <img
                            src={instrument.instrument_img.replace('"', "")}
                            alt="card"
                            className="img-fluid instrument-card-img"
                          />
                        </div>
                      </div>
                      <div className="row px-2 mt-2">
                        <div className="col-lg-7 col-sm-6">
                          <div className="row">
                            <div className="col-md-12">
                              <p className="instrument-card-capacity">Harga</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <p className="instrument-card-desc-price">
                                {`Rp.${instrument.instrument_price}/Hari`}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 col-sm-6 text-end">
                          <Link
                            to={`/syncphonic-frontend/instrument/${instrument.id}`}
                          >
                            <button
                              className="btn instrument-card-btn-detail"
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
                      <p className="instrument-data-null text-center">
                        Tidak ada data
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row mt-4 instrument-list-container">
          <div className="col-md-3 mx-auto text-center">
            {results && count < results.length && (
              <button
                className="btn instrument-load-more py-3 mb-4"
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

export default Instrument;
