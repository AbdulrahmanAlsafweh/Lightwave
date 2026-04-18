"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const REGISTRATION_ENDPOINT = "/api/box-requests";
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
const DEFAULT_MAP_CENTER = { lat: 35.93, lng: 36.63 };

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
    sectionHighlights: ["Coverage verification", "Fast callback from our team", "Installation scheduling"],
    sectionFlowTitle: "What Happens Next",
    sectionFlowSteps: [
      "Open the form and submit your details.",
      "Add the exact map pin and detailed address.",
      "Our team reviews and contacts you to confirm installation.",
    ],
    sectionFactOneValue: "Under 15 min",
    sectionFactOneLabel: "First callback",
    sectionFactTwoValue: "Same day",
    sectionFactTwoLabel: "Coverage validation",
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
    mapHint: "Select your home on the map below, or paste a Google Maps link/coordinates.",
    mapPickerTitle: "Pick your home location",
    mapPickerHelp: "Click anywhere on the map or drag the marker to set exact latitude and longitude.",
    mapPickerNotConfigured:
      "Interactive map picker needs NEXT_PUBLIC_GOOGLE_MAPS_API_KEY. You can still paste a link or coordinates.",
    mapInput: "Google Maps Link or Coordinates",
    mapInputPlaceholder: "Example: https://maps.google.com/... or 34.44240359569981, 35.87057300261932",
    extractCoordinates: "Extract Coordinates",
    latitude: "Latitude",
    longitude: "Longitude",
    detailedLocation: "Detailed Location",
    detailedLocationPlaceholder: "Street, building, floor, landmark...",
    additionalNote: "Additional Note",
    additionalNotePlaceholder: "Any extra details for installation (optional)",
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
    sectionHighlights: ["تأكيد التغطية", "اتصال سريع من فريقنا", "تنسيق موعد التركيب"],
    sectionFlowTitle: "ماذا يحدث بعد الإرسال",
    sectionFlowSteps: [
      "افتح النموذج وأرسل بياناتك.",
      "أضف موقعك الدقيق على الخريطة مع العنوان التفصيلي.",
      "يراجع فريقنا الطلب ويتواصل معك لتأكيد التركيب.",
    ],
    sectionFactOneValue: "أقل من 15 دقيقة",
    sectionFactOneLabel: "أول اتصال",
    sectionFactTwoValue: "نفس اليوم",
    sectionFactTwoLabel: "تأكيد التغطية",
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
    mapHint: "حدّد موقع منزلك من الخريطة أدناه، أو الصق رابط Google Maps/الإحداثيات.",
    mapPickerTitle: "تحديد موقع المنزل",
    mapPickerHelp: "انقر على الخريطة أو اسحب المؤشر لتحديد خط العرض وخط الطول بدقة.",
    mapPickerNotConfigured:
      "ميزة اختيار الموقع من الخريطة تحتاج NEXT_PUBLIC_GOOGLE_MAPS_API_KEY. ما يزال بإمكانك لصق الرابط أو الإحداثيات.",
    mapInput: "رابط Google Maps أو الإحداثيات",
    mapInputPlaceholder: "مثال: https://maps.google.com/... أو 34.44240359569981, 35.87057300261932",
    extractCoordinates: "استخراج الإحداثيات",
    latitude: "خط العرض",
    longitude: "خط الطول",
    detailedLocation: "العنوان التفصيلي",
    detailedLocationPlaceholder: "الشارع، البناء، الطابق، أقرب نقطة دالة...",
    additionalNote: "ملاحظة إضافية",
    additionalNotePlaceholder: "أي تفاصيل إضافية للتركيب (اختياري)",
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

function getInitialMapCenter(latitudeInput, longitudeInput) {
  const latitude = toNumber(latitudeInput);
  const longitude = toNumber(longitudeInput);

  if (
    latitude !== null &&
    longitude !== null &&
    Math.abs(latitude) <= 90 &&
    Math.abs(longitude) <= 180
  ) {
    return { lat: latitude, lng: longitude };
  }

  return DEFAULT_MAP_CENTER;
}

function loadGoogleMapsScript(apiKey) {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Google Maps can only load in browser."));
  }

  if (!apiKey) {
    return Promise.reject(new Error("Missing Google Maps API key."));
  }

  if (window.google?.maps) {
    return Promise.resolve(window.google.maps);
  }

  if (window.__lightwaveGoogleMapsPromise) {
    return window.__lightwaveGoogleMapsPromise;
  }

  window.__lightwaveGoogleMapsPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-lightwave-google-maps="true"]');

    if (existing) {
      existing.addEventListener("load", () => resolve(window.google?.maps));
      existing.addEventListener("error", () => reject(new Error("Failed to load Google Maps script.")));
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.dataset.lightwaveGoogleMaps = "true";
    script.onload = () => {
      if (!window.google?.maps) {
        reject(new Error("Google Maps did not initialize."));
        return;
      }
      resolve(window.google.maps);
    };
    script.onerror = () => reject(new Error("Failed to load Google Maps script."));

    document.head.appendChild(script);
  });

  return window.__lightwaveGoogleMapsPromise;
}

export default function InternetRegistrationCta({ locale = "en", servicesHref = "/en/services" }) {
  const t = locale === "ar" ? TEXT.ar : TEXT.en;
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [mapReady, setMapReady] = useState(false);
  const [mapError, setMapError] = useState("");
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const markerDragListenerRef = useRef(null);
  const mapClickListenerRef = useRef(null);

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

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    if (!GOOGLE_MAPS_API_KEY) {
      setMapReady(false);
      setMapError(t.mapPickerNotConfigured);
      return undefined;
    }

    let cancelled = false;

    loadGoogleMapsScript(GOOGLE_MAPS_API_KEY)
      .then(() => {
        if (cancelled || !mapContainerRef.current) {
          return;
        }

        const initialCenter = getInitialMapCenter(form.latitude, form.longitude);

        if (!mapRef.current) {
          mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
            center: initialCenter,
            zoom: 14,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
          });
        } else {
          mapRef.current.setCenter(initialCenter);
        }

        if (!markerRef.current) {
          markerRef.current = new window.google.maps.Marker({
            position: initialCenter,
            map: mapRef.current,
            draggable: true,
          });
        } else {
          markerRef.current.setMap(mapRef.current);
          markerRef.current.setPosition(initialCenter);
        }

        if (mapClickListenerRef.current) {
          window.google.maps.event.removeListener(mapClickListenerRef.current);
        }

        mapClickListenerRef.current = mapRef.current.addListener("click", (event) => {
          const lat = event.latLng.lat();
          const lng = event.latLng.lng();
          markerRef.current?.setPosition({ lat, lng });
          setStatus("idle");
          setFeedback("");
          setForm((previous) => ({
            ...previous,
            latitude: String(lat),
            longitude: String(lng),
            mapInput: `${lat}, ${lng}`,
          }));
        });

        if (markerDragListenerRef.current) {
          window.google.maps.event.removeListener(markerDragListenerRef.current);
        }

        markerDragListenerRef.current = markerRef.current.addListener("dragend", (event) => {
          const lat = event.latLng.lat();
          const lng = event.latLng.lng();
          setStatus("idle");
          setFeedback("");
          setForm((previous) => ({
            ...previous,
            latitude: String(lat),
            longitude: String(lng),
            mapInput: `${lat}, ${lng}`,
          }));
        });

        setMapReady(true);
        setMapError("");
      })
      .catch((error) => {
        if (cancelled) {
          return;
        }
        setMapReady(false);
        setMapError(error?.message || t.mapPickerNotConfigured);
      });

    return () => {
      cancelled = true;
    };
  }, [isOpen, t.mapPickerNotConfigured]);

  useEffect(() => {
    if (!isOpen || !mapReady || !mapRef.current || !markerRef.current) {
      return;
    }

    const center = getInitialMapCenter(form.latitude, form.longitude);
    markerRef.current.setPosition(center);
    mapRef.current.panTo(center);
  }, [form.latitude, form.longitude, isOpen, mapReady]);

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
      firstname: form.firstName.trim(),
      fathername: form.fatherName.trim(),
      mothername: form.motherName.trim(),
      lastname: form.lastName.trim(),
      phone: `${form.countryCode} ${form.phoneNumber.trim()}`,
      lat: latitude,
      long: longitude,
      detailed_location: form.detailedLocation.trim(),
      additional_note: form.additionalNote.trim(),
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
      <section className="px-6 pb-10">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card sm:p-10">
          <div
            className="pointer-events-none absolute -left-14 top-0 h-44 w-44 rounded-full bg-brand-soft/80 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-12 bottom-0 h-52 w-52 rounded-full bg-brand-light/50 blur-3xl"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/80 to-brand-soft/40" aria-hidden />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="badge-soft w-fit text-xs">{t.sectionBadge}</p>
                <h2 className="text-3xl font-semibold text-slate-900 md:text-5xl">{t.sectionTitle}</h2>
                <p className="max-w-2xl text-base text-slate-600 md:text-lg">{t.sectionDescription}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {t.sectionHighlights.map((highlight) => (
                  <div key={highlight} className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-brand-primary" />
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => {
                    setFeedback("");
                    setStatus("idle");
                    setIsOpen(true);
                  }}
                  className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                >
                  {t.sectionPrimaryButton}
                </button>
                <Link
                  href={servicesHref}
                  className="rounded-full border border-slate-200 px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-brand-primary hover:text-brand-primary"
                >
                  {t.sectionSecondaryButton}
                </Link>
              </div>
            </div>

            <div className="glass-panel border border-slate-200 bg-white/90 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">{t.sectionFlowTitle}</p>
              <div className="mt-4 space-y-3">
                {t.sectionFlowSteps.map((step, index) => (
                  <div key={step} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-semibold text-brand-primary">
                      {index + 1}
                    </span>
                    <p className="text-sm text-slate-700">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-200 bg-brand-soft p-3">
                  <p className="text-lg font-semibold text-slate-900">{t.sectionFactOneValue}</p>
                  <p className="text-xs text-slate-600">{t.sectionFactOneLabel}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-brand-soft p-3">
                  <p className="text-lg font-semibold text-slate-900">{t.sectionFactTwoValue}</p>
                  <p className="text-xs text-slate-600">{t.sectionFactTwoLabel}</p>
                </div>
              </div>
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

                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-slate-800">{t.mapPickerTitle}</p>
                    <p className="text-xs text-slate-500">{t.mapPickerHelp}</p>
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                      <div ref={mapContainerRef} className="h-64 w-full" />
                    </div>
                    {mapError && <p className="text-xs text-amber-600">{mapError}</p>}
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
