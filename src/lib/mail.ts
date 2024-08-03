import Handlebars from 'handlebars';
import nodemailer from 'nodemailer';
import { activationTemplate } from './emailTemplates/activation';
import { forgotPasswordTemplate } from './emailTemplates/forgotPassword';

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

export function compileActivationTemplate(name: string, url: string) {
  const template = Handlebars.compile(activationTemplate);

  const htmlBody = template({ name, url });

  return htmlBody;
}

export function compileForgotPasswordTemplate(name: string, url: string) {
  const template = Handlebars.compile(forgotPasswordTemplate);

  const htmlBody = template({ name, url });

  return htmlBody;
}
