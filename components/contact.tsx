"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { profile, socials } from "@/data/portfolio";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (values: ContactForm) => {
    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} <${values.email}>`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${body}`;
    toast.success("Opening your email client");
    reset();
  };

  return (
    <MotionSection id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let us build something useful"
          description="Send a message, connect socially, or use the resume download in the hero."
        />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="p-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="mt-6 space-y-4">
              <a href={`mailto:${profile.email}`} className="flex gap-3 rounded-lg bg-accent/50 p-4 text-sm text-muted-foreground transition hover:text-primary">
                <Mail className="h-5 w-5 shrink-0" />
                {profile.email}
              </a>
              <div className="flex gap-3 rounded-lg bg-accent/50 p-4 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 shrink-0" />
                {profile.phone}
              </div>
              <div className="flex gap-3 rounded-lg bg-accent/50 p-4 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0" />
                {profile.location}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background/70 text-muted-foreground transition hover:-translate-y-1 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium">
                  Name
                  <Input placeholder="Your name" {...register("name")} />
                  {errors.name ? <span className="text-xs text-red-500">{errors.name.message}</span> : null}
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  Email
                  <Input placeholder="you@example.com" {...register("email")} />
                  {errors.email ? <span className="text-xs text-red-500">{errors.email.message}</span> : null}
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium">
                Subject
                <Input placeholder="Project opportunity" {...register("subject")} />
                {errors.subject ? <span className="text-xs text-red-500">{errors.subject.message}</span> : null}
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Message
                <Textarea placeholder="Tell me about the role, project, or collaboration..." {...register("message")} />
                {errors.message ? <span className="text-xs text-red-500">{errors.message.message}</span> : null}
              </label>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </MotionSection>
  );
}
