import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertCircle, Shield, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PilotFormData } from '../types/pilot';
import { savePilotSubmission } from '../utils/localStorage';

interface PilotRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initiatingElement?: HTMLElement | null;
}

export const PilotRequestModal: React.FC<PilotRequestModalProps> = ({
  isOpen,
  onClose,
  initiatingElement,
}) => {
  const [formData, setFormData] = useState<PilotFormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof PilotFormData, string>>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trapping and Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus first input
    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
      if (initiatingElement) {
        initiatingElement.focus();
      }
    };
  }, [isOpen, initiatingElement, onClose]);

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (fieldErrors[name as keyof PilotFormData]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (generalError) {
      setGeneralError(null);
    }
  };

  // Field Validation
  const validate = (): boolean => {
    const errors: Partial<Record<keyof PilotFormData, string>> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+\d\s().-]+$/;
    const phoneDigits = formData.phoneNumber.replace(/\D/g, '');

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required.';
    } else if (!phonePattern.test(formData.phoneNumber) || phoneDigits.length < 7 || phoneDigits.length > 15) {
      errors.phoneNumber = 'Please enter a valid phone number (7-15 digits).';
    }

    if (!formData.emailAddress.trim()) {
      errors.emailAddress = 'Email Address is required.';
    } else if (!emailPattern.test(formData.emailAddress.trim())) {
      errors.emailAddress = 'Please enter a valid business email address.';
    }

    if (!formData.organisationName.trim()) {
      errors.organisationName = 'Organisation Name is required.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Save directly to localStorage key `sendproof_pilot_submissions`
      savePilotSubmission(formData);
      setIsSuccess(true);
      // Clear form after successful submission
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        organisationName: '',
      });
      setFieldErrors({});
    } catch (err: unknown) {
      if (err instanceof Error) {
        setGeneralError(err.message);
      } else {
        setGeneralError('An unexpected error occurred while saving your details.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForAnother = () => {
    setIsSuccess(false);
    setGeneralError(null);
    setFieldErrors({});
    setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-dark/80 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Card Container */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-surface-border overflow-hidden z-10 my-8"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-surface-border bg-surface-light">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-teal-light text-teal-deep">
                  <Shield className="w-5 h-5 text-teal-primary" />
                </div>
                <div>
                  <h3 id="modal-title" className="text-xl font-bold font-display text-navy-primary">
                    Request a Pilot
                  </h3>
                </div>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg text-content-secondary hover:text-navy-primary hover:bg-slate-200/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p id="modal-description" className="text-sm text-content-secondary mb-6">
                Register your interest in the proposed SendProof platform and planned pilot programme.
              </p>

              {/* Success View */}
              {isSuccess ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-navy-primary">
                    Your pilot request has been saved successfully in this browser.
                  </h4>
                  <p className="text-xs text-content-secondary max-w-sm mx-auto leading-relaxed">
                    This is a frontend-only preview. Your information has not been transmitted to SendProof.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetForAnother}
                      className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-teal-deep bg-teal-light hover:bg-teal-subtle rounded-lg border border-teal-primary/30 transition-colors"
                    >
                      Submit Another Request
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-navy-primary hover:bg-navy-secondary rounded-lg transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                /* Form View */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {generalError && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2 text-xs text-red-700">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{generalError}</span>
                    </div>
                  )}

                  {/* 1. Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-navy-primary mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={firstInputRef}
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        fieldErrors.fullName ? 'border-red-400 bg-red-50/30' : 'border-surface-border'
                      } text-navy-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-primary`}
                    />
                    {fieldErrors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{fieldErrors.fullName}</p>
                    )}
                  </div>

                  {/* 2. Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-navy-primary mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        fieldErrors.phoneNumber ? 'border-red-400 bg-red-50/30' : 'border-surface-border'
                      } text-navy-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-primary`}
                    />
                    {fieldErrors.phoneNumber && (
                      <p className="text-xs text-red-600 mt-1">{fieldErrors.phoneNumber}</p>
                    )}
                  </div>

                  {/* 3. Email Address */}
                  <div>
                    <label htmlFor="emailAddress" className="block text-xs font-bold uppercase tracking-wider text-navy-primary mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      required
                      value={formData.emailAddress}
                      onChange={handleChange}
                      placeholder="Enter your business email address"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        fieldErrors.emailAddress ? 'border-red-400 bg-red-50/30' : 'border-surface-border'
                      } text-navy-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-primary`}
                    />
                    {fieldErrors.emailAddress && (
                      <p className="text-xs text-red-600 mt-1">{fieldErrors.emailAddress}</p>
                    )}
                  </div>

                  {/* 4. Organisation Name */}
                  <div>
                    <label htmlFor="organisationName" className="block text-xs font-bold uppercase tracking-wider text-navy-primary mb-1">
                      Organisation Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="organisationName"
                      name="organisationName"
                      required
                      value={formData.organisationName}
                      onChange={handleChange}
                      placeholder="Enter your organisation name"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        fieldErrors.organisationName ? 'border-red-400 bg-red-50/30' : 'border-surface-border'
                      } text-navy-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-primary`}
                    />
                    {fieldErrors.organisationName && (
                      <p className="text-xs text-red-600 mt-1">{fieldErrors.organisationName}</p>
                    )}
                  </div>

                  {/* Notice above the submit button */}
                  <div className="pt-2">
                    <p className="text-xs text-content-muted leading-relaxed bg-surface-light p-3 rounded-lg border border-surface-border">
                      This frontend preview saves your submitted details only in this browser. Your details are not transmitted to SendProof or any external service.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-teal-primary hover:bg-teal-deep active:bg-teal-dark disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary"
                    >
                      {isSubmitting ? 'Saving...' : 'Submit Pilot Request'}
                      {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
