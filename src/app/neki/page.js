"use client";
import BaseButton from "../components/UI/BaseButton/BaseButton";

export default function neki() {
  const sendMail = async (e) => {
    e.preventDefault();
    let subject = "neki";
    let message = "neki 2";

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ subject, message }),
    });
    console.log(await response.json());
  };

  return (
    <div className="base-container pt-5 mt-5">
      {/* <button className="btn btn-success" onClick={send}>
        Send mail
      </button> */}
      {/* <BaseButton onClick={send}>Send mail</BaseButton> */}
      <form onSubmit={sendMail}>
        <BaseButton type="submit" className="btn btn-success">
          Send second mail
        </BaseButton>
      </form>
    </div>
  );
}
