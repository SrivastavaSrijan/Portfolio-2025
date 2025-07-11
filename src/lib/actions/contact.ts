'use server';

import { getClient } from '@/lib/apollo/server';
import { CreateContactFormDocument } from '@/lib/graphql/__generated__/hooks';
import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(1, { message: 'Subject is required.' }),
  message: z.string().min(1, { message: 'Message is required.' }),
});

export interface ContactFormState {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
}

export async function submitContactFormAction(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    const { mutate } = getClient();
    await mutate({
      mutation: CreateContactFormDocument,
      variables: { name, email, subject, message },
    });

    return { message: 'Message sent successfully!', success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      message: 'Failed to send message. Please try again later.',
      success: false,
    };
  }
}
