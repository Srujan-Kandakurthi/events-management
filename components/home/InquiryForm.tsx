"use client";

import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, Headset, AlertCircle, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/social-icons";
import { type FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { INQUIRY_FORM_COPY } from "@/constants/inquiry-form";
import {
  sectionContentGapClass,
  sectionPaddingClass,
} from "@/lib/section-styles";
import { cn } from "@/lib/utils";
import { FOOTER_PHONE_NUMBERS, getWhatsAppUrl } from "@/constants/footer";

type InquiryFormData = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  venue: string;
  vision: string;
};

const initialFormData: InquiryFormData = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  venue: "",
  vision: "",
};

const labelClassName =
  "mb-2 block font-label-sm text-[10px] tracking-[0.14em] text-on-surface-variant uppercase sm:text-label-sm sm:tracking-[0.16em]";

const inputClassName =
  "w-full border-0 border-b border-outline-variant/50 bg-transparent px-0 py-2.5 font-body-md text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/45 focus:border-secondary-fixed sm:py-3 sm:text-base";

function FormField({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = true,
  multiline = false,
  error,
}: {
  id: keyof InquiryFormData;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "tel";
  required?: boolean;
  multiline?: boolean;
  error?: string;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className={cn(
            inputClassName,
            "min-h-[6.5rem] resize-y leading-relaxed",
          )}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className={cn(inputClassName, error && "border-red-500 focus:border-red-500")}
        />
      )}
      {error && (
        <div className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-500">
          <AlertCircle className="size-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

function EventDateField({
  label,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  placeholder: string;
  value: Date | undefined;
  onChange: (value: Date | undefined) => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-w-0">
      <span className={labelClassName}>{label}</span>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            className={cn(
              inputClassName,
              "flex w-full cursor-pointer items-center justify-between gap-2 text-start",
              !value && "text-on-surface-variant/45",
              error && "border-red-500 focus:border-red-500"
            )}
          >
            <span className="truncate">
              {value ? format(value, "PPP") : placeholder}
            </span>
            <CalendarIcon
              className="size-4 shrink-0 text-secondary-fixed"
              strokeWidth={1.5}
              aria-hidden
            />
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sideOffset={8}
          className="card-dark-solid w-auto border border-outline-variant/50 bg-surface p-0 text-on-surface shadow-2xl"
        >
          <Calendar
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange(date);
              setOpen(false);
            }}
            disabled={{ before: new Date() }}
            className="bg-transparent p-3 [--cell-size:2.25rem] sm:p-4 sm:[--cell-size:2.5rem]"
            classNames={{
              today: "rounded-md bg-secondary-fixed/15 text-on-surface",
            }}
          />
        </PopoverContent>
      </Popover>
      {error && (
        <div className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-500">
          <AlertCircle className="size-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

export default function InquiryForm() {
  const [formData, setFormData] = useState<InquiryFormData>(initialFormData);
  const [eventDate, setEventDate] = useState<Date>();
  const [successOpen, setSuccessOpen] = useState(false);
  const [conflictOpen, setConflictOpen] = useState(false);
  const [conflictMessage, setConflictMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const { fields } = INQUIRY_FORM_COPY;

  useEffect(() => {
    if (!successOpen) {
      return;
    }

    const timer = window.setTimeout(() => {
      setSuccessOpen(false);
    }, INQUIRY_FORM_COPY.successAutoCloseSeconds * 1000);

    return () => window.clearTimeout(timer);
  }, [successOpen]);

  const updateField = (field: keyof InquiryFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setEventDate(undefined);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});

    const payload: any = {
      ...formData,
      eventDate: eventDate?.toISOString(),
    };

    if (!payload.email) delete payload.email;
    if (!payload.venue) delete payload.venue;
    if (!payload.vision) delete payload.vision;

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      await axios.post(`${apiUrl}/visitors`, payload);

      resetForm();
      setSuccessOpen(true);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      
      if (error.response?.status === 409) {
        setConflictOpen(true);
      } else if (error.response?.data?.errors) {
        setFieldErrors(error.response.data.errors);
      } else {
        const message =
          error.response?.data?.message ||
          error.message ||
          "An error occurred while submitting your inquiry.";

        // If it's an array of validation errors, join them or show the first one
        const displayMessage = Array.isArray(message) ? message[0] : message;

        toast.error(displayMessage);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog
        open={successOpen}
        onOpenChange={(open) => {
          if (open) {
            setSuccessOpen(true);
          }
        }}
      >
        <DialogContent
          showCloseButton={false}
          onInteractOutside={(event) => event.preventDefault()}
          onEscapeKeyDown={(event) => event.preventDefault()}
          className="card-dark-solid border border-outline-variant/50 bg-surface px-6 py-8 text-on-surface sm:max-w-md"
        >
          <DialogHeader className="items-center gap-4 text-center">
            <CheckCircle2
              className="size-16 text-green-500 sm:size-[4.5rem]"
              strokeWidth={1.5}
            />
            <DialogTitle className="font-headline-md text-xl font-medium text-on-surface sm:text-2xl">
              {INQUIRY_FORM_COPY.successTitle}
            </DialogTitle>
            <DialogDescription className="font-body-md text-sm leading-relaxed text-on-surface-variant sm:text-base">
              {INQUIRY_FORM_COPY.successMessage}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog
        open={conflictOpen}
        onOpenChange={setConflictOpen}
      >
        <DialogContent
          onInteractOutside={(event) => event.preventDefault()}
          className="card-dark-solid border border-outline-variant/50 bg-surface px-6 py-8 text-on-surface sm:max-w-md"
        >
          <DialogHeader className="items-center gap-4 text-center">
            <AlertCircle
              className="size-16 text-amber-500 sm:size-[4.5rem]"
              strokeWidth={1.5}
            />
            <DialogTitle className="font-headline-md text-xl font-medium text-on-surface sm:text-2xl">
              Inquiry Already Received
            </DialogTitle>
            <DialogDescription className="font-body-md text-sm leading-relaxed text-on-surface-variant sm:text-base flex flex-col gap-3">
              <span>
                You have <strong className="font-semibold text-secondary-fixed">already submitted</strong> an inquiry using this mobile number within the <strong className="font-semibold text-secondary-fixed">last 24 hours</strong>.
              </span>
              <span>
                Our team is currently processing it and will <strong className="font-semibold text-secondary-fixed">contact you soon</strong>. Please try again tomorrow if you need to submit another request.
              </span>

              <div className="mt-2 flex flex-col items-center gap-3 border-t border-outline-variant/40 pt-5">
                <span className="text-xs tracking-wider text-on-surface-variant uppercase">
                  Need immediate assistance?
                </span>
                <div className="flex w-full items-center gap-3 sm:gap-4">
                  <a
                    href={getWhatsAppUrl(FOOTER_PHONE_NUMBERS[1].whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-[#25D366]/50 bg-[#25D366]/10 px-2 py-2 text-[11px] font-semibold whitespace-nowrap text-[#25D366] transition-colors hover:bg-[#25D366]/20 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
                  >
                    <WhatsAppIcon className="size-3.5 sm:size-4" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${FOOTER_PHONE_NUMBERS[1].display.replace(/\s+/g, "")}`}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-secondary-fixed/50 bg-secondary-fixed/10 px-2 py-2 text-[11px] font-semibold whitespace-nowrap text-secondary-fixed transition-colors hover:bg-secondary-fixed/20 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
                  >
                    <Phone className="size-3.5 sm:size-4" />
                    Call Us
                  </a>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <section
        className={cn(
          "relative overflow-hidden bg-surface",
          sectionPaddingClass,
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgb(212_175_55/0.1),transparent_58%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-secondary-fixed/50 px-4 py-1.5 font-label-lg text-[10px] tracking-[0.18em] text-secondary-fixed uppercase sm:px-5 sm:text-xs sm:tracking-[0.22em]">
              {INQUIRY_FORM_COPY.eyebrow}
            </span>

            <h2 className="mt-4 font-headline-md text-2xl leading-tight font-medium text-on-surface sm:mt-5 sm:text-3xl sm:leading-snug md:text-headline-lg md:leading-snug lg:text-[2.75rem] lg:leading-tight">
              {INQUIRY_FORM_COPY.title}
            </h2>

            <p className="mt-4 font-body-md text-sm leading-relaxed text-on-surface-variant sm:mt-5 sm:text-base md:text-body-md">
              {INQUIRY_FORM_COPY.description}
            </p>
          </div>

          <div className={cn("mx-auto max-w-4xl", sectionContentGapClass)}>
            <div className="card-dark-solid rounded-none border border-outline-variant/50 p-5 sm:p-6 md:p-8 lg:p-10">
              <h3 className="font-headline-md text-xl font-medium text-secondary-fixed sm:text-2xl">
                {INQUIRY_FORM_COPY.formTitle}
              </h3>

              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-6 sm:mt-8 sm:space-y-7"
              >
                <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-x-8 md:gap-y-7">
                  <FormField
                    id="fullName"
                    label={fields.fullName.label}
                    placeholder={fields.fullName.placeholder}
                    value={formData.fullName}
                    onChange={(value) => updateField("fullName", value)}
                    error={fieldErrors.fullName}
                  />
                  <FormField
                    id="email"
                    label={fields.email.label}
                    placeholder={fields.email.placeholder}
                    type="email"
                    value={formData.email}
                    onChange={(value) => updateField("email", value)}
                    required={false}
                    error={fieldErrors.email}
                  />
                  <FormField
                    id="phone"
                    label={fields.phone.label}
                    placeholder={fields.phone.placeholder}
                    type="tel"
                    value={formData.phone}
                    onChange={(value) => updateField("phone", value)}
                    error={fieldErrors.phone}
                  />
                  <FormField
                    id="location"
                    label={fields.location.label}
                    placeholder={fields.location.placeholder}
                    value={formData.location}
                    onChange={(value) => updateField("location", value)}
                    error={fieldErrors.location}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-x-8 md:gap-y-7">
                  <FormField
                    id="venue"
                    label={fields.venue.label}
                    placeholder={fields.venue.placeholder}
                    value={formData.venue}
                    onChange={(value) => updateField("venue", value)}
                    required={false}
                    error={fieldErrors.venue}
                  />
                  <EventDateField
                    label={fields.eventDate.label}
                    placeholder={fields.eventDate.placeholder}
                    value={eventDate}
                    onChange={setEventDate}
                    error={fieldErrors.eventDate}
                  />
                </div>

                <FormField
                  id="vision"
                  label={fields.vision.label}
                  placeholder={fields.vision.placeholder}
                  value={formData.vision}
                  onChange={(value) => updateField("vision", value)}
                  multiline
                  required={false}
                  error={fieldErrors.vision}
                />

                <div className="flex flex-col gap-5 border-t border-outline-variant/40 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-7">
                  <div className="flex min-w-0 items-start gap-3">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-secondary-fixed/40 bg-surface text-secondary-fixed sm:size-10">
                      <Headset
                        className="size-4 sm:size-[1.125rem]"
                        strokeWidth={1.5}
                      />
                    </span>
                    <span className="min-w-0 text-start">
                      <span className="block font-label-lg text-xs font-semibold tracking-[0.1em] text-on-surface uppercase sm:text-label-sm">
                        {INQUIRY_FORM_COPY.supportTitle}
                      </span>
                      <span className="mt-1 block font-body-md text-xs leading-relaxed text-on-surface-variant sm:text-sm">
                        {INQUIRY_FORM_COPY.supportSubtitleBefore}{" "}
                        <span className="font-semibold text-secondary-fixed">
                          {INQUIRY_FORM_COPY.supportSubtitleHighlight}
                        </span>
                      </span>
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed inline-flex min-h-11 w-full shrink-0 items-center justify-center bg-secondary-fixed px-6 py-3 font-label-lg text-[10px] font-semibold tracking-[0.12em] text-on-primary uppercase transition-opacity hover:opacity-90 sm:min-h-12 sm:w-auto sm:px-8 sm:text-xs sm:tracking-[0.15em]"
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : INQUIRY_FORM_COPY.submitLabel}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
