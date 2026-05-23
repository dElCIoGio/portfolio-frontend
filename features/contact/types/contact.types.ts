export type ContactMessagePayload = {
  name: string
  email: string
  subject?: string
  message: string
}

export type ContactSubmissionResponse = {
  id: string
  message: string
}
