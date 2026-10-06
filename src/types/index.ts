export interface LeadFormData {
  name: string;
  email: string;
  timestamp?: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  message: string;
}
