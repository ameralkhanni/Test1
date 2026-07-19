const translations = {
  ar: {
    dir: "rtl",
    pageTitle: "حسن بن محمد الأمير  | البطاقة الرقمية",
    logoSrc: "assets/logo.webp",
    logoAlt: "شعار الجهة",
    avatarAlt: "الصورة الشخصية",
    jobTitle: "الدكتور",
    name: "حسن بن محمد الأمير ",
    department: "مساعد الرئيس لقطاع التقنيات والحلول",
    phoneLabel: "رقم الجوال",
    phone2Label: "هاتف العمل",
    phone3Label: "الرقم الموحد",
    emailLabel: "البريد الإلكتروني",
    addressLabel: "العنوان",
    addressValue: "الرياض، المملكة العربية السعودية\nرقم 64، العليا، الرمز البريدي 12213",
    addContact: "إضافة إلى جهات الاتصال",
    footerOrg: "الهيئة العامة للمساحة والمعلومات الجيومكانية",
    toggleLabel: "EN"
  },
  en: {
    dir: "ltr",
    pageTitle: "Dr. Hasan M. Alameer | Digital Business Card",
    logoSrc: "assets/logo-en.png",
    logoAlt: "GEOSA logo",
    avatarAlt: "Profile photo",
    jobTitle: "Doctor",
    name: "Hasan M. Alameer",
    department: "Assistant to the President for Technology and Solutions",
    phoneLabel: "Mobile",
    phone2Label: "Work Phone",
    phone3Label: "Unified Number",
    emailLabel: "Email",
    addressLabel: "Address",
    addressValue: "Riyadh, Kingdom of Saudi Arabia\nNo. 64, Al Olaya, Zip Code 12213",
    addContact: "Add to Contacts",
    footerOrg: "General Authority for Survey and Geospatial Information",
    toggleLabel: "AR"
  }
};

const vcardData = {
  ar: {
    prefix: "د.",
    firstName: "حسن",
    lastName: "بن محمد الأمير ",
    department: "مساعد الرئيس لقطاع التقنيات والحلول",
    org: "الهيئة العامة للمساحة والمعلومات الجيومكانية",
    street: "رقم 64",
    district: "العليا",
    city: "الرياض",
    postalCode: "12213",
    country: "المملكة العربية السعودية"
  },
  en: {
    prefix: "Dr.",
    firstName: "Hasan",
    lastName: "M. Alameer",
    department: "Assistant to the President for Technology and Solutions",
    org: "General Authority for Survey and Geospatial Information",
    street: "No. 64",
    district: "Al Olaya",
    city: "Riyadh",
    postalCode: "12213",
    country: "Kingdom of Saudi Arabia"
  }
};

const phone = "+966555585842";
const phone2 = "+966115138080";
const phone3 = "920000427,8080";
const email = "h.alameer@geosa.gov.sa";

let currentLang = localStorage.getItem("cardLang") || "ar";

function applyLanguage(lang) {
  const t = translations[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.title = t.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t[el.dataset.i18n];
  });

  document.querySelectorAll(".i18n-logo").forEach((img) => {
    img.src = t.logoSrc;
    img.alt = t.logoAlt;
  });

  const avatarImg = document.querySelector(".card__avatar img");
  if (avatarImg) avatarImg.alt = t.avatarAlt;

  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) toggleBtn.textContent = t.toggleLabel;

  currentLang = lang;
  localStorage.setItem("cardLang", lang);
}

function buildVCard(lang) {
  const c = vcardData[lang];
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${c.lastName};${c.firstName};;${c.prefix};`,
    `FN:${c.prefix} ${c.firstName} ${c.lastName}`,
    `TITLE:${c.department}`,
    `ORG:${c.org}`,
    `TEL;TYPE=CELL:${phone}`,
    `TEL;TYPE=WORK:${phone2}`,
    `TEL;TYPE=WORK,VOICE:${phone3}`,
    `EMAIL;TYPE=INTERNET:${email}`,
    `ADR;TYPE=WORK:;${c.district};${c.street};${c.city};;${c.postalCode};${c.country}`,
    "END:VCARD"
  ].join("\r\n");
}

document.getElementById("saveContactBtn").addEventListener("click", () => {
  const c = vcardData[currentLang];
  const vCardText = buildVCard(currentLang);
  const blob = new Blob([vCardText], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${c.firstName}-${c.lastName}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});

document.getElementById("langToggle").addEventListener("click", () => {
  applyLanguage(currentLang === "ar" ? "en" : "ar");
});

applyLanguage(currentLang);
