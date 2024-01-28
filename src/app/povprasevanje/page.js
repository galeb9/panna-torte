"use client";

// import { sendMail } from "@/lib/mail";
import "./Povprasevanje.scss";
import Image from "next/image";
import BaseButton from "../components/UI/BaseButton/BaseButton";
import BaseSectionTitle from "../components/UI/BaseSectionTitle/BaseSectionTItle";
import sideImg from "../../../public/images/form/sideImg.png";
import { useState } from "react";

const products = require("../../../public/json/products.json");

export default function Povprasevanje() {
  const [notification, setNotification] = useState();

  const [formData, setFormData] = useState({
    product: "",
    ime: "",
    email: "",
    telefon: "",
    datumPrevzema: "",
    deliveryType: "",
    message: "",
  });

  console.log(products);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendMail({ formData });
  };
  const sendMail = async (formData) => {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // setNotification(response.message);
    console.log(await response.json());
  };

  return (
    <div className="povprasevanje mt-5 pt-5 d-flex base-container">
      <div className="form-img">
        <Image priority src={sideImg} alt={`Side cake image`} />
      </div>
      <div className="form-container flex-grow-1">
        <BaseSectionTitle text="Pošljite povpraševanje"></BaseSectionTitle>

        <form onSubmit={handleSubmit}>
          <div className="container my-4">
            <div className="row mb-4">
              <div className="col">
                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  placeholder="Izbran produkt"
                  onChange={handleChange}
                  className="form-input w-100 form-control"
                />
              </div>
              <div className="col">
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className=" form-select form-input w-100"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Select a product
                  </option>
                  {products.cakes.map((product) => (
                    <option key={product.id} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <input
                  type="text"
                  name="ime"
                  value={formData.ime}
                  placeholder="Vaše ime"
                  onChange={handleChange}
                  className="form-input w-100 form-control"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email (primer@gmail.com)"
                  onChange={handleChange}
                  className="form-input w-100 form-control"
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  placeholder="Telefon (123 345 567)"
                  onChange={handleChange}
                  className="form-input col-6 w-100 form-control"
                />
              </div>
              <div className="col"></div>
            </div>

            <div className="mb-3">
              <h5>Datum dostave/prevzema</h5>
              <input
                type="date"
                name="datumPrevzema"
                value={formData.datumPrevzema}
                placeholder="Željen datum prevzema/ dostave"
                onChange={handleChange}
                className="form-input col-6 w-50 form-control"
              />
            </div>
            <div className="form-radios-container py-2 mb-4">
              <h5>Način dostave</h5>
              <div className="d-flex  align-items-center gap-5">
                <div className="">
                  <label>
                    <input
                      type="radio"
                      name="deliveryType"
                      value="osebni prevzem"
                      checked={formData.deliveryType === "osebni prevzem"}
                      onChange={handleChange}
                      className="me-2 form-check-input"
                    />
                    Osebni prevzem
                    <a
                      target="_blank"
                      className="maps-link ms-1"
                      href="https://www.google.com/maps?q=1600 Amphitheatre Parkway, Mountain View, CA"
                    >
                      (naslov)
                    </a>
                  </label>
                </div>
                <div className="form-check d-flex align-items-center gap-2">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      name="deliveryType"
                      value="dostava"
                      checked={formData.deliveryType === "dostava"}
                      onChange={handleChange}
                      className="me-2 form-check-input"
                    />
                    Dostava
                  </label>
                  <input
                    type="text"
                    name="naslovDostave"
                    value={formData.naslovDostave}
                    placeholder="Vaš naslov"
                    onChange={handleChange}
                    className="form-input form-control"
                  />
                </div>
              </div>
            </div>

            {/* text area */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Vaše sporočilo nam:"
              />
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <BaseButton>Pošlji</BaseButton>
          </div>
          {/* {notification && (
            <div className={`notification ${notification.type}`}>
              {notification}
            </div>
          )} */}
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>

      {/* <from>
        <button formAction={send}>send mail</button>
      </from> */}
    </div>
  );
}
