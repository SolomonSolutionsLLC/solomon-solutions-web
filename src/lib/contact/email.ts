import type { ContactSubmission } from "./schema";

export function buildContactEmail(submission: ContactSubmission) {
  return {
    replyTo: submission.email,
    subject: `Website inquiry: ${submission.subject}`,
    text: [
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      `Subject: ${submission.subject}`,
      `Request ID: ${submission.requestId}`,
      "",
      submission.message,
    ].join("\n"),
  };
}
