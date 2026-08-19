const STORAGE_KEY = "geosaCardData";
const LANG_KEY = "geosaCardLang";

// Fixed, organization-wide values (not asked in the form).
const UNIFIED_NUMBER = "920000427";

const fixedOrg = {
  ar: "الهيئة العامة للمساحة والمعلومات الجيومكانية",
  en: "General Authority for Survey and Geospatial Information"
};

const TITLE_OPTIONS = [
  { ar: "الدكتور", en: "Doctor" },
  { ar: "الدكتورة", en: "Doctor" },
  { ar: "الأستاذ", en: "Mister" },
  { ar: "الأستاذة", en: "Miss" },
  { ar: "المهندس", en: "Engineer" },
  { ar: "المهندسة", en: "Engineer" }
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
    footerOrg: fixedOrg.ar,
    toggleLabel: "EN"
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
    footerOrg: fixedOrg.en,
    toggleLabel: "AR"
  }
};

const DEFAULT_AVATAR = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
  '<rect width="100" height="100" fill="#eef2f3"/>' +
  '<circle cx="50" cy="38" r="18" fill="#c7d3d5"/>' +
  '<path d="M50 60c-22 0-34 12-34 26v6h68v-6c0-14-12-26-34-26z" fill="#c7d3d5"/>' +
  '</svg>'
);

// Elements
const formView = document.getElementById("formView");
const cardView = document.getElementById("cardView");
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

const titleArCustomField = document.getElementById("titleArCustomField");
const titleArCustomInput = document.getElementById("titleArCustom");
const nameArInput = document.getElementById("nameAr");
const deptArInput = document.getElementById("deptAr");
const titleEnCustomField = document.getElementById("titleEnCustomField");
const titleEnCustomInput = document.getElementById("titleEnCustom");
const nameEnInput = document.getElementById("nameEn");
const deptEnInput = document.getElementById("deptEn");
const enableEnglishToggle = document.getElementById("enableEnglish");
const englishFields = document.getElementById("englishFields");
const mobileInput = document.getElementById("mobile");
const workPhoneInput = document.getElementById("workPhone");
const extensionInput = document.getElementById("extension");
const emailInput = document.getElementById("email");
const mobileWrapper = mobileInput.closest(".phone-input");
const workPhoneWrapper = workPhoneInput.closest(".phone-input");
const extensionWrapper = extensionInput.closest(".phone-input");
const emailWrapper = emailInput.closest(".phone-input");

// Arabic name/title/department fields accept Arabic letters only (no digits or symbols);
// their English counterparts accept Latin letters only.
const ARABIC_ONLY = /[^ء-يـ\s]/g;
const ENGLISH_ONLY = /[^a-zA-Z\s]/g;
const ARABIC_ONLY_MESSAGE = "يسمح بالحروف العربية فقط، بدون أرقام أو رموز";
const ENGLISH_ONLY_MESSAGE = "يسمح بالحروف الإنجليزية فقط، بدون أرقام أو رموز";
const DIGITS_ONLY = /[^0-9]/g;
const DIGITS_ONLY_MESSAGE = "يسمح بالأرقام فقط";
const MOBILE_PREFIX = "+966";
const MOBILE_PATTERN = /^5[0-9]{8}$/;
const MOBILE_FORMAT_MESSAGE = "رقم الجوال يجب أن يبدأ بـ5 ويتكون من 9 أرقام";
const mobileErrorEl = document.getElementById("mobileError");
const WORK_PHONE_PATTERN = /^1[0-9]{8}$/;
const WORK_PHONE_FORMAT_MESSAGE = "هاتف العمل يجب أن يبدأ بـ1 ويتكون من 9 أرقام";
const workPhoneErrorEl = document.getElementById("workPhoneError");
const EXTENSION_PATTERN = /^[0-9]{4}$/;
const EXTENSION_FORMAT_MESSAGE = "رقم التحويلة يجب أن يتكون من 4 أرقام فقط";
const extensionErrorEl = document.getElementById("extensionError");
const EMAIL_DOMAIN = "@geosa.gov.sa";
const EMAIL_LOCAL_ONLY = /[^a-zA-Z._-]/g;
const EMAIL_LOCAL_ONLY_MESSAGE = "يحتوي على أحرف إنجليزية و(-_.) فقط";
const emailErrorEl = document.getElementById("emailError");

function restrictInput(el, pattern, message, errorEl) {
  let hideTimer = null;
  el.addEventListener("input", () => {
    const filtered = el.value.replace(pattern, "");
    if (filtered !== el.value) {
      el.value = filtered;
      errorEl.textContent = message;
      errorEl.hidden = false;
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        errorEl.hidden = true;
      }, 2500);
    }
  });
}

restrictInput(nameArInput, ARABIC_ONLY, ARABIC_ONLY_MESSAGE, document.getElementById("nameArError"));
restrictInput(deptArInput, ARABIC_ONLY, ARABIC_ONLY_MESSAGE, document.getElementById("deptArError"));
restrictInput(titleArCustomInput, ARABIC_ONLY, ARABIC_ONLY_MESSAGE, document.getElementById("titleArCustomError"));
restrictInput(nameEnInput, ENGLISH_ONLY, ENGLISH_ONLY_MESSAGE, document.getElementById("nameEnError"));
restrictInput(deptEnInput, ENGLISH_ONLY, ENGLISH_ONLY_MESSAGE, document.getElementById("deptEnError"));
restrictInput(titleEnCustomInput, ENGLISH_ONLY, ENGLISH_ONLY_MESSAGE, document.getElementById("titleEnCustomError"));
restrictInput(mobileInput, DIGITS_ONLY, DIGITS_ONLY_MESSAGE, mobileErrorEl);
restrictInput(workPhoneInput, DIGITS_ONLY, DIGITS_ONLY_MESSAGE, workPhoneErrorEl);
restrictInput(extensionInput, DIGITS_ONLY, DIGITS_ONLY_MESSAGE, extensionErrorEl);
restrictInput(emailInput, EMAIL_LOCAL_ONLY, EMAIL_LOCAL_ONLY_MESSAGE, emailErrorEl);

function validatePhoneFormat(input, pattern, message, errorEl, required) {
  const val = input.value.trim();
  if (!val) {
    errorEl.hidden = true;
    return !required;
  }
  if (!pattern.test(val)) {
    errorEl.textContent = message;
    errorEl.hidden = false;
    return false;
  }
  errorEl.hidden = true;
  return true;
}

function validateMobileFormat() {
  const ok = validatePhoneFormat(mobileInput, MOBILE_PATTERN, MOBILE_FORMAT_MESSAGE, mobileErrorEl, true);
  mobileWrapper.classList.toggle("is-invalid", !ok);
  return ok;
}

function validateWorkPhoneFormat() {
  const ok = validatePhoneFormat(workPhoneInput, WORK_PHONE_PATTERN, WORK_PHONE_FORMAT_MESSAGE, workPhoneErrorEl, false);
  workPhoneWrapper.classList.toggle("is-invalid", !ok);
  return ok;
}

function validateExtensionFormat() {
  const ok = validatePhoneFormat(extensionInput, EXTENSION_PATTERN, EXTENSION_FORMAT_MESSAGE, extensionErrorEl, false);
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
[nameArInput, deptArInput, nameEnInput, deptEnInput, titleArCustomInput, titleEnCustomInput].forEach((el) => {
  el.addEventListener("input", () => el.classList.remove("is-invalid"));
});

// Turning the English toggle off hides that section and drops it from
// validation entirely; turning it back on clears any stale red highlights.
function updateEnglishFieldsVisibility() {
  englishFields.hidden = !enableEnglishToggle.checked;
  if (!enableEnglishToggle.checked) {
    [nameEnInput, deptEnInput, titleEnCustomInput].forEach((el) => el.classList.remove("is-invalid"));
    titleEnSelect.trigger.classList.remove("is-invalid");
  }
}

enableEnglishToggle.addEventListener("change", updateEnglishFieldsVisibility);

const editBtn = document.getElementById("editBtn");
const langToggle = document.getElementById("langToggle");
const saveContactBtn = document.getElementById("saveContactBtn");
const saveImageBtn = document.getElementById("saveImageBtn");
const cardActions = document.querySelector(".card__actions");

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

let cardData = loadCardData();
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
    this.options = options;
    this.placeholder = placeholderText;
    this._value = "";
    this._changeListeners = [];

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

    this.trigger.addEventListener("click", () => this.toggle());
    this.trigger.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close();
    });
    document.addEventListener("click", (e) => {
      if (!this.wrapper.contains(e.target)) this.close();
    });
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
arTitleOptions.push({ value: OTHER_TITLE, label: "أخرى" });

// English titles have no gendered forms, so the list is deduplicated;
// the option value is the English text itself.
const enTitleOptions = [];
const seenEnTitles = new Set();
TITLE_OPTIONS.forEach((opt) => {
  if (seenEnTitles.has(opt.en)) return;
  seenEnTitles.add(opt.en);
  enTitleOptions.push({ value: opt.en, label: opt.en });
});
enTitleOptions.push({ value: OTHER_TITLE, label: "أخرى بالإنجليزي" });

const titleArSelect = new Dropdown("titleArDropdown", arTitleOptions, "اختر اللقب");
const titleEnSelect = new Dropdown("titleEnDropdown", enTitleOptions, "اختر اللقب بالإنجليزي");

function syncTitleFromAr() {
  const val = titleArSelect.value;
  if (val === OTHER_TITLE) {
    titleArCustomField.hidden = false;
    titleEnSelect.value = OTHER_TITLE;
    titleEnCustomField.hidden = false;
  } else if (val !== "") {
    titleArCustomField.hidden = true;
    titleEnSelect.value = TITLE_OPTIONS[Number(val)].en;
    titleEnCustomField.hidden = true;
  }
}

function syncTitleFromEn() {
  const val = titleEnSelect.value;
  if (val === OTHER_TITLE) {
    titleEnCustomField.hidden = false;
    titleArSelect.value = OTHER_TITLE;
    titleArCustomField.hidden = false;
  } else if (val !== "") {
    titleEnCustomField.hidden = true;
    const currentAr = titleArSelect.value;
    const currentArMatches =
      currentAr !== "" && currentAr !== OTHER_TITLE && TITLE_OPTIONS[Number(currentAr)].en === val;
    if (!currentArMatches) {
      const idx = TITLE_OPTIONS.findIndex((opt) => opt.en === val);
      if (idx !== -1) titleArSelect.value = String(idx);
    }
    titleArCustomField.hidden = true;
  }
}

titleArSelect.addEventListener("change", syncTitleFromAr);
titleEnSelect.addEventListener("change", syncTitleFromEn);
titleArSelect.addEventListener("change", () => titleArSelect.trigger.classList.remove("is-invalid"));
titleEnSelect.addEventListener("change", () => titleEnSelect.trigger.classList.remove("is-invalid"));

function resolveTitleAr(select, customInput) {
  const val = select.value;
  if (val === OTHER_TITLE) return customInput.value.trim();
  if (val === "") return "";
  return TITLE_OPTIONS[Number(val)].ar;
}

function resolveTitleEn(select, customInput) {
  const val = select.value;
  if (val === OTHER_TITLE) return customInput.value.trim();
  return val;
}

function setTitleFieldAr(select, customField, customInput, value) {
  const idx = TITLE_OPTIONS.findIndex((opt) => opt.ar === value);
  if (idx !== -1) {
    select.value = String(idx);
    customField.hidden = true;
  } else if (value) {
    select.value = OTHER_TITLE;
    customField.hidden = false;
    customInput.value = value;
  } else {
    select.value = "";
    customField.hidden = true;
  }
}

function setTitleFieldEn(select, customField, customInput, value) {
  const exists = select.options.some((o) => o.value === value);
  if (value && exists) {
    select.value = value;
    customField.hidden = true;
  } else if (value) {
    select.value = OTHER_TITLE;
    customField.hidden = false;
    customInput.value = value;
  } else {
    select.value = "";
    customField.hidden = true;
  }
}

function loadCardData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
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

function prefillForm() {
  if (!cardData) return;
  setTitleFieldAr(titleArSelect, titleArCustomField, titleArCustomInput, cardData.ar.title);
  nameArInput.value = cardData.ar.name;
  deptArInput.value = cardData.ar.dept;

  // Missing hasEnglish means data saved before this toggle existed — those
  // cards always had English data, so default to enabled for them.
  const hasEnglish = cardData.hasEnglish !== false && !!cardData.en;
  enableEnglishToggle.checked = hasEnglish;
  if (hasEnglish) {
    setTitleFieldEn(titleEnSelect, titleEnCustomField, titleEnCustomInput, cardData.en.title);
    nameEnInput.value = cardData.en.name;
    deptEnInput.value = cardData.en.dept;
  } else {
    setTitleFieldEn(titleEnSelect, titleEnCustomField, titleEnCustomInput, "");
    nameEnInput.value = "";
    deptEnInput.value = "";
  }
  updateEnglishFieldsVisibility();

  mobileInput.value = cardData.mobile.startsWith(MOBILE_PREFIX)
    ? cardData.mobile.slice(MOBILE_PREFIX.length)
    : cardData.mobile;
  const workPhone = cardData.workPhone || "";
  workPhoneInput.value = workPhone.startsWith(MOBILE_PREFIX)
    ? workPhone.slice(MOBILE_PREFIX.length)
    : workPhone;
  extensionInput.value = cardData.extension || "";
  emailInput.value = cardData.email.endsWith(EMAIL_DOMAIN)
    ? cardData.email.slice(0, -EMAIL_DOMAIN.length)
    : cardData.email;

  if (cardData.photo && cardData.photo !== DEFAULT_AVATAR) {
    pendingPhoto = cardData.photo;
    photoSource = { dataUrl: cardData.photo, width: PHOTO_OUTPUT_SIZE, height: PHOTO_OUTPUT_SIZE };
    photoZoom = 1;
    photoPanX = 0;
    photoPanY = 0;
    photoPreview.src = cardData.photo;
    photoPreview.style.transform = "";
    photoPreview.hidden = false;
    photoPlaceholder.hidden = true;
    photoEditBtn.hidden = false;
  } else {
    pendingPhoto = null;
    photoSource = null;
    photoPreview.hidden = true;
    photoPlaceholder.hidden = false;
    photoEditBtn.hidden = true;
  }
  closePhotoAdjuster();
}

function showForm() {
  cardView.hidden = true;
  formView.hidden = false;
  prefillForm();
}

function showCard() {
  formView.hidden = true;
  cardView.hidden = false;
  const hasEnglish = cardData.hasEnglish !== false && !!cardData.en;
  langToggle.hidden = !hasEnglish;
  if (!hasEnglish) currentLang = "ar";
  applyLanguage(currentLang);
}

cardForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const mobileOk = validateMobileFormat();
  const workPhoneOk = validateWorkPhoneFormat();
  const extensionOk = validateExtensionFormat();
  const hasEnglish = enableEnglishToggle.checked;

  const data = {
    ar: {
      title: resolveTitleAr(titleArSelect, titleArCustomInput),
      name: nameArInput.value.trim(),
      dept: deptArInput.value.trim()
    },
    en: hasEnglish
      ? {
          title: resolveTitleEn(titleEnSelect, titleEnCustomInput),
          name: nameEnInput.value.trim(),
          dept: deptEnInput.value.trim()
        }
      : null,
    hasEnglish,
    mobile: mobileInput.value.trim() ? MOBILE_PREFIX + mobileInput.value.trim() : "",
    workPhone: workPhoneInput.value.trim() ? MOBILE_PREFIX + workPhoneInput.value.trim() : "",
    extension: extensionInput.value.trim(),
    email: emailInput.value.trim() ? emailInput.value.trim() + EMAIL_DOMAIN : "",
    photo: pendingPhoto
  };

  // Highlight every invalid field in red, in the same top-to-bottom order as
  // the form itself, so focus lands on whichever one the user hits first.
  const fieldChecks = [
    { invalid: !pendingPhoto, el: photoUpload, focusEl: photoInput },
    { invalid: !data.ar.title, el: titleArSelect.value === OTHER_TITLE ? titleArCustomInput : titleArSelect.trigger },
    { invalid: !data.ar.name, el: nameArInput },
    { invalid: !data.ar.dept, el: deptArInput },
    { invalid: !mobileOk, el: mobileWrapper },
    { invalid: !workPhoneOk, el: workPhoneWrapper },
    { invalid: !extensionOk, el: extensionWrapper },
    { invalid: !data.email, el: emailWrapper }
  ];

  if (hasEnglish) {
    fieldChecks.splice(4, 0,
      { invalid: !data.en.title, el: titleEnSelect.value === OTHER_TITLE ? titleEnCustomInput : titleEnSelect.trigger },
      { invalid: !data.en.name, el: nameEnInput },
      { invalid: !data.en.dept, el: deptEnInput }
    );
  }

  fieldChecks.forEach(({ invalid, el }) => el.classList.toggle("is-invalid", invalid));
  const firstInvalid = fieldChecks.find((c) => c.invalid);

  if (firstInvalid) {
    formError.textContent = "الرجاء تعبئة جميع الحقول المطلوبة.";
    formError.hidden = false;
    const el = firstInvalid.focusEl || firstInvalid.el;
    const focusable = el.matches("input, button") ? el : el.querySelector("input, button");
    (focusable || el).focus();
    return;
  }

  formError.hidden = true;
  cardData = data;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  showCard();
});

editBtn.addEventListener("click", showForm);

function applyLanguage(lang) {
  if (!cardData) return;
  const t = translations[lang];
  const d = cardData[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.title = `${d.title} ${d.name} | ${t.pageTitleSuffix}`;

  cardJobTitle.textContent = d.title;
  cardName.textContent = d.name;
  cardDept.textContent = d.dept;

  cardAvatar.src = cardData.photo;
  cardAvatar.alt = t.avatarAlt;

  document.querySelectorAll(".i18n-logo").forEach((img) => {
    img.src = t.logoSrc;
    img.alt = t.logoAlt;
  });

  mobileRow.href = `tel:${cardData.mobile}`;
  mobileValue.textContent = cardData.mobile;

  if (cardData.workPhone) {
    workPhoneRow.hidden = false;
    workPhoneRow.href = `tel:${cardData.workPhone}`;
    workPhoneValue.textContent = cardData.workPhone;
  } else {
    workPhoneRow.hidden = true;
  }

  unifiedNumberValue.textContent = cardData.extension
    ? `${UNIFIED_NUMBER}, ${cardData.extension}`
    : UNIFIED_NUMBER;

  emailRow.href = `mailto:${cardData.email}`;
  emailValue.textContent = cardData.email;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t[el.dataset.i18n];
  });

  langToggle.textContent = t.toggleLabel;

  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
}

function buildVCard(lang) {
  const d = cardData[lang];
  const addr = fixedAddress[lang];
  const org = fixedOrg[lang];
  const nameParts = d.name.split(" ").filter(Boolean);
  const firstName = nameParts[0] || d.name;
  const lastName = nameParts.slice(1).join(" ") || d.name;

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${lastName};${firstName};;${d.title};`,
    `FN:${d.title} ${d.name}`,
    `TITLE:${d.dept}`,
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

saveContactBtn.addEventListener("click", () => {
  const d = cardData[currentLang];
  const vCardText = buildVCard(currentLang);
  const blob = new Blob([vCardText], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${d.name.replace(/\s+/g, "-")}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "ar" ? "en" : "ar");
});

saveImageBtn.addEventListener("click", async () => {
  if (typeof html2canvas !== "function") return;

  saveImageBtn.disabled = true;

  // Hide the interactive chrome (edit icon, language toggle, action buttons)
  // so the exported image only shows the shareable card face.
  const editWasHidden = editBtn.hidden;
  const langWasHidden = langToggle.hidden;
  editBtn.hidden = true;
  langToggle.hidden = true;
  cardActions.style.display = "none";
  cardView.classList.add("exporting");
  // Reflow before the snapshot so html2canvas reads the settled state.
  void cardView.offsetHeight;

  try {
    const canvas = await html2canvas(cardView, {
      scale: 2,
      backgroundColor: null,
      useCORS: true
    });
    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    const name = cardData[currentLang].name.replace(/\s+/g, "-");
    link.href = dataUrl;
    link.download = `${name}-card.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } finally {
    editBtn.hidden = editWasHidden;
    langToggle.hidden = langWasHidden;
    cardActions.style.display = "";
    cardView.classList.remove("exporting");
    saveImageBtn.disabled = false;
  }
});

if (cardData) {
  showCard();
} else {
  showForm();
}
