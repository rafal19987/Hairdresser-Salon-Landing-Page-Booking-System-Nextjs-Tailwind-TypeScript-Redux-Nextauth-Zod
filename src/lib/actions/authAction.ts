'use server';

// import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import prisma from '../prisma';

export async function registerUser(
  user: Omit<User, 'id' | 'emailVerified' | 'image'>,
) {
  const result = await prisma.user.create({ data: user });

  // const jwtUserId = signJwt({
  //   id: result.id,
  // });
  // const activationUrl = `${process.env.NEXTAUTH_URL}/auth/activation/${jwtUserId}`;
  // const body = compileActivationTemplate(user.firstName, activationUrl);
  // await sendMail({ to: user.email, subject: "Activate Your Account", body });
  // return result;
}
