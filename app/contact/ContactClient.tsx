"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree stub — replace YOUR_FORM_ID with your actual Formspree form ID
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch {
      // Fallback: show submitted state anyway for demo purposes
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="section-container">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question about the lab, want to collaborate, or need more info? Reach out to us."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="heading-sm text-[var(--color-text-primary)] mb-6">
              Contact Information
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-coral-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-coral-500" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-[var(--color-text-primary)]">
                    Location
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                    Intel Unnati AIIoT Lab
                    <br />
                    Division of Computer Science and Engineering
                    <br />
                    Karunya Institute of Technology &amp; Sciences
                    <br />
                    Coimbatore, Tamil Nadu 641114, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-[var(--color-text-primary)]">
                    Email
                  </h3>
                  <a
                    href="mailto:aiiotlab@karunya.edu"
                    className="text-sm text-teal-500 hover:text-teal-600 transition-colors mt-1 block"
                  >
                    aiiotlab@karunya.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-lavender-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-lavender-500" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-[var(--color-text-primary)]">
                    Lab Hours
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                    Monday — Friday: 9:00 AM — 5:00 PM
                    <br />
                    Saturday: By appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-surface-200 shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4741763710456!2d76.95!3d10.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b0f4cffffff%3A0x7a1e1e1e1e1e1e1e!2sKarunya%20Institute%20of%20Technology%20and%20Sciences!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karunya Institute Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="heading-sm text-[var(--color-text-primary)] mb-6">
              Send a Message
            </h2>

            {isSubmitted ? (
              <div className="card p-10 text-center">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="heading-sm text-[var(--color-text-primary)] mb-2">
                  Message sent!
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-coral-500 hover:text-coral-600 mt-4 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white border border-surface-200 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-coral-400 focus:border-transparent transition-shadow"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, email: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white border border-surface-200 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-coral-400 focus:border-transparent transition-shadow"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, subject: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white border border-surface-200 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-coral-400 focus:border-transparent transition-shadow"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, message: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white border border-surface-200 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-coral-400 focus:border-transparent transition-shadow resize-none"
                    placeholder="Tell us what you need..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  id="contact-submit"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-[var(--color-text-muted)] text-center mt-2">
                  Powered by Formspree — replace <code className="font-mono text-coral-400">YOUR_FORM_ID</code> with your Formspree form ID
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
