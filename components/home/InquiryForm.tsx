"use client";

import { format } from "date-fns";
import { CalendarIcon, Headset } from "lucide-react";
import { type FormEvent, useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  INQUIRY_EMAIL_SUBJECT,
  INQUIRY_FORM_COPY,
} from "@/constants/inquiry-form";
import { FOOTER_EMAIL, getGmailComposeUrl } from "@/constants/footer";
import {
  sectionContentGapClass,
  sectionPaddingClass,
} from "@/lib/section-styles";
import { cn } from "@/lib/utils";

type InquiryFormData = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  city: string;
  vision: string;
};

type InquiryEmailData = InquiryFormData & {
  eventDate: string;
};

const initialFormData: InquiryFormData = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  city: "",
  vision: "",
};

const labelClassName =
  "mb-2 block font-label-sm text-[10px] tracking-[0.14em] text-on-surface-variant uppercase sm:text-label-sm sm:tracking-[0.16em]";

const inputClassName =
  "w-full border-0 border-b border-outline-variant/50 bg-transparent px-0 py-2.5 font-body-md text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/45 focus:border-secondary-fixed sm:py-3 sm:text-base";

function buildInquiryEmailBody(data: InquiryEmailData): string {
  return [
    "New Bespoke Concierge Inquiry",
    "",
    `Full Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Current Location: ${data.location}`,
    `City to Plan: ${data.city}`,
    `Preferred Event Date: ${data.eventDate}`,
    "",
    "Vision:",
    data.vision,
  ].join("\n");
}

function FormField({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = true,
  multiline = false,
}: {
  id: keyof InquiryFormData;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "tel";
  required?: boolean;
  multiline?: boolean;
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
          className={cn(inputClassName, "min-h-[6.5rem] resize-y leading-relaxed")}
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
          className={inputClassName}
        />
      )}
    </div>
  );
}

function EventDateField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: Date | undefined;
  onChange: (value: Date | undefined) => void;
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
    </div>
  );
}

export default function InquiryForm() {
  const [formData, setFormData] = useState<InquiryFormData>(initialFormData);
  const [eventDate, setEventDate] = useState<Date>();
  const { fields } = INQUIRY_FORM_COPY;

  const updateField = (field: keyof InquiryFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inquiryUrl = getGmailComposeUrl(FOOTER_EMAIL, {
      subject: INQUIRY_EMAIL_SUBJECT,
      body: buildInquiryEmailBody({
        ...formData,
        eventDate: eventDate ? format(eventDate, "PPP") : "Not selected",
      }),
    });

    window.open(inquiryUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={cn("relative overflow-hidden bg-surface", sectionPaddingClass)}>
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
                />
                <FormField
                  id="email"
                  label={fields.email.label}
                  placeholder={fields.email.placeholder}
                  type="email"
                  value={formData.email}
                  onChange={(value) => updateField("email", value)}
                />
                <FormField
                  id="phone"
                  label={fields.phone.label}
                  placeholder={fields.phone.placeholder}
                  type="tel"
                  value={formData.phone}
                  onChange={(value) => updateField("phone", value)}
                />
                <FormField
                  id="location"
                  label={fields.location.label}
                  placeholder={fields.location.placeholder}
                  value={formData.location}
                  onChange={(value) => updateField("location", value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-x-8 md:gap-y-7">
                <FormField
                  id="city"
                  label={fields.city.label}
                  placeholder={fields.city.placeholder}
                  value={formData.city}
                  onChange={(value) => updateField("city", value)}
                />
                <EventDateField
                  label={fields.eventDate.label}
                  placeholder={fields.eventDate.placeholder}
                  value={eventDate}
                  onChange={setEventDate}
                />
              </div>

              <FormField
                id="vision"
                label={fields.vision.label}
                placeholder={fields.vision.placeholder}
                value={formData.vision}
                onChange={(value) => updateField("vision", value)}
                multiline
              />

              <div className="flex flex-col gap-5 border-t border-outline-variant/40 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-7">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-secondary-fixed/40 bg-surface text-secondary-fixed sm:size-10">
                    <Headset className="size-4 sm:size-[1.125rem]" strokeWidth={1.5} />
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
                  className=" cursor-pointer inline-flex min-h-11 w-full shrink-0 items-center justify-center bg-secondary-fixed px-6 py-3 font-label-lg text-[10px] font-semibold tracking-[0.12em] text-on-primary uppercase transition-opacity hover:opacity-90 sm:min-h-12 sm:w-auto sm:px-8 sm:text-xs sm:tracking-[0.15em]"
                >
                  {INQUIRY_FORM_COPY.submitLabel}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
