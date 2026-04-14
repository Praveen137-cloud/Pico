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
 * Sends a welcome email after successful verification.
 */
const sendWelcomeEmail = async (to, name) => {
  try {
    const htmlContent = `
      <div style="background-color: #0b0e14; color: #fbbf24; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; border: 2px solid #fbbf24; max-width: 600px; margin: auto;">
        <h1 style="text-align: center; letter-spacing: 4px; border-bottom: 1px solid #fbbf24; padding-bottom: 20px;">WELCOME TO THE ELITE</h1>
        <p style="font-size: 16px; line-height: 1.6;">Agent <strong>${name}</strong>, your synchronization is complete.</p>
        <p style="font-size: 14px; color: #8892b0;">You have successfully initialized your presence in the Pico Elite Matrix. Access to advanced DSA modules, seasonal events, and global leaderboards is now authorized.</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://pico-sooty.vercel.app" style="background: #fbbf24; color: #000; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: 900; letter-spacing: 1px;">INITIALIZE DASHBOARD</a>
        </div>

        <footer style="margin-top: 40px; border-top: 1px solid #30363d; padding-top: 20px; text-align: center; font-size: 10px; color: #8892b0;">
          PICO ELITE ACADEMY // OPERATIONAL READINESS
        </footer>
      </div>
    `;

    await transporter.sendMail({
      from: `"Pico Elite Academy" <${process.env.EMAIL_USER}>`,
      to,
      subject: 'WELCOME: Your Access is Authorized',
      html: htmlContent
    });
    console.log(`[Email] Welcome email sent to ${to}`);
  } catch (error) {
    console.error(`[Email Error] Failed to send welcome to ${to}:`, error.message);
  }
};

/**
 * Sends a 6-digit OTP for email verification during signup.
 */
const sendVerificationEmail = async (to, name, code) => {
  try {
    const htmlContent = `
      <div style="background-color: #0b0e14; color: #1dd28b; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; border: 2px solid #1dd28b; max-width: 600px; margin: auto;">
        <h1 style="text-align: center; letter-spacing: 4px; border-bottom: 1px solid #1dd28b; padding-bottom: 20px;">VERIFICATION REQUIRED</h1>
        <p style="font-size: 16px; line-height: 1.6;">Greetings, Agent <strong>${name}</strong>.</p>
        <p style="font-size: 14px; color: #8892b0;">To initialize your access to the Pico Elite Matrix, please enter the following synchronization code:</p>
        
        <div style="background: #161b22; padding: 20px; text-align: center; border-radius: 8px; margin: 30px 0;">
          <span style="font-size: 32px; font-weight: 900; letter-spacing: 12px; color: #fff; text-shadow: 0 0 10px #1dd28b;">${code}</span>
        </div>

        <p style="font-size: 12px; color: #555; text-align: center;">This code will expire in 15 minutes. If you did not request this, please ignore this transmission.</p>
        <footer style="margin-top: 40px; border-top: 1px solid #30363d; padding-top: 20px; text-align: center; font-size: 10px; color: #8892b0;">
          PICO ELITE ACADEMY // SECURE ACCESS PROTOCOL
        </footer>
      </div>
    `;

    await transporter.sendMail({
      from: `"Pico Elite Academy" <${process.env.EMAIL_USER}>`,
      to,
      subject: 'ACTION REQUIRED: Verify Your Identity',
      html: htmlContent
    });
    console.log(`[Email] Verification code sent to ${to}`);
  } catch (error) {
    console.error(`[Email Error] Failed to send verification to ${to}:`, error.message);
  }
};

/**
 * Sends a 6-digit OTP for password recovery.
 */
const sendPasswordResetEmail = async (to, name, code) => {
  try {
    const htmlContent = `
      <div style="background-color: #0b0e14; color: #ec4899; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; border: 2px solid #ec4899; max-width: 600px; margin: auto;">
        <h1 style="text-align: center; letter-spacing: 4px; border-bottom: 1px solid #ec4899; padding-bottom: 20px;">PASSWORD RECOVERY</h1>
        <p style="font-size: 16px; line-height: 1.6;">Security Alert for Agent <strong>${name}</strong>.</p>
        <p style="font-size: 14px; color: #8892b0;">A password reset was requested. Use the code below to authorize the override:</p>
        
        <div style="background: #161b22; padding: 20px; text-align: center; border-radius: 8px; margin: 30px 0;">
          <span style="font-size: 32px; font-weight: 900; letter-spacing: 12px; color: #fff; text-shadow: 0 0 10px #ec4899;">${code}</span>
        </div>

        <p style="font-size: 12px; color: #555; text-align: center;">If you did not request this reset, please change your credentials immediately.</p>
        <footer style="margin-top: 40px; border-top: 1px solid #30363d; padding-top: 20px; text-align: center; font-size: 10px; color: #8892b0;">
          PICO ELITE ACADEMY // SECURITY DIVISION
        </footer>
      </div>
    `;

    await transporter.sendMail({
      from: `"Pico Elite Academy" <${process.env.EMAIL_USER}>`,
      to,
      subject: 'SECURITY ALERT: Password Reset Code',
      html: htmlContent
    });
    console.log(`[Email] Recovery code sent to ${to}`);
  } catch (error) {
    console.error(`[Email Error] Failed to send recovery to ${to}:`, error.message);
  }
};

/**
 * Notifies the Admin of a successful payment.
 */
const sendAdminPaymentNotification = async (userName, email, amount, paymentId) => {
  try {
    const adminEmail = process.env.EMAIL_USER; // Primary admin
    const htmlContent = `
      <div style="background-color: #000; color: #fbbf24; font-family: monospace; padding: 30px; border: 1px solid #fbbf24;">
        <h2 style="border-bottom: 1px solid #fbbf24; padding-bottom: 10px;">\uD83D\uDCC8 NEW TRANSACTION RECEIVED</h2>
        <p><strong>User:</strong> ${userName} (${email})</p>
        <p><strong>Amount:</strong> ₹${amount}</p>
        <p><strong>Payment ID:</strong> ${paymentId}</p>
        <p><strong>Status:</strong> PREMIUM UNLOCKED</p>
        <p style="margin-top: 30px; font-size: 12px; color: #666;">View details in Razorpay Dashboard.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Pico Payment Bot" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: `\uD83D\uDCC8 Payment Alert: ₹${amount} from ${userName}`,
      html: htmlContent
    });
    console.log(`[Admin Alert] Payment notification sent for ${userName}`);
  } catch (error) {
    console.error(`[Admin Alert Error] Failed to notify admin:`, error.message);
  }
};

module.exports = {
  sendWelcomeEmail,
  sendVerificationEmail,
  sendPasswordResetEmail,
  sendAdminPaymentNotification
};
