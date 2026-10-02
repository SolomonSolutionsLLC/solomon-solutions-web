import { z } from "zod";

export const CONTACT_SUBJECTS = [
  "General Inquiry",
  "Consulting Services",
  "Simply Pray",
  "HopeStack",
  "AI & Technology",
  "Partnership",
] as const;

const contactSchema = z.object({
  requestId: z.uuid(),
  name: z.string().refine((value) => !/[\r\n]/.test(value)).trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  subject: z.enum(CONTACT_SUBJECTS),
  message: z.string().trim().min(10).max(4000),
  website: z.string().trim(),
});

export type ContactSubmission = {
  requestId: string;
  name: string;
  email: string;
  subject: (typeof CONTACT_SUBJECTS)[number];
  message: string;
  website: "";
};

export type ContactParseResult =
  | { ok: true; data: ContactSubmission }
  | { ok: false; spam?: true };

export function parseContactSubmission(input: unknown): ContactParseResult {
  const result = contactSchema.safeParse(input);
  if (!result.success) return { ok: false };
  if (result.data.website !== "") return { ok: false, spam: true };

  return {
    ok: true,
    data: {
      requestId: result.data.requestId,
      name: result.data.name,
      email: result.data.email,
      subject: result.data.subject,
      message: result.data.message,
      website: "",
    },
  };
}
