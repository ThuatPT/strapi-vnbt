// File: ./utils/emailService.js
const nodemailer = require('nodemailer');
require('dotenv').config();
const sendEmail = async (postDetails) => {
  // Email configuration using environment variables
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_PASSWORD,
    },
  });
  // Custom HTML content
  let htmlContent = `
  
    <h1>New Post Created</h1>
    <p>A new post has been created. Here are the details:</p>
    <ul>
      <li><strong>Title:</strong> ${postDetails.name}</li>
      <li><strong>Content:</strong> ${postDetails.HUy.map(item => `<p>${item.type === 'paragraph' ? item.children.map(child => child.text).join('') : ''}</p>`).join('')}</li>
    </ul>
  `;
  let mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Post Created',
    text: `A new post has been created. Details: \nTitle: ${postDetails.name}\nContent: ${postDetails.HUy.map(item => item.children.map(child => child.text).join('')).join('\n')}`,
    html: htmlContent
  };
  // Send email
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (err) {
    console.error('Error sending email:', err);
    throw err;
  }
};

module.exports = {
  sendEmail,
};
