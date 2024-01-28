import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { formData } = await request.json();
  console.log("starts", formData);

  const myMail = "matej.grimsic@gmail.com";
  const myMailCode = "utwr bswl wmzu chzs";

  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: myMail,
        pass: myMailCode,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: formData.email,
      to: myMail,
      subject: `Povpraševanje za ${formData.product}`,
      html: `
      <h2>Povpraševanje za ${formData.product}</h2>
      <p>Ime stranke: ${formData.ime}</p>
      <p>Izdelek ${formData.product}</p>
      <p>Datum prevzema: ${formData.datumPrevzema}</p>
      <p>Način dostave: ${formData.deliveryType}</p>
      <p>Tel stranke: <a href="tel:+${formData.telefon}">${formData.telefon}</a></p>
      <p>${formData.message}</p>
      `,
    };

    await transport.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Greate success -Borat" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "ulov " + error }, { status: 500 });
  }
}
