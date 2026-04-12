const nodemailer = require('nodemailer');

// Configure the email transport using SMTP (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use 'gmail' or configure custom SMTP host/port
  auth: {
    user: process.env.EMAIL_USER || 'placeholder@gmail.com',
    pass: process.env.EMAIL_PASS || 'placeholder_app_password'
  }
});

/**
 * Sends a stylized Welcome Email to newly registered agents.
 * @param {string} to - The recipient's email address
 * @param {string} name - The recipient's name or alias
 */
const sendWelcomeEmail = async (to, name) => {
  try {
    const htmlContent = `
      <div style="background-color: #10131c; color: #00ffcc; font-family: 'Courier New', Courier, monospace; padding: 40px; text-align: center; border: 1px solid #00ffcc;">
        <h1 style="color: #00ffcc; text-shadow: 0 0 10px #00ffcc;">SYSTEM INITIALIZED</h1>
        <p style="font-size: 16px; color: #a4b0c0;">Welcome to the matrix, Agent <strong style="color: #fff;">${name}</strong>.</p>
        <div style="margin: 30px 0;">
          <p style="font-size: 14px; color: #a4b0c0;">You have successfully initialized your profile at Pico Elite Academy.</p>
          <p style="font-size: 14px; color: #a4b0c0;">Prepare your mind. Your training in DSA, Web Development, and Advanced Architectures begins now.</p>
        </div>
        <a href="https://pico-academy.vercel.app/" style="background-color: transparent; color: #00ffcc; border: 1px solid #00ffcc; padding: 12px 24px; text-decoration: none; font-weight: bold; display: inline-block; text-transform: uppercase; letter-spacing: 2px;">Access Terminal</a>
        <p style="margin-top: 40px; font-size: 10px; color: #555;">> End of transmission.</p>
      </div>
    `;

    const mailOptions = {
      from: `"Pico Elite Academy" <${process.env.EMAIL_USER || 'no-reply@pico-academy.com'}>`,
      to,
      subject: 'Welcome to the Matrix - Pico Elite Academy',
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[Email System] Welcome email delivered to ${to} (${info.messageId})`);
    return info;
  } catch (error) {
    console.error(`[Email System Error] Failed to send email to ${to}:`, error.message);
    // Don't throw the error so that the registration flow doesn't break if email fails
  }
};

module.exports = {
  sendWelcomeEmail
};
