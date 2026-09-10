// Shared, localized display labels for course data (js/programs.js's `type`, `langs`
// and `status` fields), so program.html, index.html, programm/retreat-detail.html and
// personen/person.html all show the exact same wording — in every language — instead
// of each keeping its own local copy.
//
// Every entry is a {de, en, vi} object. Look it up with the page's own current-language
// helper, e.g. tl(window.EIAB_LABELS.type[course.type]).
window.EIAB_LABELS = {
  type: {
    retreat: { de: "Retreat", en: "Retreat", vi: "Khóa tu" },
    online:  { de: "Online", en: "Online", vi: "Trực tuyến" },
    session: { de: "Session", en: "Session", vi: "Buổi" },
    week:    { de: "Woche", en: "Full week", vi: "Cả tuần" }
  },
  // Full display name of a language code, translated into the current UI language
  // (e.g. langs.de.en === "German" — how to say "German" while browsing in English).
  lang: {
    de: { de: "Deutsch", en: "German", vi: "Tiếng Đức" },
    en: { de: "Englisch", en: "English", vi: "Tiếng Anh" },
    vi: { de: "Vietnamesisch", en: "Vietnamese", vi: "Tiếng Việt" },
    fr: { de: "Französisch", en: "French", vi: "Tiếng Pháp" }
  },
  status: {
    open: { de: "Offen", en: "Open", vi: "Còn chỗ" },
    closed: { de: "Anmeldung geschlossen", en: "Registration closed", vi: "Đã đóng đăng ký" },
    "fully-booked": { de: "Ausgebucht", en: "Fully booked", vi: "Đã hết chỗ" }
  }
};
