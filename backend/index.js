const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // You can change the port if needed

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to handle email sending
app.post('/api/sendEmail', async (req, res) => {
    const { name, email, phone, address, feedback } = req.body;

    // Email validation logic can be done here
    if (!name || !email || !phone || !feedback) {
        return res.status(400).json({ error: 'All fields are required except address.' });
    }

    // Create a Nodemailer transporter using your email service configuration
    let transporter = nodemailer.createTransport({
        service: 'Gmail', // Use any email service (Gmail, Outlook, etc.)
        host: "smtp.gmail.com",
        auth: {
            user: 'subhradipdas6969@gmail.com', // Your email
            pass: 'dmcu kwza cyjl xavl' // Your email password or app-specific password
        }
    });

    // Email options
    let mailOptions = {
        from: `"${name}" <${email}>`, // Sender address
        to: 'subhradipdas6969@gmail.com', // Change this to the recipient's email address
        subject: 'New Feedback Received', // Subject line
        text: `You have received new feedback from ${name}.\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n` +
            `Address: ${address}\n\n` +
            `Feedback: ${feedback}\n`
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.status(200).send("Api Health Check");
});
