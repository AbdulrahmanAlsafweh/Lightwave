"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const REGISTRATION_ENDPOINT = "/api/box-requests";

const COUNTRY_CODES = [
  { code: "+963", en: "Syria (+963)", ar: "سوريا (+963)" },
  { code: "+961", en: "Lebanon (+961)", ar: "لبنان (+961)" },
  { code: "+90", en: "Turkey (+90)", ar: "تركيا (+90)" },
  { code: "+966", en: "Saudi Arabia (+966)", ar: "السعودية (+966)" },
  { code: "+971", en: "UAE (+971)", ar: "الإمارات (+971)" },
  { code: "+20", en: "Egypt (+20)", ar: "مصر (+20)" },
  { code: "+1", en: "United States (+1)", ar: "الولايات المتحدة (+1)" },
  { code: "+44", en: "United Kingdom (+44)", ar: "المملكة المتحدة (+44)" },
];

const TEXT = {
  en: {
    sectionBadge: "Internet Registration",
    sectionTitle: "Ready to register your internet service?",
    sectionDescription:
      "Start your request in under two minutes. Share your name, phone, and exact location so our team can verify coverage and contact you quickly.",
    sectionPrimaryButton: "Register Now",
    sectionSecondaryButton: "View Fiber Services",
    modalTitle: "Internet Service Registration",
    modalSubtitle: "Complete the form and we will prepare your request for processing.",
    firstName: "First Name",
    fatherName: "Father Name",
    motherName: "Mother Name",
    lastName: "Last Name",
    phoneLabel: "Phone Number",
    countryCode: "Country Code",
    phoneNumber: "Phone Number",
    phoneValidationTitle: "Enter 6 to 20 digits (spaces allowed).",
    openMap: "Open Google Maps",
    mapHint: "Choose your pin in Google Maps, then paste the link or coordinates to auto-fill latitude and longitude.",
    mapInput: "Google Maps Link or Coordinates",
    mapInputPlaceholder: "Example: https://maps.google.com/... or 34.44240359569981, 35.87057300261932",
    extractCoordinates: "Extract Coordinates",
    latitude: "Latitude",
    longitude: "Longitude",
    detailedLocation: "Detailed Location",
    detailedLocationPlaceholder: "Street, building, floor, landmark...",
    additionalNote: "Additional Note",
    additionalNotePlaceholder: "Any extra details for installation (optional)",
    locationLabel: "Location Label",
    locationLabelPlaceholder: "City / area (example: Saida - Downtown)",
    cancel: "Cancel",
    submit: "Submit Registration",
    submitting: "Submitting...",
    submitSuccess: "Registration submitted successfully.",
    submitError: "Unable to submit right now. Please try again.",
    mapError: "Could not read coordinates from this input. Paste a valid map link or coordinates.",
    latLngRequired: "Latitude and longitude are required.",
  },
  ar: {
    sectionBadge: "طلب اشتراك الإنترنت",
    sectionTitle: "جاهز لتسجيل خدمة الإنترنت؟",
    sectionDescription:
      "ابدأ طلبك خلال أقل من دقيقتين. شارك الاسم ورقم الهاتف والموقع الدقيق ليتواصل فريقنا معك بسرعة ويؤكد التغطية.",
    sectionPrimaryButton: "سجل الآن",
    sectionSecondaryButton: "عرض خدمات الألياف",
    modalTitle: "نموذج تسجيل خدمة الإنترنت",
    modalSubtitle: "أكمل البيانات وسنجهز الطلب للمعالجة مباشرة.",
    firstName: "الاسم الأول",
    fatherName: "اسم الأب",
    motherName: "اسم الأم",
    lastName: "اسم العائلة",
    phoneLabel: "رقم الهاتف",
    countryCode: "مفتاح الدولة",
    phoneNumber: "رقم الهاتف",
    phoneValidationTitle: "أدخل من 6 إلى 20 رقمًا (يمكن استخدام المسافات).",
    openMap: "فتح Google Maps",
    mapHint: "اختر موقعك في Google Maps ثم الصق الرابط أو الإحداثيات لملء خط العرض وخط الطول تلقائيًا.",
    mapInput: "رابط Google Maps أو الإحداثيات",
    mapInputPlaceholder: "مثال: https://maps.google.com/... أو 34.44240359569981, 35.87057300261932",
    extractCoordinates: "استخراج الإحداثيات",
    latitude: "خط العرض",
    longitude: "خط الطول",
    detailedLocation: "العنوان التفصيلي",
    detailedLocationPlaceholder: "الشارع، البناء، الطابق، أقرب نقطة دالة...",
    additionalNote: "ملاحظة إضافية",
    additionalNotePlaceholder: "أي تفاصيل إضافية للتركيب (اختياري)",
    locationLabel: "وصف الموقع",
    locationLabelPlaceholder: "المدينة / المنطقة (مثال: صيدا - وسط البلد)",
    cancel: "إغلاق",
    submit: "إرسال الطلب",
    submitting: "جاري الإرسال...",
    submitSuccess: "تم إرسال طلب التسجيل بنجاح.",
    submitError: "تعذر الإرسال حاليًا. حاول مرة أخرى.",
    mapError: "لم نتمكن من قراءة الإحداثيات من هذه القيمة. الصق رابطًا صحيحًا أو إحداثيات مباشرة.",
    latLngRequired: "خط العرض وخط الطول مطلوبان.",
  },
};

const initialForm = {
  firstName: "",
  fatherName: "",
  motherName: "",
  lastName: "",
  countryCode: "+963",
  phoneNumber: "",
  mapInput: "",
  latitude: "",
  longitude: "",
  locationLabel: "",
  detailedLocation: "",
  additionalNote: "",
};

function extractCoordinates(rawInput) {
  if (!rawInput) {
    return null;
  }

  let value = rawInput.trim();
  if (!value) {
    return null;
  }

  try {
    value = decodeURIComponent(value);
  } catch {
    // keep original value if decoding fails
  }

  const regex = /(-?\d{1,3}(?:\.\d+)?)[,\s]+(-?\d{1,3}(?:\.\d+)?)/g;
  let match;

  while ((match = regex.exec(value)) !== null) {
    const lat = Number.parseFloat(match[1]);
    const lng = Number.parseFloat(match[2]);

    if (Number.isNaN(lat) || Number.isNaN(lng)) {
      continue;
    }

    if (Math.abs(lat) <= 90 && Math.abs(lng) <= 180) {
      return {
        latitude: String(lat),
        longitude: String(lng),
      };
    }
  }

  return null;
}

function toNumber(value) {
  const parsed = Number.parseFloat(value);
  return Number.isNaN(parsed) ? null : parsed;
}

export default function InternetRegistrationCta({ locale = "en", servicesHref = "/en/services" }) {
  const t = locale === "ar" ? TEXT.ar : TEXT.en;
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const phoneCountryOptions = useMemo(
    () => COUNTRY_CODES.map((item) => ({ code: item.code, label: locale === "ar" ? item.ar : item.en })),
    [locale]
  );

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleExtractCoordinates = () => {
    const parsed = extractCoordinates(form.mapInput);

    if (!parsed) {
      setStatus("error");
      setFeedback(t.mapError);
      return;
    }

    setStatus("idle");
    setForm((previous) => ({
      ...previous,
      latitude: parsed.latitude,
      longitude: parsed.longitude,
    }));
    setFeedback("");
  };

  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps", "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const latitude = toNumber(form.latitude);
    const longitude = toNumber(form.longitude);

    if (
      latitude === null ||
      longitude === null ||
      Math.abs(latitude) > 90 ||
      Math.abs(longitude) > 180
    ) {
      setStatus("error");
      setFeedback(t.latLngRequired);
      return;
    }

    const payload = {
      full_name: form.firstName.trim(),
      father_name: form.fatherName.trim(),
      mother_name: form.motherName.trim(),
      surname: form.lastName.trim(),
      phone: `${form.countryCode} ${form.phoneNumber.trim()}`,
      location_label: form.locationLabel.trim(),
      address: form.detailedLocation.trim(),
      latitude,
      longitude,
      notes: form.additionalNote.trim() || null,
    };

    try {
      const response = await fetch(REGISTRATION_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      let responseData = null;
      try {
        responseData = responseText ? JSON.parse(responseText) : null;
      } catch {
        responseData = null;
      }

      if (!response.ok) {
        const apiMessage =
          responseData?.message ||
          responseData?.error ||
          responseText ||
          `HTTP ${response.status}`;
        throw new Error(apiMessage);
      }

      setStatus("success");
      setFeedback(t.submitSuccess);
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      const details = error?.message ? ` (${error.message})` : "";
      setFeedback(`${t.submitError}${details}`);
    }
  };

  return (
    <>
      <section className="px-6 pb-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-white via-brand-soft to-white p-8 shadow-card">
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="badge-soft text-xs">{t.sectionBadge}</p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">{t.sectionTitle}</h2>
              <p className="max-w-2xl text-slate-600">{t.sectionDescription}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => {
                  setFeedback("");
                  setStatus("idle");
                  setIsOpen(true);
                }}
                className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                {t.sectionPrimaryButton}
              </button>
              <Link
                href={servicesHref}
                className="rounded-full border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-brand-primary hover:text-brand-primary"
              >
                {t.sectionSecondaryButton}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 py-8"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="glass-panel max-h-[95vh] w-full max-w-3xl overflow-y-auto border border-slate-200 p-6 sm:p-8"
              role="dialog"
              aria-modal="true"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="badge-soft w-fit text-xs">{t.sectionBadge}</p>
                  <h3 className="text-2xl font-semibold text-slate-900">{t.modalTitle}</h3>
                  <p className="text-sm text-slate-600">{t.modalSubtitle}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-brand-primary hover:text-brand-primary"
                >
                  {t.cancel}
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-1 text-sm text-slate-800">
                    {t.firstName}
                    <input
                      required
                      name="firstName"
                      value={form.firstName}
                      onChange={handleFieldChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                    />
                  </label>

                  <label className="space-y-1 text-sm text-slate-800">
                    {t.fatherName}
                    <input
                      required
                      name="fatherName"
                      value={form.fatherName}
                      onChange={handleFieldChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                    />
                  </label>

                  <label className="space-y-1 text-sm text-slate-800">
                    {t.motherName}
                    <input
                      required
                      name="motherName"
                      value={form.motherName}
                      onChange={handleFieldChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                    />
                  </label>

                  <label className="space-y-1 text-sm text-slate-800">
                    {t.lastName}
                    <input
                      required
                      name="lastName"
                      value={form.lastName}
                      onChange={handleFieldChange}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                    />
                  </label>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-800">{t.phoneLabel}</p>
                  <div className="grid gap-3 sm:grid-cols-[220px,1fr]">
                    <label className="space-y-1 text-sm text-slate-800">
                      {t.countryCode}
                      <select
                        name="countryCode"
                        value={form.countryCode}
                        onChange={handleFieldChange}
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                      >
                        {phoneCountryOptions.map((item) => (
                          <option key={item.code} value={item.code}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="space-y-1 text-sm text-slate-800">
                      {t.phoneNumber}
                      <input
                        required
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={handleFieldChange}
                        inputMode="tel"
                        pattern="[0-9 ]{6,20}"
                        title={t.phoneValidationTitle}
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                      />
                    </label>
                  </div>
                </div>

                <div className="glass-panel border border-slate-200 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-slate-600">{t.mapHint}</p>
                    <button
                      type="button"
                      onClick={openGoogleMaps}
                      className="rounded-full border border-brand-primary/30 bg-white px-4 py-2 text-sm font-semibold text-brand-primary transition hover:border-brand-primary"
                    >
                      {t.openMap}
                    </button>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <label className="space-y-1 text-sm text-slate-800">
                      {t.mapInput}
                      <input
                        name="mapInput"
                        value={form.mapInput}
                        onChange={handleFieldChange}
                        placeholder={t.mapInputPlaceholder}
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                      />
                    </label>
                    <div className="flex justify-start">
                      <button
                        type="button"
                        onClick={handleExtractCoordinates}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-brand-primary hover:text-brand-primary"
                      >
                        {t.extractCoordinates}
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <label className="space-y-1 text-sm text-slate-800">
                      {t.latitude}
                      <input
                        required
                        name="latitude"
                        value={form.latitude}
                        onChange={handleFieldChange}
                        inputMode="decimal"
                        placeholder="34.44240359569981"
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                      />
                    </label>
                    <label className="space-y-1 text-sm text-slate-800">
                      {t.longitude}
                      <input
                        required
                        name="longitude"
                        value={form.longitude}
                        onChange={handleFieldChange}
                        inputMode="decimal"
                        placeholder="35.87057300261932"
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                      />
                    </label>
                  </div>
                </div>

                <label className="space-y-1 text-sm text-slate-800">
                  {t.locationLabel}
                  <input
                    required
                    name="locationLabel"
                    value={form.locationLabel}
                    onChange={handleFieldChange}
                    placeholder={t.locationLabelPlaceholder}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                  />
                </label>

                <label className="space-y-1 text-sm text-slate-800">
                  {t.detailedLocation}
                  <textarea
                    required
                    name="detailedLocation"
                    value={form.detailedLocation}
                    onChange={handleFieldChange}
                    rows={3}
                    placeholder={t.detailedLocationPlaceholder}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                  />
                </label>

                <label className="space-y-1 text-sm text-slate-800">
                  {t.additionalNote}
                  <textarea
                    name="additionalNote"
                    value={form.additionalNote}
                    onChange={handleFieldChange}
                    rows={3}
                    placeholder={t.additionalNotePlaceholder}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-primary focus:outline-none"
                  />
                </label>

                {feedback && (
                  <p
                    className={`rounded-xl border px-3 py-2 text-sm ${
                      status === "error"
                        ? "border-amber-200 bg-amber-50 text-amber-700"
                        : "border-emerald-200 bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    {feedback}
                  </p>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-primary hover:text-brand-primary"
                  >
                    {t.cancel}
                  </button>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-75"
                  >
                    {status === "loading" ? t.submitting : t.submit}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
