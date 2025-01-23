'use server'

import { db } from '@/db';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { z, ZodObject } from 'zod';

const FormSchema = z.object({
  id: z.number(),
  email: z.string().min(1, { message: "Email is required."}),
  isSubscribed: z.boolean()
});

const CreateSubscriber = FormSchema.omit({ id: true, isSubscribed: true });

type State = {
  errors?: {
    email?: string[];
  };
  message?: string | null;
};

export const createSubscriber = async (prevState: State, formData: FormData) => {
  const validatedField = CreateSubscriber.safeParse({
    email: formData.get('email')
  });

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: "Email is Required"
    };
  }

  const { email } = validatedField.data;

  try {
    await db.subscriber.create({
      data: {
        email
      }
    });
    revalidatePath('/');
    return { message: "Thank you for Subscribing!" };
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        return {
          errors: {
            email: ["Email already exists in the DB"]
          },
          message: "Email already exists in the DB"
        }
      }
    }
  }

  return {
    errors: {
      email: ["DB ERROR: Failed to create Subscriber"]
    },
    message: "DB ERROR: Failed to create Subscriber"
  };
};