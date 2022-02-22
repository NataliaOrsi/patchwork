import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function Order() {
  const { t } = useTranslation();
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  function afterOrder(response) {}

  function updateEmail(event) {
    setEmail(event.target.value);
  }

  function updateMessage(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleOrder();
  }

  function handleOrder() {
    let APIurl = "http://0.0.0.0:5000/order";
    let orderData = { email: email, message: message };
    axios.post(APIurl, orderData).then(afterOrder);
  }

  return (
    <div className="Order">
      <section className="header">
        <h2>{t("orderPage.title")}</h2>
      </section>
      <section className="d-flex justify-content-center">
        <div className="order-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3 text-center">
              <label for="exampleFormControlInput1" className="mb-1">
                {t("orderPage.email")}
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={updateEmail}
              ></input>
            </div>
            <div className="form-group mb-3 text-center">
              <label for="exampleFormControlTextarea1" className="mb-1">
                {t("orderPage.order")}
              </label>
              <textarea
                className="form-control order-text-area"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={updateMessage}
              ></textarea>
            </div>
            <button type="submit">
              <a
                href="mailto:ivanetedemesquita@hotmail.com"
                title="Send an e-mail to Ivanete"
              >
                Submit
              </a>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
