const LANG_KEY = "geosaCardLang";

// Fixed, organization-wide values (not asked in the form).
const UNIFIED_NUMBER = "920000427";

const fixedOrg = {
  ar: "الهيئة العامة للمساحة والمعلومات الجيومكانية",
  en: "General Authority for Survey and Geospatial Information"
};

const TITLE_OPTIONS = [
  { ar: "الدكتور", en: "Doctor", abbrAr: "د.", abbrEn: "Dr." },
  { ar: "الدكتورة", en: "Doctor", abbrAr: "د.", abbrEn: "Dr." },
  { ar: "الأستاذ", en: "Mister", abbrAr: "أ.", abbrEn: "Mr." },
  { ar: "الأستاذة", en: "Miss", abbrAr: "أ.", abbrEn: "Ms." },
  { ar: "المهندس", en: "Engineer", abbrAr: "م.", abbrEn: "Eng." },
  { ar: "المهندسة", en: "Engineer", abbrAr: "م.", abbrEn: "Eng." }
];
const OTHER_TITLE = "__other__";

const fixedAddress = {
  ar: { street: "رقم 64", district: "العليا", city: "الرياض", postalCode: "12213", country: "المملكة العربية السعودية" },
  en: { street: "No. 64", district: "Al Olaya", city: "Riyadh", postalCode: "12213", country: "Kingdom of Saudi Arabia" }
};

const translations = {
  ar: {
    dir: "rtl",
    pageTitleSuffix: "البطاقة الرقمية",
    logoSrc: "assets/logo.webp",
    logoAlt: "شعار الجهة",
    avatarAlt: "الصورة الشخصية",
    phoneLabel: "رقم الجوال",
    phone2Label: "هاتف العمل",
    phone3Label: "الرقم الموحد",
    emailLabel: "البريد الإلكتروني",
    addressLabel: "العنوان",
    addressValue: `${fixedAddress.ar.city}، ${fixedAddress.ar.country}\n${fixedAddress.ar.street}، ${fixedAddress.ar.district}، الرمز البريدي ${fixedAddress.ar.postalCode}`,
    addContact: "إضافة إلى جهات الاتصال",
    saveImage: "حفظ البطاقة كصورة",
    qrExportHint: "امسح الرمز لحفظ بيانات التواصل",
    qrScanHint: "امسح الرمز لحفظ بيانات التواصل مباشرة",
    shareLabel: "مشاركة",
    footerOrg: fixedOrg.ar,

    // Form
    formHeading: "إنشاء البطاقة الرقمية",
    formSubtitle: "يُرجى تعبئة البيانات التالية لإصدار بطاقتك التعريفية الرقمية فورًا",
    photoLabel: "الصورة الشخصية",
    photoHint: "يُفضّل صورة شخصية حديثة وواضحة، بخلفية بيضاء أو شفافة",
    photoAdjustHint: "اسحب الصورة لتحديد الموضع، وحرّك الشريط للتكبير",
    doneLabel: "تم",
    personalDataLegend: "البيانات الشخصية",
    contactLegend: "معلومات التواصل",
    titleLabel: "المسمى / اللقب",
    titleCustomLabel: "اكتب اللقب",
    titleCustomPlaceholder: "اكتب اللقب",
    nameLabel: "الاسم الثلاثي",
    namePlaceholder: "اكتب الاسم الثلاثي",
    deptLabel: "المسمى الوظيفي",
    deptPlaceholder: "اكتب المسمى الوظيفي",
    extensionLabel: "رقم التحويلة",
    optionalHint: "(اختياري)",
    emailPlaceholder: "اكتب بداية البريد الإلكتروني",
    submitLabel: "إنشاء البطاقة الرقمية",
    loadingText: "جاري إنشاء البطاقة...",
    requiredFieldsError: "الرجاء تعبئة جميع الحقول المطلوبة.",
    titlePlaceholder: "اختر اللقب",
    otherLabel: "أخرى",
    arabicOnlyMessage: "يسمح بالحروف العربية فقط، بدون أرقام أو رموز",
    englishOnlyMessage: "يسمح بالحروف الإنجليزية فقط، بدون أرقام أو رموز",
    digitsOnlyMessage: "يسمح بالأرقام فقط",
    mobileFormatMessage: "رقم الجوال يجب أن يبدأ بـ5 ويتكون من 9 أرقام",
    workPhoneFormatMessage: "هاتف العمل يجب أن يبدأ بـ1 ويتكون من 9 أرقام",
    extensionFormatMessage: "رقم التحويلة يجب أن يتكون من 4 أرقام فقط",
    emailLocalOnlyMessage: "يحتوي على أحرف إنجليزية و(-_.) فقط"
  },
  en: {
    dir: "ltr",
    pageTitleSuffix: "Digital Business Card",
    logoSrc: "assets/logo-en.png",
    logoAlt: "GEOSA logo",
    avatarAlt: "Profile photo",
    phoneLabel: "Mobile",
    phone2Label: "Work Phone",
    phone3Label: "Unified Number",
    emailLabel: "Email",
    addressLabel: "Address",
    addressValue: `${fixedAddress.en.city}, ${fixedAddress.en.country}\n${fixedAddress.en.street}, ${fixedAddress.en.district}, Zip Code ${fixedAddress.en.postalCode}`,
    addContact: "Add to Contacts",
    saveImage: "Save Card Image",
    qrExportHint: "Scan the code to save contact details",
    qrScanHint: "Scan the code to save contact details directly",
    shareLabel: "Share",
    footerOrg: fixedOrg.en,

    // Form
    formHeading: "Create Digital Card",
    formSubtitle: "Please fill in the following details to issue your digital ID card instantly",
    photoLabel: "Profile Photo",
    photoHint: "A recent, clear photo with a white or transparent background is preferred",
    photoAdjustHint: "Drag the photo to reposition it, and use the slider to zoom",
    doneLabel: "Done",
    personalDataLegend: "Personal Data",
    contactLegend: "Contact Information",
    titleLabel: "Title",
    titleCustomLabel: "Enter the title",
    titleCustomPlaceholder: "Enter the title",
    nameLabel: "Full Name",
    namePlaceholder: "Enter the full name",
    deptLabel: "Job Title",
    deptPlaceholder: "Enter the job title",
    extensionLabel: "Extension Number",
    optionalHint: "(optional)",
    emailPlaceholder: "Enter the beginning of your email",
    submitLabel: "Create Digital Card",
    loadingText: "Creating your card...",
    requiredFieldsError: "Please fill in all required fields.",
    titlePlaceholder: "Choose title",
    otherLabel: "Other",
    arabicOnlyMessage: "Only Arabic letters are allowed, no digits or symbols",
    englishOnlyMessage: "Only English letters are allowed, no digits or symbols",
    digitsOnlyMessage: "Only digits are allowed",
    mobileFormatMessage: "Mobile number must start with 5 and be 9 digits long",
    workPhoneFormatMessage: "Work phone must start with 1 and be 9 digits long",
    extensionFormatMessage: "Extension must be exactly 4 digits",
    emailLocalOnlyMessage: "Only English letters and (-_.) are allowed"
  }
};

const DEFAULT_AVATAR = "assets/avatar-none.jpg";

// Elements
const formView = document.getElementById("formView");
const cardView = document.getElementById("cardView");
const loadingView = document.getElementById("loadingView");
const cardForm = document.getElementById("cardForm");
const formError = document.getElementById("formError");

const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");
const photoPlaceholder = document.getElementById("photoPlaceholder");
const photoUpload = document.querySelector(".photo-upload");
const photoEditBtn = document.getElementById("photoEditBtn");
const photoAdjustPanel = document.getElementById("photoAdjustPanel");
const photoZoomSlider = document.getElementById("photoZoom");
const photoAdjustDone = document.getElementById("photoAdjustDone");

const titleCustomField = document.getElementById("titleCustomField");
const titleCustomInput = document.getElementById("titleCustom");
const nameInput = document.getElementById("name");
const deptInput = document.getElementById("dept");
const mobileInput = document.getElementById("mobile");
const workPhoneInput = document.getElementById("workPhone");
const extensionInput = document.getElementById("extension");
const emailInput = document.getElementById("email");
const mobileWrapper = mobileInput.closest(".phone-input");
const workPhoneWrapper = workPhoneInput.closest(".phone-input");
const extensionWrapper = extensionInput.closest(".phone-input");
const emailWrapper = emailInput.closest(".phone-input");

// Name/title/department accept Arabic letters only while the form is in
// Arabic, or Latin letters only while it's in English — whichever script
// matches the card that's about to be generated.
const ARABIC_ONLY = /[^ء-يـ\s]/g;
const ENGLISH_ONLY = /[^a-zA-Z\s]/g;
const DIGITS_ONLY = /[^0-9]/g;
const MOBILE_PREFIX = "+966";
const MOBILE_PATTERN = /^5[0-9]{8}$/;
const mobileErrorEl = document.getElementById("mobileError");
const WORK_PHONE_PATTERN = /^1[0-9]{8}$/;
const workPhoneErrorEl = document.getElementById("workPhoneError");
const EXTENSION_PATTERN = /^[0-9]{4}$/;
const extensionErrorEl = document.getElementById("extensionError");
const EMAIL_DOMAIN = "@geosa.gov.sa";
const EMAIL_LOCAL_ONLY = /[^a-zA-Z._-]/g;
const emailErrorEl = document.getElementById("emailError");

// Mobile keyboards (especially with an Arabic locale) often type
// Arabic-Indic digits (٠-٩) or Extended Arabic-Indic (۰-۹) instead of
// Western ones — convert those to plain 0-9 before any digits-only check.
function toWesternDigits(str) {
  return str.replace(/[٠-٩۰-۹]/g, (d) => {
    const code = d.codePointAt(0);
    if (code >= 0x0660 && code <= 0x0669) return String(code - 0x0660);
    return String(code - 0x06f0);
  });
}

// pattern/messageKey may be a fixed value or a function evaluated on every
// keystroke, so name/title/dept can switch which script they restrict to
// the moment the form's language changes. Every message is looked up from
// `translations[currentLang]` at the moment it's shown, not baked in at
// setup, so switching language mid-fill also switches any error text
// already on screen.
function restrictInput(el, patternSource, messageKeySource, errorEl, transform) {
  let hideTimer = null;
  el.addEventListener("input", () => {
    const pattern = typeof patternSource === "function" ? patternSource() : patternSource;
    const messageKey = typeof messageKeySource === "function" ? messageKeySource() : messageKeySource;
    const source = transform ? transform(el.value) : el.value;
    const filtered = source.replace(pattern, "");
    if (filtered !== el.value) {
      el.value = filtered;
      errorEl.textContent = translations[currentLang][messageKey];
      errorEl.hidden = false;
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        errorEl.hidden = true;
      }, 2500);
    }
  });
}

const scriptPattern = () => (currentLang === "ar" ? ARABIC_ONLY : ENGLISH_ONLY);
const scriptMessageKey = () => (currentLang === "ar" ? "arabicOnlyMessage" : "englishOnlyMessage");

restrictInput(nameInput, scriptPattern, scriptMessageKey, document.getElementById("nameError"));
restrictInput(deptInput, scriptPattern, scriptMessageKey, document.getElementById("deptError"));
restrictInput(titleCustomInput, scriptPattern, scriptMessageKey, document.getElementById("titleCustomError"));
restrictInput(mobileInput, DIGITS_ONLY, "digitsOnlyMessage", mobileErrorEl, toWesternDigits);
restrictInput(workPhoneInput, DIGITS_ONLY, "digitsOnlyMessage", workPhoneErrorEl, toWesternDigits);
restrictInput(extensionInput, DIGITS_ONLY, "digitsOnlyMessage", extensionErrorEl, toWesternDigits);
restrictInput(emailInput, EMAIL_LOCAL_ONLY, "emailLocalOnlyMessage", emailErrorEl);

function validatePhoneFormat(input, pattern, messageKey, errorEl, required) {
  const val = input.value.trim();
  if (!val) {
    errorEl.hidden = true;
    return !required;
  }
  if (!pattern.test(val)) {
    errorEl.textContent = translations[currentLang][messageKey];
    errorEl.hidden = false;
    return false;
  }
  errorEl.hidden = true;
  return true;
}

function validateMobileFormat() {
  const ok = validatePhoneFormat(mobileInput, MOBILE_PATTERN, "mobileFormatMessage", mobileErrorEl, true);
  mobileWrapper.classList.toggle("is-invalid", !ok);
  return ok;
}

function validateWorkPhoneFormat() {
  const ok = validatePhoneFormat(workPhoneInput, WORK_PHONE_PATTERN, "workPhoneFormatMessage", workPhoneErrorEl, false);
  workPhoneWrapper.classList.toggle("is-invalid", !ok);
  return ok;
}

function validateExtensionFormat() {
  const ok = validatePhoneFormat(extensionInput, EXTENSION_PATTERN, "extensionFormatMessage", extensionErrorEl, false);
  extensionWrapper.classList.toggle("is-invalid", !ok);
  return ok;
}

mobileInput.addEventListener("blur", validateMobileFormat);
workPhoneInput.addEventListener("blur", validateWorkPhoneFormat);
extensionInput.addEventListener("blur", validateExtensionFormat);

// Clear the red "required" highlight the moment the user starts fixing a field.
mobileInput.addEventListener("input", () => mobileWrapper.classList.remove("is-invalid"));
workPhoneInput.addEventListener("input", () => workPhoneWrapper.classList.remove("is-invalid"));
extensionInput.addEventListener("input", () => extensionWrapper.classList.remove("is-invalid"));
emailInput.addEventListener("input", () => emailWrapper.classList.remove("is-invalid"));
[nameInput, deptInput, titleCustomInput].forEach((el) => {
  el.addEventListener("input", () => el.classList.remove("is-invalid"));
});

const formLangToggle = document.getElementById("formLangToggle");
const langSwitchOptions = formLangToggle.querySelectorAll(".lang-switch__option");
const saveContactBtn = document.getElementById("saveContactBtn");
const saveImageBtn = document.getElementById("saveImageBtn");
const cardActions = document.querySelector(".card__actions");
const cardContact = document.querySelector(".card__contact");
const cardQRExport = document.getElementById("cardQRExport");
const qrCanvasExport = document.getElementById("qrCanvasExport");

const qrThumbBtn = document.getElementById("qrThumbBtn");
const qrCanvasSmall = document.getElementById("qrCanvasSmall");
const qrCanvasLarge = document.getElementById("qrCanvasLarge");
const qrModal = document.getElementById("qrModal");
const qrModalBackdrop = document.getElementById("qrModalBackdrop");
const qrModalCloseBtn = document.getElementById("qrModalCloseBtn");
const qrShareBtn = document.getElementById("qrShareBtn");

const cardAvatar = document.getElementById("cardAvatar");
const cardJobTitle = document.getElementById("cardJobTitle");
const cardName = document.getElementById("cardName");
const cardDept = document.getElementById("cardDept");
const mobileRow = document.getElementById("mobileRow");
const mobileValue = document.getElementById("mobileValue");
const workPhoneRow = document.getElementById("workPhoneRow");
const workPhoneValue = document.getElementById("workPhoneValue");
const unifiedNumberValue = document.getElementById("unifiedNumberValue");
const emailRow = document.getElementById("emailRow");
const emailValue = document.getElementById("emailValue");

let cardData = null;
let currentLang = localStorage.getItem(LANG_KEY) || "ar";
let pendingPhoto = null;

// The uncropped working photo the "position/zoom" adjuster operates on;
// pendingPhoto is always the baked (cropped) 480x480 result derived from it.
const PHOTO_DISPLAY_SIZE = 92; // matches .photo-upload / .card__avatar in CSS
const PHOTO_OUTPUT_SIZE = 480;
let photoSource = null; // { dataUrl, width, height }
let photoZoom = 1;
let photoPanX = 0;
let photoPanY = 0;
let photoAdjustActive = false;
let photoDragState = null;

// Custom-styled dropdown (native <select> popups can't be themed with CSS).
// Exposes a select-like .value getter/setter and addEventListener("change", fn)
// so the rest of the title logic below can treat it like a <select>.
class Dropdown {
  constructor(wrapperId, options, placeholderText) {
    this.wrapper = document.getElementById(wrapperId);
    this.trigger = this.wrapper.querySelector(".dropdown__trigger");
    this.valueLabel = this.wrapper.querySelector(".dropdown__value");
    this.list = this.wrapper.querySelector(".dropdown__list");
    this._value = "";
    this._changeListeners = [];

    this.setOptions(options, placeholderText);

    this.trigger.addEventListener("click", () => this.toggle());
    this.trigger.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close();
    });
    document.addEventListener("click", (e) => {
      if (!this.wrapper.contains(e.target)) this.close();
    });
  }

  // Rebuilds the option list from scratch and resets the current selection —
  // used both for initial setup and when the form's language changes (the
  // Arabic and English title word lists don't correspond 1:1, so a prior
  // pick can't be carried over automatically).
  setOptions(options, placeholderText) {
    this.options = options;
    this.placeholder = placeholderText;
    this._value = "";
    this.list.innerHTML = "";
    options.forEach((opt) => {
      const li = document.createElement("li");
      li.className = "dropdown__option";
      li.setAttribute("role", "option");
      li.tabIndex = 0;
      li.dataset.value = opt.value;
      li.textContent = opt.label;
      li.addEventListener("click", () => {
        this.value = opt.value;
        this.close();
        this.trigger.focus();
      });
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          li.click();
        }
      });
      this.list.appendChild(li);
    });
    this.valueLabel.textContent = placeholderText;
    this.valueLabel.classList.add("is-placeholder");
  }

  toggle() {
    if (this.list.hidden) this.open();
    else this.close();
  }

  open() {
    this.list.hidden = false;
    this.trigger.setAttribute("aria-expanded", "true");
  }

  close() {
    this.list.hidden = true;
    this.trigger.setAttribute("aria-expanded", "false");
  }

  get value() {
    return this._value;
  }

  set value(v) {
    if (v === this._value) return;
    this._value = v;
    const opt = this.options.find((o) => o.value === v);
    this.valueLabel.textContent = opt ? opt.label : this.placeholder;
    this.valueLabel.classList.toggle("is-placeholder", !opt);
    this.list.querySelectorAll(".dropdown__option").forEach((li) => {
      li.classList.toggle("is-selected", li.dataset.value === v);
    });
    this._changeListeners.forEach((fn) => fn());
  }

  addEventListener(type, fn) {
    if (type === "change") this._changeListeners.push(fn);
  }
}

// Arabic titles are gendered (الدكتور/الدكتورة), so every variant gets its
// own option, keyed by its index in TITLE_OPTIONS.
const arTitleOptions = TITLE_OPTIONS.map((opt, i) => ({ value: String(i), label: opt.ar }));
arTitleOptions.push({ value: OTHER_TITLE, label: translations.ar.otherLabel });

// English titles have no gendered forms, so the list is deduplicated;
// the option value is the English text itself.
const enTitleOptions = [];
const seenEnTitles = new Set();
TITLE_OPTIONS.forEach((opt) => {
  if (seenEnTitles.has(opt.en)) return;
  seenEnTitles.add(opt.en);
  enTitleOptions.push({ value: opt.en, label: opt.en });
});
enTitleOptions.push({ value: OTHER_TITLE, label: translations.en.otherLabel });

const titleSelect = new Dropdown(
  "titleDropdown",
  currentLang === "ar" ? arTitleOptions : enTitleOptions,
  translations[currentLang].titlePlaceholder
);

titleSelect.addEventListener("change", () => {
  titleCustomField.hidden = titleSelect.value !== OTHER_TITLE;
  titleSelect.trigger.classList.remove("is-invalid");
});

function resolveTitle(select, customInput) {
  const val = select.value;
  if (val === OTHER_TITLE) return customInput.value.trim();
  if (val === "") return "";
  return currentLang === "ar" ? TITLE_OPTIONS[Number(val)].ar : val;
}

function resizeImage(file, maxDim, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let { width, height } = img;
        if (width > height && width > maxDim) {
          height = Math.round(height * (maxDim / width));
          width = maxDim;
        } else if (height > maxDim) {
          width = Math.round(width * (maxDim / height));
          height = maxDim;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// How large the source image is drawn inside the PHOTO_DISPLAY_SIZE circle
// at the current zoom, before any pan offset — mirrors CSS object-fit:cover.
function getPhotoCoverSize() {
  if (!photoSource) return { w: PHOTO_DISPLAY_SIZE, h: PHOTO_DISPLAY_SIZE };
  const coverScale = PHOTO_DISPLAY_SIZE / Math.min(photoSource.width, photoSource.height);
  return {
    w: photoSource.width * coverScale * photoZoom,
    h: photoSource.height * coverScale * photoZoom
  };
}

function clampPhotoPan() {
  const { w, h } = getPhotoCoverSize();
  const maxX = Math.max(0, (w - PHOTO_DISPLAY_SIZE) / 2);
  const maxY = Math.max(0, (h - PHOTO_DISPLAY_SIZE) / 2);
  photoPanX = Math.min(maxX, Math.max(-maxX, photoPanX));
  photoPanY = Math.min(maxY, Math.max(-maxY, photoPanY));
}

function applyPhotoTransform() {
  photoPreview.style.transform = `translate(${photoPanX}px, ${photoPanY}px) scale(${photoZoom})`;
}

async function bakePhoto() {
  const img = await loadImage(photoSource.dataUrl);
  const OUT = PHOTO_OUTPUT_SIZE;
  const baseCoverScale = OUT / Math.min(photoSource.width, photoSource.height);
  const scale = baseCoverScale * photoZoom;
  const drawW = photoSource.width * scale;
  const drawH = photoSource.height * scale;
  const panScale = OUT / PHOTO_DISPLAY_SIZE;
  const centerX = OUT / 2 + photoPanX * panScale;
  const centerY = OUT / 2 + photoPanY * panScale;

  const canvas = document.createElement("canvas");
  canvas.width = OUT;
  canvas.height = OUT;
  canvas.getContext("2d").drawImage(img, centerX - drawW / 2, centerY - drawH / 2, drawW, drawH);

  pendingPhoto = canvas.toDataURL("image/jpeg", 0.85);
  photoPreview.src = pendingPhoto;
  photoPreview.style.transform = "";
  photoPreview.hidden = false;
  photoPlaceholder.hidden = true;
  photoUpload.classList.remove("is-invalid");
}

function closePhotoAdjuster() {
  photoAdjustActive = false;
  photoAdjustPanel.hidden = true;
  photoPreview.classList.remove("is-adjusting");
}

photoInput.addEventListener("change", () => {
  const file = photoInput.files && photoInput.files[0];
  if (!file) return;
  resizeImage(file, 640, 0.9).then(async (dataUrl) => {
    const img = await loadImage(dataUrl);
    photoSource = { dataUrl, width: img.naturalWidth, height: img.naturalHeight };
    photoZoom = 1;
    photoPanX = 0;
    photoPanY = 0;
    photoEditBtn.hidden = false;
    closePhotoAdjuster();
    await bakePhoto();
  });
});

photoEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (!photoSource) return;
  photoAdjustActive = true;
  photoPreview.src = photoSource.dataUrl;
  applyPhotoTransform();
  photoZoomSlider.value = String(Math.round(photoZoom * 100));
  photoAdjustPanel.hidden = false;
  photoPreview.classList.add("is-adjusting");
});

photoZoomSlider.addEventListener("input", () => {
  photoZoom = Number(photoZoomSlider.value) / 100;
  clampPhotoPan();
  applyPhotoTransform();
});

photoPreview.addEventListener("pointerdown", (e) => {
  if (!photoAdjustActive) return;
  e.preventDefault();
  photoPreview.setPointerCapture(e.pointerId);
  photoDragState = { startX: e.clientX, startY: e.clientY, originX: photoPanX, originY: photoPanY };
  photoPreview.classList.add("is-dragging");
});

photoPreview.addEventListener("pointermove", (e) => {
  if (!photoDragState) return;
  photoPanX = photoDragState.originX + (e.clientX - photoDragState.startX);
  photoPanY = photoDragState.originY + (e.clientY - photoDragState.startY);
  clampPhotoPan();
  applyPhotoTransform();
});

function endPhotoDrag() {
  photoDragState = null;
  photoPreview.classList.remove("is-dragging");
}
photoPreview.addEventListener("pointerup", endPhotoDrag);
photoPreview.addEventListener("pointercancel", endPhotoDrag);

// Prevent the drag gesture's trailing click from bubbling to the <label>
// and reopening the file picker while the user is adjusting the photo.
photoPreview.addEventListener("click", (e) => {
  if (photoAdjustActive) {
    e.preventDefault();
    e.stopPropagation();
  }
});

photoAdjustDone.addEventListener("click", async (e) => {
  e.preventDefault();
  e.stopPropagation();
  await bakePhoto();
  closePhotoAdjuster();
});

function showForm() {
  cardView.hidden = true;
  formView.hidden = false;
}

function showCard() {
  formView.hidden = true;
  cardView.hidden = false;
  applyLanguage(currentLang);
}

cardForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const mobileOk = validateMobileFormat();
  const workPhoneOk = validateWorkPhoneFormat();
  const extensionOk = validateExtensionFormat();

  const data = {
    lang: currentLang,
    title: resolveTitle(titleSelect, titleCustomInput),
    name: nameInput.value.trim(),
    dept: deptInput.value.trim(),
    mobile: mobileInput.value.trim() ? MOBILE_PREFIX + mobileInput.value.trim() : "",
    workPhone: workPhoneInput.value.trim() ? MOBILE_PREFIX + workPhoneInput.value.trim() : "",
    extension: extensionInput.value.trim(),
    email: emailInput.value.trim() ? emailInput.value.trim() + EMAIL_DOMAIN : "",
    photo: pendingPhoto || DEFAULT_AVATAR
  };

  // Highlight every invalid field in red, in the same top-to-bottom order as
  // the form itself, so focus lands on whichever one the user hits first.
  const fieldChecks = [
    { invalid: !data.title, el: titleSelect.value === OTHER_TITLE ? titleCustomInput : titleSelect.trigger },
    { invalid: !data.name, el: nameInput },
    { invalid: !data.dept, el: deptInput },
    { invalid: !mobileOk, el: mobileWrapper },
    { invalid: !workPhoneOk, el: workPhoneWrapper },
    { invalid: !extensionOk, el: extensionWrapper },
    { invalid: !data.email, el: emailWrapper }
  ];

  fieldChecks.forEach(({ invalid, el }) => el.classList.toggle("is-invalid", invalid));
  const firstInvalid = fieldChecks.find((c) => c.invalid);

  if (firstInvalid) {
    formError.textContent = translations[currentLang].requiredFieldsError;
    formError.hidden = false;
    const el = firstInvalid.el;
    const focusable = el.matches("input, button") ? el : el.querySelector("input, button");
    (focusable || el).focus();
    return;
  }

  formError.hidden = true;
  cardData = data;

  formView.hidden = true;
  loadingView.hidden = false;
  await new Promise((resolve) => setTimeout(resolve, 700));
  loadingView.hidden = true;
  showCard();
});

// Displays "+966 50 000 0000" (2-3-4 grouping) while the underlying stored
// value (used for tel: links and the vCard) stays a plain unspaced number.
function formatPhoneDisplay(fullNumber) {
  if (!fullNumber || !fullNumber.startsWith(MOBILE_PREFIX)) return fullNumber;
  const local = fullNumber.slice(MOBILE_PREFIX.length);
  if (local.length !== 9) return fullNumber;
  return `${MOBILE_PREFIX} ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5, 9)}`;
}

// Drives the language for the whole app — the intake form (before a card
// exists) and the generated card (after) alike. There is no bilingual card:
// whichever language the employee filled the form in is exactly what the
// resulting card is issued in, permanently.
function applyLanguage(lang) {
  const t = translations[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;

  document.querySelectorAll(".i18n-logo").forEach((img) => {
    img.src = t.logoSrc;
    img.alt = t.logoAlt;
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t[el.dataset.i18nPlaceholder];
  });

  formLangToggle.classList.toggle("is-en", lang === "en");
  langSwitchOptions.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);

  if (!cardData) {
    // Switching the form's language swaps which script the title dropdown
    // offers (e.g. "المهندس" vs "Engineer"); any prior selection can't carry
    // over since the two option sets don't correspond 1:1.
    titleSelect.setOptions(lang === "ar" ? arTitleOptions : enTitleOptions, t.titlePlaceholder);
    titleCustomField.hidden = true;
    titleCustomInput.value = "";
    document.title = t.formHeading;
    return;
  }

  document.title = `${cardData.title} ${cardData.name} | ${t.pageTitleSuffix}`;

  cardJobTitle.textContent = cardData.title;
  cardName.textContent = cardData.name;
  cardDept.textContent = cardData.dept;

  cardAvatar.src = cardData.photo;
  cardAvatar.alt = t.avatarAlt;

  mobileRow.href = `tel:${cardData.mobile}`;
  mobileValue.textContent = formatPhoneDisplay(cardData.mobile);

  if (cardData.workPhone) {
    workPhoneRow.hidden = false;
    workPhoneRow.href = `tel:${cardData.workPhone}`;
    workPhoneValue.textContent = formatPhoneDisplay(cardData.workPhone);
  } else {
    workPhoneRow.hidden = true;
  }

  unifiedNumberValue.textContent = cardData.extension
    ? `${UNIFIED_NUMBER}, ${cardData.extension}`
    : UNIFIED_NUMBER;

  emailRow.href = `mailto:${cardData.email}`;
  emailValue.textContent = cardData.email;

  updateQRCodes();
}

// Contact apps conventionally show a short prefix (e.g. "Dr. Jane Doe"),
// so the saved vCard abbreviates the title even though the card display
// keeps the full word — matches known title options only, not custom ones.
function abbreviateTitle(title, lang) {
  const opt = TITLE_OPTIONS.find((o) => o[lang] === title);
  if (!opt) return title;
  return lang === "ar" ? opt.abbrAr : opt.abbrEn;
}

function buildVCard() {
  const addr = fixedAddress[cardData.lang];
  const org = fixedOrg[cardData.lang];
  const vCardTitle = abbreviateTitle(cardData.title, cardData.lang);
  const nameParts = cardData.name.split(" ").filter(Boolean);
  const firstName = nameParts[0] || cardData.name;
  const lastName = nameParts.slice(1).join(" ") || cardData.name;

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${lastName};${firstName};;${vCardTitle};`,
    `FN:${vCardTitle} ${cardData.name}`,
    `TITLE:${cardData.dept}`,
    `ORG:${org}`,
    `TEL;TYPE=CELL:${cardData.mobile}`
  ];

  if (cardData.workPhone) {
    lines.push(`TEL;TYPE=WORK:${cardData.workPhone}`);
  }

  lines.push(
    `TEL;TYPE=WORK,VOICE:${UNIFIED_NUMBER}`,
    `EMAIL;TYPE=INTERNET:${cardData.email}`,
    `ADR;TYPE=WORK:;${addr.district};${addr.street};${addr.city};;${addr.postalCode};${addr.country}`,
    "END:VCARD"
  );

  return lines.join("\r\n");
}

function renderQRToCanvas(canvas, text, sizePx) {
  if (typeof qrcode !== "function") return;

  // The library's default byte-encoder truncates non-Latin1 characters,
  // which would corrupt Arabic text — switch to the UTF-8-safe encoder it
  // ships (but doesn't enable by default) before generating anything. The
  // vendor script loads deferred, so this can't be set at module scope;
  // it has to happen here, right before first use.
  qrcode.stringToBytes = qrcode.stringToBytesFuncs["UTF-8"];

  const qr = qrcode(0, "M");
  qr.addData(text);
  qr.make();

  const moduleCount = qr.getModuleCount();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = sizePx * ratio;
  canvas.height = sizePx * ratio;
  canvas.style.width = `${sizePx}px`;
  canvas.style.height = `${sizePx}px`;

  const cellSize = (sizePx * ratio) / moduleCount;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0c3138";
  for (let row = 0; row < moduleCount; row++) {
    for (let col = 0; col < moduleCount; col++) {
      if (qr.isDark(row, col)) {
        ctx.fillRect(col * cellSize, row * cellSize, Math.ceil(cellSize), Math.ceil(cellSize));
      }
    }
  }
}

function updateQRCodes() {
  if (!cardData) return;
  const vCardText = buildVCard();
  renderQRToCanvas(qrCanvasSmall, vCardText, 40);
  renderQRToCanvas(qrCanvasLarge, vCardText, 220);
}

function openQRModal() {
  updateQRCodes();
  qrModal.hidden = false;
}

function closeQRModal() {
  qrModal.hidden = true;
}

qrThumbBtn.addEventListener("click", openQRModal);
qrModalCloseBtn.addEventListener("click", closeQRModal);
qrModalBackdrop.addEventListener("click", closeQRModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !qrModal.hidden) closeQRModal();
});

// Plain <a download> links are unreliable on mobile browsers — some (notably
// mobile Safari) can navigate to/open the blob instead of saving it, which
// looks like the page itself was left. The native share sheet doesn't have
// that problem (it's an overlay, never a navigation), and its "Save Image"
// option covers the "just save it" intent just as well, so both buttons
// route through it first and only fall back to a plain download when
// sharing isn't supported at all (desktop browsers).
function exportCanvasImage(canvas, filename) {
  canvas.toBlob(async (blob) => {
    const file = new File([blob], filename, { type: "image/png" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file] });
        return;
      } catch (shareErr) {
        if (shareErr && shareErr.name === "AbortError") return;
      }
    }
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, "image/png");
}

qrShareBtn.addEventListener("click", () => {
  const name = cardData.name.replace(/\s+/g, "-");
  exportCanvasImage(qrCanvasLarge, `${name}-qr.png`);
});

saveContactBtn.addEventListener("click", () => {
  const vCardText = buildVCard();
  const blob = new Blob([vCardText], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${cardData.name.replace(/\s+/g, "-")}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});

langSwitchOptions.forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

saveImageBtn.addEventListener("click", async () => {
  if (typeof html2canvas !== "function") return;

  saveImageBtn.disabled = true;

  // Hide the interactive chrome (action buttons, small QR badge) so the
  // exported image only shows the shareable card face, and swap the contact
  // box for a large QR code of the same vCard data.
  cardActions.style.display = "none";
  qrThumbBtn.hidden = true;
  cardContact.hidden = true;
  renderQRToCanvas(qrCanvasExport, buildVCard(), 240);
  cardQRExport.hidden = false;
  cardView.classList.add("exporting");
  // Reflow before the snapshot so html2canvas reads the settled state.
  void cardView.offsetHeight;

  try {
    const canvas = await html2canvas(cardView, {
      scale: 2,
      backgroundColor: null,
      useCORS: true
    });
    const fileName = `${cardData.name.replace(/\s+/g, "-")}-card.png`;
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    const file = new File([blob], fileName, { type: "image/png" });

    // A plain <a download> link always lands in the Downloads folder. On
    // phones, sharing the file through the native share sheet instead lets
    // the user pick "Save to Photos"/gallery directly.
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file] });
        return;
      } catch (shareErr) {
        if (shareErr && shareErr.name === "AbortError") return;
        // Any other share failure falls through to the download link below.
      }
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } finally {
    cardActions.style.display = "";
    qrThumbBtn.hidden = false;
    cardContact.hidden = false;
    cardQRExport.hidden = true;
    cardView.classList.remove("exporting");
    saveImageBtn.disabled = false;
  }
});

applyLanguage(currentLang);
showForm();
