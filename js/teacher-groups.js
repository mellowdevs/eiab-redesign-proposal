// Shared config + renderer for the two "community" listing pages
// (ueber-uns/moenche-und-nonnen.html and ueber-uns/laien-kursleiter.html).
//
// Both pages have identical behavior: a page intro, then people bucketed into
// named subgroups, each rendered as a photo-card grid pulled live from
// window.EIAB_TEACHERS_MONASTIC / window.EIAB_TEACHERS_LAY. The only thing
// that differs between the two pages is which category they show and the
// copy for each subgroup — so that's the only thing this config carries.
// The actual page markup (subnav, mast) still lives in each HTML file since
// it's real page furniture, not part of the people data.

window.EIAB_TEACHER_GROUPS = {
  monastic: {
    registry: function () { return window.EIAB_TEACHERS_MONASTIC || {}; },
    defaultSubgroup: "visiting",
    subgroups: [
      {
        key: "resident",
        title: "Im EIAB ansässig",
        description: "Leben dauerhaft in Waldbröl und leiten den größten Teil des Programms.",
        pictureAspect: "1/1"
      },
      {
        key: "visiting",
        title: "Zu Besuch aus anderen Plum-Village-Zentren",
        description: "Begleiten einzelne Retreats und Wochen im EIAB, ihr Zuhause ist ein anderes Kloster der Tradition.",
        pictureAspect: "3/4"
      }
    ]
  },
  lay: {
    registry: function () { return window.EIAB_TEACHERS_LAY || {}; },
    defaultSubgroup: "other",
    subgroups: [
      {
        key: "dharma-teacher",
        title: "Dharmalehrerinnen und Dharmalehrer",
        description: "Von der Plum Village Sangha ordinierte Lehrerinnen und Lehrer, die eigenständig Dharma-Vorträge halten und Retreats leiten.",
        pictureAspect: "1/1"
      },
      {
        key: "order-member",
        title: "Mitglieder des Ordens des Interseins",
        description: 'Verpflichtet auf die <a href="../praxis/14-achtsamkeitsuebungen.html">14 Achtsamkeitsübungen</a>, begleiten sie Kurse und Sangha-Gruppen.',
        pictureAspect: "1/1"
      },
      {
        key: "other",
        title: "Weitere Kursleiterinnen und Kursleiter",
        description: "Erfahrene Praktizierende, die einzelne Kurse und Themenabende im EIAB anbieten.",
        pictureAspect: "1/1"
      }
    ]
  }
};

// Renders the subgroup sections (grouphead + photo-card grid) for one category
// into `mountEl`. Each HTML page still owns its own mast/kicker/h1/lede above
// this and its subnav/header/footer around it — this only fills in the part
// that both pages render identically.
window.EIAB_RENDER_TEACHER_LISTING = function (mountEl, categoryKey) {
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function applyPortraitPhoto(el, filename) {
    if (!filename || !el) return;
    var url = '../img/teachers/' + encodeURIComponent(filename);
    var probe = new Image();
    probe.onload = function () {
      el.classList.add('has-photo');
      el.style.backgroundImage = "url('" + url + "')";
    };
    probe.src = url;
  }

  var config = window.EIAB_TEACHER_GROUPS[categoryKey];
  if (!config) {
    console.error('EIAB_RENDER_TEACHER_LISTING: unknown category "' + categoryKey + '"');
    return;
  }
  var registry = config.registry();
  var buckets = {};
  config.subgroups.forEach(function (sg) { buckets[sg.key] = []; });

  Object.keys(registry).forEach(function (id) {
    var t = registry[id];
    // Entries only known as course instructors (no profile content yet) stay off
    // this community listing — they're still reachable via the course's own link.
    if (t.unlisted) return;
    // Missing/unrecognized subgroup falls back to the category's default bucket
    // rather than being dropped silently — safer than assuming, and shouldn't
    // come up often since real entries carry a real subgroup value.
    var key = buckets[t.subgroup] ? t.subgroup : config.defaultSubgroup;
    buckets[key].push(id);
  });

  mountEl.innerHTML = config.subgroups.map(function (sg) {
    return (
      '<section' + (sg.pictureAspect !== '1/1' ? ' class="other"' : '') + '>' +
        '<div class="grouphead">' +
          '<h2>' + esc(sg.title) + '</h2>' +
          '<p>' + sg.description + '</p>' +
        '</div>' +
        '<div class="people" id="group-' + sg.key + '"></div>' +
      '</section>'
    );
  }).join('');

  config.subgroups.forEach(function (sg) {
    var container = mountEl.querySelector('#group-' + sg.key);
    buckets[sg.key].forEach(function (id) {
      var t = registry[id];
      var a = document.createElement('a');
      a.className = 'person';
      a.href = '../personen/person.html?id=' + encodeURIComponent(id);
      var roleText = t.role && (t.role.de || '');
      a.innerHTML =
        '<div class="pic" aria-hidden="true"></div>' +
        '<div class="nm">' + esc(t.name) + '</div>' +
        (roleText ? '<div class="role">' + esc(roleText) + '</div>' : '');
      container.appendChild(a);
      applyPortraitPhoto(a.querySelector('.pic'), t.img || (id + '.png'));
    });
  });
};
