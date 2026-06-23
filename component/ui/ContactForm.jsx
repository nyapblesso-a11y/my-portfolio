"use client";

import { useState, FormEvent} from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  const inputClass =
    "w-full bg-surface-container border-b border-outline-variant focus:border-terracotta focus:outline-none focus:ring-0 transition-colors py-base text-on-surface placeholder:text-on-surface-variant/50";

  return (
    <form onSubmit={handleSubmit} className="space-y-md">
      <div>
        <label className="block text-label-sm text-on-surface-variant mb-xs">
          Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-label-sm text-on-surface-variant mb-xs">
          Email
        </label>
        <input
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-label-sm text-on-surface-variant mb-xs">
          Subject
        </label>
        <input
          type="text"
          placeholder="Project Inquiry"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-label-sm text-on-surface-variant mb-xs">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-terracotta text-surface py-md rounded-lg font-label-md text-label-md hover:brightness-110 transition-all"
      >
        Send Message
      </button>
    </form>
  );
}
