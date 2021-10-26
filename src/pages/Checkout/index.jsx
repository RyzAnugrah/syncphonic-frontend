import React, { useEffect } from "react";
import "./style.css";

import imgCta from "../../assets/images/homepage-cta.png";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="container-fluid bg-color-checkout py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="checkout-text-title">Checkout</p>
            </div>
            <div className="col-md-12">
              <img src={imgCta} alt="studio" className="img-fluid" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-2 mt-4">
              <button className="btn checkout-btn-user">10 Orang</button>
            </div>
            <div className="col-md-2 mt-4">
              <button className="btn checkout-btn-status">Available</button>
            </div>
            <div className="col-md-4 mt-3">
              <p className="checkout-desc-price">Rp.500.000/Jam</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <p className="checkout-desc-spec">
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
                donec purus arcu mattis sapien.
              </p>
            </div>
            <div className="col-md-5 offset-md-1 mt-4">
              <p className="checkout-form-title">Checkout Sewa</p>
              <div className="row bg-color-form-row p-4">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-3">
                      <p className="checkout-text">Hari</p>
                    </div>
                    <div className="col-1">
                      <p className="checkout-text">:</p>
                    </div>
                    <div className="col-8">
                      <p className="checkout-text">20-10-2021</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <p className="checkout-text">Durasi</p>
                    </div>
                    <div className="col-1">
                      <p className="checkout-text">:</p>
                    </div>
                    <div className="col-8">
                      <p className="checkout-text">1 jam</p>
                    </div>
                  </div>
                  <form>
                    <button type="submit" className="btn btn-checkout">
                      Checkout
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

export default Checkout;
