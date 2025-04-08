'use client';

import type { ApolloError } from '@apollo/client';
import { useCreateContactFormMutation } from '@graphql-codegen';
import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface UseContactFormReturn {
  submitContactForm: (data: ContactFormData) => Promise<void>;
  loading: boolean;
  error?: ApolloError | null;
  success: boolean;
  resetForm: () => void;
}

export function useContactForm(): UseContactFormReturn {
  const [createContactForm, { loading, error }] = useCreateContactFormMutation();
  const [success, setSuccess] = useState(false);

  const submitContactForm = async (data: ContactFormData): Promise<void> => {
    try {
      await createContactForm({
        variables: {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
      });
      setSuccess(true);
    } catch (err) {
      console.error('Error submitting contact form', err);
      setSuccess(false);
      throw err;
    }
  };

  const resetForm = () => {
    setSuccess(false);
  };

  return {
    submitContactForm,
    loading,
    error,
    success,
    resetForm,
  };
}
