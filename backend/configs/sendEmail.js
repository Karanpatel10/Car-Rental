const sendEmail = async (userEmail, booking) => {
  try {
    console.log("📧 Sending email to:", userEmail);

    const frontend_url = process.env.FRONTEND_URL;
    const logo_url = `${frontend_url}/logo.png`; // Ensure your logo is the same as in your image

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width:600px; margin:0 auto; padding:0; background-color:#f5f7fa; border-radius:8px; overflow:hidden;">

        <!-- Header with Banner Image -->
        <div style="background-color:#0c1f3c; text-align:center; padding:20px;">
          <img src="${logo_url}" alt="SafeRide Logo" style="width:150px; height:auto; margin-bottom:10px;"/>
          <h1 style="color:#fff; font-size:28px; margin:0;">SafeRide</h1>
          <p style="color:#f0f0f0; font-size:14px; margin:5px 0;">Rent a Car</p>
        </div>

        <!-- Confirmation Message -->
        <div style="text-align:center; padding:30px 20px;">
          <h2 style="color:#0c1f3c; font-size:24px; margin-bottom:10px;">✅ Booking Confirmed! 🎉</h2>
          <p style="color:#555; font-size:16px; margin:0;">Your car is ready for your trip. 🚗</p>
        </div>

        <!-- Booking Details -->
        <div style="background-color:#fff; margin:0 20px 20px 20px; padding:20px; border-radius:8px; border:1px solid #e0e0e0;">
          <h3 style="color:#0c1f3c; margin-top:0; margin-bottom:15px;">Booking Details</h3>
          <table style="width:100%; border-collapse:collapse; font-size:16px; color:#333;">
            <tr>
              <td style="padding:8px; font-weight:bold;">Car:</td>
              <td style="padding:8px;">${booking?.car?.brand ?? "N/A"} ${booking?.car?.model ?? ""}</td>
            </tr>
            <tr style="background-color:#f9f9f9;">
              <td style="padding:8px; font-weight:bold;">Pickup Date:</td>
              <td style="padding:8px;">${booking?.pickupDate ? new Date(booking.pickupDate).toLocaleDateString() : "N/A"}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:bold;">Return Date:</td>
              <td style="padding:8px;">${booking?.returnDate ? new Date(booking.returnDate).toLocaleDateString() : "N/A"}</td>
            </tr>
            <tr style="background-color:#f9f9f9;">
              <td style="padding:8px; font-weight:bold;">Total:</td>
              <td style="padding:8px; color:green;">$${booking?.price ?? 0}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:bold;">Booking ID:</td>
              <td style="padding:8px;">${booking?.id ?? "N/A"}</td>
            </tr>
          </table>

          <!-- View Booking Button -->
          <div style="text-align:center; margin-top:20px;">
            <a href="${frontend_url}/my-bookings" style="background-color:#0c1f3c; color:#fff; text-decoration:none; padding:12px 25px; border-radius:5px; font-weight:bold; display:inline-block;">
              View Booking
            </a>
          </div>
        </div>

        <!-- Footer -->
        <p style="text-align:center; font-size:14px; color:#888; margin:20px;">
          Thank you for choosing <b>SafeRide</b> 🚗<br>
          Need help? <a href="mailto:support@saferide.com" style="color:#0c1f3c;">Contact Support</a>
        </p>
      </div>
    `;

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { email: process.env.SENDER_EMAIL, name: "SafeRide" },
        to: [{ email: userEmail }],
        subject: "Booking Confirmed 🎉",
        htmlContent,
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
    console.error("❌ Email failed:", error.response?.data || error.message);
  }
};

export default sendEmail;