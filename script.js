const translations = {
  ar: {
    dir: "rtl",
    pageTitle: "أحمد علي محمد | البطاقة الرقمية",
    logoSrc: "assets/logo.webp",
    logoAlt: "شعار الجهة",
    avatarAlt: "الصورة الشخصية",
    jobTitle: "المهندس",
    name: "أحمد علي محمد",
    department: "مدير إدارة التحول الرقمي",
    phoneLabel: "رقم الجوال",
    emailLabel: "البريد الإلكتروني",
    addContact: "إضافة إلى جهات الاتصال",
    footerOrg: "الهيئة العامة للمساحة والمعلومات الجيومكانية",
    devCredit: "تطوير Amer Khanni",
    toggleLabel: "EN"
  },
  en: {
    dir: "ltr",
    pageTitle: "Ahmed Ali Mohammed | Digital Business Card",
    logoSrc: "assets/logo-en.png",
    logoAlt: "GEOSA logo",
    avatarAlt: "Profile photo",
    jobTitle: "Engineer",
    name: "Ahmed Ali Mohammed",
    department: "Director of Digital Transformation",
    phoneLabel: "Mobile",
    emailLabel: "Email",
    addContact: "Add to Contacts",
    footerOrg: "General Authority for Survey and Geospatial Information",
    devCredit: "Developed by Amer Khanni",
    toggleLabel: "AR"
  }
};

const vcardData = {
  ar: {
    prefix: "م.",
    firstName: "أحمد",
    lastName: "علي محمد",
    department: "مدير إدارة التحول الرقمي",
    org: "الهيئة العامة للمساحة والمعلومات الجيومكانية"
  },
  en: {
    prefix: "Eng.",
    firstName: "Ahmed",
    lastName: "Ali Mohammed",
    department: "Director of Digital Transformation",
    org: "General Authority for Survey and Geospatial Information"
  }
};

const phone = "+966500000000";
const email = "ahmed.ali@example.gov.sa";

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
    `EMAIL;TYPE=INTERNET:${email}`,
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
