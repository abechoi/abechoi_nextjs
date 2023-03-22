// pages/api/sendEmail.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { Credentials } from '@aws-sdk/types';

const credentials: Credentials = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
};

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials,
});

const sendEmailHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body;

  const params = {
    Source: 'support@abechoi.com',
    Destination: {
      ToAddresses: ['support@abechoi.com'],
    },
    Message: {
      Subject: {
        Data: 'Contact Form Submission',
      },
      Body: {
        Text: {
          Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        },
      },
    },
  };

  try {
    await sesClient.send(new SendEmailCommand(params));
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};

export default sendEmailHandler;
