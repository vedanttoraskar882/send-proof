import type { PilotFormData, PilotSubmission } from '../types/pilot';

export const STORAGE_KEY = "sendproof_pilot_submissions";

export function savePilotSubmission(
  formData: PilotFormData
): PilotSubmission {
  const fullName = formData.fullName.trim();
  const phoneNumber = formData.phoneNumber.trim();
  const emailAddress = formData.emailAddress.trim();
  const organisationName = formData.organisationName.trim();

  if (
    !fullName ||
    !phoneNumber ||
    !emailAddress ||
    !organisationName
  ) {
    throw new Error(
      "Please complete all required fields."
    );
  }

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailAddress)) {
    throw new Error(
      "Please enter a valid email address."
    );
  }

  const phonePattern = /^[+\d\s().-]+$/;
  const phoneDigits =
    phoneNumber.replace(/\D/g, "");

  if (
    !phonePattern.test(phoneNumber) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15
  ) {
    throw new Error(
      "Please enter a valid phone number."
    );
  }

  const newSubmission: PilotSubmission = {
    fullName,
    phoneNumber,
    emailAddress,
    organisationName,
    submissionDateTime:
      new Date().toISOString()
  };

  let existingSubmissions: PilotSubmission[] = [];

  const storedData =
    localStorage.getItem(STORAGE_KEY);

  if (storedData !== null) {
    let parsedData: unknown;

    try {
      parsedData = JSON.parse(storedData);
    } catch {
      throw new Error(
        "Existing saved data could not be read. " +
        "Your previous submissions have not been changed."
      );
    }

    if (!Array.isArray(parsedData)) {
      throw new Error(
        "Existing saved data is invalid. " +
        "Your previous submissions have not been changed."
      );
    }

    existingSubmissions = parsedData as PilotSubmission[];
  }

  const updatedSubmissions = [
    ...existingSubmissions,
    newSubmission
  ];

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedSubmissions)
    );
  } catch {
    throw new Error(
      "Your request could not be saved. " +
      "Please check your browser storage settings."
    );
  }

  return newSubmission;
}

export function getStoredSubmissionsCount(): number {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return 0;
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed.length : 0;
  } catch {
    return 0;
  }
}
