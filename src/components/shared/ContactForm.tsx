'use client';

import { type PropsWithChildren, useEffect, useRef } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Button, DialogHeader, Input, Label, Textarea } from '@/components/ui';
import { submitContactFormAction, type ContactFormState } from '@/lib/actions/contact';

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full lg:w-auto">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

interface ContactFormProps extends PropsWithChildren {}
export function ContactForm({ children }: ContactFormProps) {
  const [state, formAction] = useActionState(submitContactFormAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      formRef.current?.reset();
    } else if (state.message && !state.success) {
      // Show general error toast
      toast.error(state.message, {
        description: Object.values(state.errors ?? {})
          .flat()
          .join(' '),
      });
    }
  }, [state]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <p className="font-bold text-3xl">Let's Talk!</p>
          </DialogTitle>
          <DialogDescription>If you'd like speak, please hmu!</DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={5} required />
          </div>
          <DialogClose asChild>
            <SubmitButton />
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
