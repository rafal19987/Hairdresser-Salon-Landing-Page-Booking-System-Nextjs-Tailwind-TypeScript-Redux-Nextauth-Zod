'use server';

import { User } from '@prisma/client';
import prisma from '../prisma';
import * as bcrypt from 'bcrypt';
import {
  compileActivationTemplate,
  compileForgotPasswordTemplate,
  sendMail,
} from '../mail';
import { signJwt, verifyJwt } from '../jwt';

export async function registerUser(
  user: Omit<User, 'id' | 'emailVerified' | 'image'>,
) {
  try {
    const result = await prisma.user.create({
      data: { ...user, password: await bcrypt.hash(user.password, 10) },
    });

    const jwtUserId = signJwt({
      id: result.id,
    });

    const activationUrl = `${process.env.HOST_URL}/activation/${jwtUserId}`;

    const htmlBody = compileActivationTemplate(user.name, activationUrl);

    await sendMail({
      to: user.email,
      subject: 'Aktywuj swoje konto',
      body: htmlBody,
    });

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

type ActivateUserFunc = (
  jwtUserId: string,
) => Promise<'userNotExist' | 'alreadyActivated' | 'success' | 'error'>;

export const activateUser: ActivateUserFunc = async (jwtUserId) => {
  try {
    const payload = verifyJwt(jwtUserId);
    const userId = payload?.id;

    const user = await prisma.user?.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) return 'userNotExist';

    if (user.emailVerified) return 'alreadyActivated';

    const result = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        emailVerified: new Date(),
      },
    });

    return 'success';
  } catch (error) {
    console.log(error);
    return 'error';
  }
};

type ForgotPasswordFunc = (
  email: string,
) => Promise<'userNotExist' | 'success' | 'error'>;

export const forgotPassword: ForgotPasswordFunc = async (email) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) return 'userNotExist';

    const jwtUserId = signJwt({
      id: user.id,
    });

    const resetPasswordUrl = `${process.env.HOST_URL}/forgotPassword/${jwtUserId}`;

    const htmlBody = compileForgotPasswordTemplate(user.name, resetPasswordUrl);

    await sendMail({
      to: user.email,
      subject: 'Zresetuj swoje hasło',
      body: htmlBody,
    });

    return 'success';
  } catch (error) {
    console.log(error);
    return 'error';
  }
};
