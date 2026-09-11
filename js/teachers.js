// Central teacher/person registry, keyed by a unique, URL- and filename-safe id
// (ASCII, hyphen-separated) — not by the display name, since several names use
// diacritics that don't belong in URLs or filenames.
//
// Used from:
//  - js/program-content.js's `teacher.name` field (matched by display name via
//    window.EIAB_FIND_TEACHER_BY_NAME, since course content only knows the name)
//  - personen/person.html's `?id=` query param (preferred) or `?name=` (fallback,
//    for people not yet in this registry)
//
// Every entry can be as thin as { name, role, intro } (enough for the short teacher
// blurb on a course page) or as rich as a full profile (personen/person.html renders
// whatever is present and gracefully omits sections that aren't).
//
// Shape of one entry — every field is optional except `name`:
// "unique-id": {
//   name:     "Exact Display Name",                              // proper noun, not translated
//   img:      "some-file.jpg",                                    // optional override — if absent,
//                                                                  // "<id>.png" in img/teachers/ is used
//   role:     { de: "...", en: "...", vi: "..." },                // one-line subtitle
//   category: "monastic" | "lay",                                 // which Über-uns listing + back link
//   tags:     [ { de, en, vi }, ... ],                             // badge pills on the profile page
//   intro:    { de: ["p1", ...], en: [...], vi: [...] },           // opening paragraph(s) — also used
//                                                                   // as the short bio on course pages
//   sections: [                                                    // full profile body, profile page only
//     { heading: { de, en, vi }, paragraphs: { de: ["p1", ...], en: [...], vi: [...] } }
//   ],
//   facts: [                                                       // profile sidebar, profile page only
//     { label: { de, en, vi }, value: { de, en, vi } }
//   ]
// }
//
// "Kurse mit ..." on the profile page isn't stored here — it's derived live from
// window.EIAB_PROGRAMS by matching the display name against each course's
// `instructor` field.

window.EIAB_TEACHERS_MONASTIC = {

  "thay-phap-an": {
    name: "Thầy Pháp Ấn",
    role: {
      de: "Direktor und Studienleiter des EIAB, seit 2008",
      en: "Director and Study Leader of EIAB, since 2008",
      vi: "Giám đốc và Trưởng bộ phận Học tập của EIAB, kể từ năm 2008"
    },
    category: "monastic",
    subgroup: "resident",
    tags: [
      {de: "Bhikshu, Orden des Interseins", en: "Bhikshu, Order of Interbeing", vi: "Tỳ kheo, Dòng tu Tiếp Hiện"},
      {de: "Dharma-Lehrer seit 1999", en: "Dharma teacher since 1999", vi: "Giảng viên Phật pháp từ năm 1999"},
      {de: "Qigong und Taichi", en: "Qigong and Tai Chi", vi: "Khí Công và Thái Cực Quyền"}
    ],
    intro: {
      de: ["Bhikshu Thích Chân Pháp Ấn ist einer der fortgeschrittenen Nachfolger von Zen-Meister Thích Nhất Hạnh. Bevor er ins Kloster eintrat, forschte er in Chemieingenieurwesen und angewandter Mathematik — ein Weg, der sich in seiner heutigen Arbeit am EIAB fortsetzt, wo er buddhistische Praxis mit Neurowissenschaft und Medizin zusammendenkt."],
      en: ["Bhikshu Thích Chân Pháp Ấn is one of the advanced disciples of Zen Master Thích Nhất Hạnh. Before entering the monastery, he conducted research in chemical engineering and applied mathematics — a path that continues in his work at EIAB today, where he brings together Buddhist practice with neuroscience and medicine."],
      vi: ["Bhikshu Thích Chân Pháp Ấn là một trong những đệ tử cao cấp của Thiền Sư Thích Nhất Hạnh. Trước khi xuất gia, ông đã từng nghiên cứu kỹ thuật hóa học và toán học ứng dụng — con đường này tiếp tục trong công việc của ông tại EIAB ngày nay, nơi ông kết hợp thực tập Phật giáo với khoa học thần kinh và y học."]
    },
    sections: [
      {
        heading: {de: "Vor dem Klostereintritt", en: "Before entering the monastery", vi: "Trước khi xuất gia"},
        paragraphs: {
          de: ["1985 schloss er einen Bachelor of Science in Chemieingenieurwesen an der University of Texas in Austin ab. Am California Institute of Technology folgten 1988 ein Master in Chemieingenieurwesen und 1990 ein Ph.D. in Angewandter Mathematik. Anschließend arbeitete er als wissenschaftlicher Mitarbeiter am ARCO Oil and Gas Research Center in Plano, Texas, und in der Abteilung für Maschinentechnik des MIT."],
          en: ["In 1985 he completed a Bachelor of Science in Chemical Engineering at the University of Texas at Austin. At the California Institute of Technology he received a Master's degree in Chemical Engineering in 1988 and a Ph.D. in Applied Mathematics in 1990. He then worked as a research scientist at the ARCO Oil and Gas Research Center in Plano, Texas, and in the Department of Mechanical Engineering at MIT."],
          vi: ["Năm 1985, ông hoàn thành bằng Cử nhân Khoa học trong ngành Kỹ thuật Hóa học tại Đại học Texas ở Austin. Tại California Institute of Technology, ông nhận bằng Thạc sĩ Kỹ thuật Hóa học năm 1988 và bằng Tiến sĩ Toán học Ứng dụng năm 1990. Sau đó, ông làm việc như một nhà khoa học nghiên cứu tại ARCO Oil and Gas Research Center ở Plano, Texas, và trong Bộ môn Kỹ thuật Cơ khí của MIT."]
        }
      },
      {
        heading: {de: "Ordination", en: "Ordination", vi: "Thọ giới"},
        paragraphs: {
          de: ["1992 wurde er als Novize ordiniert. 1994 empfing er in Plum Village, Frankreich, bei der Hương Tích Fragrant Mountain Great Ordination Ceremony von Zen-Meister Thích Nhất Hạnh seine Bhikshu-Ordination. Im Februar 1999 überreichte ihm der Zen-Meister die Dharma-Lampe."],
          en: ["In 1992 he was ordained as a novice. In 1994 he received his Bhikshu ordination at Plum Village, France, during the Hương Tích Fragrant Mountain Great Ordination Ceremony by Zen Master Thích Nhất Hạnh. In February 1999, the Zen Master transmitted the Dharma lamp to him."],
          vi: ["Năm 1992 ông được thụ giới Sa di. Năm 1994 ông nhận giới Tỳ kheo tại Làng Mai, Pháp, trong lễ Đại giới đàn Hương Tích do Thiền Sư Thích Nhất Hạnh chủ trì. Tháng 2 năm 1999, Thiền Sư đã trao đèn truyền Pháp cho ông."]
        }
      },
      {
        heading: {de: "Auf der Weltbühne", en: "On the world stage", vi: "Trên trường quốc tế"},
        paragraphs: {
          de: ["Er vertrat Thích Nhất Hạnh und die Tradition von Plum Village beim Millennium World Peace Summit of Religious and Spiritual Leaders im UN-Hauptquartier in New York (2000) und beim First World Buddhist Forum in Hangzhou und Zhoushan, China (2006). Er wirkte an den Verhandlungen mit der vietnamesischen Regierung mit, die 2005 die Rückkehr und Lehrreise des Zen-Meisters nach Vietnam ermöglichten — nach 39 Jahren im Exil."],
          en: ["He represented Thích Nhất Hạnh and the Plum Village tradition at the Millennium World Peace Summit of Religious and Spiritual Leaders at UN Headquarters in New York (2000) and at the First World Buddhist Forum in Hangzhou and Zhoushan, China (2006). He participated in negotiations with the Vietnamese government that in 2005 enabled the Zen Master's return and teaching tour to Vietnam — after 39 years in exile."],
          vi: ["Ông đại diện cho Thiền Sư Thích Nhất Hạnh và truyền thống Làng Mai tại Hội nghị Thượng đỉnh Hòa bình Thế giới của các Nhà lãnh đạo Tôn giáo và Tâm linh tại Trụ sở Liên Hợp Quốc ở New York (2000) và tại Diễn đàn Phật giáo Thế giới lần thứ nhất ở Hàng Châu và Châu Sơn, Trung Quốc (2006). Ông tham gia vào các cuộc đàm phán với chính phủ Việt Nam, góp phần giúp Thiền Sư trở về và có chuyến hoằng pháp tại Việt Nam năm 2005 — sau 39 năm sống xa quê hương."]
        }
      },
      {
        heading: {de: "Am EIAB", en: "At EIAB", vi: "Tại EIAB"},
        paragraphs: {
          de: ["Seit 1995 leitet er weltweit Retreats, allein und gemeinsam mit Thích Nhất Hạnh. Seit 2008 ist er Direktor und Studienleiter des Europäischen Instituts für Angewandten Buddhismus. Ein Schwerpunkt seiner Arbeit ist es, Menschen zu helfen, ihr Herz zu öffnen und Angst sowie andere schwierige Gefühle zu verwandeln. Seine Forschungsinteressen reichen von der historischen Erforschung des Buddha und Jesu über die Entwicklung buddhistischer Meditation bis zur Entstehung des Zen sowie zu buddhistischer Psychologie, integrativer Medizin und Neurowissenschaft."],
          en: ["Since 1995 he has been leading retreats worldwide, both alone and together with Thích Nhất Hạnh. Since 2008 he is Director and Study Leader of the European Institute for Applied Buddhism. A focus of his work is helping people open their hearts and transform fear and other difficult emotions. His research interests range from historical investigation of the Buddha and Jesus, to the development of Buddhist meditation and early Buddhism, to the emergence of Zen, as well as Buddhist psychology, integrative medicine and neuroscience."],
          vi: ["Kể từ năm 1995, ông đã hướng dẫn các khóa tu trên toàn thế giới, cả độc lập lẫn cùng với Thiền Sư Thích Nhất Hạnh. Kể từ năm 2008, ông là Giám đốc và Trưởng bộ phận Học tập của Viện Phật giáo Ứng dụng Châu Âu. Một trọng tâm trong công việc của ông là giúp mọi người mở rộng trái tim và chuyển hóa sợ hãi cùng những cảm xúc khó khăn khác. Các mối quan tâm nghiên cứu của ông trải rộng từ tìm hiểu lịch sử về Đức Phật và Chúa Giêsu, đến sự phát triển của thiền Phật giáo và Phật giáo sơ kỳ, sự hình thành của Thiền tông, cũng như tâm lý học Phật giáo, y học tích hợp và khoa học thần kinh."]
        }
      }
    ],
    facts: [
      {
        label: {de: "Rolle", en: "Role", vi: "Vai trò"},
        value: {
          de: "Direktor und Studienleiter, EIAB",
          en: "Director and Study Leader, EIAB",
          vi: "Giám đốc và Trưởng bộ phận Học tập, EIAB"
        }
      },
      {
        label: {de: "Ordiniert", en: "Ordained", vi: "Thọ giới năm"},
        value: {de: "1994, Plum Village Frankreich", en: "1994, Plum Village France", vi: "1994, Làng Mai Pháp"}
      },
      {
        label: {de: "Dharma-Lehrer seit", en: "Dharma teacher since", vi: "Giảng viên Phật pháp từ"},
        value: {de: "1999", en: "1999", vi: "1999"}
      },
      {
        label: {de: "Ausbildung", en: "Education", vi: "Học vấn"},
        value: {
          de: "Ph.D. Angewandte Mathematik, Caltech",
          en: "Ph.D. Applied Mathematics, Caltech",
          vi: "Tiến sĩ Toán học Ứng dụng, Caltech"
        }
      },
      {
        label: {de: "Sprachen im Unterricht", en: "Languages taught in", vi: "Ngôn ngữ giảng dạy"},
        value: {
          de: "Deutsch, Englisch, Tiếng Việt",
          en: "German, English, Vietnamese",
          vi: "Tiếng Đức, Tiếng Anh, Tiếng Việt"
        }
      }
    ]
  },

  "minh-chi": {
    name: "Sr. Minh Chí",
    role: {de: "Nonne im EIAB", en: "Nun at EIAB", vi: "Sư cô tại EIAB"},
    category: "monastic",
    subgroup: "resident", // from the "lives at EIAB?" flag — double-check
    tags: [
      {"de": "Ordiniert 2003", "en": "Ordained 2003", "vi": "Thọ giới năm 2003"}
    ], // TODO translate en/vi
    intro: {
      de: ["Schwester Minh Chi ist seit 2005 Nonne in der Plum Village Tradition. Im Jahr 2012 wurde sie Dharma-Lehrerin. Seit 2013 lebt sie in Europa - zuerst in Frankreich in Plum Village und seit 2019 im EIAB."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Ordiniert", "en": "Ordained", "vi": "Thọ giới"},
        "value": {"de": "2003", "en": "2003", "vi": "2003"}
      }
    ] // TODO translate en/vi
  },

  "song-nghiem": {
    name: "Sr. Song Nghiêm",
    category: "monastic",
    subgroup: "resident",
    role: {
      de: "Dharmalehrerin, ansässige Nonne im EIAB",
      en: "Dharma Teacher, resident nun at EIAB",
      vi: "Giáo thọ, Ni sư thường trú tại EIAB"
    },
    tags: [
      {de: "Dharmalehrerin seit 2003", en: "Dharma Teacher since 2003", vi: "Giáo thọ từ năm 2003"},
      {de: "Ordiniert 2004", en: "Ordained 2004", vi: "Xuất gia năm 2004"},
      {de: "Promovierte Chemikerin", en: "PhD Chemist", vi: "Tiến sĩ Hóa học"},
      {de: "Qigong und Tai Chi", en: "Qigong and Tai Chi", vi: "Khí công và Thái Cực Quyền"}
    ],
    intro: {
      de: ["Sr. Song Nghiêm wurde in Vietnam geboren und lebt heute als ansässige Nonne im EIAB. Bevor sie ins Kloster eintrat, war sie viele Jahre als Chemikerin tätig — heute verbindet sie in ihrem Unterricht wissenschaftliche Klarheit mit Leichtigkeit, Humor und der Praxis des Qigong."],
      en: ["Sr. Song Nghiêm was born in Vietnam and today lives as a resident nun at EIAB. Before entering monastic life she worked for many years as a chemist — in her teaching today she combines scientific clarity with lightness, humor, and the practice of Qigong."],
      vi: ["Sư cô Song Nghiêm sinh ra tại Việt Nam và hiện đang là ni sư thường trú tại EIAB. Trước khi xuất gia, sư cô đã có nhiều năm làm việc trong ngành hóa học — trong các buổi giảng dạy hôm nay, sư cô kết hợp sự rõ ràng của khoa học với sự nhẹ nhàng, hài hước và pháp môn Khí công."]
    },
    sections: [
      {
        heading: {
          de: "Von der Chemikerin zur Nonne",
          en: "From Chemist to Nun",
          vi: "Từ nhà hóa học đến người xuất gia"
        },
        paragraphs: {
          de: [
            "Sr. Song Nghiêm promovierte 1986 in Chemie an der Technischen Universität Darmstadt und arbeitete anschließend achtzehn Jahre lang als Chemikerin in Forschung und Wirtschaft.",
            "2003 wurde sie als Laie von Thầy zur Dharmalehrerin ernannt. Ein Jahr später, 2004, wurde sie von Thầy als Nonne ordiniert. 2012 erhielt sie – nun als Nonne – noch einmal die Dharmalehrerlampe."
          ],
          en: [
            "Sr. Song Nghiêm earned her doctorate in chemistry in 1986 from the Technical University of Darmstadt and then worked for eighteen years as a chemist in research and industry.",
            "In 2003, while still a layperson, she was ordained as a Dharma teacher by Thầy. A year later, in 2004, she was ordained as a nun by Thầy. In 2012, now as a nun, she received the Dharma teacher lamp a second time."
          ],
          vi: [
            "Sư cô Song Nghiêm lấy bằng tiến sĩ hóa học năm 1986 tại Đại học Kỹ thuật Darmstadt, sau đó làm việc mười tám năm trong lĩnh vực nghiên cứu và công nghiệp hóa học.",
            "Năm 2003, khi còn là cư sĩ, sư cô được Thầy truyền đăng làm giáo thọ. Một năm sau, vào năm 2004, sư cô được Thầy cho xuất gia làm ni. Năm 2012, khi đã là ni sư, sư cô lại được nhận đèn truyền đăng giáo thọ một lần nữa."
          ]
        }
      },
      {
        heading: {
          de: "Qigong, Freude und Humor",
          en: "Qigong, Joy, and Humor",
          vi: "Khí công, niềm vui và sự hài hước"
        },
        paragraphs: {
          de: [
            "Sie mag gerne Gartenarbeit, kocht gerne und genießt es, mit ihren Mitmenschen Freude und Spaß zu haben. Ihr besonderes Interesse gilt dem Qigong und dem Tai Chi sowie der Kultivierung von Freude und Glück in sich selbst und in anderen.",
            "Sie liebt es, mit Menschen zu singen, zu spielen und ihnen dabei Achtsamkeit und Meditation zu lehren. Durch Leichtigkeit, Freude und Humor gelingt es ihr nicht selten, das Leiden anderer Menschen zu lindern."
          ],
          en: [
            "She enjoys gardening and cooking, and delights in sharing joy and fun with those around her. She has a particular interest in Qigong and Tai Chi, as well as in cultivating joy and happiness in herself and in others.",
            "She loves singing and playing with people, teaching mindfulness and meditation through it. Through lightness, joy, and humor she is often able to ease the suffering of others."
          ],
          vi: [
            "Sư cô thích làm vườn, nấu ăn, và thích được chia sẻ niềm vui cùng mọi người xung quanh. Sư cô đặc biệt quan tâm đến Khí công và Thái Cực Quyền, cũng như việc nuôi dưỡng niềm vui và hạnh phúc trong chính mình và người khác.",
            "Sư cô thích ca hát và vui chơi cùng mọi người, qua đó dạy về chánh niệm và thiền tập. Nhờ sự nhẹ nhàng, niềm vui và óc hài hước, sư cô thường có thể giúp làm vơi bớt khổ đau của người khác."
          ]
        }
      }
    ],
    facts: [
      {
        label: {de: "Promotion", en: "Doctorate", vi: "Tiến sĩ"},
        value: {
          de: "1986, Chemie, TU Darmstadt",
          en: "1986, Chemistry, TU Darmstadt",
          vi: "1986, Hóa học, Đại học Kỹ thuật Darmstadt"
        }
      },
      {
        label: {de: "Dharmalehrerin seit", en: "Dharma Teacher since", vi: "Giáo thọ từ"},
        value: {de: "2003", en: "2003", vi: "2003"}
      },
      {label: {de: "Ordiniert", en: "Ordained", vi: "Xuất gia"}, value: {de: "2004", en: "2004", vi: "2004"}},
      {
        label: {de: "Dharma-Lehrerlampe erneut", en: "Dharma lamp again", vi: "Nhận đèn truyền đăng lần hai"},
        value: {de: "2012", en: "2012", vi: "2012"}
      }
    ]
  },

  "bang-nghiem": {
    name: "Sr. Băng Nghiêm",
    category: "monastic",
    subgroup: "resident",
    role: {de: "Nonne im EIAB", en: "Nun at EIAB", vi: "Sư cô tại EIAB"},
    tags: [
      {"de": "Ordiniert 2006", "en": "Ordained 2006", "vi": "Thọ giới năm 2006"}
    ], // TODO translate en/vi
    intro: {
      de: ["Schwester Bang Nghiem ist eine vietnamesische Nonne, die 2006 in Vietnam ordiniert wurde. Sie lebte einige Jahre in Plum Village und wohnt jetzt seit 2016 im eiab."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Ordiniert", "en": "Ordained", "vi": "Thọ giới"},
        "value": {"de": "2006", "en": "2006", "vi": "2006"}
      }
    ] // TODO translate en/vi
  },

  "chinh-nghiem": {
    name: "Sr. Chỉnh Nghiêm",
    role: {de: "Nonne im EIAB", en: "Nun at EIAB", vi: "Sư cô tại EIAB"},
    category: "monastic",
    subgroup: "resident", // from the "lives at EIAB?" flag — double-check
    tags: [
      {"de": "Ordiniert 2008", "en": "Ordained 2008", "vi": "Thọ giới năm 2008"}
    ], // TODO translate en/vi
    intro: {
      de: ["Schwester Chinh Nghiem wurde 2008 in Vietnam ordiniert, lebte einige Jahre in Plum Village und lebt jetzt seit 2015 im eiab. Sie hat eine besondere Begabung zu singen."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Ordiniert", "en": "Ordained", "vi": "Thọ giới"},
        "value": {"de": "2008", "en": "2008", "vi": "2008"}
      }
    ] // TODO translate en/vi
  },

  "chieu-nghiem": {
    name: "Sr. Chiêu Nghiêm",
    category: "monastic",
    subgroup: "resident",
    role: {de: "Nonne im EIAB", en: "Nun at EIAB", vi: "Sư cô tại EIAB"},
    tags: [
      {"de": "Ordiniert 2008", "en": "Ordained 2008", "vi": "Thọ giới năm 2008"}
    ], // TODO translate en/vi
    intro: {
      de: ["Schwester Chiêu Nghiêm wurde 2008 in Vietnam ordiniert. Sie lebte acht Jahre in Plum Village in Frankreich. Danach verbrachte sie vier Jahre in unserem Kloster in Australien. Im Jahr 2023 kam sie zum EIAB. Sie geht täglich spazieren und joggen."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Ordiniert", "en": "Ordained", "vi": "Thọ giới"},
        "value": {"de": "2008", "en": "2008", "vi": "2008"}
      }]  // TODO translate en/vi
  },

  "thay-phap-kinh": {
    name: "Thầy Pháp Kính",
    category: "monastic",
    subgroup: "resident",
    role: {de: "Mönch im EIAB", en: "Monk at EIAB", vi: "Thầy tại EIAB"},
    tags: [
      {"de": "Ordiniert 2008", "en": "Ordained 2008", "vi": "Thọ giới năm 2008"}
    ], // TODO translate en/vi
    intro: {
      de: ["Thầy Pháp Kính wurde 2008 in Vietnam ordiniert und lebt seit 2011 im eiab in Deutschland."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Ordiniert", "en": "Ordained", "vi": "Thọ giới"},
        "value": {"de": "2008", "en": "2008", "vi": "2008"}
      }
    ] // TODO translate en/vi
  },
// --- monastic: visiting ---

  "chan-khong": {
    name: "Sr. Chân Không",
    role: {
      de: "Älteste Nonne der internationalen Plum-Village-Sangha",
      en: "Elder nun of the International Plum Village Sangha",
      vi: "Sư bà của Tăng thân Làng Mai Quốc tế"
    },
    category: "monastic",
    subgroup: "visiting",
    tags: [
      {
        de: "Bhikshuni, Älteste Nonne von Plum Village",
        en: "Bhikshuni, Elder nun of Plum Village",
        vi: "Tỳ kheo ni, Sư bà của Làng Mai"
      },
      {de: "Mitbegründerin von Plum Village", en: "Co-founder of Plum Village", vi: "Đồng sáng lập Làng Mai"},
      {de: "Ordiniert 1988", en: "Ordained 1988", vi: "Thọ giới năm 1988"},
      {de: "Autorin, „Learning True Love“", en: "Author, Learning True Love", vi: "Tác giả, Learning True Love"}
    ],
    intro: {
      de: ["Sr. Chân Không (geboren als Cao Ngọc Phượng) ist die erste vollständig ordinierte monastische Schülerin von Zen-Meister Thích Nhất Hạnh und leitet seit den 1960er-Jahren seine humanitären Projekte. Heute ist sie die Älteste Nonne der internationalen Plum-Village-Sangha."],
      en: ["Sister Chân Không (born Cao Ngọc Phượng) is the first fully ordained monastic disciple of Zen Master Thích Nhất Hạnh and has directed his humanitarian projects since the 1960s. Today she is the Elder nun of the International Plum Village Sangha."],
      vi: ["Sư cô Chân Không (tên khai sinh Cao Ngọc Phượng) là đệ tử xuất gia thọ giới đầy đủ đầu tiên của Thiền Sư Thích Nhất Hạnh và đã lãnh đạo các dự án nhân đạo của Thầy từ những năm 1960. Ngày nay, sư cô là Sư bà của Tăng thân Làng Mai Quốc tế."]
    },
    sections: [
      {
        heading: {
          de: "Frühe Jahre und Begegnung mit Thầy",
          en: "Early years and meeting Thầy",
          vi: "Những năm đầu và gặp Thầy"
        },
        paragraphs: {
          de: ["Sr. Chân Không wurde 1938 in Bến Tre im Mekong-Delta Südvietnams geboren. Schon als Teenager begann sie, in den Slums von Saigon sozial zu arbeiten, nachdem sie einem obdachlosen Jungen begegnet war. Im Herbst 1959 hörte sie zum ersten Mal von den Lehren Thích Nhất Hạnhs und nahm kurz darauf an einem Kurs bei ihm in Saigon teil — sie hatte, wie sie später schrieb, noch nie jemanden so schön und tiefgründig sprechen hören. Er zeigte ihr, dass Erleuchtung auch durch achtsamen sozialen Einsatz gefunden werden kann."],
          en: ["Sr. Chân Không was born in 1938 in Bến Tre, in the Mekong Delta of southern Vietnam. As a teenager she began social work in the slums of Saigon after encountering a homeless boy. In autumn 1959 she first heard the teachings of Thích Nhất Hạnh, and soon after attended a course he taught in Saigon — she had, as she later wrote, never heard anyone speak so beautifully and profoundly. He showed her that enlightenment could also be found through mindful social service."],
          vi: ["Sư cô Chân Không sinh năm 1938 tại Bến Tre, vùng đồng bằng sông Cửu Long miền Nam Việt Nam. Từ thuở thiếu niên, sư cô đã bắt đầu công tác xã hội tại các khu ổ chuột ở Sài Gòn sau khi gặp một cậu bé vô gia cư. Vào mùa thu năm 1959, lần đầu tiên sư cô nghe về giáo lý của Thiền Sư Thích Nhất Hạnh, và không lâu sau đã tham dự một khóa học do Thầy giảng dạy tại Sài Gòn — như sư cô sau này viết lại, chưa từng nghe ai nói chuyện đẹp đẽ và sâu sắc đến vậy. Thầy đã chỉ cho sư cô thấy rằng giác ngộ cũng có thể được tìm thấy qua sự phụng sự xã hội trong chánh niệm."]
        }
      },
      {
        heading: {
          de: "Schule für Sozialarbeit und Kriegsjahre",
          en: "School of Youth for Social Service and the war years",
          vi: "Trường Thanh niên Phụng sự Xã hội và những năm chiến tranh"
        },
        paragraphs: {
          de: ["Inspiriert von Thích Nhất Hạnhs Vision versammelte sie siebzig Freundinnen und Freunde für Hilfsarbeit. 1964 gehörte sie zu den Gründerinnen und Gründern der Schule für Sozialarbeit der Jugend (School of Youth for Social Service), die tausende junge Sozialarbeitende ausbildete, um Hilfe in vom Krieg zerstörte Dörfer zu bringen. Sie leitete gefährliche Rettungseinsätze, unter anderem bei Überschwemmungen 1964, und war 1963 Zeugin der Selbstverbrennung des Mönchs Thích Quảng Đức — ein Ereignis, das ihr Engagement für gewaltfreien Widerstand vertiefte. 1967 wurden ein befreundeter Mönch und sieben Sozialarbeitende entführt und vermutlich getötet; Sr. Chân Không entging diesem Schicksal nur, weil sie das Dorf kurz zuvor verlassen hatte, um ihre Mutter zu besuchen."],
          en: ["Inspired by Thích Nhất Hạnh's vision, she gathered seventy friends for relief work. In 1964 she was among the founders of the School of Youth for Social Service, which trained thousands of young social workers to bring aid to villages devastated by war. She led dangerous rescue missions, including flood relief in 1964, and in 1963 witnessed the self-immolation of the monk Thích Quảng Đức — an event that deepened her commitment to nonviolent resistance. In 1967 a fellow monk and seven social workers were abducted and presumed killed; Sr. Chân Không escaped that fate only because she had left the village shortly before to visit her mother."],
          vi: ["Được truyền cảm hứng từ tầm nhìn của Thiền Sư Thích Nhất Hạnh, sư cô đã tập hợp bảy mươi người bạn để làm công tác cứu trợ. Năm 1964, sư cô là một trong những người sáng lập Trường Thanh niên Phụng sự Xã hội, nơi đào tạo hàng ngàn thanh niên làm công tác xã hội để mang sự giúp đỡ đến các làng quê bị chiến tranh tàn phá. Sư cô đã dẫn dắt các đợt cứu trợ nguy hiểm, trong đó có cứu trợ lũ lụt năm 1964, và vào năm 1963 đã chứng kiến sự tự thiêu của Hòa thượng Thích Quảng Đức — sự kiện đã củng cố thêm cam kết của sư cô với con đường đấu tranh bất bạo động. Năm 1967, một vị thầy đồng hành và bảy nhân viên xã hội bị bắt cóc và được cho là đã bị sát hại; sư cô Chân Không đã thoát khỏi số phận đó chỉ vì đã rời làng không lâu trước đó để thăm mẹ."]
        }
      },
      {
        heading: {
          de: "Friedensarbeit und die Rettung der Boat People",
          en: "Peace work and rescuing the Boat People",
          vi: "Công tác hòa bình và giải cứu thuyền nhân"
        },
        paragraphs: {
          de: ["Im Januar 1969 schloss sie sich Thích Nhất Hạnh in Frankreich an. Gemeinsam organisierten sie die Vietnamesische Buddhistische Friedensdelegation bei den Pariser Friedensgesprächen — er als Vorsitzender, sie als Verantwortliche für Organisation und Spendenwerbung — und reisten durch Europa und die USA, um für einen sofortigen Waffenstillstand zu werben. Nach Kriegsende 1975 initiierte sie ein Bootsrettungsprojekt: Sie charterte Fischerboote, um Flüchtlingsboote auf hoher See aufzuspüren. „Meditation erlaubte es mir, den Müll, das Leid in mir, in ein Boot der Barmherzigkeit zu verwandeln“, schrieb sie später. Sie leitete Nothilfeeinsätze zur Rettung vietnamesischer Boat People und Patenschaftsprogramme für über 14.000 Waisenkinder in Vietnam."],
          en: ["In January 1969 she joined Thích Nhất Hạnh in France. Together they organised the Vietnamese Buddhist Peace Delegation at the Paris Peace Talks — he as chair, she handling organisation and fundraising — and travelled across Europe and the United States campaigning for an immediate ceasefire. After the war ended in 1975 she initiated a boat rescue project, chartering fishing vessels to locate refugee boats at sea. \"Meditation allowed me to transform the garbage, the suffering, in me into a mercy fishing boat,\" she later wrote. She led emergency efforts to rescue Vietnamese Boat People from the high seas and sponsorship programmes for more than 14,000 orphans in Vietnam."],
          vi: ["Vào tháng 1 năm 1969, sư cô sang Pháp cùng Thiền Sư Thích Nhất Hạnh. Hai người cùng tổ chức Phái đoàn Hòa bình Phật giáo Việt Nam tại Hòa đàm Paris — Thầy làm trưởng đoàn, sư cô phụ trách tổ chức và gây quỹ — và đi khắp châu Âu và Hoa Kỳ để vận động cho một lệnh ngừng bắn ngay lập tức. Sau khi chiến tranh kết thúc năm 1975, sư cô khởi xướng dự án cứu vớt thuyền nhân: thuê tàu đánh cá để tìm kiếm các thuyền tị nạn trên biển khơi. Sư cô từng viết: „Thiền tập cho phép tôi chuyển hóa rác rưởi, khổ đau trong tôi, thành một con thuyền của lòng từ bi.“ Sư cô đã dẫn dắt các nỗ lực cứu trợ khẩn cấp để giải cứu thuyền nhân Việt Nam trên biển khơi và các chương trình bảo trợ cho hơn 14.000 trẻ mồ côi tại Việt Nam."]
        }
      },
      {
        heading: {
          de: "Ordination und Plum Village",
          en: "Ordination and Plum Village",
          vi: "Thọ giới và Làng Mai"
        },
        paragraphs: {
          de: ["1982 gründete sie gemeinsam mit Thích Nhất Hạnh das Kloster Plum Village im Südwesten Frankreichs — das erste Retreat dort beherbergte 107 Menschen, die auf Holzbrettern schliefen und Schlafsäcke als Decken benutzten. 1988 wurde sie als Nonne ordiniert und damit zur ersten vollständig ordinierten monastischen Schülerin Thích Nhất Hạnhs. Sie entwickelte Übungen wie „Beginning Anew“ (eine vierstufige Kommunikationsübung), „Tiefenentspannung“ und die Berührungsmeditation der Erde weiter und prägte, was sie „soziale Arbeit des Herzens“ nennt."],
          en: ["In 1982 she and Thích Nhất Hạnh established Plum Village Monastery in southwest France — the first retreat there hosted 107 people, sleeping on wooden planks with sleeping bags for blankets. In 1988 she was ordained as a nun, becoming Thích Nhất Hạnh's first fully ordained monastic disciple. She went on to develop practices such as Beginning Anew (a four-step communication practice), Deep Relaxation, and Touching the Earth meditation, shaping what she calls \"social work of the heart.\""],
          vi: ["Năm 1982, sư cô cùng Thiền Sư Thích Nhất Hạnh thành lập Tu viện Làng Mai ở tây nam nước Pháp — khóa tu đầu tiên ở đó đón 107 người, ngủ trên ván gỗ với túi ngủ làm chăn. Năm 1988, sư cô thọ giới xuất gia, trở thành đệ tử xuất gia thọ giới đầy đủ đầu tiên của Thiền Sư Thích Nhất Hạnh. Sư cô đã phát triển các pháp môn thực tập như „Làm mới“ (thực tập giao tiếp bốn bước), „Buông thư sâu“ và thiền Tiếp Xúc Với Đất, hình thành nên điều sư cô gọi là „công tác xã hội của trái tim“."]
        }
      },
      {
        heading: {
          de: "Bücher und heutiges Wirken",
          en: "Books and current role",
          vi: "Sách và vai trò hiện tại"
        },
        paragraphs: {
          de: ["Ihre Autobiografie „Learning True Love“ zählt neben Werken von Martin Luther King Jr. und Mahatma Gandhi zu den bedeutenden Zeugnissen gesellschaftlichen und spirituellen Wandels; sie schrieb außerdem „Beginning Anew: Four Steps to Restoring Communication“ (2014) und „Deep Relaxation: Coming Home to Your Body“ (2013). Nach über fünfzig Jahren an der Seite Thích Nhất Hạnhs ist sie heute die Älteste Nonne der internationalen Plum-Village-Sangha und weiterhin aktiv in Lehre und Begleitung der weltweiten Gemeinschaft."],
          en: ["Her autobiography, Learning True Love, stands alongside works by Martin Luther King Jr. and Mahatma Gandhi as an account of social and spiritual change; she also wrote Beginning Anew: Four Steps to Restoring Communication (2014) and Deep Relaxation: Coming Home to Your Body (2013). After more than fifty years alongside Thích Nhất Hạnh, she is today the Elder nun of the International Plum Village Sangha and remains actively engaged in teaching and guiding the worldwide community."],
          vi: ["Cuốn tự truyện „Learning True Love“ của sư cô được xem ngang hàng với các tác phẩm của Martin Luther King Jr. và Mahatma Gandhi như một chứng tích về sự chuyển hóa xã hội và tâm linh; sư cô cũng viết „Beginning Anew: Four Steps to Restoring Communication“ (2014) và „Deep Relaxation: Coming Home to Your Body“ (2013). Sau hơn năm mươi năm đồng hành cùng Thiền Sư Thích Nhất Hạnh, ngày nay sư cô là Sư bà của Tăng thân Làng Mai Quốc tế và vẫn tích cực giảng dạy, dẫn dắt cộng đồng khắp thế giới."]
        }
      }
    ],
    facts: [
      {
        label: {de: "Rolle", en: "Role", vi: "Vai trò"},
        value: {de: "Älteste Nonne, Plum Village", en: "Elder nun, Plum Village", vi: "Sư bà, Làng Mai"}
      },
      {
        label: {de: "Geboren", en: "Born", vi: "Sinh năm"},
        value: {de: "1938, Bến Tre, Vietnam", en: "1938, Bến Tre, Vietnam", vi: "1938, Bến Tre, Việt Nam"}
      },
      {label: {de: "Ordiniert", en: "Ordained", vi: "Thọ giới"}, value: {de: "1988", en: "1988", vi: "1988"}},
      {
        label: {de: "Bekanntes Werk", en: "Notable work", vi: "Tác phẩm tiêu biểu"},
        value: {
          de: "„Learning True Love“ (Autobiografie)",
          en: "Learning True Love (autobiography)",
          vi: "Learning True Love (tự truyện)"
        }
      }
    ]
  },

  "dinh-nghiem": {
    name: "Sr. Định Nghiêm",
    category: "monastic",
    subgroup: "visiting",
    role: {de: "Nonne", en: "Nun", vi: "Sư cô"},
    tags: [
      {"de": "Ordiniert 1993", "en": "Ordained 1993", "vi": "Thọ giới năm 1993"}
    ], // TODO translate en/vi
    intro: {
      de: ["Sister Chân Định Nghiêm was ordained in 1993 in Plum Village, France, where she lived until she followed Thầy to Thailand in 2016 and then to Vietnam, as his attendant."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Ordiniert", "en": "Ordained", "vi": "Thọ giới"},
        "value": {"de": "1993", "en": "1993", "vi": "1993"}
      }
    ] // TODO translate en/vi
  },

  "bi-nghiem": {
    name: "Sr. Bi Nghiêm",
    category: "monastic",
    subgroup: "visiting",
    role: {de: "Nonne", en: "Nun", vi: "Sư cô"},
    tags: [
      {"de": "Ordiniert 1998", "en": "Ordained 1998", "vi": "Thọ giới năm 1998"}
    ], // TODO translate en/vi
    intro: {
      de: ["Schwester Bi Nghiem ist in Deutschland geboren und aufgewachsen. Sie ist Dipl.-Bibliothekarin und studierte später französische und italienische Literatur in Montreal, Kanada. 1998 wurde sie von Thay ordiniert. Ihr besonderes Interesse gilt der westlichen und buddhistischen Psychologie sowie dem interreligiösen Dialog."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Ordiniert", "en": "Ordained", "vi": "Thọ giới"},
        "value": {"de": "1998", "en": "1998", "vi": "1998"}
      }
    ] // TODO translate en/vi
  },

  "hoi-nghiem": {
    name: "Sr. Hội Nghiêm",
    role: {
      de: "Dharma-Lehrerin, Plum Village Frankreich",
      en: "Dharma teacher, Plum Village France",
      vi: "Giảng viên Phật pháp, Làng Mai Pháp"
    },
    category: "monastic",
    subgroup: "visiting",
    tags: [
      {"de": "Ordiniert 1999", "en": "Ordained 1999", "vi": "Thọ giới năm 1999"}
    ], // TODO translate en/vi
    intro: {
      de: ["Sister Hội Nghiêm is a beautiful continuation of our beloved Teacher Thầy. Her calligraphies radiate deep peace, love, and joy.\nShe was born and raised in Vietnam. Before becoming a nun, she was a school teacher and wished to incorporate mindfulness in her teaching in order to help her students transform suffering into happiness. She came to Plum Village, France and ordained as a novice with Zen Master Thích Nhất Hạnh in 1999, at the age of 25 and became a dharma teacher in 2007. She is currently living in Lower Hamlet and continues to teach mindfulness at Plum Village, France as well as around the world. She enjoys meditation, nature, poetry, calligraphy and inspiring people to practice."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Ordiniert", "en": "Ordained", "vi": "Thọ giới"},
        "value": {"de": "1999", "en": "1999", "vi": "1999"}
      }]
  },

  "thay-phap-xa": {
    name: "Thầy Pháp Xả",
    role: {
      de: "Mönch am EIAB, seit 2010",
      en: "Monk at EIAB, since 2010",
      vi: "Thầy tại EIAB, từ năm 2010"
    },
    category: "monastic",
    subgroup: "visiting",
    tags: [
      {de: "Bhikshu, Plum Village", en: "Bhikshu, Plum Village", vi: "Tỳ kheo, Làng Mai"},
      {de: "Wanderungen und Teemeditation", en: "Walking and tea meditation", vi: "Thiền hành và thiền trà"}
    ],
    intro: {
      de: ["Thầy Pháp Xả ist ein niederländischer Mönch, der im Februar 2003 in Plum Village ordiniert wurde. Er studierte und lehrte zunächst Mathematik und lernte einige Jahre lang chinesische Medizin, bevor er ins Kloster eintrat. Seit Juni 2010 lebt er in Waldbröl."],
      en: ["Thầy Pháp Xả is a Dutch monk who was ordained at Plum Village in February 2003. He studied and taught mathematics and spent several years learning Chinese medicine before entering the monastery. He has lived in Waldbröl since June 2010."],
      vi: ["Thầy Pháp Xả là một thầy người Hà Lan, thọ giới tại Làng Mai vào tháng 2 năm 2003. Trước khi xuất gia, thầy từng học và giảng dạy toán học, và học y học cổ truyền Trung Hoa trong vài năm. Thầy sống tại Waldbröl từ tháng 6 năm 2010."]
    },
    sections: [
      {
        heading: {de: "Am EIAB", en: "At EIAB", vi: "Tại EIAB"},
        paragraphs: {
          de: ["Er leitet Kurse zu achtsamen Wanderungen und Teemeditation und begleitet mit Freude Wanderretreats in der Natur rund um Waldbröl."],
          en: ["He leads courses on mindful walking and tea meditation, and enjoys guiding walking retreats in the countryside around Waldbröl."],
          vi: ["Thầy hướng dẫn các khóa học về thiền hành và thiền trà, và rất vui khi được dẫn dắt các khóa tu đi bộ trong thiên nhiên quanh Waldbröl."]
        }
      }
    ],
    facts: [
      {
        label: {de: "Ordiniert", en: "Ordained", vi: "Thọ giới"},
        value: {de: "2003, Plum Village", en: "2003, Plum Village", vi: "2003, Làng Mai"}
      },
      {
        label: {de: "Am EIAB seit", en: "At EIAB since", vi: "Tại EIAB từ"},
        value: {de: "2010", en: "2010", vi: "2010"}
      },
      {
        label: {de: "Schwerpunkt", en: "Focus", vi: "Trọng tâm"},
        value: {
          de: "Achtsame Wanderungen, Teemeditation",
          en: "Mindful walking, tea meditation",
          vi: "Thiền hành, thiền trà"
        }
      }
    ]
  },

  "sung-nghiem": {
    name: "Sr. Sung Nghiêm",
    category: "monastic",
    subgroup: "visiting",
    role: {de: "Nonne", en: "Nun", vi: "Sư cô"},
    tags: [
      {"de": "Ordiniert 2005", "en": "Ordained 2005", "vi": "Thọ giới năm 2005"}
    ], // TODO translate en/vi
    intro: {
      de: ["Bhikshuni Chân Sùng Nghiêm, a native of Central Vietnam, ordained as a novice nun in 2005, at the age of 32. Prior to her ordination, she taught a number of years as a history teacher in middle schools.She received the lamp transmission from the Zen Master Thich Nhat Hanh in 2012 at Plum Village, France. As a Dharma Teacher, she teaches and guides the younger nuns by offering classes in precepts, sutras, and various traditional healing methods. The bamboo stick Qigong class she teaches every morning in the monastery is very popular and well-attended by retreatants of all ages. She also likes writing calligraphy and teaches people how to do it."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Ordiniert", "en": "Ordained", "vi": "Thọ giới"},
        "value": {"de": "2005", "en": "2005", "vi": "2005"}
      }
    ] // TODO translate en/vi
  },

  "thuan-nghiem": {
    name: "Sr. Thuấn Nghiêm",
    category: "monastic",
    subgroup: "visiting",
    role: {de: "Nonne", en: "Nun", vi: "Sư cô"},
    tags: [
      {"de": "Ordiniert 2006", "en": "Ordained 2006", "vi": "Thọ giới năm 2006"}
    ], // TODO translate en/vi
    intro: {
      de: ["Schwester Thuan Nghiem stammt aus Vietnam. Sie wurde im Mai 2006 im Bat Nha Kloster in Vietnam ordiniert und im Jahr 2016 zur Dharma-Lehrerin ernannt. Sie lebte in Plum Village in Frankreich und kam im Jahr 2020 nach Deutschland."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Ordiniert", "en": "Ordained", "vi": "Thọ giới"},
        "value": {"de": "2006", "en": "2006", "vi": "2006"}
      }
    ] // TODO translate en/vi
  },

  "tai-nghiem": {
    name: "Sr. Tại Nghiêm",
    role: {
      de: "Nonne, Tăng thân Làng Mai",
      en: "Nun, Plum Village Sangha",
      vi: "Sư cô, Tăng thân Làng Mai"
    },
    category: "monastic",
    subgroup: "visiting",
    tags: [
      {de: "Ordiniert 2009", en: "Ordained 2009", vi: "Thọ giới năm 2009"},
      {de: "Dharma-Lehrerin seit 2020", en: "Dharma teacher since 2020", vi: "Giảng viên Phật pháp từ 2020"}
    ],
    intro: {
      de: ["Sr. Tại Nghiêm stammt aus Zentralvietnam und wurde 2009 ordiniert; 2020 empfing sie die Dharma-Lampe. Neben Vietnamesisch spricht sie fließend Englisch und Französisch und arbeitete eng mit Thầy als Redakteurin vietnamesischer Bücher, Artikel und des jährlichen vietnamesischen Plum-Village-Rundbriefs zusammen."],
      en: ["Sr. Tại Nghiêm comes from central Vietnam and was ordained in 2009; she received the Dharma Lamp Transmission in 2020. Alongside Vietnamese, she is fluent in English and French, and worked closely with Thầy as an editor of Vietnamese books, articles, and the annual Plum Village Vietnamese newsletter."],
      vi: ["Sư cô Tại Nghiêm quê ở miền Trung Việt Nam, thọ giới năm 2009 và nhận truyền đăng năm 2020. Bên cạnh tiếng Việt, sư cô nói thông thạo tiếng Anh và tiếng Pháp, từng cộng tác chặt chẽ với Thầy trong vai trò biên tập viên cho các sách, bài viết tiếng Việt và bản tin hằng năm của Làng Mai bằng tiếng Việt."]
    },
    facts: [
      {label: {de: "Ordiniert", en: "Ordained", vi: "Thọ giới"}, value: {de: "2009", en: "2009", vi: "2009"}},
      {
        label: {de: "Dharma-Lehrerin seit", en: "Dharma teacher since", vi: "Giảng viên Phật pháp từ"},
        value: {de: "2020", en: "2020", vi: "2020"}
      },
      {
        label: {de: "Sprachen", en: "Languages", vi: "Ngôn ngữ"},
        value: {
          de: "Tiếng Việt, Englisch, Französisch",
          en: "Vietnamese, English, French",
          vi: "Tiếng Việt, tiếng Anh, tiếng Pháp"
        }
      }
    ]
  },

  "thay-phap-lich": {
    name: "Thầy Pháp Lịch",
    category: "monastic",
    subgroup: "visiting",
    role: {de: "Mönch", en: "Monk", vi: "Thầy"},
    tags: [
      {"de": "Ordiniert 2009", "en": "Ordained 2009", "vi": "Thọ giới năm 2009"}
    ], // TODO translate en/vi
    intro: {
      de: ["Br. Phap Lich ist das Kind einer der buddhistischen Lehre folgenden Mutter. So wie auch drei seiner Geschwister ging er ins Kloster und wurde im Jahr 2009 im Wurzelkloster von Thich Nhat Hanh, dem Tu Hieu-Kloster in Hue, ordiniert. Auch er lebte einige Zeit in Thailand, bevor er 2011 nach Waldbröl kam. Das Leben in der monastischen Gemeinschaft des EIAB hat ihn sehr genährt. Er schätzt seine Tätigkeit als Workcoordinator, die ihn mit vielen Aufgaben konfrontiert und persönliches Wachstum ermöglicht. Im Jahr 2018 erhielt Bruder Phap Lich die Dharmalampe und ist damit ermächtigt, das Dharma zu lehren im Namen von Thay und der monastischen Gemeinschaft des Intersein-Ordens."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Ordiniert", "en": "Ordained", "vi": "Thọ giới"},
        "value": {"de": "2009", "en": "2009", "vi": "2009"}
      }] // TODO translate en/vi
  },

  "thay-troi-khiet-tam": {
    name: "Thầy Trời Khiết Tâm",
    category: "monastic",
    subgroup: "visiting",
    role: {de: "Mönch", en: "Monk", vi: "Thầy"},
    tags: [
      {"de": "Ordiniert 2017", "en": "Ordained 2017", "vi": "Thọ giới năm 2017"}
    ], // TODO translate en/vi
    intro: {
      de: ["Bruder Khiết Tâm (reiner/s Geist oder Herz) wurde 1990 in Österreich geboren und studierte 2009- 2014 in Wien Musik. Er zog 2014 nach Plum Village, Frankreich, wo er 2017 in den monastischen Orden eintreten konnte."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Ordiniert", "en": "Ordained", "vi": "Thọ giới"},
        "value": {"de": "2017", "en": "2017", "vi": "2017"}
      }
    ] // TODO translate en/vi
  },

  "thay-troi-khiet-lam": {
    name: "Thầy Trời Khiết Lâm",
    category: "monastic",
    subgroup: "visiting",
    role: {de: "Mönch", en: "Monk", vi: "Thầy"},
    tags: [
      {"de": "Ordiniert 2017", "en": "Ordained 2017", "vi": "Thọ giới năm 2017"}
    ], // TODO translate en/vi
    intro: {
      de: ["Bruder Khiet Lam ist ein deutscher Bruder, der 2017 in Plum VIllage ordiniert wurde und seit dem Jahr 2022 im eiab lebt. Er ist gerne draußen im Garten und mag besonders gerne die Gehmeditation mit der Gemeinschaft."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Ordiniert", "en": "Ordained", "vi": "Thọ giới"},
        "value": {"de": "2017", "en": "2017", "vi": "2017"}
      }
    ] // TODO translate en/vi
  },

  // The following are only known as course instructors, not (yet) with a full
  // profile. `unlisted: true` keeps them off ueber-uns/moenche-und-nonnen.html
  // (js/teacher-groups.js skips them) while still resolving correctly wherever a
  // course links to them by id — person.html shows its normal "profile coming
  // soon" fallback for the empty intro.
  "trang-mai-thon": {
    name: "Trăng Mai Thôn",
    category: "monastic",
    subgroup: "visiting",
    unlisted: true,
    role: {de: "", en: "", vi: ""},
    intro: {de: [], en: [], vi: []}
  },
  "trang-thanh-tuu": {
    name: "Trăng Thành Tựu",
    category: "monastic",
    subgroup: "visiting",
    unlisted: true,
    role: {de: "", en: "", vi: ""},
    intro: {de: [], en: [], vi: []}
  },
  "trang-chieu-dieu": {
    name: "Trăng Chiếu Diệu",
    category: "monastic",
    subgroup: "visiting",
    unlisted: true,
    role: {de: "", en: "", vi: ""},
    intro: {de: [], en: [], vi: []}
  },
  "trang-thanh-nha": {
    name: "Trăng Thanh Nhã",
    category: "monastic",
    subgroup: "visiting",
    unlisted: true,
    role: {de: "", en: "", vi: ""},
    intro: {de: [], en: [], vi: []}
  },
  "bieu-nghiem": {
    name: "Sr. Biểu Nghiêm",
    category: "monastic",
    subgroup: "visiting",
    unlisted: true,
    role: {de: "", en: "", vi: ""},
    intro: {de: [], en: [], vi: []}
  }
};

window.EIAB_TEACHERS_LAY = {

// --- lay: dharma-teacher ---
  "annabelle-zinser": {
    name: "Annabelle Zinser",
    role: {
      de: "Yoga- und Meditationslehrerin, Dharmacharya seit 2004",
      en: "Yoga and meditation teacher, Dharmacharya since 2004",
      vi: "Giáo viên yoga và thiền, Dharmacharya từ năm 2004"
    },
    category: "lay",
    subgroup: "dharma-teacher",
    tags: [
      {de: "Vipassana", en: "Vipassana", vi: "Vipassana"},
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"}, {
        de: "Dharmalehrerin",
        en: "Dharma Teacher",
        vi: "Giáo thọ"
      }
    ],
    intro: {
      de: ["Annabelle Zinser, Staatsexamen in Geschichte und Politik. Arbeit als Yoga-und Meditationslehrerin. Viele Jahre Vipas­a­na­meditation bei Ruth Denison, von der sie die Lehrerlaubnis erhielt. 2003 wurde sie Mitglied des Intersein-Ordens. Seit 2004 ist sie Dharmacharya von Thich Nhat Hanh. Heute leitet sie das Übungszentrum „Quelle des Mitgefühls“ in Berlin und ist Mitglied der Buddhistischen Akademie in Berlin (<a href=\"https://www.quelle-des-mitgefuehls.de\" target=\"_blank\" rel=\"noopener\">Quelle des Mitgefühls</a>)."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Dharmalehrerin", "en": "Dharma Teacher", "vi": "Giáo thọ"}
      },
      {
        label: {de: "Dharmacharya seit", en: "Dharmacharya since", vi: "Dharmacharya từ"},
        value: {de: "2004", en: "2004", vi: "2004"}
      },
      {
        label: {
          de: "Orden des Interseins seit",
          en: "Order of Interbeing member since",
          vi: "Thành viên Dòng tu Tiếp Hiện từ"
        }, value: {de: "2003", en: "2003", vi: "2003"}
      },
      {
        label: {de: "Ausbildung", en: "Education", vi: "Học vấn"},
        value: {
          de: "Staatsexamen Geschichte und Politik",
          en: "State examination in History and Politics",
          vi: "Bằng cấp Nhà nước ngành Lịch sử và Chính trị"
        }
      },
      {
        label: {de: "Website", en: "Website", vi: "Trang web"},
        value: {
          de: "www.quelle-des-mitgefuehls.de",
          en: "www.quelle-des-mitgefuehls.de",
          vi: "www.quelle-des-mitgefuehls.de"
        }
      }
    ]
  },

  "annette-saager": {
    name: "Annette Saager",
    category: "lay",
    subgroup: "dharma-teacher",
    role: {de: "Dharmalehrerin", en: "Dharma Teacher", vi: "Giáo thọ"}, // TODO translate
    tags: [
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
      {de: "Dharmalehrerin", en: "Dharma Teacher", vi: "Giáo thọ"}
    ], // TODO translate en/vi
    intro: {
      de: ["Dr. Annette Saager fühlt sich seit 1994 von Thich Nhat Hanh begleitet. Sie ist seit 2000 Mitglied des Intersein Ordens u. begleitet die Sangha „Achtsamkeit praktizieren im Markgräflerland“ südlich von Freiburg .", "2011 wurde sie zur Dharmalehrerin ernannt. Sie ist seit 2007 Schülerin von Meister Wei Ling Yi, der das akademische Fach der Qigong Medizin in China einführte und gründete .", "Beruflich tätig als Zahnärztin u.Craniosakral Therapeutin mit Lehrtätigkeit.", "Sie ist alleinerziehende Mutter u.lebt in Mullheim."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Dharmalehrerin", "en": "Dharma Teacher", "vi": "Giáo thọ"}
      },
      {
        label: {
          de: "Orden des Interseins seit",
          en: "Order of Interbeing member since",
          vi: "Thành viên Dòng tu Tiếp Hiện từ"
        }, value: {de: "2000", en: "2000", vi: "2000"}
      }
    ] // TODO translate en/vi
  },

  "bettina-romhardt": {
    name: "Bettina Romhardt",
    role: {
      de: "Dharmalehrerin, Dharmacharya seit 2004",
      en: "Dharma Teacher, Dharmacharya since 2004",
      vi: "Giáo thọ, Dharmacharya từ năm 2004"
    }, // TODO translate
    category: "lay", // double-check
    subgroup: "dharma-teacher", // guessed from the role text ("Dharmalehrer") — double-check
    tags: [
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
      {de: "Dharmalehrerin", en: "Dharma Teacher", vi: "Giáo thọ"}
    ], // TODO translate en/vi
    intro: {
      de: ["Bettina Romhardt, Heil­ praktikerin, lebte 5 Jahre als Resident in der Plum-Village-Sangha. 1995 wurde sie Mitglied des Intersein-Ordens, 2004 wurde sie von Thay zur Dharmacharya ernannt. Heute lebt sie in Berlin. Sie bietet Achtsamkeitstage, Retreats und Kurse zur Achtsamkeitspraxis an und begleitet in Berlin die Sangha Zehlendorf."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Dharmalehrerin", "en": "Dharma Teacher", "vi": "Giáo thọ"}
      },
      {
        label: {de: "Dharmacharya seit", en: "Dharmacharya since", vi: "Dharmacharya từ"},
        value: {de: "2004", en: "2004", vi: "2004"}
      },
      {
        label: {
          de: "Orden des Interseins seit",
          en: "Order of Interbeing member since",
          vi: "Thành viên Dòng tu Tiếp Hiện từ"
        }, value: {de: "1995", en: "1995", vi: "1995"}
      }
    ] // TODO translate en/vi
  },

  "do-trong-le": {
    name: "Dr. Do Trong Le",
    role: {de: "Dharmalehrer", en: "Dharma Teacher", vi: "Giáo thọ"}, // TODO translate
    category: "lay", // double-check
    subgroup: "dharma-teacher", // guessed from the role text ("Dharmalehrer") — double-check
    tags: [
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
      {de: "Dharmalehrer seit 2001", en: "Dharma Teacher since 2001", vi: "Giáo thọ từ năm 2001"},
      {
        de: "Akupunktur und traditionelle Medizin",
        en: "Acupuncture and traditional medicine",
        vi: "Châm cứu và Y học cổ truyền"
      }
    ],
    intro: {
      de: ["Do Trong Le wurde 1942 in Süd-Vietnam geboren. 1962 bis 1968 Ausbildung in traditioneller östlicher Medizin. Ab 1969 Arztpraxis in Saigon, Vietnam (östliche Medizin). 1979 zog er nach Frankreich. 1980 bis 2012 Akupunktur-Praxis in Rhone-Alpes (Lyon, Frankreich). 2001 Dharma-Lehrer in der Tradition von Thich Nhat Hanh. Seit 2013 im Ruhestand. Im Akkupunktur- und Kräuterheilkunde-Kurs ist er zuständig für die Ausbildung."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        label: {de: "Rolle", en: "Role", vi: "Vai trò"},
        value: {de: "Dharmalehrer", en: "Dharma Teacher", vi: "Giáo thọ"}
      },
      {
        label: {de: "Geboren", en: "Born", vi: "Sinh năm"},
        value: {de: "1942, Süd-Vietnam", en: "1942, South Vietnam", vi: "1942, Nam Việt Nam"}
      },
      {
        label: {de: "Dharmalehrer seit", en: "Dharma Teacher since", vi: "Giáo thọ từ"},
        value: {de: "2001", en: "2001", vi: "2001"}
      },
      {
        label: {de: "Ausbildung", en: "Training", vi: "Đào tạo"},
        value: {
          de: "Traditionelle östliche Medizin, 1962–1968",
          en: "Traditional Eastern medicine, 1962–1968",
          vi: "Y học cổ truyền phương Đông, 1962–1968"
        }
      },
      {
        label: {de: "Akupunkturpraxis", en: "Acupuncture practice", vi: "Phòng khám châm cứu"},
        value: {
          de: "1980–2012, Rhône-Alpes (Lyon)",
          en: "1980–2012, Rhône-Alpes (Lyon)",
          vi: "1980–2012, Rhône-Alpes (Lyon)"
        }
      }
    ]
  },

  "hilly-bol": {
    name: "Dr. Hilly Bol",
    role: {de: "Dharmalehrerin", en: "Dharma Teacher", vi: "Giáo thọ"}, // TODO translate
    category: "lay", // double-check
    subgroup: "dharma-teacher", // guessed from the role text ("Dharmalehrer") — double-check
    tags: [{de: "Dharmalehrerin seit 2016", en: "Dharma Teacher since 2016", vi: "Giáo thọ từ năm 2016"},
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
      {"de": "Dharmalehrerin", "en": "Dharma Teacher", "vi": "Giáo thọ"}
    ], // TODO translate en/vi
    intro: {
      de: ["Dr. Hilly Bol praktiziert seit 1996 und wurde 2011 Mitglied des Intersein-Ordens. Sie wurde im Jahr 2016 zur Dharmalehrerin ernannt. Hilly lebt in den Niederlanden und widmet sich intensiv der Sangha. Viele Jahre hat sie als Radiologin in Krankenhäusern gearbeitet. Eine nebenberufliche Ausbildung in Transpersonaler Psychotherapie im Centrum Boswijk und eine Vollzeitausbildung in Thanatologie in den USA wurden zu lebensverändernden Erfahrungen und seitdem arbeitet sie mit ihrer Harfe in Hospizen. In ihrer zweiten Ehe wurde sie Stiefmutter von drei und Großmutter von vier Kindern."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Dharmalehrerin", "en": "Dharma Teacher", "vi": "Giáo thọ"}
      },
      {
        label: {
          de: "Orden des Interseins seit",
          en: "Order of Interbeing member since",
          vi: "Thành viên Dòng tu Tiếp Hiện từ"
        }, value: {de: "2011", en: "2011", vi: "2011"}
      },
      {
        label: {de: "Dharmalehrerin seit", en: "Dharma Teacher since", vi: "Giáo thọ từ"},
        value: {de: "2016", en: "2016", vi: "2016"}
      }
    ] // TODO translate en/vi
  },

  "kai-romhardt": {
    name: "Dr. Kai Romhardt",
    role: {
      de: "Dharmalehrer, Autor und Achtsamkeitstrainer für Wirtschaft und Beruf",
      en: "Dharma teacher, author and mindfulness trainer for business and working life",
      vi: "Giảng viên Phật pháp, tác giả và huấn luyện viên chánh niệm cho giới kinh doanh và công việc"
    },
    category: "lay",
    subgroup: "dharma-teacher",
    tags: [
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
      {de: "Dharma-Lehrer", en: "Dharma teacher", vi: "Giảng viên Phật pháp"},
      {de: "Autor", en: "Author", vi: "Tác giả"},
      {de: "Achtsamkeit im Berufsleben", en: "Mindfulness in working life", vi: "Chánh niệm trong công việc"}
    ],
    intro: {
      de: ["Dr. Kai Romhardt verbindet die Praxis der Achtsamkeit mit Fragen der modernen Arbeitswelt. Als Dharmalehrer der Plum-Village-Tradition begleitet er Menschen dabei, im beruflichen Alltag präsent und mitfühlend zu bleiben, statt sich von Termindruck und Zielvorgaben auffressen zu lassen."],
      en: ["Dr. Kai Romhardt connects the practice of mindfulness with the questions of modern working life. As a Dharma teacher in the Plum Village tradition, he accompanies people in staying present and compassionate in their everyday work, instead of being consumed by deadlines and targets."],
      vi: ["Tiến sĩ Kai Romhardt kết nối thực tập chánh niệm với những câu hỏi của đời sống công việc hiện đại. Là một giảng viên Phật pháp trong truyền thống Làng Mai, ông đồng hành cùng mọi người để luôn có mặt và từ bi trong công việc hằng ngày, thay vì bị cuốn theo áp lực thời hạn và chỉ tiêu."]
    },
    sections: [
      {
        heading: {de: "Werdegang", en: "Path", vi: "Con đường"},
        paragraphs: {
          de: ["Nach Jahren in Beratung und Wissensmanagement wandte sich Kai Romhardt zunehmend der Frage zu, wie sich Organisationen von innen heraus verändern lassen — nicht allein durch neue Strukturen, sondern durch die Haltung der Menschen, die in ihnen arbeiten. Diese Fragen führten ihn zur Praxis der Achtsamkeit und schließlich zur Ausbildung als Dharmalehrer in der Tradition von Zen-Meister Thích Nhất Hạnh."],
          en: ["After years in consulting and knowledge management, Kai Romhardt turned increasingly to the question of how organisations can change from within — not only through new structures, but through the posture of the people working in them. These questions led him to the practice of mindfulness and eventually to training as a Dharma teacher in the tradition of Zen Master Thích Nhất Hạnh."],
          vi: ["Sau nhiều năm làm việc trong lĩnh vực tư vấn và quản lý tri thức, Kai Romhardt ngày càng quan tâm đến câu hỏi làm thế nào các tổ chức có thể thay đổi từ bên trong — không chỉ qua cấu trúc mới, mà qua thái độ của những người làm việc trong đó. Những câu hỏi này đã đưa ông đến với thực tập chánh niệm và sau đó trở thành giảng viên Phật pháp trong truyền thống của Thiền Sư Thích Nhất Hạnh."]
        }
      },
      {
        heading: {de: "Am EIAB", en: "At EIAB", vi: "Tại EIAB"},
        paragraphs: {
          de: ["Am EIAB leitet er Wochenenden und Kurse, die sich an Menschen aus Wirtschaft, Verwaltung und Bildung richten. Im Zentrum steht die Frage, wie sich Achtsamkeit nicht nur im Retreat, sondern mitten im Arbeitsalltag üben lässt — beim Schreiben einer E-Mail, in einer schwierigen Besprechung oder in der Pause zwischen zwei Terminen."],
          en: ["At EIAB he leads weekends and courses aimed at people from business, administration and education. At the centre is the question of how mindfulness can be practised not only on retreat, but in the middle of everyday working life — while writing an email, in a difficult meeting, or in the pause between two appointments."],
          vi: ["Tại EIAB, ông hướng dẫn các khóa cuối tuần và khóa học dành cho những người làm việc trong lĩnh vực kinh doanh, hành chính và giáo dục. Trọng tâm là câu hỏi làm thế nào để thực tập chánh niệm không chỉ trong khóa tu, mà ngay giữa đời sống công việc hằng ngày — khi viết một email, trong một cuộc họp khó khăn, hay trong khoảng nghỉ giữa hai cuộc hẹn."]
        }
      }
    ],
    facts: [
      {
        label: {de: "Rolle", en: "Role", vi: "Vai trò"},
        value: {de: "Dharmalehrer, Autor", en: "Dharma teacher, author", vi: "Giảng viên Phật pháp, tác giả"}
      },
      {
        label: {de: "Dharmalehrer seit", en: "Dharma teacher since", vi: "Giảng viên Phật pháp từ"},
        value: {de: "2010", en: "2010", vi: "2010"}
      },
      {
        label: {de: "Schwerpunkt", en: "Focus", vi: "Trọng tâm"},
        value: {
          de: "Achtsamkeit im Berufsleben",
          en: "Mindfulness in working life",
          vi: "Chánh niệm trong đời sống công việc"
        }
      },
      {
        label: {de: "Sprachen im Unterricht", en: "Languages taught in", vi: "Ngôn ngữ giảng dạy"},
        value: {de: "Deutsch, Englisch", en: "German, English", vi: "Tiếng Đức, Tiếng Anh"}
      }
    ]
  },

  "thomas-barth": {
    name: "Dr. Thomas Barth",
    role: {de: "Dharmalehrer", en: "Dharma Teacher", vi: "Giáo thọ"}, // TODO translate
    category: "lay", // double-check
    subgroup: "dharma-teacher", // guessed from the role text ("Dharmalehrer") — double-check
    tags: [
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
      {"de": "Dharmalehrer", "en": "Dharma Teacher", "vi": "Giáo thọ"}
    ], // TODO translate en/vi
    intro: {
      de: ["Dr. Thomas Barth ist seit mehr als 20 Jahren auf dem Zen-Weg, zunächst mit japanischen Zen-Meistern und seit 2003 mit der Münchner Sangha. Er ist Vorsitzender der Gemeinschaft für achtsames Leben Bayern, Mitglied des Intersein-Ordens und Dharmacharya. Ein besonderes Anliegen ist ihm die Achtsamkeitspraxis in der freien Natur. Von Beruf ist Thomas Informatiker. Er ist verheiratet und Vater von drei erwachsenen Kindern."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Dharmalehrer", "en": "Dharma Teacher", "vi": "Giáo thọ"}
      }
    ] // TODO translate en/vi
  },

  "uli-pfeifer-schaupp": {
    name: "Dr. Uli Pfeifer-Schaupp",
    role: {de: "Dharmalehrer", en: "Dharma Teacher", vi: "Giáo thọ"}, // TODO translate
    category: "lay", // double-check
    subgroup: "dharma-teacher", // guessed from the role text ("Dharmalehrer") — double-check
    tags: [
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
      {"de": "Dharmalehrer", "en": "Dharma Teacher", "vi": "Giáo thọ"}
    ], // TODO translate en/vi
    intro: {
      de: ["Prof. Dr. Uli Pfeifer-Schaupp, True Deep Meaning, geht seit mehr als 30 Jahren mit Freude den Zen-Weg, seit 2011 als Mitglied des Intersein-Ordens. Er ist glücklich verheiratet und Vater von zwei erwachsenen Kindern. An der Evang. Hochschule in Freiburg unterrichtet er u.a. Achtsamkeit und Buddhistische Psychologie. Er ist Familientherapeut, Heilpraktiker für Psychotherapie, systemischer Supervisor und leitet das Freiburger Institut für Systemische Therapie und Beratung."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Dharmalehrer", "en": "Dharma Teacher", "vi": "Giáo thọ"}
      },
      {
        label: {
          de: "Orden des Interseins seit",
          en: "Order of Interbeing member since",
          vi: "Thành viên Dòng tu Tiếp Hiện từ"
        }, value: {de: "2011", en: "2011", vi: "2011"}
      }
    ] // TODO translate en/vi
  },

  "jan-michael-ehrhardt": {
    name: "Jan-Michael Ehrhardt",
    role: {de: "Dharmalehrer", en: "Dharma Teacher", vi: "Giáo thọ"}, // TODO translate
    category: "lay", // double-check
    subgroup: "dharma-teacher", // guessed from the role text ("Dharmalehrer") — double-check
    tags: [
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
      {"de": "Dharmalehrer", "en": "Dharma Teacher", "vi": "Giáo thọ"}
    ], // TODO translate en/vi
    intro: {
      de: ["(Wahre Praxis der Harmonie) hat von 1998 bis 2005 im Intersein-Zentrum in Hohenau praktiziert. Er wurde 2001 in den Intersein-Orden aufgenommen. Seit 2005 lebt er in einer interreligiösen Gemeinschaft, dem Friedenshof, in der Nähe von Hannover und arbeitet dort u. a. in seinem gelernten Beruf als Kunsttherapeut. 2012 hat wurde er von Thay zum Dharmalehrer ernannt."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Dharmalehrer", "en": "Dharma Teacher", "vi": "Giáo thọ"}
      },
      {
        label: {
          de: "Orden des Interseins seit",
          en: "Order of Interbeing member since",
          vi: "Thành viên Dòng tu Tiếp Hiện từ"
        }, value: {de: "2001", en: "2001", vi: "2001"}
      },
      {
        label: {de: "Dharmalehrer seit", en: "Dharma teacher since", vi: "Giảng viên Phật pháp từ"},
        value: {de: "2012", en: "2012", vi: "2012"}
      }
    ] // TODO translate en/vi
  },

  "margret-de-backere": {
    name: "Margret de Backere",
    role: {de: "Dharmalehrerin", en: "Dharma Teacher", vi: "Giáo thọ"}, // TODO translate
    category: "lay", // double-check
    subgroup: "dharma-teacher", // guessed from the role text ("Dharmalehrer") — double-check
    tags: [
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
      {"de": "Dharmalehrerin", "en": "Dharma Teacher", "vi": "Giáo thọ"}
    ], // TODO translate en/vi
    intro: {
      de: ["Margret de Backere, Dipl.-Pädagogin mit therapeutischer Zusatzausbildung und vielfältiger beruflicher Erfahrung in sozialen Arbeitsfeldern. Seit 1988 auf dem buddhistischen Übungsweg.", "Steffi und Margret", "Wir gehen unseren Weg bereits seit über 30 Jahren gemeinsam.", "1993 begegneten wir in Thich Nhat Hanh unserem Herzenslehrer und lebten zwei Jahre in seiner Gemeinschaft Plum Village in Südfrankreich.", "Wir sind beide Mitglieder des internationalen Intersein-Ordens und wurden von Thich Nhat Hanh zu Dharmalehrerinnen ernannt.", "Seit 2003 teilen wir unsere Erfahrungen in Retreats und Seminaren und unterstützen Einzelne, Paare und Organisationen in Konfliktsituationen und Wandlungsprozessen auf der Grundlage von Achtsamkeit und Gewaltfreier Kommunikation."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Dharmalehrerin", "en": "Dharma Teacher", "vi": "Giáo thọ"}
      }
    ] // TODO translate en/vi
  },

  "marleen-van-den-bosch": {
    name: "Marleen van den Bosch",
    role: {de: "Dharmalehrerin", en: "Dharma Teacher", vi: "Giáo thọ"}, // TODO translate
    category: "lay", // double-check
    subgroup: "dharma-teacher", // guessed from the role text ("Dharmalehrer") — double-check
    tags: [
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
      {"de": "Dharmalehrerin", "en": "Dharma Teacher", "vi": "Giáo thọ"}
    ], // TODO translate en/vi
    intro: {
      de: [
        "Marleen Van den Bosch beoefent sinds 2006 en werd in 2013 lid van de Orde van Interzijn. In 2022 mocht ze de lamp ontvangen en werd ze dharmalerares. Ze woont in Leuven ( Belgie), is gehuwd en mama van 3 volwassen kinderen. Ze heeft een eigen praktijk als psychotherapeute, stress en burn- out coach en mindfulnesstrainer. Ze organiseert dagen in aandacht, meditatieweekenden en stilteretraites. Haar grootste aspiratie is dat wat ze heeft mogen leren en ontvangen van Thay, te delen met anderen.",
        "Marleen Van den Bosch praktiziert seit 2006 und wurde 2013 Mitglied des Ordens des Interseins. 2022 durfte sie die Lampe empfangen und wurde Dharmalehrerin. Sie lebt in Leuven (Belgien), ist verheiratet und Mutter von drei erwachsenen Kindern. Sie hat eine eigene Praxis als Psychotherapeutin, Stress- und Burnout-Coach sowie Achtsamkeitstrainerin. Sie organisiert Achtsamkeitstage, Meditationswochenenden und Stille-Retreats. Ihr größter Wunsch ist es, das, was sie von Thay lernen und empfangen durfte, mit anderen zu teilen."
      ],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Dharmalehrer", "en": "Dharma Teacher", "vi": "Giáo thọ"}
      },
      {
        label: {
          de: "Orden des Interseins seit",
          en: "Order of Interbeing member since",
          vi: "Thành viên Dòng tu Tiếp Hiện từ"
        }, value: {de: "2001", en: "2001", vi: "2001"}
      },
      {
        label: {de: "Dharmalehrerin seit", en: "Dharma teacher since", vi: "Giảng viên Phật pháp từ"},
        value: {de: "2012", en: "2012", vi: "2012"}
      }
    ] // TODO translate en/vi
  },

  "maya-brandl": {
    name: "Maya Brandl",
    role: {de: "Dharmalehrerin", en: "Dharma Teacher", vi: "Giáo thọ"}, // TODO translate
    category: "lay", // double-check
    subgroup: "dharma-teacher", // guessed from the role text ("Dharmalehrer") — double-check
    tags: [
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
      {"de": "Dharmalehrerin", "en": "Dharma Teacher", "vi": "Giáo thọ"}
    ], // TODO translate en/vi
    intro: {
      de: ["Maya ist seit 2009 Mitglied des Intersein-Ordens und seit 2022 Dharmalehrerin.", "Sie ist dem Buddhismus durch ihren Vater seit der Kindheit verbunden und Thay und Annabelle Zinser seit 1995.", "Sie lebt mit ihrer Familie in Berlin und praktiziert dort mit der Sangha der Quelle des Mitgefühls.", "Manche kennen sie durch Übersetzungen im EIAB."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Dharmalehrerin", "en": "Dharma Teacher", "vi": "Giáo thọ"}
      },
      {
        label: {
          de: "Orden des Interseins seit",
          en: "Order of Interbeing member since",
          vi: "Thành viên Dòng tu Tiếp Hiện từ"
        }, value: {de: "2009", en: "2009", vi: "2009"}
      },
      {
        label: {de: "Dharmalehrerin seit", en: "Dharma teacher since", vi: "Giảng viên Phật pháp từ"},
        value: {de: "2022", en: "2022", vi: "2022"}
      }
    ] // TODO translate en/vi
  },

  "steffi-holtje": {
    name: "Steffi Höltje",
    role: {de: "Dharmalehrerin", en: "Dharma Teacher", vi: "Giáo thọ"}, // TODO translate
    category: "lay", // double-check
    subgroup: "dharma-teacher", // guessed from the role text ("Dharmalehrer") — double-check
    tags: [
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
      {"de": "Dharmalehrerin", "en": "Dharma Teacher", "vi": "Giáo thọ"}
    ], // TODO translate en/vi
    intro: {
      de: ["Steffi Höltje, Dipl.-Ing.agr. mit beruflichen Erfahrungen in Entwicklungshilfe, Schule und sozialer Arbeit. Trainerin für Gewaltfreie Kommunikation nach Marshall Rosenberg.", "Steffi und Margret", "Wir gehen unseren Weg bereits seit über 30 Jahren gemeinsam.", "1993 begegneten wir in Thich Nhat Hanh unserem Herzenslehrer und lebten zwei Jahre in seiner Gemeinschaft Plum Village in Südfrankreich.", "Wir sind beide Mitglieder des internationalen Intersein-Ordens und wurden von Thich Nhat Hanh zu Dharmalehrerinnen ernannt.", "Seit 2003 teilen wir unsere Erfahrungen in Retreats und Seminaren und unterstützen Einzelne, Paare und Organisationen in Konfliktsituationen und Wandlungsprozessen auf der Grundlage von Achtsamkeit und Gewaltfreier Kommunikation."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Dharmalehrerin", "en": "Dharma Teacher", "vi": "Giáo thọ"}
      }
    ] // TODO translate en/vi
  },

  "teri-west": {
    name: "Teri West",
    role: {de: "Dharmalehrerin", en: "Dharma Teacher", vi: "Giáo thọ"}, // TODO translate
    category: "lay", // double-check
    subgroup: "dharma-teacher", // guessed from the role text ("Dharmalehrer") — double-check
    tags: [
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
      {"de": "Dharmalehrerin", "en": "Dharma Teacher", "vi": "Giáo thọ"}
    ], // TODO translate en/vi
    intro: {
      de: ["Teri West ist eine Erzählerin und Sängerin und hat seit mehr als 20 Jahren mit „Nose to Nose“ trainiert. 1988 wurde sie Schülerin von Thich Nhat Hanh und wurde im Jahr 2016 in Plum Village zur Dharmalehrerin ernannt.", "Während des Übens im Improvisationsstil von „Nose to Nose“ wurden für Teri Parallelen zwischen Achtsamkeitspraxis und der Clownskunst offensichtlich: Das Gewahrsein von Gefühlen und Emotionen, wirklich gegenwärtig Sein für das, was sich im gegenwärtigen Augenblick ereignet, sowie die Achtsamkeit auf den Atem, sind nur einige wenige der gemeinsamen Aspekte der beiden Praxisformen.", "Tery hat in Großbritannien erfolgreich Kurse gemeinsam mit anderen „Nose to Nose“-TrainerInnen angeboten und freut sich darauf, das EIAB wieder zu besuchen."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Dharmalehrerin", "en": "Dharma Teacher", "vi": "Giáo thọ"}
      },
      {
        label: {de: "Dharmalehrerin seit", en: "Dharma teacher since", vi: "Giảng viên Phật pháp từ"},
        value: {de: "2016", en: "2016", vi: "2016"}
      }
    ] // TODO translate en/vi
  },

  "viet-nguyen": {
    name: "Viet Nguyen",
    role: {de: "Dharmalehrer", en: "Dharma Teacher", vi: "Giáo thọ"}, // TODO translate
    category: "lay", // double-check
    subgroup: "dharma-teacher", // guessed from the role text ("Dharmalehrer") — double-check
    tags: [
      {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
      {"de": "Dharmalehrer", "en": "Dharma Teacher", "vi": "Giáo thọ"}
    ], // TODO translate en/vi
    intro: {
      de: ["Viet Nguyen ist seit 1990 Mitglied des Intersein-Ordens und wurde im Jahr 2014 von Thầy zum Dharmalehrer ernannt. Seine leidenschaftliche Hingabe zur Praxis der Ten Mindful Movements sowie seine tiefgreifende Faszination für die buddhistische Psychologie, wie sie von Thay gelehrt wird, prägen seine freudvolle Herangehensweise, Achtsamkeit in die Arbeitswelt zu integrieren.", "In seinem beruflichen Leben agiert Viet als Business Analyst mit Schwerpunkt auf Bankprozessen und agilem Projektmanagement in der Finanzindustrie."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Dharmalehrer", "en": "Dharma Teacher", "vi": "Giáo thọ"}
      },
      {
        label: {
          de: "Orden des Interseins seit",
          en: "Order of Interbeing member since",
          vi: "Thành viên Dòng tu Tiếp Hiện từ"
        }, value: {de: "1990", en: "1990", vi: "1990"}
      },
      {
        label: {de: "Dharmalehrer seit", en: "Dharma teacher since", vi: "Giảng viên Phật pháp từ"},
        value: {de: "2014", en: "2014", vi: "2014"}
      }
    ] // TODO translate en/vi
  },
// --- lay: order-member ---,

  /*
  {
      label: {
          de: "Orden des Interseins seit",
              en: "Order of Interbeing member since",
              vi: "Thành viên Dòng tu Tiếp Hiện từ"
      }, value: {de: "2016", en: "2016", vi: "2016"}
  },
  */

  "andrea-gerhardt": {
    name: "Andrea Gerhardt",
    role: {de: "Orden des Interseins", en: "", vi: ""}, // TODO translate
    category: "lay", // double-check
    subgroup: "order-member", // guessed from the role text ("Orden des Interseins") — double-check
    tags: [
      {"de": "Orden des Interseins", "en": "", "vi": ""}
    ], // TODO translate en/vi
    intro: {
      de: ["Andrea Gerhardt (geb. 1965, Sozialpädagogin und Psychotherapeutin) lebt in Hannover und praktiziert seit 2012 in der Tradition des vietnamesischen Zen-Lehrers Thich Nhat Hanh.", "Seit 2016 ist sie Mitglied des Intersein-Ordens und praktiziert in Hannover mit einer Sangha und einer Klima-Sangha.", "Seit 2019 ist sie aktiv in der Klimabewegung und praktiziert mit der Earthholder Sangha Berlin.", "Sie bietet Achtsamkeitsseminare für Klimaaktivist*innen an, war in Lützerath (Braunkohleabbaugebiet in NRW) aktiv dabei mit Geh- und Sitzmediationen und achtsamen Austausch.", "Um nicht an der Klimakatastrophe zu verzweifeln und um im Handeln zu bleiben (engagierter Buddhismus) sind ihre Übungen inspiriert von der Tiefenökologie von Joanna Macy."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },
      {
        label: {
          de: "Orden des Interseins seit",
          en: "Order of Interbeing member since",
          vi: "Thành viên Dòng tu Tiếp Hiện từ"
        }, value: {de: "2016", en: "2016", vi: "2016"}
      }
    ] // TODO translate en/vi
  },

  "bea-und-candida": {
    name: "Bea und Candida",
    role: {de: "Orden des Interseins", en: "", vi: ""}, // TODO translate
    category: "lay", // double-check
    subgroup: "order-member", // guessed from the role text ("Orden des Interseins") — double-check
    tags: [
      {"de": "Orden des Interseins", "en": "", "vi": ""}
    ], // TODO translate en/vi
    intro: {
      de: ["Candida (geb. 1955) und Bea (geb. 1959) - beide Heilpraktiker-Homöopathinnen - praktizieren seit 2016 und sind Mitglieder des Intersein-ordens. Sie sind seit vielen Jahren in ihrer lokalen Sangha aktiv, bieten Online-Achtsamkeitstage über das EIAB an und sind im Moderatorinnen-Team der Online-Morgenmeditations-Sangha des EIAB. Es ist ihr Wunsch, die Praxis - die ihr Leben ist - mit anderen zu teilen."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },
      {
        label: {
          de: "Orden des Interseins seit",
          en: "Order of Interbeing member since",
          vi: "Thành viên Dòng tu Tiếp Hiện từ"
        }, value: {de: "2016", en: "2016", vi: "2016"}
      }
    ] // TODO translate en/vi
  },

  "christian-trauthig": {
    name: "Christian Trauthig",
    role: {de: "Orden des Interseins", en: "", vi: ""}, // TODO translate
    category: "lay", // double-check
    subgroup: "order-member", // guessed from the role text ("Orden des Interseins") — double-check
    tags: [
      {"de": "Orden des Interseins", "en": "", "vi": ""}
    ], // TODO translate en/vi
    intro: {
      de: ["Christian Trauthig ist Mitglied im Intersein-Orden und seit 2009 in der Stuttgarter Sangha aktiv. Er ist Vater eines jungen Sohnes. Insbesondere seit seiner Ausbildung zum Achtsamkeitslehrer für Kinder und Jugendliche (u.a. bei Chris Willard) ist er in seiner Freizeit als Achtsamkeitslehrer für Kinder und Jugendliche, Eltern, Lehrer, in Schulen, bei (religiösen) Jugendgruppe oder zuletzt bei jungen Schauspielern tätig. Neben seiner Achtsamkeits- und (Selbst-)Mitgefühlspraxis beschäftigt er sich schon langjährig mit Gewaltfreier Kommunikation. Er ist Mitglied im Stuttgarter Rat der Religionen."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },
      {
        "label": {
          "de": "Orden des Interseins seit",
          "en": "Order of Interbeing member since",
          "vi": "Thành viên Dòng tu Tiếp Hiện từ"
        }, "value": {"de": "2009", "en": "2009", "vi": "2009"}
      }
    ] // TODO translate en/vi
  },

  "dat-phan": {
    name: "Dat Phan",
    role: {de: "Orden des Interseins", en: "", vi: ""}, // TODO translate
    category: "lay", // double-check
    subgroup: "order-member", // guessed from the role text ("Orden des Interseins") — double-check
    tags: [
      {"de": "Orden des Interseins", "en": "", "vi": ""}
    ], // TODO translate en/vi
    intro: {
      de: ["Dat is the co-founder of Les Cèdres Bleus, mindful living and practice center in France. He was ordained by Zen Master, Thich Nhat Hanh in 1998. He also studied and was a personal attendant of Zen Master, Giac Thanh. He left the monastic robe after his full ordination. Since 2008, his work has brought mindfulness into different areas of society: education, business and health.", "Dat has taught at several universities such as Barcelona, Zaragoza, Madrid and Ramon Llull. He studies at Hai Thuong School of Oriental Medicine and teaches meditation and qi gong in the program led by Dr. Lê Trong Do. He is also the author of several books and editor of Linh Son Literature."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },
      {label: {de: "Ordiniert", en: "Ordained", vi: "Thọ giới"}, value: {de: "1998", en: "1998", vi: "1998"}},

    ] // TODO translate en/vi
  },

  "helmut-hallier": {
    name: "Dr. Helmut Hallier",
    role: {de: "Orden des Interseins", en: "", vi: ""}, // TODO translate
    category: "lay", // double-check
    subgroup: "order-member", // guessed from the role text ("Orden des Interseins") — double-check
    tags: [
      {"de": "Orden des Interseins", "en": "", "vi": ""}
    ], // TODO translate en/vi
    intro: {
      de: ["Dr. Helmut Hallier, True Companion of Great Compassion, ist seit 2014 Mitglied des Intersein-Ordens. Er praktiziert in der Kreuzberger Sangha und engagiert sich mit den Earthholdern Berlin für soziale und Klima-Gerechtigkeit. Er ist mit großer Freude Vater und Großvater und arbeitet gerne gelegentlich noch als Coach und Organisationsberater. (www.helmut.hallier@de)."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },
      {
        "label": {
          "de": "Orden des Interseins seit",
          "en": "Order of Interbeing member since",
          "vi": "Thành viên Dòng tu Tiếp Hiện từ"
        }, "value": {"de": "2014", "en": "2014", "vi": "2014"}
      }
    ] // TODO translate en/vi
  },

  "main-huong-nguyen": {
    name: "Dr. Main Hương Nguyễn",
    role: {de: "Orden des Interseins", en: "", vi: ""}, // TODO translate
    category: "lay", // double-check
    subgroup: "order-member", // guessed from the role text ("Orden des Interseins") — double-check
    tags: [
      {"de": "Orden des Interseins", "en": "", "vi": ""}
    ], // TODO translate en/vi
    intro: {
      de: ["Dr. Main Hương Nguyễn, Chân Hướng Pháp (True Direction of Dharma) trat 2022 dem Intersein-Orden bei.", "Sie ist Psychologische Psychotherapeutin (Verhaltenstherapie) und integriert mit großer Freude die Achtsamkeitspraxis in ihre therapeutische Arbeit mit Patient*innen. Sie ist mit einer eigenen Privatpraxis in Frankfurt am Main niedergelassen. (→ nguyen-praxis.de)", "Seit 2020 ist sie Co-Moderatorin des Podcasts »Achtsam« bei Deutschlandfunk Nova.", "2023 veröffentlichte sie ihr Buch »Eins mit allem« im Herder Verlag.", "Main Hương ist aktives Mitglied der Wake Up Frankfurt Sangha.", "Ihr Herzenswunsch ist es, die Praxis mit der (jungen) vietnamesischen Diaspora zu teilen, um so die Verbundenheit zwischen Kulturen und Generationen zu nähren. Daneben bewegt sie der Dialog zwischen buddhistischer und westlicher Psychologie und die Frage, wie sich Wissenschaft und Praxis fruchtbar verbinden lassen."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },
      {
        "label": {
          "de": "Orden des Interseins seit",
          "en": "Order of Interbeing member since",
          "vi": "Thành viên Dòng tu Tiếp Hiện từ"
        }, "value": {"de": "2022", "en": "2022", "vi": "2022"}
      }
    ] // TODO translate en/vi
  },

  "elmar-vogt": {
    name: "Elmar Vogt",
    role: {de: "Orden des Interseins", en: "", vi: ""}, // TODO translate
    category: "lay", // double-check
    subgroup: "order-member", // guessed from the role text ("Orden des Interseins") — double-check
    tags: [
      {"de": "Orden des Interseins", "en": "", "vi": ""}
    ], // TODO translate en/vi
    intro: {
      de: ["Elmar Vogt entwickelt und baut elementare Klangkörper, liebt die Musik, vor allem das Singen und hat auf der Grundlage der Achtsamkeitspraxis verschiedene Therapieformen und Fördermöglichkeiten für die Begegnung von Menschen entwickelt. Er lebt mit seiner Frau in Much in der Nähe des EIAB. Den Schwerpunkt seiner Arbeit bildet das Klangboot, das Singen und Kurse zum Thema „Achtsamkeit und Klang“. (www.klang-bewegung.de) Er praktiziert seit 1994 in der Plum Village Tradition und ist seit 2003 Mitglied im Interseinorden."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },
      {
        "label": {
          "de": "Orden des Interseins seit",
          "en": "Order of Interbeing member since",
          "vi": "Thành viên Dòng tu Tiếp Hiện từ"
        }, "value": {"de": "2003", "en": "2003", "vi": "2003"}
      },
      {
        label: {de: "Website", en: "Website", vi: "Trang web"},
        value: {de: "www.klang-bewegung.de", en: "www.klang-bewegung.de", vi: "www.klang-bewegung.de"}
      }
    ]
  },

  "georg-lolos": {
    name: "Georg Lolos",
    role: {de: "Orden des Interseins", en: "", vi: ""}, // TODO translate
    category: "lay", // double-check
    subgroup: "order-member", // guessed from the role text ("Orden des Interseins") — double-check
    tags: [
      {"de": "Orden des Interseins", "en": "", "vi": ""}
    ], // TODO translate en/vi
    intro: {
      de: ["Eine Krise führte Georg vor über 20 Jahren nach Südfrankreich in das buddhistische Kloster Plum Village, das von dem Zen-Meister Thich Nhat Hanh gegründet wurde. Drei Jahre dauerte die Auszeit.", "Es folgte eine vierjährige Ausbildung als Atemtherapeut.", "Heute leitet er die School for Being und arbeitet als Achtsamkeitslehrer, Autor und Ausbilder für Bewusstseinstrainer*innen."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },
    ] // TODO translate en/vi
  },

  "ira-anderson": {
    name: "Ira Anderson",
    role: {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
    category: "lay",
    subgroup: "order-member",
    tags: [
      {
        de: "Orden des Interseins seit 2024",
        en: "Order of Interbeing member since 2024",
        vi: "Thành viên Dòng tu Tiếp Hiện từ năm 2024"
      },
      {de: "Achtsamkeit in der Bildung", en: "Mindfulness in Education", vi: "Chánh niệm trong giáo dục"},
      {
        de: "Plum Village Wake Up Schools, Level II",
        en: "Plum Village Wake Up Schools, Level II",
        vi: "Plum Village Wake Up Schools, cấp độ II"
      },
      {
        de: "Mitorganisatorin, Happy Teachers Sangha International",
        en: "Co-organizer, Happy Teachers Sangha International",
        vi: "Đồng tổ chức, Happy Teachers Sangha International"
      }
    ],
    intro: {
      de: ["Ira Anderson ist Lehrerin für die Fächer Englisch und Spanisch in Berlin und es ist ihr eine Herzensangelegenheit, die Achtsamkeitspraxis in das Bildungswesen zu integrieren. Deshalb hat sie an vielen Educator Retreats in der Plum Village Tradition teilgenommen und das Level II Training der Plum Village WakeUpSchools absolviert. Seit 2009 praktiziert sie mit der Sangha Berlin-Zehlendorf und leitet seit 2019 zusammen mit Susanne Krämer und Manuela Peters das Educators Retreat in der Quelle des Mitgefühls in Berlin an. Seit 2020 unterstützt sie in Organisation und Anleitung die Happy Teachers Sangha International und ist seit 2024 Mitglied im Intersein Orden."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        label: {de: "Rolle", en: "Role", vi: "Vai trò"},
        value: {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"}
      },
      {
        label: {
          de: "Orden des Interseins seit",
          en: "Order of Interbeing member since",
          vi: "Thành viên Dòng tu Tiếp Hiện từ"
        }, value: {de: "2024", en: "2024", vi: "2024"}
      },
      {
        label: {de: "Praktiziert seit", en: "Practicing since", vi: "Thực hành từ"},
        value: {
          de: "2009, Sangha Berlin-Zehlendorf",
          en: "2009, Sangha Berlin-Zehlendorf",
          vi: "2009, Sangha Berlin-Zehlendorf"
        }
      },
      {
        label: {de: "Ausbildung", en: "Training", vi: "Đào tạo"},
        value: {
          de: "Plum Village Wake Up Schools, Level II",
          en: "Plum Village Wake Up Schools, Level II",
          vi: "Plum Village Wake Up Schools, cấp độ II"
        }
      },
      {
        label: {
          de: "Leitet Educators Retreat seit",
          en: "Co-leads Educators Retreat since",
          vi: "Đồng hướng dẫn Educators Retreat từ"
        }, value: {de: "2019, Berlin", en: "2019, Berlin", vi: "2019, Berlin"}
      }
    ]
  },

  "jorg-dierkes": {
    name: "Jörg Dierkes",
    role: {de: "Orden des Interseins", en: "", vi: ""}, // TODO translate
    category: "lay", // double-check
    subgroup: "order-member", // guessed from the role text ("Orden des Interseins") — double-check
    tags: [
      {"de": "Orden des Interseins", "en": "", "vi": ""}
    ], // TODO translate en/vi
    intro: {
      de: ["Jörg Dierkes ist Dipl.-Psycho­loge. Sein besonderes Interesse gilt der Hypnosetherapie, welche er in seiner Privatpraxis und in Seminaren anbietet. Seit über 20 Jahren praktiziert er Qi Gong und bietet Kurse dazu an. Seit seinem ersten Plum-Village-Aufenthalt 2001 lässt er die Lehre der Achtsamkeit in seine Arbeit als Psychotherapeut einfließen. Sein Ziel ist es, Achtsamkeit auf verschiedene Weise anzubieten und die Wirkungen einfach und leicht erfahrbar werden zu lassen."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },

    ] // TODO translate en/vi
  },

  "kirstin-bostelmann": {
    name: "Kirstin Bostelmann",
    role: {
      de: "Aspirantin des Ordens des Interseins",
      en: "Aspirant of the Order of Interbeing",
      vi: "Ứng viên Dòng tu Tiếp Hiện"
    },
    category: "lay",
    subgroup: "order-member",
    tags: [
      {
        de: "Aspirantin des Ordens des Interseins",
        en: "Aspirant of the Order of Interbeing",
        vi: "Ứng viên Dòng tu Tiếp Hiện"
      }
    ],
    intro: {
      de: ["Kirstin Lee Bostelmann praktiziert seit 2014 in der Plum Village Tradition und hat 2015 in Plum Village den Dharma Namen „Skillful Listener of the Heart“ erhalten.", "Sie ist Aspirantin des Intersein Ordens.", "Kirstin ist aktiv in einer kleinen BIPOC-LGBTQIA+ Sangha in Hamburg und ist Teil der LGBTQIA+ und feministischen Bewegung.", "Auch professionell setzt sie sich für Geschlechtergleichberechtigung, Inklusion und soziale Gerechtigkeit ein und arbeitet für eine Kinderrechtsorganisation in der internationalen Zusammenarbeit."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        label: {de: "Rolle", en: "Role", vi: "Vai trò"},
        value: {
          de: "Aspirantin des Ordens des Interseins",
          en: "Aspirant of the Order of Interbeing",
          vi: "Ứng viên Dòng tu Tiếp Hiện"
        }
      },
      {
        label: {de: "Praktiziert seit", en: "Practicing since", vi: "Thực hành từ"},
        value: {de: "2014", en: "2014", vi: "2014"}
      },
      {
        label: {de: "Dharma-Name", en: "Dharma Name", vi: "Pháp danh"},
        value: {
          de: "Skillful Listener of the Heart",
          en: "Skillful Listener of the Heart",
          vi: "Skillful Listener of the Heart"
        }
      }
    ]
  },

  "manuela-peters": {
    name: "Manuela Peters",
    role: {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"},
    category: "lay",
    subgroup: "order-member",
    tags: [
      {
        de: "Orden des Interseins seit 2014",
        en: "Order of Interbeing member since 2014",
        vi: "Thành viên Dòng tu Tiếp Hiện từ năm 2014"
      },
      {de: "Achtsamkeitslehrerin", en: "Mindfulness Teacher", vi: "Giáo viên chánh niệm"},
      {
        de: "Gründerin, Earth Holder Sangha",
        en: "Founder, Earth Holder Sangha",
        vi: "Người sáng lập, Earth Holder Sangha"
      },
      {
        de: "Aktiv in der Happy Teacher Sangha",
        en: "Active in the Happy Teacher Sangha",
        vi: "Tích cực trong Happy Teacher Sangha"
      }
    ],
    intro: {
      de: ["Mit dem Clowning habe ich das Spielen wieder entdeckt, es erfreut mein inneres Kind. Was für eine tiefe Befriedigung kann es sein zu scheitern! Mit meinem Catering nähre ich Körper, Geist und Seele, ich koche für Gruppen mit Herz und Leidenschaft vegan. Ich bin auch Heilpraktikerin und Achtsamkeitslehrerin. Seit 2006 praktiziere ich in der Sangha Zehlendorf, seit 2014 bin ich Mitglied im Orden Intersein, seit 2020 gründete ich die Earth Holder Sanga und bin aktiv mit der Happy Teacher Sangha."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        label: {de: "Rolle", en: "Role", vi: "Vai trò"},
        value: {de: "Orden des Interseins", en: "Order of Interbeing", vi: "Dòng tu Tiếp Hiện"}
      },
      {
        label: {
          de: "Orden des Interseins seit",
          en: "Order of Interbeing member since",
          vi: "Thành viên Dòng tu Tiếp Hiện từ"
        }, value: {de: "2014", en: "2014", vi: "2014"}
      },
      {
        label: {de: "Praktiziert seit", en: "Practicing since", vi: "Thực hành từ"},
        value: {de: "2006, Sangha Zehlendorf", en: "2006, Sangha Zehlendorf", vi: "2006, Sangha Zehlendorf"}
      },
      {
        label: {de: "Beruf", en: "Profession", vi: "Nghề nghiệp"},
        value: {
          de: "Heilpraktikerin und Achtsamkeitslehrerin",
          en: "Naturopath and Mindfulness Teacher",
          vi: "Lương y và Giáo viên chánh niệm"
        }
      },
      {
        label: {
          de: "Gründete Earth Holder Sangha",
          en: "Founded Earth Holder Sangha",
          vi: "Sáng lập Earth Holder Sangha"
        }, value: {de: "2020", en: "2020", vi: "2020"}
      }
    ]
  },

  "marco-stromberg": {
    name: "Marco Stromberg",
    role: {de: "Orden des Interseins", en: "", vi: ""}, // TODO translate
    category: "lay", // double-check
    subgroup: "order-member", // guessed from the role text ("Orden des Interseins") — double-check
    tags: [
      {"de": "Orden des Interseins", "en": "", "vi": ""}
    ], // TODO translate en/vi
    intro: {
      de: ["Marco Stromberg fühlt sich der buddhistischen Lehre seit 1993 verbunden. Als er 2012 auf Thich Nhat Hanh traf, fühlte er sich von der Lehre der Achtsamkeitspraxis und dem EIAB so angezogen, dass er beschloss, in die Nähe des EIAB zu ziehen. Im Jahr 2014 verwirklichte er gemeinsam mit seiner Partnerin diesen Herzenswunsch. Sie bewohnen und bewirtschaften einen kleinen Hof mit dem Fokus auf Nachhaltigkeit im Kontext des Interseins und leben dort im Einklang mit der Natur und Ihren Tieren. Seit Oktober 2018 ist Marco auch Mitglied im Intersein-Orden."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },
      {
        "label": {
          "de": "Orden des Interseins seit",
          "en": "Order of Interbeing member since",
          "vi": "Thành viên Dòng tu Tiếp Hiện từ"
        }, "value": {"de": "2018", "en": "2018", "vi": "2018"}
      }
    ] // TODO translate en/vi
  },

  "maru-maria-moonlion": {
    name: "Maru (Maria) Moonlion",
    role: {de: "Orden des Interseins", en: "", vi: ""}, // TODO translate
    category: "lay", // double-check
    subgroup: "order-member", // guessed from the role text ("Orden des Interseins") — double-check
    tags: [
      {"de": "Orden des Interseins", "en": "", "vi": ""}
    ], // TODO translate en/vi
    intro: {
      de: [],// TODO translate
      en: ["Maru (Maria) Moonlion, True Healing Confidence, ordained in the Order of Interbeing in 2017. Maru is a lover of the Earth and enjoys practicing together in many forms with all willing beings, to cultivate True Love - kindness, compassion, joy and inclusivity. She/they is a grateful mother of two young adults. She/they began recognizing and exploring her/their queerness at age 13. As a survivor of family trauma and an activist for Earth/Climate Justice, she/they finds healing in spiritual connection, in ceremony as an Earth Honorer and through heart-sharing in community circles. Maru is an active member of various Sanghas, including Earth Holders NL, International White Awareness Sangha, Dutch Online Parent Sangha, and Dutch Inner Child Sangha."],
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },
      {
        "label": {
          "de": "Orden des Interseins seit",
          "en": "Order of Interbeing member since",
          "vi": "Thành viên Dòng tu Tiếp Hiện từ"
        }, "value": {"de": "", "en": "", "vi": ""}
      }
    ] // TODO translate en/vi
  },

  "monika-bruhl": {
    name: "Monika Brühl",
    role: {
      de: "Hebamme, Referentin und Autorin",
      en: "Midwife, speaker and author",
      vi: "Nữ hộ sinh, diễn giả và tác giả"
    },
    category: "lay",
    subgroup: "order-member",
    tags: [
      {
        de: "Geburtsvorbereitung in Achtsamkeit",
        en: "Mindful birth preparation",
        vi: "Chuẩn bị sinh nở trong chánh niệm"
      },
      {de: "Vipassana", en: "Vipassana", vi: "Vipassana"}
    ],
    intro: {
      de: ["Monika Brühl ist Hebamme, Referentin und Autorin und begleitet seit 1989 Frauen und Familien in der außerklinischen Geburtshilfe. Seit 1994 bietet sie werdenden Müttern und ihren Kolleginnen Geburtsvorbereitung durch Meditation an und integriert Achtsamkeit in ihre Arbeit im Geburtshaus sowie in Vorträge und Fortbildungen für Hebammen."],
      en: ["Monika Brühl is a midwife, speaker and author who has accompanied women and families in out-of-hospital birth care since 1989. Since 1994 she has offered birth preparation through meditation to expectant mothers and their peers, integrating mindfulness into her work at the birthing centre as well as into lectures and continuing education for midwives."],
      vi: ["Monika Brühl là nữ hộ sinh, diễn giả và tác giả, đồng hành cùng phụ nữ và gia đình trong chăm sóc sinh nở ngoài bệnh viện từ năm 1989. Từ năm 1994, bà cung cấp chương trình chuẩn bị sinh nở qua thiền tập cho các bà mẹ tương lai và đồng nghiệp, đưa chánh niệm vào công việc tại nhà hộ sinh cũng như vào các buổi thuyết trình và đào tạo cho nữ hộ sinh."]
    },
    sections: [
      {
        heading: {de: "Spiritueller Weg", en: "Spiritual path", vi: "Con đường tâm linh"},
        paragraphs: {
          de: ["Ihren Zugang zur buddhistischen Praxis fand sie über die Vipassana-Meditation nach S. N. Goenka. Ihr spirituelles Zuhause fand sie in der Tradition der Intersein-Gemeinschaft mit Thích Nhất Hạnh als Lehrer."],
          en: ["She found her way into Buddhist practice through Vipassana meditation in the tradition of S. N. Goenka. Her spiritual home became the Order of Interbeing community, with Thích Nhất Hạnh as her teacher."],
          vi: ["Bà đến với thực tập Phật giáo qua thiền Vipassana theo truyền thống của S. N. Goenka. Bà tìm thấy ngôi nhà tâm linh của mình trong cộng đồng Dòng tu Tiếp Hiện, với Thiền Sư Thích Nhất Hạnh là vị thầy."]
        }
      }
    ],
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },
      {
        label: {de: "Hebamme seit", en: "Midwife since", vi: "Nữ hộ sinh từ"},
        value: {de: "1989", en: "1989", vi: "1989"}
      },
      {
        label: {
          de: "Geburtsvorbereitung in Achtsamkeit seit",
          en: "Mindful birth preparation since",
          vi: "Chuẩn bị sinh nở chánh niệm từ"
        }, value: {de: "1994", en: "1994", vi: "1994"}
      }
    ]
  },

  "regine-pfeifer": {
    name: "Regine Pfeifer",
    role: {de: "Orden des Interseins", en: "", vi: ""}, // TODO translate
    category: "lay", // double-check
    subgroup: "order-member", // guessed from the role text ("Orden des Interseins") — double-check
    tags: [
      {"de": "Orden des Interseins", "en": "", "vi": ""}
    ], // TODO translate en/vi
    intro: {
      de: ["Regine praktiziert seit 2009 in der Tradition von Plumvillage  und ist seit 2016 Mitglied des deutschsprachigen Intersein Ordens. Sie begleitet seit vielen Jahren Sanghas im Raum Stuttgart und seit fast 2 Jahren die Online-Morgenmeditation des EIAB. Sie pflegt ihre Zugehörigkeit zu ihren christlichen spirituellen Wurzeln  und hat Freude an der Kraft  des Singens"],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },
      {
        "label": {
          "de": "Orden des Interseins seit",
          "en": "Order of Interbeing member since",
          "vi": "Thành viên Dòng tu Tiếp Hiện từ"
        }, "value": {"de": "2016", "en": "2016", "vi": "2016"}
      }
    ] // TODO translate en/vi
  },

  "sabine-jaenicke": {
    name: "Sabine Jaenicke",
    role: {de: "Orden des Interseins", en: "", vi: ""}, // TODO translate
    category: "lay", // double-check
    subgroup: "order-member", // guessed from the role text ("Orden des Interseins") — double-check
    tags: [
      {"de": "Orden des Interseins", "en": "", "vi": ""}
    ], // TODO translate en/vi
    intro: {
      de: ["Sabine Jaenicke ist Mitglied des Intersein-Ordens und aktiv in der Münchner Sangha. Sie arbeitet als Lektorin für spirituelle Bücher, u.a. für die Bücher von Thich Nhat Hanh, und leitet Meditationsabende, Achtsamkeitstage und Tage der Stille."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },
      {
        "label": {
          "de": "Orden des Interseins seit",
          "en": "Order of Interbeing member since",
          "vi": "Thành viên Dòng tu Tiếp Hiện từ"
        }, "value": {"de": "", "en": "", "vi": ""}
      }
    ] // TODO translate en/vi
  },

  "xiaoqing-xu": {
    name: "Xiaoqing Xu",
    role: {de: "Orden des Interseins", en: "", vi: ""}, // TODO translate
    category: "lay", // double-check
    subgroup: "order-member", // guessed from the role text ("Orden des Interseins") — double-check
    tags: [
      {"de": "Orden des Interseins", "en": "", "vi": ""}
    ], // TODO translate en/vi
    intro: {
      de: ["Dr. phil. Xiaoqing Xu ist Germanistin M.A., promovierte Sinologin, Heilpraktikerin für Psychotherapie mit Schwerpunkt Traumatherapie und Mitglied des Intersein Ordens.", "Sie arbeitet seit vielen Jahren in der interkulturellen Jugendhilfe.", "Sie interessiert sich sehr für heilsame und verbindende Kommunikation und kreative Traumaheilung durch Achtsamkeit."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        "label": {"de": "Rolle", "en": "Role", "vi": "Vai trò"},
        "value": {"de": "Orden des Interseins", "en": "", "vi": ""}
      },

    ] // TODO translate en/vi
  },
// --- lay: other ---

  "alexander-bockmann": {
    name: "Alexander Böckmann",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Alexander kam 2012 das erste Mal ins Kloster nach Plum Village. Dort nahm er die fünf Achtsamkeitsübungen an und erhielt den Namen: Beginners Mind of the Heart (Tam Ban Dau).", "Nach dem Studium zog es ihn dann wieder nach Plum Village, wo er für eineinhalb Jahre als Langzeitgast ein Zuhause fand. Seither unterstützte er die Sangha bei zahlreichen Retreats in Frankreich und Deutschland."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "anna-muck": {
    name: "Anna Muck",
    role: {
      de: "Tai-Ji- und Qigong-Lehrerin",
      en: "Tai Chi and Qigong Teacher",
      vi: "Giáo viên Thái Cực Quyền và Khí công"
    },
    category: "lay",
    subgroup: "other",
    tags: [
      {
        de: "Tai-Ji- und Qigong-Lehrerin",
        en: "Tai Chi and Qigong Teacher",
        vi: "Giáo viên Thái Cực Quyền và Khí công"
      },
      {
        de: "Wettkampferfahrung im Tai Ji Quan",
        en: "Competitive Tai Chi Quan experience",
        vi: "Kinh nghiệm thi đấu Thái Cực Quyền"
      }
    ],
    intro: {
      de: ["Im Alter von 25 Jahren habe ich beschlossen unsportlich zu sein. Bewegung war entweder zu anstrengend, zu langweilig, zu dumm…. Das Maximum an Bewegung war ein Spaziergang. Und mit 51 Jahren habe ich an nationalen und internationalen Tai Ji Wettbewerben erfolgreich teilgenommen.Was ist passiert?Mit 32 Jahren begegnete ich Meister Zhang Xiao Ping - ich war fasziniert von der Harmonie seines Tai Ji Quan. Kein Gedanke, keine Überlegung - nur Begeisterung. Und das Gefühl: das will ich machen! Seither lerne und übe ich ununterbrochen und mache heute, mit 57 Jahren mehr Bewegung, als ich mir jemals habe vorstellen können. Meister Zhang hat recht: je mehr man kann und versteht, umso interessanter wird es! Wie sehr Körper und Geist miteinander verbunden sind, wie wir durch unseren Körper unseren Geist beeinflußen und umgekehrt, kann kaum irgendwo deutlicher erlebt und genutzt werden als im Tai Ji Quan und im Qi Gong. Es ist eine wunderbare Methode sich um die eigene körperliche und geistige Gesundheit zu kümmern.Es macht mir sehr große Freude, Tai Ji und Qi Gong zu unterrichten und damit den Menschen auch diese Möglichkeit zu geben"],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        label: {de: "Rolle", en: "Role", vi: "Vai trò"},
        value: {
          de: "Tai-Ji- und Qigong-Lehrerin",
          en: "Tai Chi and Qigong Teacher",
          vi: "Giáo viên Thái Cực Quyền và Khí công"
        }
      },
      {
        label: {de: "Lehrer", en: "Teacher", vi: "Sư phụ"},
        value: {
          de: "Meister Zhang Xiao Ping (getroffen im Alter von 32)",
          en: "Master Zhang Xiao Ping (met at age 32)",
          vi: "Zhang Xiao Ping (gặp năm 32 tuổi)"
        }
      },
      {
        label: {de: "Wettkampferfahrung", en: "Competition experience", vi: "Kinh nghiệm thi đấu"},
        value: {
          de: "Nationale und internationale Tai-Ji-Wettbewerbe (ab 51 Jahren)",
          en: "National and international Tai Chi competitions (from age 51)",
          vi: "Các giải Thái Cực Quyền quốc gia và quốc tế (từ năm 51 tuổi)"
        }
      }
    ]
  },

  "annika-seebach": {
    name: "Annika Seebach",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Annika Seebach lernte 2014 die Dharma Praxis im buddhistischen Haus Berlin Frohnau kennen. Sie ist dem buddhistischen Haus seitdem freundschaftlich verbunden und übt sich in Achtsamkeit und Meditation.", "Seit 2020 praktiziert Annika in der Plum Village Tradition. Sie ist eine aktive Sangha Gärtnerin der Sangha Ruhrgebiet und widmet sich dort mit Freude dem Sangha Building.", "Beruflich engagiert sie sich im Bereich Schule u.a. für Inklusion, gemeinsames Lernen und Organisation schulischer Aktivitäten."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "barbara-niesen": {
    name: "Barbara Niesen",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Barbara Niesen, freischaffende Künstlerin, lebt in Nümbrecht. Deutschlandweit stellt sie ihre farbenfrohen Bilder aus (s. www.barbara-niesen.de). Als Sterbebegleiterin ist sie im Johannes-Hospiz in Wiehl tätig."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        label: {de: "Website", en: "Website", vi: "Trang web"},
        value: {de: "www.barbara-niesen.de", en: "www.barbara-niesen.de", vi: "www.barbara-niesen.de"}
      }
    ]
  },

  "catherine-bryden": {
    name: "Catherine Bryden",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: [
        "Catherine Bryden aus Montreal (Kanada), entdeckte im Jahr 2001 in Deutschland die geheimnisvolle magische Welt des Theaterclowns von Nose to Nose. Die Wachsamkeit des Clowns nährt ihre tiefe Liebe und Faszination für Menschen, Spiel, Beziehungen und Gemeinschaften. Vorher tauchte sie für über drei Jahrzehnte auf drei Kontinenten - Nordamerika, Asien (Taiwan, Hongkong, Singapur und China) und Europa - tief in die Kommunikation und die kreativen Prozesse der Gruppenarbeit ein.",
        "Catherine trägt liebevolle Frechheit, Keckheit und sanftes Chaos in Workshops und auf die Bühne – in englischer, französischer und deutscher Sprache.",
        "(Zum Thema s. auch die deutsche Webseite „<a href=\"https://nosetonose.info/de\" target=\"_blank\" rel=\"noopener\">nosetonose.info/de</a>“)."
      ],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        label: {de: "Website", en: "Website", vi: "Trang web"},
        value: {de: "nosetonose.info/de", en: "nosetonose.info/de", vi: "nosetonose.info/de"}
      }
    ]
  },

  "dagmar-bellen": {
    name: "Dagmar Bellen",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Dagmar Bellen, Jahrgang 1964, ist zertifizierte Trainerin für Gewaltfreie Kommunikation nach Marshall Rosenberg. Sie ist Gründerin der Akademie für friedvolle und kreative Kommunikation in Köln und unterstützt seit 15 Jahren Institutionen, Kindergärten, Schulen und Familien, eine achtsame und wertschätzende Kommunikation aufzubauen und zu praktizieren.", "Sie ist Diplombetriebswirtin, Grundschullehrerin, Achtsamkeitstrainerin und Mutter.", "Infos: www.verbindungen-schaffen.de"],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        label: {de: "Website", en: "Website", vi: "Trang web"},
        value: {
          de: "www.verbindungen-schaffen.de",
          en: "www.verbindungen-schaffen.de",
          vi: "www.verbindungen-schaffen.de"
        }
      }
    ]
  },

  "erika-krafft": {
    name: "Erika Krafft",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Brustkrebstüberlebende, die durch ihre Erkrankung gezwungen war, ihr Leben komplett neu auszurichten und für sich Wege der Heilung zu erarbeiten. Mehrfache Unternehmerin, Schriftstellerin, Verlegerin,  Yogalehrerin, Qi Gong Lehrerin, Selbsthilfegruppenleiterin, Radiomacherin, Vortragende und Mutter eines pubertierenden jungen Mannes."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "henrico-ebert": {
    name: "Henrico Ebert",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Henrico Ebert befindet sich am Ende seiner Ausbildung zum Psychologischen Psychotherapeuten (Verhaltenstherapie) und arbeitet derzeit in einer psychotherapeutischen Praxis sowie in einer Klinik.", "Fast zehn Jahre lang lebte und praktizierte er als Mönch Zen in einem vietnamesischen Kloster – eine Erfahrung, die seine therapeutische Haltung bis heute prägt."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "isabel-schupp": {
    name: "Isabel Schupp",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Isabel Schupp machte nach dem Tod Ihrer Tochter, die mit 16 Jahren an Leukämie starb, die Ausbildung zur Trauerbegleiterin, leitet Trauerseminare und die Trauergruppe der Verwaisten Eltern München. Seit 1996 praktiziert", "sie Achtsamkeitsmeditation in der Tradition von Thich Nhat Hanh. Seine Vorträge und Retreats haben ihr sehr dabei geholfen, die Trauer um ihre Tochter in Ruhe und Zuversicht zu verwandeln. Kürzlich erschien ihr Buch", "„Die Nacht bringt dir den Tag zurück“.", "www.blauerfalter.de"],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        label: {de: "Website", en: "Website", vi: "Trang web"},
        value: {de: "www.blauerfalter.de", en: "www.blauerfalter.de", vi: "www.blauerfalter.de"}
      }
    ]
  },

  "jochen-fassbender": {
    name: "Jochen Fassbender",
    role: {de: "Klangkünstler", en: "Sound Artist", vi: "Nghệ sĩ âm thanh"},
    category: "lay",
    subgroup: "other",
    tags: [
      {de: "Klangkünstler seit 35 Jahren", en: "Sound Artist for 35 years", vi: "Nghệ sĩ âm thanh trong 35 năm"},
      {
        de: "Baut außergewöhnliche Klangobjekte",
        en: "Builds extraordinary sound objects",
        vi: "Chế tác các vật thể âm thanh độc đáo"
      }
    ],
    intro: {
      de: ["Jochen Fassbender arbeitet seit 35 Jahren als Klangkünstler. Er erforscht Klangphänomene, entwickelt und baut außergewöhnliche Klangobjekte. Mit dem freien Musizieren, Seminaren und dem Vertieb der Instrumente ist er international aktiv. 3 Kilometer neben dem EIAB wohnt er in einen ehemaligen Bahnhof und hat dort sein Klangkunst-Studio ausgebaut."],
      en: ["Jochen Fassbender has been working as a sound artist for 35 years. He researches sound phenomena and develops and builds extraordinary sound objects. He is internationally active with free-music-making, seminars and the sale of instruments. He lives 3 kilometers from the EIAB in a former train station and has set up his sound art studio there."],
      vi: [] // TODO translate
    },
    facts: [
      {
        label: {de: "Rolle", en: "Role", vi: "Vai trò"},
        value: {de: "Klangkünstler", en: "Sound Artist", vi: "Nghệ sĩ âm thanh"}
      },
      {
        label: {
          de: "Tätig als Klangkünstler seit",
          en: "Working as a Sound Artist for",
          vi: "Hoạt động với tư cách nghệ sĩ âm thanh"
        }, value: {de: "35 Jahren", en: "35 years", vi: "35 năm"}
      },
      {
        label: {de: "Studio", en: "Studio", vi: "Xưởng nghệ thuật"},
        value: {
          de: "Ehemaliger Bahnhof, 3 km vom EIAB",
          en: "Former train station, 3 km from EIAB",
          vi: "Nhà ga cũ, cách EIAB 3 km"
        }
      }
    ]
  },

  "joe-holtaway": {
    name: "Joe Holtaway",
    role: {de: "Musiker, Wake Up London", en: "Musician, Wake Up London", vi: "Nhạc sĩ, Wake Up London"},
    category: "lay",
    subgroup: "other",
    tags: [
      {
        de: "Wake Up London seit 2011",
        en: "Wake Up London member since 2011",
        vi: "Thành viên Wake Up London từ năm 2011"
      },
      {de: "Mitbegründer, Peace Sounds", en: "Co-founder, Peace Sounds", vi: "Đồng sáng lập, Peace Sounds"},
      {de: "Musiker und Songwriter", en: "Musician and Songwriter", vi: "Nhạc sĩ và người sáng tác ca khúc"}
    ],
    intro: {
      de: ["Joe Holtaway ist in Cornwall an der englischen Küste mit Volksmusik und Festivals aufgewachsen. In seinen frühen 20ern ist er nach London gezogen, um Literatur und Englisch zu studieren. Seit 2011 ist er in der Gemeinschaft von Wake Up London involviert, nachdem er von einem Freund das Buch 'Wahre Liebe' von Thich Nhat Hanh bekam. Daraufhin unterstützte der das 'Peace Sounds' Projekt in der Gründung, ein Label das Musik herausbringt, die von der Friedensbewegung der Gemeinschaft und deren Freunden inspiriert ist. Er ist gerne im Wasser, spielt seine Gitarre, schreibt Lieder und gärtnert."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        label: {de: "Rolle", en: "Role", vi: "Vai trò"},
        value: {de: "Musiker, Wake Up London", en: "Musician, Wake Up London", vi: "Nhạc sĩ, Wake Up London"}
      },
      {
        label: {
          de: "Aktiv bei Wake Up London seit",
          en: "Active with Wake Up London since",
          vi: "Tham gia Wake Up London từ"
        }, value: {de: "2011", en: "2011", vi: "2011"}
      },
      {
        label: {de: "Mitbegründer", en: "Co-founder", vi: "Đồng sáng lập"},
        value: {
          de: "Peace Sounds (Musiklabel)",
          en: "Peace Sounds (music label)",
          vi: "Peace Sounds (hãng đĩa nhạc)"
        }
      }
    ]
  },

  "joost-vriens": {
    name: "Joost Vriens",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["I practice since 2013, joined a Sangha in Eindhoven in 2015 and", "after a year I became one of the facilitators. Together with a group I organized", "several days of mindfulness.", "I joined wake up schools in 2017 and enjoyed two online educators’ sangha’s guided", "by Miles and Tineke.", "Together with Baltus van Laatum, I founded an online educators’ sangha in 2022.", "In 2023 I retired from 40 years being a teacher in a secondary vocational school. One", "of the reasons was that I wanted to contribute to wake up schools.", "I am the father of a son (33) and a daughter (30)."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "julian-bleckmann": {
    name: "Julian Bleckmann",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Julian Bleckmann ist Psychologischer Psychotherapeut mit Schwerpunkt auf Beziehungen und Bindung. Er führt eine Privatpraxis in Köln-Nippes und arbeitet dort auch als Paar- und Sexualtherapeut. Seit 2018 praktiziert er Zen-Meditation in der Kontemplationslinie „Wolke des Nichtwissens“."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "jurgen-kranz": {
    name: "Jürgen Kranz",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Jürgen Kranz praktiziert seit 2014 und ist seit 2016 aktives Mitglied in der Laien-Sangha in Waldbröl. Jürgen fotografiert seit 35 Jahren. Er hat auf nahezu jedem Spaziergang eine Kamera dabei, um gerade vertraute Umgebungen immer wieder neu zu sehen. Jürgen hilft gerne bei technischen Fragen zum Spiel mit der Kamera und freut sich auf einen kreativen und achtsamen Foto-Austausch."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "karin-speidel": {
    name: "Karin Speidel",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Karin Speidel, Mutter einer 23 jährigen Tochter, ist seit über 27 Jahren an einer Förderschule tätig als Heil- und Kunstpädagogin. Seit 2015 hat sie an diversen Kursen und Retreat’s im EIAB und Plum Village France teilgenommen, u.A. 2021 am „90 Days Rains Retreat“, um die eigene Achtsamkeits Praxis zu vertiefen. 2022 unterstützte sie das „40 Years Plum Village Retreat“ und 2023 das „Educator’s Retreat“ als Volunteer. Am online „Happy Teacher’s Sangha International“ nimmt sie seit 2019 teil, seit 2023 ist sie Teil des Orga-Teams für die monatlichen Sangha-Treffen."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "klaus-nagel": {
    name: "Klaus Nagel",
    role: {
      de: "Singleiter, Initiative Singende Krankenhäuser",
      en: "Song Leader, \"Singing Hospitals\" Initiative",
      vi: "Người hướng dẫn hát, Sáng kiến \"Bệnh viện ca hát\""
    },
    category: "lay",
    subgroup: "other",
    tags: [
      {de: "Zertifizierter Singleiter", en: "Certified Song Leader", vi: "Người hướng dẫn hát được chứng nhận"},
      {
        de: "Initiative Singende Krankenhäuser",
        en: "\"Singing Hospitals\" Initiative",
        vi: "Sáng kiến \"Bệnh viện ca hát\""
      },
      {
        de: "Meditatives und heilsames Singen",
        en: "Meditative and healing singing",
        vi: "Ca hát thiền định và chữa lành"
      }
    ],
    // Klaus Nagel and Susanne Mössinger teach together and are both described with
    // the same joint bio on the source site — kept identical in both entries rather
    // than split into invented individual text.
    intro: {
      de: ["Susanne Mössinger und Klaus Nagel sind Mitglied der „Initiative Singende Krankenhäuser“ und von dieser zertifiziert als SingleiterInnen. Sie haben vielfältige Erfahrung mit der Anleitung von meditativem und heilsamem Singen und singen mit Menschen in Konzerten und Seminaren, auf der Straße, in Kirchen, Krankhäusern, Kindergärten und Schulen. Sie praktizieren mit der Starnberger-See-Sangha in Tutzing."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        label: {de: "Rolle", en: "Role", vi: "Vai trò"},
        value: {de: "Singleiter", en: "Song Leader", vi: "Người hướng dẫn hát"}
      },
      {
        label: {de: "Zertifiziert von", en: "Certified by", vi: "Được chứng nhận bởi"},
        value: {
          de: "Initiative Singende Krankenhäuser",
          en: "\"Singing Hospitals\" Initiative",
          vi: "Sáng kiến \"Bệnh viện ca hát\""
        }
      },
      {
        label: {de: "Praktiziert mit", en: "Practices with", vi: "Thực hành cùng"},
        value: {
          de: "Starnberger-See-Sangha, Tutzing",
          en: "Starnberger-See Sangha, Tutzing",
          vi: "Starnberger-See Sangha, Tutzing"
        }
      },
      {
        label: {de: "Website", en: "Website", vi: "Trang web"},
        value: {de: "www.sovielhimmel.de", en: "www.sovielhimmel.de", vi: "www.sovielhimmel.de"}
      }
    ]
  },

  "larissa-mazbouh": {
    name: "Larissa Mazbouh",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Larissa Mazbouh hat dies und das studiert, kleine und große Dinge geschaffen, hier und dort etwas losgelassen. Sie interessiert sich für´s herausfinden, überrascht werden, staunen und die Welt mit neuen Augen sehen; verlorengehen und wiederfinden - die Anker stärken und Sicherheitsnetze lösen. Hobbies:", "Im Wald herumkrabbeln und Reichtum durch Teilen vermehren. In Vorfreude auf das gemeinsame Erforschen borgt sie die Worte von Mary Oliver: „Erzähle mir was es ist, das Du zu tun planst, mit deinem einen, wilden und wertvollen Leben!“"],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "marc-iwaszkiewicz": {
    name: "Marc Iwaszkiewicz",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Dozent: Marc ist Atemlehrer nach Dr. med Julius Parow/ Osenberg, Burnout Berater, Klangmasseur und Musiker. Seit dem Jahr 2000 praktiziert er Vipassana Meditation nach S. N. Goenka. Seit 2016 ist er Kursleiter im EIAB. Die Achtsamkeitspraxis im EIAB berührte in sehr und bereicherte seine Arbeit und Leben. Neben Schulungen in Kliniken bildet er Atem- und Klangtherapeuten aus. Er führt Weiterbildungen im Bereich Atem, Klang & Instrumente für therapeutische, pädagogische, künstlerische Berufe, Seniorenarbeit, Hospizhäusern, Schulen & Einrichtungen für Personen mit geistigem oder körperlichem Handicap durch. Regelmäßig arbeitet er mit seiner Klang- Atemarbeit auf der Palliativ- und Chemotherapie Station im St. Josef Hospitals in Bochum. Als Musiker ist er bekannt für seine in die Tiefe und Stille führenden Klangkonzerte. Er führt einen Laden in Bochum für exotische Musikinstrumente wie zum Beispiel Shruti Boxen, Harmoniums, Klangschalen und Gongs.", "<a href=\"https://www.traumkraft.de\" target=\"_blank\" rel=\"noopener\">www.traumkraft.de</a>"],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        label: {de: "Website", en: "Website", vi: "Trang web"},
        value: {de: "www.traumkraft.de", en: "www.traumkraft.de", vi: "www.traumkraft.de"}
      }
    ]
  },

  "maria-kathrein": {
    name: "Maria Kathrein",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Maria Kathrein, Dipl.- Shiatsu-Praktikerin (ESI) mit 30-jähriger Shiatsuerfahrung und vielfältiger Weiterbildung u. a. bei Akinobu Kishi (Seiki), Pauline Sasaki (Quantum Shiatsu) sowie Helmut Bräuer (Empty Touch), lebt und praktiziert in Waldbröl. Sie praktiziert Zen seit 24 Jahren und ist seit 2000 in der Plum-Village-Tradition. Die Lehre Thays hat ihrem Shiatsu ein neues Verständnis gegeben."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "maria-schuller": {
    name: "Maria Schüller",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Focusing-Lehrerin und Focusing-Begleiterin FINK; Germanistin und Kunstwissenschaftlerin, langjährige Medita­tions­­­erfahrung, Gestaltthera­peutin, Coach sowie kontinuierliche Arbeit als Autorin und Regisseurin beim WDR."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "paul-koppler": {
    name: "Paul Köppler",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Dr. Paul Köppler, geboren 1946, ist Meditationslehrer mit traditioneller Schulung in", "Vipassana und Zen im Westen und in Asien. Seine prägenden LehrerInnen waren Godwin", "Samararatne, Ruth Denison und Thich Nhat Hanh (Intersein-Orden). Er vermittelt einen", "klassischen, jedoch eher sanften Weg zur Beruhigung des Geistes und Einsicht. Es ist ihm", "ein Anliegen die Übung in das tägliche Leben zu bringen und zu tiefen, heilsamen", "Veränderungen des Bewusstseins beizutragen.", "Er ist Gründer von buddhistischen Zentren (Waldhaus am Laacher See, Haus Siddharta)", "und in spirituellen Therapien ausgebildet, und macht in seinen Büchern auf lebendige", "Weise die alte Lehre westlichen Menschen zugänglich.", "Seine Bücher:", "Auf den Spuren des Buddha / So meditiert Buddha / Buddhas ewige Gesetze,", "Das lehrt der Buddha / Auf dem Weg mit Buddha"],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "petchara-songchienchai": {
    name: "Petchara Songchienchai",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Petchara Songchienchai wurde in Thailand geboren und ist dort auf gewachsen. In Bangkok hat sie ein Lehramtsstudium absolviert. Seit mehr als 20 Jahren arbeitet sie in Deutsch land in einer heilpädagogischen Einrichtung für behinderte Kinder und Jugendliche.", "Von 2000–2002 absolvierte sie eine Shiatsu-Ausbildung und anschlie ßend eine Ausbildung in klassischer thai ländischer Massage sowie in Fußreflexzonen- und Gesichtsmassage. Zusätzlich erlernte sie 2017 die bioenergetische Massage. 2011 begegnete sie Thich Nhat Hanh im EIAB auf einem Achtsamkeitstag. Seit 2012 praktiziert sie in der Plum Village Tradition"],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "phuong-glaser": {
    name: "Phương Glaser",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Dr. Phương Glaser is a certified coach and facilitator of Applied Compassion, accredited by the Center for Compassion and Altruism Research and Education at Stanford University. She is also a dedicated practitioner of contemplative practices, particularly in the tradition of Zen Master Thich Nhat Hanh. With a passion for fostering compassion in diverse communities, Dr. Glaser collaborates with universities, research centers, and associations across Germany. She offers coaching and training in mentoring, cross-cultural communication, empathy, and compassion, aiming to cultivate more compassionate and effective interactions in personal and professional contexts."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "saraswati-klaudia-feltens": {
    name: "Saraswati Klaudia Feltens",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Saraswati Klaudia Feltens ist Heilpraktikerin/Psychotherapie und arbeitet als Yogalehrerin/BDY und Focusing-Beraterin (www.skf-yogaundtherapie.de) freiberuflich in Nümbrecht im Oberbergischen Land. Sie unterstützt Menschen in Kursen und Einzelstunden mittels Atem-, Körper-, Entspannungs-und Achtsamkeitsübungen dabei, positiv auf ihre Gesundheit einzuwirken. Die Meditationspraxis von Thich Nhat Hanh hat sie 2009 im EIAB kennengelernt."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        label: {de: "Website", en: "Website", vi: "Trang web"},
        value: {de: "www.skf-yogaundtherapie.de", en: "www.skf-yogaundtherapie.de", vi: "www.skf-yogaundtherapie.de"}
      }
    ]
  },

  "steffen-handke": {
    name: "Steffen Handke",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Steffen Handke ist Facharzt für Psychosomatische Medizin und Psychotherapie und Psychiatrie.", "Aktuell ist er selbstständig in einer psychotherapeutischen Praxis in Gelsenkirchen, arbeitet nebenbei im Gefängnis mit psychisch kranken Straftätern und gibt Achtsamkeitskurse für Klinikmitarbeiter.", "Dem EIAB fühlt er sich seit vielen Jahren verbunden."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "susanna-muhlbacher": {
    name: "Susanna Mühlbacher",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Susanna Mühlbacher ist Initiatorin und Mitgründerin des Achtsamkeitszentrums in Tirol und leitet die Sangha in Hall in Tirol. Ihr Alltag und ihre Arbeit als Psychologin wurzeln seit vielen Jahren in der Achtsamkeitspraxis und buddhistischen Psychologie. Sie hält Workshops für Selbsterfahrung, organisiert das \"Retreat in den Bergen\" mit den Nonnen und Mönchen in Tirol und liebt es, mit der Sangha online und offline zu praktizieren."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "susanne-mossinger": {
    name: "Susanne Mössinger",
    role: {
      de: "Singleiterin, Initiative Singende Krankenhäuser",
      en: "Song Leader, \"Singing Hospitals\" Initiative",
      vi: "Người hướng dẫn hát, Sáng kiến \"Bệnh viện ca hát\""
    },
    category: "lay",
    subgroup: "other",
    tags: [
      {de: "Zertifizierte Singleiterin", en: "Certified Song Leader", vi: "Người hướng dẫn hát được chứng nhận"},
      {
        de: "Initiative Singende Krankenhäuser",
        en: "\"Singing Hospitals\" Initiative",
        vi: "Sáng kiến \"Bệnh viện ca hát\""
      },
      {
        de: "Meditatives und heilsames Singen",
        en: "Meditative and healing singing",
        vi: "Ca hát thiền định và chữa lành"
      }
    ],
    // Susanne Mössinger and Klaus Nagel teach together and are both described with
    // the same joint bio on the source site — kept identical in both entries rather
    // than split into invented individual text.
    intro: {
      de: ["Susanne Mössinger und Klaus Nagel sind Mitglied der „Initiative Singende Krankenhäuser“ und von dieser zertifiziert als SingleiterInnen. Sie haben vielfältige Erfahrung mit der Anleitung von meditativem und heilsamem Singen und singen mit Menschen in Konzerten und Seminaren, auf der Straße, in Kirchen, Krankhäusern, Kindergärten und Schulen. Sie praktizieren mit der Starnberger-See-Sangha in Tutzing."],
      en: [], // TODO translate
      vi: []  // TODO translate
    },
    facts: [
      {
        label: {de: "Rolle", en: "Role", vi: "Vai trò"},
        value: {de: "Singleiterin", en: "Song Leader", vi: "Người hướng dẫn hát"}
      },
      {
        label: {de: "Zertifiziert von", en: "Certified by", vi: "Được chứng nhận bởi"},
        value: {
          de: "Initiative Singende Krankenhäuser",
          en: "\"Singing Hospitals\" Initiative",
          vi: "Sáng kiến \"Bệnh viện ca hát\""
        }
      },
      {
        label: {de: "Praktiziert mit", en: "Practices with", vi: "Thực hành cùng"},
        value: {
          de: "Starnberger-See-Sangha, Tutzing",
          en: "Starnberger-See Sangha, Tutzing",
          vi: "Starnberger-See Sangha, Tutzing"
        }
      },
      {
        label: {de: "Website", en: "Website", vi: "Trang web"},
        value: {de: "www.sovielhimmel.de", en: "www.sovielhimmel.de", vi: "www.sovielhimmel.de"}
      }
    ]
  },

  "thi-thuan-hornig": {
    name: "Thi Thuan Hornig",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Thi Thuan Hornig wurde in Vietnam geboren und ist bis zu ihrem 19. Lebensjahr dort aufgewachsen.", "Seit 1987 lebt sie in Deutschland. Im Jahr 2008 erwarb sie das Zertifikat für die traditionelle Thai-Massage und seit 2010 besitzt sie das Zertifikat für das Therapie-Level und übt diesen Beruf .", "Im Jahr 2012 begegnete sie Thich Nhat Hanh in Plum Village und danach im EIAB und seitdem praktiziert sie aktiv in der Plum Village Tradition.", "Seit 2022 ist sie Mitglied des Intersein-Ordens (deutsch/vietnamesisch)."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "truc-ly": {
    name: "Truc Ly",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Truc Ly ist, seit 2014 staatlich geprüfte Physiotherapeutin und hilft Menschen mit muskuloskelettaler Erkrankungen.", "Absolvierte die Ausbildung zum med. Masseur-Bademeister so wie mehrere langjährige Fortbildungen in: Manuelle Therapie und Manuelle Lymphdrainage.", "Zurzeit absolviert Ly ein Studium in der Physiotherapie.", "Vor der Physiotherapieausbildung übte sie mehrere Jahre Thai Massage aus.", "Sie genießt es, in der Natur zu sein, reist gerne, um neue Erfahrungen zu sammeln."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "ursula-richard": {
    name: "Ursula Richard",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Ursula Richard ist seit vielen Jahren auf spirituellen Wegen (vor allem Zen) unterwegs.", "Sie ist Verlegerin, Autorin sowie Übersetzerin vieler Bücher von Thich Nhat Hanh.", "Seit ihrer ersten Begegnung Mitte der 1980er Jahre fühlt sie sich mit Thay und seinen Lehren sehr verbunden."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "zhang-xiao-ping": {
    name: "Zhang Xiao Ping",
    role: {de: "", en: "", vi: ""},
    category: "lay", // double-check
    subgroup: "other",
    intro: {
      de: ["Meister ZHANG Xiao Ping, geboren in Hebei (VR China), Schüler vom Meister FU, ist ein großer Meister der traditionellen chinesischen Künste (Kampfkunst, Kräuterlehre und chinesische Medizin). Meister ZHANG Xiao Ping beherrscht nicht nur alle körperlichen Übungen wie Tai Chi, Qi Gong und Kung Fu, sondern auch die Philosophie und buddhistische Lehre.", "1983 begann Meister ZHANG seine Lehrtätigkeit für Tai Chi, Qi Gong und Wushu an der Universität für Traditionelle Chinesische Medizin der Provinz Fujian.", "In Wien gründete er 1991 eine Schule für Wushu-Taiji-Qigong: das „Studio Zhang“ und lehrt seitdem Tai Chi, Qi Gong und Wushu in ganz Europa."],
      en: [], // TODO translate
      vi: []  // TODO translate
    }
  },

  "zhi-zhang": {
    name: "Mag. Zhi Zhang",
    role: {
      de: "Kung Fu-, Tai Ji- und Qi Gong-Lehrer",
      en: "Kung Fu, Tai Ji and Qi Gong teacher",
      vi: "Giáo viên Kung Fu, Thái Cực Quyền và Khí Công"
    },
    category: "lay",
    tags: [
      {de: "Kung Fu", en: "Kung Fu", vi: "Kung Fu"},
      {de: "Tai Ji und Qi Gong", en: "Tai Ji and Qi Gong", vi: "Thái Cực Quyền và Khí Công"},
      {
        de: "Traditionelle Chinesische Medizin",
        en: "Traditional Chinese Medicine",
        vi: "Y học cổ truyền Trung Hoa"
      }
    ],
    subgroup: "other",
    intro: {
      de: ["Mag. phil. Zhi Zhang wurde in Korneuburg, Österreich, geboren und praktiziert seit seiner Kindheit traditionelle chinesische Kampfkünste und Gesundheitsmethoden — Kung Fu, Tai Ji, Qi Gong und Meditation. Ausgebildet von seinem Vater, Meister Zhang Xiao Ping, und beeinflusst von seiner Mutter Zhao Jun, einer promovierten TCM-Ärztin, verbindet er in seinem Unterricht die Schönheit der Bewegung mit dem Wissen der traditionellen chinesischen Medizin."],
      en: ["Mag. phil. Zhi Zhang was born in Korneuburg, Austria, and has practised traditional Chinese martial arts and health methods — Kung Fu, Tai Ji, Qi Gong and meditation — since childhood. Trained by his father, Master Zhang Xiao Ping, and influenced by his mother Zhao Jun, a TCM doctor, he combines the beauty of movement with the knowledge of traditional Chinese medicine in his teaching."],
      vi: ["Mag. phil. Zhi Zhang sinh ra tại Korneuburg, Áo, và đã thực tập các môn võ thuật cổ truyền Trung Hoa cùng các phương pháp dưỡng sinh — Kung Fu, Thái Cực Quyền, Khí Công và thiền tập — từ thuở nhỏ. Được cha, sư phụ Zhang Xiao Ping, huấn luyện và chịu ảnh hưởng từ mẹ, bà Zhao Jun, một bác sĩ y học cổ truyền Trung Hoa, ông kết hợp vẻ đẹp của chuyển động với tri thức y học cổ truyền Trung Hoa trong việc giảng dạy."]
    },
    sections: [
      {
        heading: {de: "Werdegang", en: "Path", vi: "Con đường"},
        paragraphs: {
          de: ["2012 begann Zhi Zhang seine Lehrtätigkeit im „Studio Zhang\", einem Kung-Fu-, Qi-Gong- und Tai-Ji-Studio in Wien. 2020 schloss er zudem ein Studium der Biologie, Umweltkunde und Anglistik an der Universität Wien ab."],
          en: ["In 2012, Zhi Zhang began teaching at 'Studio Zhang', a Kung Fu, Qi Gong and Tai Ji studio in Vienna. In 2020 he also completed a degree in biology, environmental studies and English at the University of Vienna."],
          vi: ["Năm 2012, Zhi Zhang bắt đầu giảng dạy tại 'Studio Zhang', một studio Kung Fu, Khí Công và Thái Cực Quyền ở Vienna. Năm 2020, ông cũng hoàn thành chương trình học về sinh học, khoa học môi trường và tiếng Anh tại Đại học Vienna."]
        }
      }
    ],
    facts: [
      {
        label: {de: "Unterrichtet seit", en: "Teaching since", vi: "Giảng dạy từ"},
        value: {de: "2012", en: "2012", vi: "2012"}
      },
      {
        label: {de: "Ausbildung", en: "Education", vi: "Học vấn"},
        value: {
          de: "Biologie, Umweltkunde und Anglistik, Universität Wien",
          en: "Biology, Environmental Studies and English, University of Vienna",
          vi: "Sinh học, Khoa học Môi trường và tiếng Anh, Đại học Vienna"
        }
      }
    ]
  },

  // Only known as course instructors so far, see the note on the monastic side
  // above: unlisted:true keeps them off ueber-uns/laien-kursleiter.html.
  "thoai-huong-hoang": {
    name: "Thoại Hương Hoàng",
    category: "lay",
    subgroup: "other",
    unlisted: true,
    role: {de: "", en: "", vi: ""},
    intro: {de: [], en: [], vi: []}
  },
  "christiane-hackethal": {
    name: "Christiane Hackethal",
    category: "lay",
    subgroup: "other",
    unlisted: true,
    role: {de: "", en: "", vi: ""},
    intro: {de: [], en: [], vi: []}
  },
  "gisela-klockner": {
    name: "Gisela Klöckner",
    category: "lay",
    subgroup: "other",
    unlisted: true,
    role: {de: "", en: "", vi: ""},
    intro: {de: [], en: [], vi: []}
  },
  "birgit-martin": {
    name: "Birgit Martin",
    category: "lay",
    subgroup: "other",
    unlisted: true,
    role: {de: "", en: "", vi: ""},
    intro: {de: [], en: [], vi: []}
  }
};

// Single flat id -> entry lookup used by every other page (person.html's ?id=,
// program-content.js / programs.js instructor references, course byline/related-
// course links, etc). Built from the two category constants above so there is
// exactly one place that owns each person's data, without forcing every lookup
// site across the codebase to know or care which category a given id belongs to.
window.EIAB_TEACHERS = Object.assign({}, window.EIAB_TEACHERS_MONASTIC, window.EIAB_TEACHERS_LAY);
;

// Find a registry entry by its exact display `name` (for callers that only have the
// free-text name, e.g. program-content.js's `teacher.name` or a course's `instructor`
// string). Returns the entry with its `id` attached, or null if no match.
window.EIAB_FIND_TEACHER_BY_NAME = function (name) {
  if (!name) return null;
  var registry = window.EIAB_TEACHERS || {};
  for (var id in registry) {
    if (registry[id].name === name) {
      var entry = {};
      for (var k in registry[id]) entry[k] = registry[id][k];
      entry.id = id;
      return entry;
    }
  }
  return null;
};
