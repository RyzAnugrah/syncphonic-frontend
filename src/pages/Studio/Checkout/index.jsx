import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import qs from "qs";

import { publicRequest, bookingRequest } from "../../../requestMethods";
import {
  studioDetailStart,
  studioBookingStart,
} from "../../../redux/studioRedux";

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

  const user = useSelector((state) => state.user.currentUser.users);
  const studio = useSelector((state) => state.studio.detailStudio.result);
  const dispatch = useDispatch();
  let history = useHistory();
  let { id } = useParams();

  const booked = async (dispatch, data) => {
    console.log(data);
    try {
      const res = await bookingRequest.post("/booking/studio/add", qs.stringify(data));
      console.log(qs.stringify(data));
      dispatch(studioBookingStart(res.data));
      console.log(res.data);
      reset();
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleClickBooking = ({
    name = user.name,
    studio_name = studio.studio_name,
    studio_price = studio.studio_price,
    date,
    duration,
    studio_id = studio.id,
    user_id = user.id,
    total = studio.studio_price * durationSelector,
  }) => {
    booked(dispatch, {
      name,
      studio_name,
      studio_price,
      date,
      duration,
      studio_id,
      user_id,
      total,
    });
  };

  useEffect(() => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Oops ... Anda belum masuk",
        text: "Silahkan masuk terlebih dahulu!",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Masuk",
        timer: 1500,
      });
      history.push("/syncphonic-frontend/masuk");
    }
  }, [history, user]);

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
              <form onSubmit={handleSubmit(handleClickBooking)}>
                <div className="form-group">
                  <label htmlFor="inputNamaLengkap">Nama Lengkap</label>
                  <input
                    type="text"
                    className="form-control form-control-checkout"
                    id="inputNamaLengkap"
                    disabled
                    value={user && user.name}
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputNamaStudio">Nama Studio</label>
                  <input
                    type="text"
                    className="form-control form-control-checkout"
                    id="inputNamaStudio"
                    name="studio_name"
                    disabled
                    value={studio && studio.studio_name}
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputNamaStudio">Harga Studio</label>
                  <input
                    type="text"
                    className="form-control form-control-checkout"
                    id="inputNamaStudio"
                    disabled
                    value={studio && studio.studio_price}
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputTanggal">Tanggal Sewa</label>
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
                  <label htmlFor="inputDurasi">Durasi</label>
                  <select
                    className="form-select form-control-checkout"
                    aria-label="durasi-label"
                    id="inputDurasi"
                    {...register("duration")}
                    onChange={(e) => setDurationSelector(e.target.value)}
                  >
                    <option defaultChecked value="1">
                      1 jam
                    </option>
                    <option value="2">2 jam</option>
                    <option value="3">3 jam</option>
                    <option value="24">1 hari</option>
                    <option value="168">1 minggu</option>
                  </select>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputNamaStudio">Total</label>
                  <input
                    type="text"
                    className="form-control form-control-checkout"
                    id="inputNamaStudio"
                    name="total"
                    disabled
                    value={studio && studio.studio_price * durationSelector}
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
