import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import qs from "qs";

import { publicRequest, bookingRequest } from "../../../requestMethods";
import {
  instrumentDetailStart,
  instrumentBookingStart,
} from "../../../redux/instrumentRedux";
import Spinner from "../../../components/Spinner";

import "./style.css";
import imgStudioCheckoutBanner from "../../../assets/images/studio-checkout-banner.png";

const Checkout = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [durationSelector, setDurationSelector] = useState(1);
  const [spinner, setSpinner] = useState(true);

  const user = useSelector(
    (state) =>
      state.user && state.user.currentUser && state.user.currentUser.users
  );
  const instrument = useSelector(
    (state) =>
      state.instrument &&
      state.instrument.detailInstrument &&
      state.instrument.detailInstrument.result
  );
  const dispatch = useDispatch();
  let history = useHistory();
  let { id } = useParams();

  const booked = async (dispatch, data) => {
    console.log(data);
    try {
      const res = await bookingRequest.post(
        "/booking/instrument/add",
        qs.stringify(data)
      );
      console.log(qs.stringify(data));
      dispatch(instrumentBookingStart(res.data));
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Yes...",
        text: "Berhasil sewa instrument!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          reset();
          history.push("/syncphonic-frontend/dashboard/pesanan");
        }, 100);
      });
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal sewa instrument!",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Coba lagi",
        timer: 3000,
      });
    }
  };

  const handleClickBooking = ({
    name = user.name,
    instrument_name = instrument.instrument_name,
    instrument_price = instrument.instrument_price,
    date,
    duration,
    instrument_id = instrument.id,
    user_id = user.id,
    total = instrument.instrument_price * durationSelector,
    email = user.email,
  }) => {
    booked(dispatch, {
      name,
      instrument_name,
      instrument_price,
      date,
      duration,
      instrument_id,
      user_id,
      total,
      email,
    });
  };

  useEffect(() => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Oops ... Anda belum masuk",
        text: "Silahkan masuk terlebih dahulu!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          history.push("/syncphonic-frontend/masuk");
        }, 100);
      });
      history.push("/syncphonic-frontend/masuk");
    }

    if (user) {
      window.scrollTo(0, 0);
      setTimeout(() => setSpinner(false), 1000);
    }
  }, [history, user]);

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

  return spinner ? (
    <Spinner />
  ) : (
    <div>
      <div className="bg-color-checkout py-2">
        <div className="justify-content-center g-0 py-4 checkout-container">
          <div className="row bg-color-checkout-row m-3">
            <div className="col-md-5 px-0">
              <img
                src={imgStudioCheckoutBanner}
                alt="checkout"
                className="img-fluid img-hero-checkout"
              />
            </div>
            <div className="col-md-7 px-3 py-4">
              <p className="checkout-title">Sewa Instrument</p>
              <form onSubmit={handleSubmit(handleClickBooking)}>
                <div className="form-group">
                  <label className="fw-bolder" htmlFor="inputNamaLengkap">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-checkout"
                    id="inputNamaLengkap"
                    disabled
                    value={(user && user.name) || ""}
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputEmail">Email</label>
                  <input
                    type="text"
                    className="form-control form-control-checkout"
                    id="inputEmail"
                    disabled
                    value={(user && user.email) || ""}
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="fw-bolder" htmlFor="inputNamaInstrument">
                    Nama Instrument
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-checkout"
                    id="inputNamaInstrument"
                    disabled
                    value={(instrument && instrument.instrument_name) || ""}
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="fw-bolder" htmlFor="inputHargaInstrument">
                    Harga Instrument
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-checkout"
                    id="inputHargaInstrument"
                    disabled
                    value={(instrument && instrument.instrument_price) || ""}
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="fw-bolder" htmlFor="inputTanggal">
                    Tanggal Sewa
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-checkout"
                    id="inputTanggal"
                    {...register("date", {
                      required: true,
                    })}
                  />
                  {errors.date && errors.date.type === "required" && (
                    <p className="error">Tanggal Sewa wajib diisi</p>
                  )}
                </div>
                <div className="form-group mt-3">
                  <label className="fw-bolder" htmlFor="inputDurasi">
                    Durasi
                  </label>
                  <select
                    className="form-select form-control-checkout"
                    aria-label="durasi-label"
                    id="inputDurasi"
                    {...register("duration")}
                    onChange={(e) => setDurationSelector(e.target.value)}
                  >
                    <option defaultChecked value="1">
                      1 hari
                    </option>
                    <option value="2">2 hari</option>
                    <option value="3">3 hari</option>
                  </select>
                </div>
                <div className="form-group mt-3">
                  <label className="fw-bolder" htmlFor="inputTotal">
                    Total
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-checkout"
                    id="inputTotal"
                    name="total"
                    disabled
                    value={
                      (instrument &&
                        instrument.instrument_price * durationSelector) ||
                      ""
                    }
                  />
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <Link to={`/syncphonic-frontend/instrument/${id}`}>
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
