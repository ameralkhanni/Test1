const contact = {
  prefix: "م.",
  firstName: "أحمد",
  lastName: "علي محمد",
  jobTitle: "المهندس",
  department: "مدير إدارة التحول الرقمي",
  org: "الهيئة العامة للمساحة والمعلومات الجيومكانية",
  phone: "+966500000000",
  email: "ahmed.ali@example.gov.sa"
};

function buildVCard(c) {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${c.lastName};${c.firstName};;${c.prefix};`,
    `FN:${c.prefix} ${c.firstName} ${c.lastName}`,
    `TITLE:${c.jobTitle} - ${c.department}`,
    `ORG:${c.org}`,
    `TEL;TYPE=CELL:${c.phone}`,
    `EMAIL;TYPE=INTERNET:${c.email}`,
    "END:VCARD"
  ].join("\r\n");
}

document.getElementById("saveContactBtn").addEventListener("click", () => {
  const vCardText = buildVCard(contact);
  const blob = new Blob([vCardText], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${contact.firstName}-${contact.lastName}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});
