import * as Brevo from "@getbrevo/brevo";

const sendEmail = async (userEmail, booking) => {
  try {
    console.log("Function sendEmail called with:", userEmail);

    // 1️⃣ Initialize API client
    const apiClient = new Brevo.ApiClient({
      apiKey: process.env.BREVO_API_KEY,
    });

    // 2️⃣ Create TransactionalEmailsApi instance
    const client = new Brevo.TransactionalEmailsApi(apiClient);

    // 3️⃣ Prepare email data
    const emailData = {
      sender: { email: process.env.SENDER_EMAIL, name: "Car Rental" },
      to: [{ email: userEmail }],
      subject: "Booking Confirmed 🎉",
      htmlContent: `
        <div style="text-align:center; margin-bottom:20px;">
          <img src="https://car-rental-cyan-delta.vercel.app/favicon.png" width="100"/>
        </div>
        <h2>Booking Successful 🎉</h2>
        <p>Your booking is confirmed.</p>
        <h3>Details:</h3>
        <ul>
          <li>Car: ${booking.car?.brand || ""} ${booking.car?.model || ""}</li>
          <li>Pickup: ${new Date(booking.pickupDate).toLocaleDateString()}</li>
          <li>Return: ${new Date(booking.returnDate).toLocaleDateString()}</li>
          <li>Total: $${booking.price}</li>
        </ul>
        <p>Thank you 🚗</p>
      `,
    };

    // 4️⃣ Send email
    await client.sendTransacEmail(emailData);
    console.log("✅ Email sent successfully");

  } catch (error) {
    console.error("❌ Email error:", error.message);
  }
};

export default sendEmail;