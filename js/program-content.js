// Optional, extended detail-page content for individual programs (courses/retreats),
// keyed by the same course code used as `id` in js/programs.js.
//
// Every text field is a {de, en, vi} object. Not every course needs every field, and most
// courses won't have an entry here at all yet — programm/retreat-detail.html only renders
// a section if the data for it exists, and otherwise falls back to the base info that's
// already in js/programs.js (title, dates, type, languages, instructor).
//
// Shape of one entry:
// "K-CODE": {
//   description: { de: ["paragraph 1", "paragraph 2"], en: [...], vi: [...] },
//   teacher: "some-id",                                    // js/teachers.js registry id — NOT a name
//                                                            // or inline object. All of that person's
//                                                            // details (name, role, bio, photo) live in
//                                                            // js/teachers.js; this file only points to
//                                                            // them. Must match the `instructor` field
//                                                            // in js/programs.js (as an exact substring).
//   schedule: {
//     note:    { de: "...", en: "...", vi: "..." },        // intro line above the day plan
//     items: [
//       { time: "05:30", act: { de: "...", en: "...", vi: "..." },
//         sub: { de: "...", en: "...", vi: "..." } }        // sub is optional per item
//     ],
//     dayNote: { de: "...", en: "...", vi: "..." }          // arrival/departure note below the table
//   },
//   know: [
//     { title: { de, en, vi }, text: { de, en, vi } }       // "Gut zu wissen" grid, any number of items
//   ],
//   price: "ab 300 €",                                      // optional, same across languages
//   priceNote: { de: "...", en: "...", vi: "..." }
// }

window.EIAB_PROGRAM_CONTENT = {

  "K2636-1": {
    description: {
      de: [
        "Dieses einwöchige Retreat auf Vietnamesisch lädt Alleinstehende, Familien und Freunde ein, gemeinsam in die Praxis der Achtsamkeit zurückzukehren. Im Mittelpunkt steht die Gehmeditation — ruhige, wache Schritte, die zur Gemeinschaft zurückführen.",
        "Neben täglicher Meditation, Dharma-Vorträgen und Gesprächsrunden widmen wir uns in diesem Jahr besonders der buddhistischen Lehre vom Bedingten Entstehen (Duyên Khởi) — der Frage, wie alles miteinander verbunden ist und wie diese Einsicht zu innerem Frieden führen kann.",
        "Es ist eine Woche, um Dankbarkeit und Freude in der Gemeinschaft zu teilen und gestärkt in den Alltag zurückzukehren."
      ],
      en: [
        "This week-long retreat in Vietnamese invites singles, families and friends to return together to the practice of mindfulness. Walking meditation is at its heart — quiet, awake steps that lead back to community.",
        "Alongside daily meditation, Dharma talks and sharing circles, this year we look closely at the Buddhist teaching of Dependent Origination (Duyên Khởi) — how everything is interconnected, and how this insight can lead to inner peace.",
        "It's a week to share gratitude and joy within the community, and to return to daily life a little steadier."
      ],
      vi: [
        "Khóa tu tiếng Việt kéo dài một tuần này mời những người độc thân, gia đình và bạn bè cùng trở về thực tập chánh niệm. Trọng tâm là thiền hành — những bước chân an tĩnh, tỉnh thức đưa ta trở về với tăng thân.",
        "Bên cạnh thời khóa thiền tập, pháp thoại và pháp đàm hằng ngày, năm nay chúng ta sẽ cùng tìm hiểu sâu hơn về giáo lý Duyên Khởi trong đạo Bụt — làm thế nào vạn vật liên hệ mật thiết với nhau, và tuệ giác này có thể đưa đến sự bình an nội tâm.",
        "Đây là một tuần để chia sẻ lòng biết ơn và niềm vui cùng tăng thân, và trở về đời sống hằng ngày với thêm nhiều vững chãi."
      ]
    },
    know: [
      { title: { de: "Sie teilen ein Zimmer", en: "You'll share a room", vi: "Quý vị sẽ ở chung phòng" },
        text: { de: "Außer im Einzelzimmer. Das gemeinsame Wohnen gehört in unserer Tradition zur Übung. Ohrstöpsel und Schlafmaske sind trotzdem eine gute Idee.",
                en: "Except in a single room. Shared living is part of the practice in our tradition. Earplugs and a sleep mask are still a good idea.",
                vi: "Trừ khi đăng ký phòng đơn. Sống chung là một phần của sự thực tập trong truyền thống chúng tôi. Nút bịt tai và mặt nạ ngủ vẫn là một ý hay." } },
      { title: { de: "Bettwäsche", en: "Bed linen", vi: "Ga trải giường" },
        text: { de: "Bringen Sie eigene mit oder mieten Sie ein Set für 10 €. Handtücher stellen wir, ein Badetuch bringen Sie bitte selbst mit.",
                en: "Bring your own or rent a set for €10. We provide towels; please bring your own bath towel.",
                vi: "Quý vị có thể mang theo hoặc thuê một bộ với giá 10 €. Chúng tôi cung cấp khăn tắm nhỏ, xin mang theo khăn tắm lớn của riêng mình." } },
      { title: { de: "Kleidung", en: "Clothing", vi: "Trang phục" },
        text: { de: "Schlicht, zurückhaltend, nicht zu bunt, Schultern und Beine bedeckt. Für die Sitzmeditation ist eine weite Hose angenehmer. Hausschuhe nicht vergessen.",
                en: "Simple, modest, not too bright, shoulders and legs covered. Loose trousers are more comfortable for sitting meditation. Don't forget slippers.",
                vi: "Giản dị, kín đáo, không quá sặc sỡ, che vai và chân. Quần rộng sẽ thoải mái hơn khi ngồi thiền. Đừng quên dép đi trong nhà." } },
      { title: { de: "Essen", en: "Meals", vi: "Ăn uống" },
        text: { de: "Drei vegane Mahlzeiten am Tag, gemeinsam im Speisesaal. Sonderdiäten können wir nicht zubereiten — bringen Sie dann bitte eigene Lebensmittel mit.",
                en: "Three vegan meals a day, eaten together in the dining hall. We cannot prepare special diets — please bring your own food in that case.",
                vi: "Ba bữa ăn chay mỗi ngày, dùng chung trong phòng ăn. Chúng tôi không thể chuẩn bị chế độ ăn đặc biệt — trong trường hợp đó, xin mang theo thức ăn riêng." } },
      { title: { de: "Durchgehende Teilnahme", en: "Full attendance", vi: "Tham dự trọn khóa" },
        text: { de: "Aus organisatorischen Gründen ist eine spätere Anreise oder frühere Abreise nicht möglich.",
                en: "For organisational reasons, later arrival or earlier departure is not possible.",
                vi: "Vì lý do tổ chức, không thể đến muộn hoặc về sớm." } },
      { title: { de: "Paare", en: "Couples", vi: "Các cặp đôi" },
        text: { de: "Können auf Wunsch zusammen untergebracht werden. Während des Retreats bitten wir alle um sexuelle Zurückhaltung, damit der geschützte Rahmen für alle gilt.",
                en: "Can be accommodated together on request. During the retreat we ask everyone to observe sexual restraint, so the protected space applies to all.",
                vi: "Có thể ở chung phòng nếu có yêu cầu. Trong suốt khóa tu, chúng tôi mong mọi người giữ gìn về mặt tình dục, để không gian an toàn được bảo vệ cho tất cả mọi người." } },
      { title: { de: "Kinder und Tiere", en: "Children and pets", vi: "Trẻ em và thú cưng" },
        text: { de: "Für dieses Retreat gibt es kein Kinderprogramm. Haustiere können wir im EIAB nicht aufnehmen.",
                en: "There is no children's programme for this retreat. We cannot accommodate pets at EIAB.",
                vi: "Khóa tu này không có chương trình dành cho trẻ em. EIAB không thể nhận thú cưng." } },
      { title: { de: "Wenn Sie unsicher sind", en: "If you're unsure", vi: "Nếu quý vị còn phân vân" },
        text: { de: "Bei Bedenken zu Ihrer körperlichen oder seelischen Verfassung schreiben Sie uns bitte vor der Anmeldung.",
                en: "If you have concerns about your physical or emotional wellbeing, please write to us before registering.",
                vi: "Nếu có lo ngại về sức khỏe thể chất hay tinh thần, xin hãy viết thư cho chúng tôi trước khi đăng ký." } }
    ]
  },

  "K2636-2": {
    description: {
      de: [
        "Zum 18. Jubiläum öffnet das EIAB seine Türen für Freundinnen, Freunde und alle Interessierten. Der Nachmittag verbindet feierliche Elemente — Gesang, Tanz und das gemeinsame Anschneiden einer Torte — mit ruhigen Praxisangeboten wie Sitz- und Gehmeditation, Tee-Meditation und einer Kalligrafie-Ausstellung zum Mitmachen.",
        "Bei einer Führung können Sie außerdem einen Blick auf die Baustelle der neuen Zen-Meister-Thich-Nhat-Hanh-Halle des Friedens werfen. Der Nachmittag klingt mit einer Gehmeditation zum Stupa und einem gemeinsamen Chanten für Weltfrieden aus."
      ],
      en: [
        "For its 18th anniversary, EIAB opens its doors to friends and everyone interested in visiting. The afternoon combines festive elements — singing, dance, and cutting a cake together — with quiet practice offerings such as sitting and walking meditation, tea meditation, and a hands-on calligraphy exhibition.",
        "A guided tour also lets you see the construction site of the new Zen Master Thich Nhat Hanh Hall of Peace. The afternoon closes with a walking meditation to the stupa and a shared chant for world peace."
      ],
      vi: [
        "Nhân dịp kỷ niệm 18 năm thành lập, EIAB mở cửa đón bạn bè và tất cả những ai quan tâm ghé thăm. Buổi chiều kết hợp những phần trang trọng — ca hát, múa và cùng nhau cắt bánh sinh nhật — với các buổi thực tập an tĩnh như thiền tọa, thiền hành, thiền trà và một buổi triển lãm thư pháp để mọi người cùng tham gia.",
        "Qua một chuyến tham quan, quý vị cũng có thể nhìn thấy công trường xây dựng Đại Sảnh Hòa Bình Thiền Sư Thích Nhất Hạnh mới. Buổi chiều khép lại bằng thiền hành đến bảo tháp và cùng tụng kinh cầu nguyện hòa bình thế giới."
      ]
    },
    teacher: "thay-phap-an",
    schedule: {
      note: {
        de: "Ablauf des Nachmittags.",
        en: "The afternoon's programme.",
        vi: "Chương trình buổi chiều."
      },
      items: [
        { time: "14:30", act: { de: "Begrüßung der Gäste mit Gesang und Musik", en: "Welcoming guests with singing and music", vi: "Đón chào khách bằng ca hát và âm nhạc" } },
        { time: "14:45", act: { de: "Ansprache, gemeinsames Chanten, Drachentanz, Geburtstagslied und Anschneiden der Torte", en: "Welcome address, group chanting, dragon dance, birthday song, and cutting the cake", vi: "Phát biểu chào mừng, cùng tụng kinh, múa lân, hát mừng sinh nhật và cắt bánh" } },
        { time: "16:00", act: { de: "Parallele Angebote: Buffet, Führung über die Baustelle der neuen Halle, Kalligrafie-Ausstellung zum Mitmachen, geführte Sitzmeditation, Tee-Meditation, musikalische und tänzerische Darbietungen, Taichi", en: "Parallel offerings: buffet, guided tour of the new hall's construction site, hands-on calligraphy exhibition, guided sitting meditation, tea meditation, musical and dance performances, Tai Chi", vi: "Các hoạt động song song: tiệc buffet, tham quan công trường xây dựng sảnh mới, triển lãm thư pháp để tham gia, thiền tọa có hướng dẫn, thiền trà, các tiết mục âm nhạc và múa, Thái Cực Quyền" } },
        { time: "17:30", act: { de: "Gehmeditation zum Stupa, Glockenläuten, Abschiedslieder", en: "Walking meditation to the stupa, bell ringing, farewell songs", vi: "Thiền hành đến bảo tháp, thỉnh chuông, các bài hát chia tay" } },
        { time: "18:00", act: { de: "Abschließendes Chanten für Weltfrieden — Ende der Veranstaltung", en: "Closing chant for world peace — end of the event", vi: "Tụng kinh cầu nguyện hòa bình thế giới — kết thúc chương trình" } }
      ]
    },
    price: { de: "Eintritt frei", en: "Free admission", vi: "Miễn phí vào cửa" },
    priceNote: {
      de: "Wir bitten um eine kurze, kostenlose Anmeldung per E-Mail an registrar@eiab.eu.",
      en: "We kindly ask for a brief, free registration by email to registrar@eiab.eu.",
      vi: "Xin vui lòng đăng ký ngắn gọn, miễn phí qua email đến registrar@eiab.eu."
    }
  },

  "K2639-2": {
    description: {
      de: [
        "Ein Pinselstrich gelingt nicht, weil die Hand geübt ist, sondern weil der Atem ruhig ist. In diesen drei Tagen üben wir Kalligrafie nicht als Kunstfertigkeit, sondern als eine Form der Meditation, die auf dem Papier sichtbar wird.",
        "Sie werden lernen, Tusche anzurühren, den Pinsel zu halten und ein einzelnes Wort so zu schreiben, dass Sie beim Schreiben ganz da sind. Zwischen den Übungseinheiten sitzen wir, gehen wir und essen wir gemeinsam mit der Klostergemeinschaft — denn der Strich entsteht nicht erst am Tisch, sondern schon Stunden vorher.",
        "Sie brauchen keinerlei Erfahrung, weder mit Kalligrafie noch mit Meditation. Alle Materialien stellen wir. Das Retreat wird auf Englisch gehalten, mit Übersetzung ins Deutsche und Vietnamesische."
      ],
      en: [
        "A brushstroke does not succeed because the hand is skilled, but because the breath is calm. In these three days we practice calligraphy not as a craft, but as a form of meditation that becomes visible on paper.",
        "You will learn to prepare ink, hold the brush, and write a single word in such a way that you are fully present while writing it. Between practice sessions we sit, walk, and eat together with the monastic community — because the stroke does not begin at the table, but hours before.",
        "You need no prior experience, neither in calligraphy nor in meditation. We provide all materials. The retreat is held in English, with translation into German and Vietnamese."
      ],
      vi: [
        "Một nét bút không thành công vì bàn tay khéo léo, mà vì hơi thở an tĩnh. Trong ba ngày này, chúng ta thực tập thư pháp không phải như một kỹ năng, mà như một hình thức thiền tập hiện ra trên trang giấy.",
        "Quý vị sẽ học cách mài mực, cầm bút và viết một chữ sao cho khi viết, quý vị hoàn toàn có mặt. Giữa các buổi thực tập, chúng ta cùng ngồi, cùng đi và cùng ăn với tăng thân — vì nét bút không bắt đầu từ bàn viết, mà đã bắt đầu từ nhiều giờ trước đó.",
        "Quý vị không cần kinh nghiệm gì trước, dù về thư pháp hay thiền tập. Chúng tôi cung cấp tất cả vật liệu. Khóa tu được giảng dạy bằng tiếng Anh, có thông dịch sang tiếng Đức và tiếng Việt."
      ]
    },
    teacher: "hoi-nghiem",
    schedule: {
      note: {
        de: "Der Tag hat einen festen Rhythmus, den Sie mit der Gemeinschaft teilen. Nichts davon ist Pflicht — aber fast alle merken, dass der Rhythmus trägt.",
        en: "The day follows a steady rhythm that you share with the community. None of it is obligatory — but almost everyone finds that the rhythm carries them.",
        vi: "Mỗi ngày có một nhịp điệu đều đặn mà quý vị cùng chia sẻ với tăng thân. Không có gì là bắt buộc — nhưng hầu như ai cũng nhận ra rằng nhịp điệu ấy nâng đỡ mình."
      },
      items: [
        { time: "05:30", act: { de: "Weckglocke", en: "Wake-up bell", vi: "Tiếng chuông thức dậy" } },
        { time: "06:00", act: { de: "Sitzmeditation und Rezitation", en: "Sitting meditation and chanting", vi: "Thiền tọa và tụng kinh" },
          sub: { de: "Meditationshalle, große Halle", en: "Meditation hall, main hall", vi: "Thiền đường chính" } },
        { time: "07:30", act: { de: "Frühstück in Stille", en: "Breakfast in silence", vi: "Ăn sáng trong im lặng" } },
        { time: "09:00", act: { de: "Dharma-Vortrag", en: "Dharma talk", vi: "Pháp thoại" },
          sub: { de: "Englisch, mit Übersetzung DE und VI", en: "In English, with translation into German and Vietnamese", vi: "Bằng tiếng Anh, có thông dịch tiếng Đức và tiếng Việt" } },
        { time: "11:00", act: { de: "Kalligrafie, erste Einheit", en: "Calligraphy, first session", vi: "Thư pháp, buổi thứ nhất" } },
        { time: "12:30", act: { de: "Mittagessen und Ruhezeit", en: "Lunch and rest", vi: "Ăn trưa và nghỉ ngơi" } },
        { time: "15:00", act: { de: "Kalligrafie, zweite Einheit", en: "Calligraphy, second session", vi: "Thư pháp, buổi thứ hai" } },
        { time: "16:30", act: { de: "Gehmeditation im Park", en: "Walking meditation in the park", vi: "Thiền hành trong công viên" } },
        { time: "18:00", act: { de: "Abendessen", en: "Dinner", vi: "Ăn tối" } },
        { time: "19:30", act: { de: "Dharma-Gespräch in kleinen Gruppen", en: "Dharma discussion in small groups", vi: "Pháp đàm theo nhóm nhỏ" },
          sub: { de: "Getrennt nach Sprachen", en: "Grouped by language", vi: "Chia theo ngôn ngữ" } },
        { time: "21:30", act: { de: "Beginn der edlen Stille", en: "Beginning of noble silence", vi: "Bắt đầu giờ im lặng hùng tráng" },
          sub: { de: "bis zum Ende des Frühstücks", en: "until the end of breakfast", vi: "đến hết bữa sáng hôm sau" } }
      ],
      dayNote: {
        de: "Am Anreisetag kommen Sie zwischen 15:00 und 18:00 Uhr an, um 18:00 Uhr gibt es Abendessen, und der Kurs beginnt um 19:30 Uhr. Am letzten Tag endet das Programm nach dem Mittagessen gegen 14:00 Uhr.",
        en: "On the day of arrival you check in between 3:00 and 6:00 pm, dinner is at 6:00 pm, and the course begins at 7:30 pm. On the final day the programme ends after lunch, around 2:00 pm.",
        vi: "Vào ngày đến, quý vị nhận phòng trong khoảng 15:00–18:00, dùng bữa tối lúc 18:00, và khóa tu bắt đầu lúc 19:30. Vào ngày cuối, chương trình kết thúc sau bữa trưa, khoảng 14:00."
      }
    },
    know: [
      { title: { de: "Sie teilen ein Zimmer", en: "You'll share a room", vi: "Quý vị sẽ ở chung phòng" },
        text: { de: "Außer im Einzelzimmer. Das gemeinsame Wohnen gehört in unserer Tradition zur Übung. Ohrstöpsel und Schlafmaske sind trotzdem eine gute Idee.",
                en: "Except in a single room. Shared living is part of the practice in our tradition. Earplugs and a sleep mask are still a good idea.",
                vi: "Trừ khi đăng ký phòng đơn. Sống chung là một phần của sự thực tập trong truyền thống chúng tôi. Nút bịt tai và mặt nạ ngủ vẫn là một ý hay." } },
      { title: { de: "Bettwäsche", en: "Bed linen", vi: "Ga trải giường" },
        text: { de: "Bringen Sie eigene mit oder mieten Sie ein Set für 10 €. Handtücher stellen wir, ein Badetuch bringen Sie bitte selbst mit.",
                en: "Bring your own or rent a set for €10. We provide towels; please bring your own bath towel.",
                vi: "Quý vị có thể mang theo hoặc thuê một bộ với giá 10 €. Chúng tôi cung cấp khăn tắm nhỏ, xin mang theo khăn tắm lớn của riêng mình." } },
      { title: { de: "Kleidung", en: "Clothing", vi: "Trang phục" },
        text: { de: "Schlicht, zurückhaltend, nicht zu bunt, Schultern und Beine bedeckt. Für die Sitzmeditation ist eine weite Hose angenehmer. Hausschuhe nicht vergessen.",
                en: "Simple, modest, not too bright, shoulders and legs covered. Loose trousers are more comfortable for sitting meditation. Don't forget slippers.",
                vi: "Giản dị, kín đáo, không quá sặc sỡ, che vai và chân. Quần rộng sẽ thoải mái hơn khi ngồi thiền. Đừng quên dép đi trong nhà." } },
      { title: { de: "Essen", en: "Meals", vi: "Ăn uống" },
        text: { de: "Drei vegane Mahlzeiten am Tag, gemeinsam im Speisesaal. Sonderdiäten können wir nicht zubereiten — bringen Sie dann bitte eigene Lebensmittel mit.",
                en: "Three vegan meals a day, eaten together in the dining hall. We cannot prepare special diets — please bring your own food in that case.",
                vi: "Ba bữa ăn chay mỗi ngày, dùng chung trong phòng ăn. Chúng tôi không thể chuẩn bị chế độ ăn đặc biệt — trong trường hợp đó, xin mang theo thức ăn riêng." } },
      { title: { de: "Durchgehende Teilnahme", en: "Full attendance", vi: "Tham dự trọn khóa" },
        text: { de: "Aus organisatorischen Gründen ist eine spätere Anreise oder frühere Abreise nicht möglich.",
                en: "For organisational reasons, later arrival or earlier departure is not possible.",
                vi: "Vì lý do tổ chức, không thể đến muộn hoặc về sớm." } },
      { title: { de: "Paare", en: "Couples", vi: "Các cặp đôi" },
        text: { de: "Können auf Wunsch zusammen untergebracht werden. Während des Retreats bitten wir alle um sexuelle Zurückhaltung, damit der geschützte Rahmen für alle gilt.",
                en: "Can be accommodated together on request. During the retreat we ask everyone to observe sexual restraint, so the protected space applies to all.",
                vi: "Có thể ở chung phòng nếu có yêu cầu. Trong suốt khóa tu, chúng tôi mong mọi người giữ gìn về mặt tình dục, để không gian an toàn được bảo vệ cho tất cả mọi người." } },
      { title: { de: "Kinder und Tiere", en: "Children and pets", vi: "Trẻ em và thú cưng" },
        text: { de: "Für dieses Retreat gibt es kein Kinderprogramm. Haustiere können wir im EIAB nicht aufnehmen.",
                en: "There is no children's programme for this retreat. We cannot accommodate pets at EIAB.",
                vi: "Khóa tu này không có chương trình dành cho trẻ em. EIAB không thể nhận thú cưng." } },
      { title: { de: "Wenn Sie unsicher sind", en: "If you're unsure", vi: "Nếu quý vị còn phân vân" },
        text: { de: "Bei Bedenken zu Ihrer körperlichen oder seelischen Verfassung schreiben Sie uns bitte vor der Anmeldung.",
                en: "If you have concerns about your physical or emotional wellbeing, please write to us before registering.",
                vi: "Nếu có lo ngại về sức khỏe thể chất hay tinh thần, xin hãy viết thư cho chúng tôi trước khi đăng ký." } }
    ],
    price: "ab 300 €",
    priceNote: {
      de: "Pro Person und Nacht, je nach Zimmerart. Enthalten sind Übernachtung, alle veganen Mahlzeiten, Kursgebühr, Material und Nebenkosten.",
      en: "Per person and night, depending on room type. Includes accommodation, all vegan meals, course fee, materials and incidentals.",
      vi: "Tính theo mỗi người mỗi đêm, tùy loại phòng. Đã bao gồm chỗ ở, tất cả các bữa ăn chay, học phí, vật liệu và chi phí phát sinh."
    }
  },

  "K2637-1": {
    description: {
      de: [
        "Qi Gong ist eine Übungsmethode aus der Traditionellen Chinesischen Medizin, die mit einfachen Bewegungen und bewusster Atmung arbeitet. Sie hilft, Verspannungen zu lösen, das Immunsystem zu stärken und die eigene Lebensenergie (Qi) zu kultivieren.",
        "Die Übungen dieses Kurses — Drachen-Qi-Gong (Jiu Long Gong) — verbinden diese Tradition mit der symbolischen Kraft des Drachens aus der chinesischen Kultur: kraftvoll, wandlungsfähig und lebendig.",
        "Der Kurs findet an sechs aufeinanderfolgenden Morgenden online statt, sodass Sie die Übungen direkt in Ihren Alltag integrieren können."
      ],
      en: [
        "Qi Gong is a practice from Traditional Chinese Medicine that works with simple movements and conscious breathing. It helps release tension, strengthen the immune system, and cultivate your own life energy (Qi).",
        "This course's exercises — Dragon Qi Gong (Jiu Long Gong) — combine this tradition with the symbolic power of the dragon from Chinese culture: strong, adaptable and alive.",
        "The course runs live online across six consecutive mornings, so you can bring the practice straight into your daily routine."
      ],
      vi: [
        "Khí Công là phương pháp thực tập của Y học Cổ truyền Trung Hoa, sử dụng các động tác đơn giản và hơi thở có ý thức. Nó giúp giải tỏa căng thẳng, tăng cường hệ miễn dịch và nuôi dưỡng nguồn năng lượng sống (Khí) của chính mình.",
        "Các bài tập của khóa học này — Long Khí Công (Jiu Long Gong) — kết hợp truyền thống này với sức mạnh biểu tượng của rồng trong văn hóa Trung Hoa: mạnh mẽ, biến hóa và tràn đầy sức sống.",
        "Khóa học diễn ra trực tuyến vào sáu buổi sáng liên tiếp, giúp quý vị đưa sự thực tập vào ngay trong nhịp sống hằng ngày."
      ]
    },
    teacher: "zhi-zhang",
    schedule: {
      note: {
        de: "Sechs Morgeneinheiten live online, jeweils eine Stunde.",
        en: "Six live online morning sessions, one hour each.",
        vi: "Sáu buổi sáng trực tuyến trực tiếp, mỗi buổi một tiếng."
      },
      items: [
        { time: "07:00–08:00", act: { de: "Live-Qi-Gong-Einheit online, täglich Mo–Sa", en: "Live online Qi Gong session, daily Mon–Sat", vi: "Buổi Khí Công trực tuyến trực tiếp, hằng ngày từ Thứ Hai đến Thứ Bảy" } }
      ]
    },
    price: "90 €",
    priceNote: {
      de: "Honorar für alle sechs Kurstage, inklusive Aufzeichnungen aller Einheiten.",
      en: "Fee for all six course days, recordings of every session included.",
      vi: "Học phí cho cả sáu ngày khóa học, bao gồm bản ghi hình của tất cả các buổi."
    }
  },

  "K2639-3": {
    description: {
      de: [
        "Dieses Retreat lädt junge Menschen ein, innezuhalten, durchzuatmen und zu erkunden, was Liebe wirklich bedeutet — sich selbst, einander und der Welt gegenüber.",
        "Durch geleitete Meditation, achtsame Bewegung, Gesprächskreise und einfaches gemeinsames Leben üben wir tiefes Zuhören, das Annehmen unserer Gefühle und einen achtsameren, mitfühlenderen Umgang mit unseren Beziehungen.",
        "Vier sanfte Tage, um Selbstliebe und echte Verbindung zu kultivieren — gemeinsam mit anderen jungen Menschen auf demselben Weg."
      ],
      en: [
        "This retreat invites young people to slow down, breathe, and explore what it really means to love — themselves, each other, and the world around them.",
        "Through guided meditation, mindful movement, sharing circles and simple community life, we practice deep listening, welcoming our emotions, and caring for our relationships with more presence and compassion.",
        "It's a gentle four days to cultivate self-love and genuine connection, together with other young people on the same path."
      ],
      vi: [
        "Khóa tu này mời các bạn trẻ chậm lại, thở, và khám phá ý nghĩa thật sự của tình thương — với chính mình, với nhau, và với thế giới xung quanh.",
        "Qua thiền tập hướng dẫn, vận động trong chánh niệm, các vòng tròn chia sẻ và đời sống cộng đồng giản dị, chúng ta thực tập lắng nghe sâu, ôm ấp cảm xúc của mình và chăm sóc các mối quan hệ với nhiều mặt và từ bi hơn.",
        "Đây là bốn ngày nhẹ nhàng để nuôi dưỡng tình thương chính mình và sự kết nối chân thật, cùng với những người trẻ khác trên cùng con đường."
      ]
    },
    teacher: "tai-nghiem",
    know: [
      { title: { de: "Sie teilen ein Zimmer", en: "You'll share a room", vi: "Quý vị sẽ ở chung phòng" },
        text: { de: "Außer im Einzelzimmer. Das gemeinsame Wohnen gehört in unserer Tradition zur Übung. Ohrstöpsel und Schlafmaske sind trotzdem eine gute Idee.",
                en: "Except in a single room. Shared living is part of the practice in our tradition. Earplugs and a sleep mask are still a good idea.",
                vi: "Trừ khi đăng ký phòng đơn. Sống chung là một phần của sự thực tập trong truyền thống chúng tôi. Nút bịt tai và mặt nạ ngủ vẫn là một ý hay." } },
      { title: { de: "Bettwäsche", en: "Bed linen", vi: "Ga trải giường" },
        text: { de: "Bringen Sie eigene mit oder mieten Sie ein Set für 10 €. Handtücher stellen wir, ein Badetuch bringen Sie bitte selbst mit.",
                en: "Bring your own or rent a set for €10. We provide towels; please bring your own bath towel.",
                vi: "Quý vị có thể mang theo hoặc thuê một bộ với giá 10 €. Chúng tôi cung cấp khăn tắm nhỏ, xin mang theo khăn tắm lớn của riêng mình." } },
      { title: { de: "Kleidung", en: "Clothing", vi: "Trang phục" },
        text: { de: "Schlicht, zurückhaltend, nicht zu bunt, Schultern und Beine bedeckt. Für die Sitzmeditation ist eine weite Hose angenehmer. Hausschuhe nicht vergessen.",
                en: "Simple, modest, not too bright, shoulders and legs covered. Loose trousers are more comfortable for sitting meditation. Don't forget slippers.",
                vi: "Giản dị, kín đáo, không quá sặc sỡ, che vai và chân. Quần rộng sẽ thoải mái hơn khi ngồi thiền. Đừng quên dép đi trong nhà." } },
      { title: { de: "Essen", en: "Meals", vi: "Ăn uống" },
        text: { de: "Drei vegane Mahlzeiten am Tag, gemeinsam im Speisesaal. Sonderdiäten können wir nicht zubereiten — bringen Sie dann bitte eigene Lebensmittel mit.",
                en: "Three vegan meals a day, eaten together in the dining hall. We cannot prepare special diets — please bring your own food in that case.",
                vi: "Ba bữa ăn chay mỗi ngày, dùng chung trong phòng ăn. Chúng tôi không thể chuẩn bị chế độ ăn đặc biệt — trong trường hợp đó, xin mang theo thức ăn riêng." } },
      { title: { de: "Durchgehende Teilnahme", en: "Full attendance", vi: "Tham dự trọn khóa" },
        text: { de: "Aus organisatorischen Gründen ist eine spätere Anreise oder frühere Abreise nicht möglich.",
                en: "For organisational reasons, later arrival or earlier departure is not possible.",
                vi: "Vì lý do tổ chức, không thể đến muộn hoặc về sớm." } },
      { title: { de: "Paare", en: "Couples", vi: "Các cặp đôi" },
        text: { de: "Können auf Wunsch zusammen untergebracht werden. Während des Retreats bitten wir alle um sexuelle Zurückhaltung, damit der geschützte Rahmen für alle gilt.",
                en: "Can be accommodated together on request. During the retreat we ask everyone to observe sexual restraint, so the protected space applies to all.",
                vi: "Có thể ở chung phòng nếu có yêu cầu. Trong suốt khóa tu, chúng tôi mong mọi người giữ gìn về mặt tình dục, để không gian an toàn được bảo vệ cho tất cả mọi người." } },
      { title: { de: "Kinder und Tiere", en: "Children and pets", vi: "Trẻ em và thú cưng" },
        text: { de: "Für dieses Retreat gibt es kein Kinderprogramm. Haustiere können wir im EIAB nicht aufnehmen.",
                en: "There is no children's programme for this retreat. We cannot accommodate pets at EIAB.",
                vi: "Khóa tu này không có chương trình dành cho trẻ em. EIAB không thể nhận thú cưng." } },
      { title: { de: "Wenn Sie unsicher sind", en: "If you're unsure", vi: "Nếu quý vị còn phân vân" },
        text: { de: "Bei Bedenken zu Ihrer körperlichen oder seelischen Verfassung schreiben Sie uns bitte vor der Anmeldung.",
                en: "If you have concerns about your physical or emotional wellbeing, please write to us before registering.",
                vi: "Nếu có lo ngại về sức khỏe thể chất hay tinh thần, xin hãy viết thư cho chúng tôi trước khi đăng ký." } }
    ]
  },

  "K2639-4": {
    description: {
      de: [
        "Im hektischen Alltag essen wir oft schnell nebenbei, greifen zu Fastfood oder Fertiggerichten. Dieser Kurs lädt dazu ein, das Kochen selbst als Übung der Achtsamkeit zu entdecken.",
        "Achtsam Gemüse putzen und schneiden, sich bewusst atmend in der Küche bewegen — gemeinsam bereiten wir verschiedene asiatische Gerichte zu: von Vorspeisen und Salaten über Nudel- und Reisgerichte bis zum Nachtisch.",
        "Der Kurs wird von Mönchen und Nonnen des EIAB gemeinsam mit Mitgliedern der vietnamesischen Laien-Sangha begleitet, eingebettet in den Tagesrhythmus mit Meditation und morgendlichem Qi Gong."
      ],
      en: [
        "In our busy daily lives, we often eat in a hurry, reaching for fast food or ready meals. This course invites you to discover cooking itself as a mindfulness practice.",
        "Mindfully washing and cutting vegetables, moving through the kitchen with conscious breathing — together we prepare a range of Asian dishes, from starters and salads to noodle and rice dishes and dessert.",
        "The course is guided by monks and nuns of EIAB together with members of the Vietnamese lay sangha, woven into a day that includes meditation and morning Qi Gong."
      ],
      vi: [
        "Trong đời sống bận rộn hằng ngày, chúng ta thường ăn vội, dùng đồ ăn nhanh hoặc thức ăn chế biến sẵn. Khóa học này mời quý vị khám phá việc nấu ăn như một sự thực tập chánh niệm.",
        "Rửa và cắt rau trong chánh niệm, di chuyển trong bếp với hơi thở ý thức — chúng ta cùng nhau chuẩn bị nhiều món ăn châu Á, từ khai vị, salad, đến các món mì, cơm và tráng miệng.",
        "Khóa học được hướng dẫn bởi chư Tăng Ni EIAB cùng các thành viên tăng thân cư sĩ người Việt, hòa trong nhịp sống hằng ngày với thiền tập và Khí Công buổi sáng."
      ]
    },
    teacher: "bieu-nghiem",
    know: [
      { title: { de: "Sie teilen ein Zimmer", en: "You'll share a room", vi: "Quý vị sẽ ở chung phòng" },
        text: { de: "Außer im Einzelzimmer. Das gemeinsame Wohnen gehört in unserer Tradition zur Übung. Ohrstöpsel und Schlafmaske sind trotzdem eine gute Idee.",
                en: "Except in a single room. Shared living is part of the practice in our tradition. Earplugs and a sleep mask are still a good idea.",
                vi: "Trừ khi đăng ký phòng đơn. Sống chung là một phần của sự thực tập trong truyền thống chúng tôi. Nút bịt tai và mặt nạ ngủ vẫn là một ý hay." } },
      { title: { de: "Bettwäsche", en: "Bed linen", vi: "Ga trải giường" },
        text: { de: "Bringen Sie eigene mit oder mieten Sie ein Set für 10 €. Handtücher stellen wir, ein Badetuch bringen Sie bitte selbst mit.",
                en: "Bring your own or rent a set for €10. We provide towels; please bring your own bath towel.",
                vi: "Quý vị có thể mang theo hoặc thuê một bộ với giá 10 €. Chúng tôi cung cấp khăn tắm nhỏ, xin mang theo khăn tắm lớn của riêng mình." } },
      { title: { de: "Kleidung", en: "Clothing", vi: "Trang phục" },
        text: { de: "Schlicht, zurückhaltend, nicht zu bunt, Schultern und Beine bedeckt. Für die Sitzmeditation ist eine weite Hose angenehmer. Hausschuhe nicht vergessen.",
                en: "Simple, modest, not too bright, shoulders and legs covered. Loose trousers are more comfortable for sitting meditation. Don't forget slippers.",
                vi: "Giản dị, kín đáo, không quá sặc sỡ, che vai và chân. Quần rộng sẽ thoải mái hơn khi ngồi thiền. Đừng quên dép đi trong nhà." } },
      { title: { de: "Essen", en: "Meals", vi: "Ăn uống" },
        text: { de: "Drei vegane Mahlzeiten am Tag, gemeinsam im Speisesaal. Sonderdiäten können wir nicht zubereiten — bringen Sie dann bitte eigene Lebensmittel mit.",
                en: "Three vegan meals a day, eaten together in the dining hall. We cannot prepare special diets — please bring your own food in that case.",
                vi: "Ba bữa ăn chay mỗi ngày, dùng chung trong phòng ăn. Chúng tôi không thể chuẩn bị chế độ ăn đặc biệt — trong trường hợp đó, xin mang theo thức ăn riêng." } },
      { title: { de: "Durchgehende Teilnahme", en: "Full attendance", vi: "Tham dự trọn khóa" },
        text: { de: "Aus organisatorischen Gründen ist eine spätere Anreise oder frühere Abreise nicht möglich.",
                en: "For organisational reasons, later arrival or earlier departure is not possible.",
                vi: "Vì lý do tổ chức, không thể đến muộn hoặc về sớm." } },
      { title: { de: "Paare", en: "Couples", vi: "Các cặp đôi" },
        text: { de: "Können auf Wunsch zusammen untergebracht werden. Während des Retreats bitten wir alle um sexuelle Zurückhaltung, damit der geschützte Rahmen für alle gilt.",
                en: "Can be accommodated together on request. During the retreat we ask everyone to observe sexual restraint, so the protected space applies to all.",
                vi: "Có thể ở chung phòng nếu có yêu cầu. Trong suốt khóa tu, chúng tôi mong mọi người giữ gìn về mặt tình dục, để không gian an toàn được bảo vệ cho tất cả mọi người." } },
      { title: { de: "Kinder und Tiere", en: "Children and pets", vi: "Trẻ em và thú cưng" },
        text: { de: "Für dieses Retreat gibt es kein Kinderprogramm. Haustiere können wir im EIAB nicht aufnehmen.",
                en: "There is no children's programme for this retreat. We cannot accommodate pets at EIAB.",
                vi: "Khóa tu này không có chương trình dành cho trẻ em. EIAB không thể nhận thú cưng." } },
      { title: { de: "Wenn Sie unsicher sind", en: "If you're unsure", vi: "Nếu quý vị còn phân vân" },
        text: { de: "Bei Bedenken zu Ihrer körperlichen oder seelischen Verfassung schreiben Sie uns bitte vor der Anmeldung.",
                en: "If you have concerns about your physical or emotional wellbeing, please write to us before registering.",
                vi: "Nếu có lo ngại về sức khỏe thể chất hay tinh thần, xin hãy viết thư cho chúng tôi trước khi đăng ký." } }
    ]
  },

  "K2639-1": {
    description: {
      de: [
        "Ein Community-Retreat für alle, die Wirtschaft und Arbeit nicht getrennt von ihrer inneren Haltung denken wollen. Wir bringen buddhistische Weisheit zur Wirtschaft mit den konkreten Fragen des Berufsalltags ins Gespräch — und stärken dabei das Netzwerk derer, die diesen Weg gemeinsam gehen.",
        "Im Zentrum stehen Dharma-Kreise zu Arbeit und Wirtschaft, kontemplative Übungen für den beruflichen Kontext und der offene Austausch mit anderen Selbstständigen, Führungskräften und Projektverantwortlichen, die achtsames Unternehmertum leben wollen. Es geht nicht darum, fertige Antworten mitzunehmen, sondern gemeinsam herauszufinden, wie sich wirtschaftliches Handeln und die Praxis der Achtsamkeit gegenseitig nähren können.",
        "Das Retreat ist zugleich ein Netzwerktreffen: Mitglieder des Netzwerks Achtsame Wirtschaft bringen eigene Erfahrungen und Impulse ein. Vorkenntnisse in Meditation sind hilfreich, aber keine Voraussetzung."
      ],
      en: [
        "A community retreat for everyone who doesn't want to think about work and business separately from their inner posture. We bring Buddhist wisdom on economics into conversation with the concrete questions of everyday working life — and strengthen the network of people walking this path together.",
        "At its centre are Dharma circles on work and economics, contemplative exercises for the professional context, and open exchange with other self-employed people, executives and project leads who want to live mindful entrepreneurship. The point isn't to leave with ready-made answers, but to discover together how economic action and mindfulness practice can nourish each other.",
        "The retreat is also a network gathering: members of the Mindful Economy Network bring their own experience and impulses. Prior meditation experience is helpful but not required."
      ],
      vi: [
        "Một khóa tu cộng đồng dành cho những ai không muốn tách rời công việc và kinh doanh khỏi thái độ nội tâm của mình. Chúng ta đưa trí tuệ Phật giáo về kinh tế vào đối thoại với những câu hỏi cụ thể của đời sống công việc hằng ngày — đồng thời củng cố mạng lưới những người cùng đi trên con đường này.",
        "Trọng tâm là các buổi pháp đàm về công việc và kinh tế, các bài thực tập quán chiếu cho bối cảnh nghề nghiệp, và sự chia sẻ cởi mở với những người tự doanh, lãnh đạo và phụ trách dự án khác đang muốn sống với tinh thần kinh doanh chánh niệm. Mục đích không phải là mang về những câu trả lời có sẵn, mà cùng nhau khám phá xem hành động kinh tế và thực tập chánh niệm có thể nuôi dưỡng lẫn nhau như thế nào.",
        "Khóa tu này đồng thời cũng là buổi gặp gỡ mạng lưới: các thành viên của Mạng lưới Kinh tế Chánh niệm mang đến kinh nghiệm và động lực của riêng mình. Có kinh nghiệm thiền tập trước đó sẽ hữu ích, nhưng không phải là điều kiện bắt buộc."
      ]
    },
    teacher: "kai-romhardt",
    schedule: {
      note: {
        de: "Der Tag folgt dem Rhythmus der Klostergemeinschaft, ergänzt um Zeiten für Austausch und Netzwerkarbeit.",
        en: "The day follows the rhythm of the monastic community, complemented by times for exchange and network activities.",
        vi: "Mỗi ngày theo nhịp điệu của tăng thân, kết hợp thêm thời gian để chia sẻ và hoạt động mạng lưới."
      },
      items: [
        { time: "05:30", act: { de: "Weckglocke", en: "Wake-up bell", vi: "Tiếng chuông thức dậy" } },
        { time: "06:00", act: { de: "Sitzmeditation und Rezitation", en: "Sitting meditation and chanting", vi: "Thiền tọa và tụng kinh" },
          sub: { de: "Meditationshalle", en: "Meditation hall", vi: "Thiền đường" } },
        { time: "07:30", act: { de: "Frühstück in Stille", en: "Breakfast in silence", vi: "Ăn sáng trong im lặng" } },
        { time: "09:00", act: { de: "Dharma-Kreis: Arbeit und Wirtschaft", en: "Dharma circle: Work and economics", vi: "Pháp đàm: Công việc và kinh tế" },
          sub: { de: "Impuls und offener Austausch", en: "Input and open exchange", vi: "Gợi mở và chia sẻ cởi mở" } },
        { time: "11:00", act: { de: "Kontemplative Übungen für den Berufsalltag", en: "Contemplative exercises for everyday working life", vi: "Thực tập quán chiếu cho đời sống công việc hằng ngày" } },
        { time: "12:30", act: { de: "Mittagessen und Ruhezeit", en: "Lunch and rest", vi: "Ăn trưa và nghỉ ngơi" } },
        { time: "15:00", act: { de: "Netzwerktreffen: Achtsame Wirtschaft", en: "Network gathering: Mindful Economy", vi: "Gặp gỡ mạng lưới: Kinh tế chánh niệm" } },
        { time: "16:30", act: { de: "Gehmeditation im Park", en: "Walking meditation in the park", vi: "Thiền hành trong công viên" } },
        { time: "18:00", act: { de: "Abendessen", en: "Dinner", vi: "Ăn tối" } },
        { time: "19:30", act: { de: "Dharma-Gespräch in Kleingruppen", en: "Dharma discussion in small groups", vi: "Pháp đàm theo nhóm nhỏ" } },
        { time: "21:30", act: { de: "Beginn der edlen Stille", en: "Beginning of noble silence", vi: "Bắt đầu giờ im lặng hùng tráng" },
          sub: { de: "bis zum Ende des Frühstücks", en: "until the end of breakfast", vi: "đến hết bữa sáng hôm sau" } }
      ],
      dayNote: {
        de: "Am Anreisetag kommen Sie zwischen 15:00 und 18:00 Uhr an, um 18:00 Uhr gibt es Abendessen, und das Retreat beginnt um 19:30 Uhr. Am letzten Tag endet das Programm nach dem Mittagessen gegen 14:00 Uhr.",
        en: "On the day of arrival you check in between 3:00 and 6:00 pm, dinner is at 6:00 pm, and the retreat begins at 7:30 pm. On the final day the programme ends after lunch, around 2:00 pm.",
        vi: "Vào ngày đến, quý vị nhận phòng trong khoảng 15:00–18:00, dùng bữa tối lúc 18:00, và khóa tu bắt đầu lúc 19:30. Vào ngày cuối, chương trình kết thúc sau bữa trưa, khoảng 14:00."
      }
    },
    know: [
      { title: { de: "Sie teilen ein Zimmer", en: "You'll share a room", vi: "Quý vị sẽ ở chung phòng" },
        text: { de: "Außer im Einzelzimmer. Das gemeinsame Wohnen gehört in unserer Tradition zur Übung. Ohrstöpsel und Schlafmaske sind trotzdem eine gute Idee.",
                en: "Except in a single room. Shared living is part of the practice in our tradition. Earplugs and a sleep mask are still a good idea.",
                vi: "Trừ khi đăng ký phòng đơn. Sống chung là một phần của sự thực tập trong truyền thống chúng tôi. Nút bịt tai và mặt nạ ngủ vẫn là một ý hay." } },
      { title: { de: "Bettwäsche", en: "Bed linen", vi: "Ga trải giường" },
        text: { de: "Bringen Sie eigene mit oder mieten Sie ein Set für 10 €. Handtücher stellen wir, ein Badetuch bringen Sie bitte selbst mit.",
                en: "Bring your own or rent a set for €10. We provide towels; please bring your own bath towel.",
                vi: "Quý vị có thể mang theo hoặc thuê một bộ với giá 10 €. Chúng tôi cung cấp khăn tắm nhỏ, xin mang theo khăn tắm lớn của riêng mình." } },
      { title: { de: "Kleidung", en: "Clothing", vi: "Trang phục" },
        text: { de: "Schlicht und bequem. Für die Sitzmeditation ist eine weite Hose angenehmer. Hausschuhe nicht vergessen.",
                en: "Simple and comfortable. Loose trousers are more comfortable for sitting meditation. Don't forget slippers.",
                vi: "Giản dị và thoải mái. Quần rộng sẽ thoải mái hơn khi ngồi thiền. Đừng quên dép đi trong nhà." } },
      { title: { de: "Essen", en: "Meals", vi: "Ăn uống" },
        text: { de: "Drei vegane Mahlzeiten am Tag, gemeinsam im Speisesaal. Sonderdiäten können wir nicht zubereiten — bringen Sie dann bitte eigene Lebensmittel mit.",
                en: "Three vegan meals a day, eaten together in the dining hall. We cannot prepare special diets — please bring your own food in that case.",
                vi: "Ba bữa ăn chay mỗi ngày, dùng chung trong phòng ăn. Chúng tôi không thể chuẩn bị chế độ ăn đặc biệt — trong trường hợp đó, xin mang theo thức ăn riêng." } },
      { title: { de: "Durchgehende Teilnahme", en: "Full attendance", vi: "Tham dự trọn khóa" },
        text: { de: "Aus organisatorischen Gründen ist eine spätere Anreise oder frühere Abreise nicht möglich.",
                en: "For organisational reasons, later arrival or earlier departure is not possible.",
                vi: "Vì lý do tổ chức, không thể đến muộn hoặc về sớm." } },
      { title: { de: "Laptops und Diensthandy", en: "Laptops and work phones", vi: "Laptop và điện thoại công việc" },
        text: { de: "Bleiben bitte im Zimmer. Ein Retreat lebt davon, dass wir für ein paar Tage wirklich abschalten.",
                en: "Please leave them in your room. A retreat depends on truly switching off for a few days.",
                vi: "Xin để lại trong phòng. Một khóa tu chỉ có ý nghĩa khi chúng ta thực sự buông xuống trong vài ngày." } }
    ],
    price: "Dana",
    priceNote: {
      de: "Dieses Retreat folgt dem Prinzip der Dana (Großzügigkeit): Sie entscheiden nach eigenem Ermessen und Ihren finanziellen Möglichkeiten, welchen Beitrag Sie vor Ort oder im Nachgang leisten. Das EIAB vergütet Lehrende nicht — Dana ermöglicht die Weitergabe der Lehre.",
      en: "This retreat follows the principle of Dana (generosity): you decide at your own discretion and according to your financial means what contribution to make, on site or afterwards. EIAB does not pay its teachers — Dana makes passing on the teaching possible.",
      vi: "Khóa tu này theo nguyên tắc Dana (bố thí, hạnh rộng lượng): quý vị tự quyết định, tùy theo khả năng tài chính của mình, sẽ đóng góp bao nhiêu, tại chỗ hoặc sau đó. EIAB không trả thù lao cho giảng viên — Dana giúp cho việc truyền trao giáo pháp được tiếp tục."
    }
  },

  "K2640-1": {
    description: {
      de: [
        "Wanderretreats gibt es am EIAB, seit es das Institut gibt. Nach vielen Jahren Erfahrung in der Umgebung von Waldbröl teilen wir mit Ihnen die schönsten Wanderwege der Region.",
        "Ruhiges Wandern in schöner Natur, mit wachem und aufmerksamem Geist, kann inneren Frieden und Freude neu erblühen lassen. Wir wandern überwiegend in Stille und sprechen achtsam miteinander in den Pausen.",
        "Mittags picknicken wir draußen in der Natur. Da wir an manchen Tagen bis zu 17 Kilometer zurücklegen, ist körperliche Fitness wichtig."
      ],
      en: [
        "There have been walking retreats at EIAB since the institute began. After many years of experience in the hills around Waldbröl, we're glad to share the most beautiful trails with you.",
        "Quiet walking through beautiful nature, with an awake and attentive mind, can bring inner peace and joy back into bloom. We walk mostly in silence and speak mindfully with one another during breaks.",
        "We picnic outdoors at midday. Since some days cover up to 17 kilometres, good physical fitness is important."
      ],
      vi: [
        "Các khóa tu thiền hành đã có mặt tại EIAB từ những ngày đầu thành lập viện. Sau nhiều năm kinh nghiệm quanh vùng Waldbröl, chúng tôi rất vui được chia sẻ những cung đường đẹp nhất với quý vị.",
        "Đi bộ thong thả giữa thiên nhiên tươi đẹp, với tâm tỉnh thức và chú tâm, có thể làm bình an và niềm vui nội tâm nở hoa trở lại. Chúng ta đi phần lớn trong im lặng và trò chuyện trong chánh niệm vào giờ nghỉ.",
        "Buổi trưa chúng ta dùng bữa picnic ngoài trời. Vì có những ngày đi đến 17 km, sức khỏe thể chất tốt là điều cần thiết."
      ]
    },
    teacher: "thay-phap-xa",
    know: [
      { title: { de: "Körperliche Fitness", en: "Physical fitness", vi: "Thể lực" },
        text: { de: "Wir wandern an manchen Tagen bis zu 17 Kilometer. Eine gute körperliche Grundfitness wird vorausgesetzt.",
                en: "On some days we walk up to 17 kilometres. A reasonable base level of physical fitness is required.",
                vi: "Có những ngày chúng ta đi bộ đến 17 km. Cần có nền tảng thể lực tốt." } },
      { title: { de: "Ausrüstung", en: "What to bring", vi: "Vật dụng mang theo" },
        text: { de: "Lunchbox, Wasserflasche, feste Wanderschuhe und Regenkleidung nicht vergessen.",
                en: "Don't forget a lunchbox, water bottle, sturdy hiking boots and rain gear.",
                vi: "Đừng quên hộp cơm trưa, bình nước, giày đi bộ chắc chắn và đồ đi mưa." } },
      { title: { de: "Sie teilen ein Zimmer", en: "You'll share a room", vi: "Quý vị sẽ ở chung phòng" },
        text: { de: "Außer im Einzelzimmer. Das gemeinsame Wohnen gehört in unserer Tradition zur Übung. Ohrstöpsel und Schlafmaske sind trotzdem eine gute Idee.",
                en: "Except in a single room. Shared living is part of the practice in our tradition. Earplugs and a sleep mask are still a good idea.",
                vi: "Trừ khi đăng ký phòng đơn. Sống chung là một phần của sự thực tập trong truyền thống chúng tôi. Nút bịt tai và mặt nạ ngủ vẫn là một ý hay." } },
      { title: { de: "Bettwäsche", en: "Bed linen", vi: "Ga trải giường" },
        text: { de: "Bringen Sie eigene mit oder mieten Sie ein Set für 10 €. Handtücher stellen wir, ein Badetuch bringen Sie bitte selbst mit.",
                en: "Bring your own or rent a set for €10. We provide towels; please bring your own bath towel.",
                vi: "Quý vị có thể mang theo hoặc thuê một bộ với giá 10 €. Chúng tôi cung cấp khăn tắm nhỏ, xin mang theo khăn tắm lớn của riêng mình." } },
      { title: { de: "Essen", en: "Meals", vi: "Ăn uống" },
        text: { de: "Drei vegane Mahlzeiten am Tag, gemeinsam im Speisesaal. Sonderdiäten können wir nicht zubereiten — bringen Sie dann bitte eigene Lebensmittel mit.",
                en: "Three vegan meals a day, eaten together in the dining hall. We cannot prepare special diets — please bring your own food in that case.",
                vi: "Ba bữa ăn chay mỗi ngày, dùng chung trong phòng ăn. Chúng tôi không thể chuẩn bị chế độ ăn đặc biệt — trong trường hợp đó, xin mang theo thức ăn riêng." } },
      { title: { de: "Durchgehende Teilnahme", en: "Full attendance", vi: "Tham dự trọn khóa" },
        text: { de: "Aus organisatorischen Gründen ist eine spätere Anreise oder frühere Abreise nicht möglich.",
                en: "For organisational reasons, later arrival or earlier departure is not possible.",
                vi: "Vì lý do tổ chức, không thể đến muộn hoặc về sớm." } },
      { title: { de: "Kinder und Tiere", en: "Children and pets", vi: "Trẻ em và thú cưng" },
        text: { de: "Für dieses Retreat gibt es kein Kinderprogramm. Haustiere können wir im EIAB nicht aufnehmen.",
                en: "There is no children's programme for this retreat. We cannot accommodate pets at EIAB.",
                vi: "Khóa tu này không có chương trình dành cho trẻ em. EIAB không thể nhận thú cưng." } }
    ]
  },

  "K2640-2": {
    description: {
      de: [
        "„Laufe nicht der Vergangenheit nach, verliere dich nicht in der Zukunft“ — dieser Kernsatz aus der buddhistischen Lehre gibt diesem Retreat seinen Namen. Er lädt dazu ein, aus der Vergangenheit zu lernen, sich auf die Zukunft vorzubereiten, ohne sich in ihr zu verlieren, und ganz im gegenwärtigen Moment anzukommen.",
        "Wir üben geleitete und stille Sitz- und Gehmeditation, sanfte Yoga-Übungen und Tiefenentspannung, ergänzt durch Vorträge, Dharma-Austausch und kurze Wanderungen.",
        "Ein Retreat für einen frischen, mitfühlenden Blick auf sich selbst, die anderen und die Welt."
      ],
      en: [
        "\"Don't run after the past, don't lose yourself in the future\" — this core Buddhist teaching gives this retreat its name. It invites us to learn from the past, prepare for the future without losing ourselves in it, and arrive fully in the present moment.",
        "We practice guided and silent sitting and walking meditation, gentle yoga and deep relaxation, complemented by talks, Dharma exchange and short walks.",
        "A retreat for a fresh, compassionate view of ourselves, others and the world."
      ],
      vi: [
        "„Đừng chạy theo quá khứ, đừng đánh mất mình trong tương lai“ — câu dạy cốt lõi này của đạo Bụt là tên gọi của khóa tu. Đây là lời mời học hỏi từ quá khứ, chuẩn bị cho tương lai mà không đánh mất mình trong đó, và trở về trọn vẹn với giây phút hiện tại.",
        "Chúng ta thực tập thiền tọa và thiền hành có hướng dẫn và trong im lặng, các bài tập yoga nhẹ nhàng và thư giãn sâu, cùng với pháp thoại, pháp đàm và những buổi đi bộ ngắn.",
        "Một khóa tu để nhìn lại chính mình, người khác và thế giới bằng ánh mắt mới mẻ và từ bi hơn."
      ]
    },
    teacher: "annabelle-zinser",
    know: [
      { title: { de: "Sie teilen ein Zimmer", en: "You'll share a room", vi: "Quý vị sẽ ở chung phòng" },
        text: { de: "Außer im Einzelzimmer. Das gemeinsame Wohnen gehört in unserer Tradition zur Übung. Ohrstöpsel und Schlafmaske sind trotzdem eine gute Idee.",
                en: "Except in a single room. Shared living is part of the practice in our tradition. Earplugs and a sleep mask are still a good idea.",
                vi: "Trừ khi đăng ký phòng đơn. Sống chung là một phần của sự thực tập trong truyền thống chúng tôi. Nút bịt tai và mặt nạ ngủ vẫn là một ý hay." } },
      { title: { de: "Bettwäsche", en: "Bed linen", vi: "Ga trải giường" },
        text: { de: "Bringen Sie eigene mit oder mieten Sie ein Set für 10 €. Handtücher stellen wir, ein Badetuch bringen Sie bitte selbst mit.",
                en: "Bring your own or rent a set for €10. We provide towels; please bring your own bath towel.",
                vi: "Quý vị có thể mang theo hoặc thuê một bộ với giá 10 €. Chúng tôi cung cấp khăn tắm nhỏ, xin mang theo khăn tắm lớn của riêng mình." } },
      { title: { de: "Kleidung", en: "Clothing", vi: "Trang phục" },
        text: { de: "Schlicht, zurückhaltend, nicht zu bunt, Schultern und Beine bedeckt. Für die Sitzmeditation ist eine weite Hose angenehmer. Hausschuhe nicht vergessen.",
                en: "Simple, modest, not too bright, shoulders and legs covered. Loose trousers are more comfortable for sitting meditation. Don't forget slippers.",
                vi: "Giản dị, kín đáo, không quá sặc sỡ, che vai và chân. Quần rộng sẽ thoải mái hơn khi ngồi thiền. Đừng quên dép đi trong nhà." } },
      { title: { de: "Essen", en: "Meals", vi: "Ăn uống" },
        text: { de: "Drei vegane Mahlzeiten am Tag, gemeinsam im Speisesaal. Sonderdiäten können wir nicht zubereiten — bringen Sie dann bitte eigene Lebensmittel mit.",
                en: "Three vegan meals a day, eaten together in the dining hall. We cannot prepare special diets — please bring your own food in that case.",
                vi: "Ba bữa ăn chay mỗi ngày, dùng chung trong phòng ăn. Chúng tôi không thể chuẩn bị chế độ ăn đặc biệt — trong trường hợp đó, xin mang theo thức ăn riêng." } },
      { title: { de: "Durchgehende Teilnahme", en: "Full attendance", vi: "Tham dự trọn khóa" },
        text: { de: "Aus organisatorischen Gründen ist eine spätere Anreise oder frühere Abreise nicht möglich.",
                en: "For organisational reasons, later arrival or earlier departure is not possible.",
                vi: "Vì lý do tổ chức, không thể đến muộn hoặc về sớm." } },
      { title: { de: "Paare", en: "Couples", vi: "Các cặp đôi" },
        text: { de: "Können auf Wunsch zusammen untergebracht werden. Während des Retreats bitten wir alle um sexuelle Zurückhaltung, damit der geschützte Rahmen für alle gilt.",
                en: "Can be accommodated together on request. During the retreat we ask everyone to observe sexual restraint, so the protected space applies to all.",
                vi: "Có thể ở chung phòng nếu có yêu cầu. Trong suốt khóa tu, chúng tôi mong mọi người giữ gìn về mặt tình dục, để không gian an toàn được bảo vệ cho tất cả mọi người." } },
      { title: { de: "Kinder und Tiere", en: "Children and pets", vi: "Trẻ em và thú cưng" },
        text: { de: "Für dieses Retreat gibt es kein Kinderprogramm. Haustiere können wir im EIAB nicht aufnehmen.",
                en: "There is no children's programme for this retreat. We cannot accommodate pets at EIAB.",
                vi: "Khóa tu này không có chương trình dành cho trẻ em. EIAB không thể nhận thú cưng." } },
      { title: { de: "Wenn Sie unsicher sind", en: "If you're unsure", vi: "Nếu quý vị còn phân vân" },
        text: { de: "Bei Bedenken zu Ihrer körperlichen oder seelischen Verfassung schreiben Sie uns bitte vor der Anmeldung.",
                en: "If you have concerns about your physical or emotional wellbeing, please write to us before registering.",
                vi: "Nếu có lo ngại về sức khỏe thể chất hay tinh thần, xin hãy viết thư cho chúng tôi trước khi đăng ký." } }
    ]
  },

  "K2640-3": {
    description: {
      de: [
        "Dieser Kurs zur Geburtsvorbereitung verbindet Atem, Ton und Bewegung mit achtsamer Praxis. Meditative Methoden und Übungen begleiten Sie durch Schwangerschaft, Geburt und Wochenbett."
      ],
      en: [
        "This birth-preparation course combines breath, sound and movement with mindful practice. Meditative methods and exercises accompany you through pregnancy, birth and the post-partum period."
      ],
      vi: [
        "Khóa học chuẩn bị sinh nở này kết hợp hơi thở, âm thanh và vận động với sự thực tập chánh niệm. Các phương pháp và bài tập thiền định đồng hành cùng quý vị qua thai kỳ, sinh nở và thời gian ở cữ."
      ]
    },
    teacher: "monika-bruhl",
    know: [
      { title: { de: "Sie teilen ein Zimmer", en: "You'll share a room", vi: "Quý vị sẽ ở chung phòng" },
        text: { de: "Außer im Einzelzimmer. Das gemeinsame Wohnen gehört in unserer Tradition zur Übung. Ohrstöpsel und Schlafmaske sind trotzdem eine gute Idee.",
                en: "Except in a single room. Shared living is part of the practice in our tradition. Earplugs and a sleep mask are still a good idea.",
                vi: "Trừ khi đăng ký phòng đơn. Sống chung là một phần của sự thực tập trong truyền thống chúng tôi. Nút bịt tai và mặt nạ ngủ vẫn là một ý hay." } },
      { title: { de: "Bettwäsche", en: "Bed linen", vi: "Ga trải giường" },
        text: { de: "Bringen Sie eigene mit oder mieten Sie ein Set für 10 €. Handtücher stellen wir, ein Badetuch bringen Sie bitte selbst mit.",
                en: "Bring your own or rent a set for €10. We provide towels; please bring your own bath towel.",
                vi: "Quý vị có thể mang theo hoặc thuê một bộ với giá 10 €. Chúng tôi cung cấp khăn tắm nhỏ, xin mang theo khăn tắm lớn của riêng mình." } },
      { title: { de: "Kleidung", en: "Clothing", vi: "Trang phục" },
        text: { de: "Schlicht, zurückhaltend, nicht zu bunt, Schultern und Beine bedeckt. Für die Sitzmeditation ist eine weite Hose angenehmer. Hausschuhe nicht vergessen.",
                en: "Simple, modest, not too bright, shoulders and legs covered. Loose trousers are more comfortable for sitting meditation. Don't forget slippers.",
                vi: "Giản dị, kín đáo, không quá sặc sỡ, che vai và chân. Quần rộng sẽ thoải mái hơn khi ngồi thiền. Đừng quên dép đi trong nhà." } },
      { title: { de: "Essen", en: "Meals", vi: "Ăn uống" },
        text: { de: "Drei vegane Mahlzeiten am Tag, gemeinsam im Speisesaal. Sonderdiäten können wir nicht zubereiten — bringen Sie dann bitte eigene Lebensmittel mit.",
                en: "Three vegan meals a day, eaten together in the dining hall. We cannot prepare special diets — please bring your own food in that case.",
                vi: "Ba bữa ăn chay mỗi ngày, dùng chung trong phòng ăn. Chúng tôi không thể chuẩn bị chế độ ăn đặc biệt — trong trường hợp đó, xin mang theo thức ăn riêng." } },
      { title: { de: "Durchgehende Teilnahme", en: "Full attendance", vi: "Tham dự trọn khóa" },
        text: { de: "Aus organisatorischen Gründen ist eine spätere Anreise oder frühere Abreise nicht möglich.",
                en: "For organisational reasons, later arrival or earlier departure is not possible.",
                vi: "Vì lý do tổ chức, không thể đến muộn hoặc về sớm." } },
      { title: { de: "Kinder und Tiere", en: "Children and pets", vi: "Trẻ em và thú cưng" },
        text: { de: "Für dieses Retreat gibt es kein Kinderprogramm. Haustiere können wir im EIAB nicht aufnehmen.",
                en: "There is no children's programme for this retreat. We cannot accommodate pets at EIAB.",
                vi: "Khóa tu này không có chương trình dành cho trẻ em. EIAB không thể nhận thú cưng." } },
      { title: { de: "Wenn Sie unsicher sind", en: "If you're unsure", vi: "Nếu quý vị còn phân vân" },
        text: { de: "Bei Bedenken zu Ihrer körperlichen oder seelischen Verfassung schreiben Sie uns bitte vor der Anmeldung.",
                en: "If you have concerns about your physical or emotional wellbeing, please write to us before registering.",
                vi: "Nếu có lo ngại về sức khỏe thể chất hay tinh thần, xin hãy viết thư cho chúng tôi trước khi đăng ký." } }
    ]
  },

  "K2642-5": {
    description: {
      de: [
        "Dieses Retreat lädt ein, drei bewährte Wege buddhistischer Meditation gemeinsam zu erkunden — Metta, Vipassana und Zazen — um innere Klarheit, Ruhe und Herzenswärme zu kultivieren.",
        "Metta, die Praxis liebender Güte, öffnet das Herz und nährt Freundlichkeit und Mitgefühl. Vipassana übt uns darin, Körper und Geist aufmerksam und ohne Urteil zu beobachten. Zazen, das Sitzen in Stille, hilft dem Geist, sich zu setzen und im gegenwärtigen Moment verwurzelt zu bleiben.",
        "Das Programm verbindet Meditation, achtsames Zusammenleben, Gemeinschaft und persönliche Reflexion — ergänzt durch kurze Lehrreden, Austausch in der Gruppe und sanfte Körperübungen. Es steht Praktizierenden aller Erfahrungsstufen offen."
      ],
      en: [
        "This retreat invites you to explore three time-honoured paths of Buddhist meditation together — Metta, Vipassana and Zazen — to cultivate inner clarity, calm and warmth of heart.",
        "Metta, the practice of loving-kindness, opens the heart and fosters friendliness and compassion. Vipassana teaches us to observe body and mind attentively and without judgment. Zazen, sitting in stillness, helps the mind settle and remain grounded in the present moment.",
        "The programme balances meditation, mindful living, community and personal reflection — complemented by short teachings, group sharing and gentle body exercises. It is open to practitioners of all levels of experience."
      ],
      vi: [
        "Khóa tu này mời quý vị cùng khám phá ba con đường thiền tập lâu đời của đạo Bụt — Metta, Vipassana và Zazen — để nuôi dưỡng sự trong sáng nội tâm, an tĩnh và hơi ấm của trái tim.",
        "Metta, thực tập từ bi, mở rộng trái tim và nuôi dưỡng lòng thân ái, từ bi. Vipassana dạy chúng ta quán sát thân và tâm một cách chú tâm mà không phán xét. Zazen, ngồi trong tĩnh lặng, giúp tâm lắng xuống và an trú trong giây phút hiện tại.",
        "Chương trình kết hợp thiền tập, đời sống chánh niệm, cộng đồng và sự quán chiếu cá nhân — cùng với những bài pháp thoại ngắn, chia sẻ nhóm và các bài tập vận động nhẹ nhàng. Khóa tu mở rộng cho người thực tập ở mọi trình độ."
      ]
    },
    schedule: {
      items: [
        { time: "06:15", act: { de: "Taichi/Qi Gong (optional)", en: "Tai Chi/Qi Gong (optional)", vi: "Thái Cực Quyền/Khí Công (tùy chọn)" } },
        { time: "07:30", act: { de: "Frühstück", en: "Breakfast", vi: "Ăn sáng" } },
        { time: "09:00", act: { de: "Reflexion zur Praxis", en: "Practice reflections", vi: "Chia sẻ về sự thực tập" } },
        { time: "12:15", act: { de: "Achtsames Mittagessen", en: "Mindful lunch", vi: "Ăn trưa chánh niệm" } },
        { time: "18:00", act: { de: "Abendessen", en: "Dinner", vi: "Ăn tối" } },
        { time: "20:00", act: { de: "Sitzmeditation", en: "Sitting meditation", vi: "Thiền tọa" } }
      ]
    },
    know: [
      { title: { de: "Sie teilen ein Zimmer", en: "You'll share a room", vi: "Quý vị sẽ ở chung phòng" },
        text: { de: "Außer im Einzelzimmer. Das gemeinsame Wohnen gehört in unserer Tradition zur Übung. Ohrstöpsel und Schlafmaske sind trotzdem eine gute Idee.",
                en: "Except in a single room. Shared living is part of the practice in our tradition. Earplugs and a sleep mask are still a good idea.",
                vi: "Trừ khi đăng ký phòng đơn. Sống chung là một phần của sự thực tập trong truyền thống chúng tôi. Nút bịt tai và mặt nạ ngủ vẫn là một ý hay." } },
      { title: { de: "Bettwäsche", en: "Bed linen", vi: "Ga trải giường" },
        text: { de: "Bringen Sie eigene mit oder mieten Sie ein Set für 10 €. Handtücher stellen wir, ein Badetuch bringen Sie bitte selbst mit.",
                en: "Bring your own or rent a set for €10. We provide towels; please bring your own bath towel.",
                vi: "Quý vị có thể mang theo hoặc thuê một bộ với giá 10 €. Chúng tôi cung cấp khăn tắm nhỏ, xin mang theo khăn tắm lớn của riêng mình." } },
      { title: { de: "Essen", en: "Meals", vi: "Ăn uống" },
        text: { de: "Einfache, vollwertige vegane Mahlzeiten, gemeinsam im Speisesaal. Sonderdiäten können wir nicht zubereiten — bringen Sie dann bitte eigene Lebensmittel mit.",
                en: "Simple, wholesome vegan meals, eaten together in the dining hall. We cannot prepare special diets — please bring your own food in that case.",
                vi: "Các bữa ăn chay đơn giản, đầy đủ dinh dưỡng, dùng chung trong phòng ăn. Chúng tôi không thể chuẩn bị chế độ ăn đặc biệt — trong trường hợp đó, xin mang theo thức ăn riêng." } },
      { title: { de: "Unterkunft", en: "Accommodation", vi: "Chỗ ở" },
        text: { de: "Einfach und komfortabel, mit Zugang zum Leben der Klostergemeinschaft.",
                en: "Simple and comfortable, with access to the life of the monastic community.",
                vi: "Đơn giản và thoải mái, có thể tham gia vào đời sống của tăng thân." } },
      { title: { de: "Durchgehende Teilnahme", en: "Full attendance", vi: "Tham dự trọn khóa" },
        text: { de: "Aus organisatorischen Gründen ist eine spätere Anreise oder frühere Abreise nicht möglich.",
                en: "For organisational reasons, later arrival or earlier departure is not possible.",
                vi: "Vì lý do tổ chức, không thể đến muộn hoặc về sớm." } }
    ]
  }

};
