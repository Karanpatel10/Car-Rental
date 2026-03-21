import Brevo from "@getbrevo/brevo";

const sendBookingEmail = async (userEmail, booking) => {
  try {
    const apiInstance = new Brevo.TransactionalEmailsApi();

    apiInstance.setApiKey(
      Brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    const emailData = {
      sender: {
        email: process.env.SENDER_EMAIL,
        name: process.env.SENDER_NAME,
      },
      to: [{ email: userEmail }],
      subject: "Booking Confirmed 🎉",
      htmlContent: `

      <!-- LOGO -->
            <div style="text-align:center; margin-bottom:20px;">
            <img src="https://car-rental-cyan-delta.vercel.app/favicon.png" alt="Logo" width="120" />
            </div>

        <h2>Booking Successful 🎉</h2>
        <p>Your booking is confirmed.</p>

        <h3>Details:</h3>
        <ul>
          <li>Car: ${booking.car.brand} ${booking.car.model}</li>
          <li>Pickup: ${new Date(booking.pickupDate).toLocaleDateString()}</li>
          <li>Return: ${new Date(booking.returnDate).toLocaleDateString()}</li>
          <li>Total: $${booking.price}</li>
        </ul>

        <p>Thank you 🚗</p>
      `,
    };

    await apiInstance.sendTransacEmail(emailData);

    console.log("✅ Email sent");
  } catch (error) {
    console.error("❌ Email error:", error.message);
  }
};

export default sendBookingEmail;