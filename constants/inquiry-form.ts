export const INQUIRY_FORM_COPY = {
  eyebrow: "Bespoke Concierge",
  title: "Begin Your Extraordinary Journey",
  description:
    "Tailoring bespoke experiences for the world's most discerning clientele. Share your vision with us, and our atelier will craft an occasion that transcends expectation.",
  formTitle: "Inquiry Details",
  supportTitle: "Chat Support",
  supportSubtitleBefore: "Ensuring response within",
  supportSubtitleHighlight: "24 hours",
  submitLabel: "Submit Inquiry",
  successTitle: "Inquiry Submitted Successfully!",
  successMessage:
    "Thank you for reaching out. Our respective team member will callback you shortly.",
  successAutoCloseSeconds: 5,
  fields: {
    fullName: {
      label: "Full Name",
      placeholder: "Enter your full name",
    },
    email: {
      label: "Email Address",
      placeholder: "Enter your email address",
    },
    phone: {
      label: "Phone Number",
      placeholder: "Enter your phone number",
    },
    location: {
      label: "Current Location",
      placeholder: "Where are you based?",
    },
    venue: {
      label: "Venue You Wish to Plan",
      placeholder: "Which venue is your event in?",
    },
    eventDate: {
      label: "Preferred Event Date",
      placeholder: "Select your event date",
    },
    vision: {
      label: "Describe Your Vision",
      placeholder: "Tell us about your celebration, guest count, date, and style...",
    },
  },
} as const;

export const INQUIRY_EMAIL_SUBJECT = "Bespoke Concierge Inquiry — Mega Events";
