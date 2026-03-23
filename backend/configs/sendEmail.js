import nodemailer from "nodemailer";

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.SENDER_USER,
    pass: process.env.SENDER_PASS,
  },
});

// Send an email using async/await
const sendEmail = async (userEmail, booking) => {
  console.log('Function sendEmail called with');
  console.log("Preparing to send email to:", userEmail);
  console.log("Booking details for email:", booking);
 try{
 const mailOptions = {
      from:process.env.SENDER_EMAIL,
      to: userEmail,
      subject: "Booking Confirmed 🎉",
      html: `

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

   const info=await transporter.sendMail(mailOptions);
    console.log("Email sent");
 }catch(error){
  console.error("Email error:", error.message);
 }
}

export default sendEmail;

