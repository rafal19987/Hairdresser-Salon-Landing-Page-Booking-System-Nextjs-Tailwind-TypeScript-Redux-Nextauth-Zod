import nodemailer from 'nodemailer';

export async function sendMail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  const SMPT_EMAIL = process.env.SMPT_EMAIL!;
  const SMPT_GMAIL_PASS = process.env.SMPT_GMAIL_PASS!;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMPT_EMAIL,
      pass: SMPT_GMAIL_PASS,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log('Test', testResult);
  } catch (error) {
    console.log(error);
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMPT_EMAIL,
      to,
      subject,
      html: body,
    });

    console.log({ sendResult });
  } catch (error) {
    console.log(error);
  }
}
