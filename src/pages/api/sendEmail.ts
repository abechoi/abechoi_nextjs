// pages/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not defined');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'POST') {
    const { name, message } = req.body;

    const content = {
      to: 'abraham.choi@icloud.com',
      from: 'abraham.choi@icloud.com',
      subject: `New Message from ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    };

    try {
      await sgMail.send(content);
      res.status(200).send('Message sent successfully.');
    } catch (error) {
      console.error('Error sending email', error);
      res.status(400).send('Message not sent.');
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(404).send('Invalid request.');
  }
};

export default handler;
