import { getApiBaseUrl } from "@/lib/api/config"

import type { ContactMessagePayload, ContactSubmissionResponse } from "../types/contact.types"

export async function submitContactMessage(payload: ContactMessagePayload): Promise<ContactSubmissionResponse> {
  const response = await fetch(`${getApiBaseUrl()}/contact`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  })

  const body = await response.json()

  if (!response.ok) {
    throw new Error(body?.error?.message ?? "Could not send your message.")
  }

  return body as ContactSubmissionResponse
}
