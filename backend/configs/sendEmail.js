import axios from "axios";

const sendEmail = async (userEmail, booking) => {
  try {
    console.log("📧 Sending email to:", userEmail);

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          email: process.env.SENDER_EMAIL,
          name: "Car Rental",
        },
        to: [{ email: userEmail }],
        subject: "Booking Confirmed 🎉",

        htmlContent: `
          <div style="font-family: Arial; padding:20px;">
            <h2>🚗 Booking Confirmed</h2>
            <p>Your booking is successful.</p>

            <h3>Details:</h3>
            <ul>
              <li><b>Car:</b> ${booking.car?.brand || ""} ${booking.car?.model || ""}</li>
              <li><b>Pickup:</b> ${new Date(booking.pickupDate).toLocaleDateString()}</li>
              <li><b>Return:</b> ${new Date(booking.returnDate).toLocaleDateString()}</li>
              <li><b>Total:</b> $${booking.price}</li>
            </ul>

            <p>Thank you for choosing us 🚗</p>
          </div>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Email sent successfully:", response.data);

  } catch (error) {
    console.error(
      "❌ Email failed:",
      error.response?.data || error.message
    );
  }
};

export default sendEmail;