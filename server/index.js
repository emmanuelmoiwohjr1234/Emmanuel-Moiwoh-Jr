import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

// Load environment variables from the server directory
dotenv.config({ path: join(__dirname, '.env') });

// Verify environment variables are loaded
console.log('Server starting with configuration:');
console.log(`PORT: ${process.env.PORT}`);
console.log(`EMAIL_USER: ${process.env.EMAIL_USER}`);
console.log(`EMAIL_PASS: ${process.env.EMAIL_PASS?.slice(0, 4)}...`);

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('Missing required environment variables: EMAIL_USER and/or EMAIL_PASS');
  process.exit(1);
}

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test email configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Missing required fields',
      details: 'Name, email, and message are required'
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Error sending message',
      details: error.message
    });
  }
});

// Newsletter subscription endpoint
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ 
      message: 'Email is required',
      details: 'Please provide an email address'
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Newsletter Subscription',
      html: `
        <h3>New Newsletter Subscription</h3>
        <p><strong>Email:</strong> ${email}</p>
      `
    });

    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Error processing subscription:', error);
    res.status(500).json({ 
      message: 'Error processing subscription',
      details: error.message
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email configured for: ${process.env.EMAIL_USER}`);
}); 