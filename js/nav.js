(function () {
  var STYLE_ID = 'eiab-header-styles';
  if (!document.getElementById(STYLE_ID)) {
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent =
      'eiab-header{display:block}' +
      '.top{position:sticky;top:0;z-index:60;background:rgba(237,238,231,.93);backdrop-filter:blur(9px);border-bottom:1px solid rgba(27,42,34,.11)}' +
      '.top-in{display:flex;align-items:center;gap:1.6rem;min-height:70px}' +
      '.mark{display:flex;align-items:center;gap:.6rem;text-decoration:none;flex:0 0 auto;color:inherit}' +
      '.mark img{height:38px;width:38px;display:block;flex:0 0 auto}' +
      '.mark b{font-family:var(--serif);font-weight:400;font-size:1.42rem;letter-spacing:.06em}' +
      '.mark span{font-family:var(--sans);font-size:.68rem;font-weight:400;color:var(--pine-soft);max-width:12ch;line-height:1.25;letter-spacing:.01em}' +
      'nav.main{margin-left:auto;display:flex;gap:1.5rem;font-family:var(--sans);font-size:.85rem;font-weight:400}' +
      'nav.main a{text-decoration:none;padding:.4rem 0;border-bottom:1.5px solid transparent;transition:border-color .18s;color:inherit}' +
      'nav.main a:hover,nav.main a[aria-current="page"]{border-bottom-color:var(--moss)}' +
      'nav.main a.tribute{font-family:var(--serif);font-style:italic;font-size:1rem;color:var(--plum);letter-spacing:.02em}' +
      'nav.main a.tribute:hover,nav.main a.tribute[aria-current="page"]{border-bottom-color:var(--plum)}' +
      '.lang{display:flex;gap:.1rem;font-family:var(--sans);font-size:.76rem;border:1px solid rgba(27,42,34,.2);border-radius:99px;padding:.13rem;background:rgba(255,255,255,.4)}' +
      '.lang button{border:0;background:none;font:inherit;color:var(--pine-soft);padding:.24rem .58rem;border-radius:99px;cursor:pointer;display:none;white-space:nowrap}' +
      '.lang button[aria-pressed="true"]{display:inline-block;background:var(--pine);color:var(--mist)}' +
      '.lang:hover button,.lang:focus-within button{display:inline-block}' +
      '.give{font-family:var(--sans);font-size:.83rem;font-weight:500;text-decoration:none;background:var(--plum);color:#fff;padding:.55rem 1.15rem;border-radius:99px;display:inline-block;transition:.15s}' +
      '.give:hover{background:var(--plum-lift)}' +
      '.burger{display:none;border:0;background:var(--pine);color:var(--mist);cursor:pointer;' +
      'position:fixed;right:1.1rem;bottom:1.1rem;z-index:120;width:54px;height:54px;border-radius:50%;' +
      'align-items:center;justify-content:center;box-shadow:0 6px 18px rgba(0,0,0,.28);font-size:1.5rem;line-height:1;padding:0}' +
      '@media (max-width:900px){nav.main,.lang,.give,nav.subnav{display:none}.burger{display:flex}}' +
      '.mobile-menu{position:fixed;inset:0;z-index:150;background:var(--pine);color:#F3F4EE;display:flex;flex-direction:column;' +
      'padding:1.3rem 1.3rem 2rem;transform:translateY(12px);opacity:0;visibility:hidden;transition:opacity .22s ease,transform .22s ease,visibility .22s}' +
      '.mobile-menu.open{opacity:1;transform:translateY(0);visibility:visible}' +
      '.mobile-menu-top{display:flex;justify-content:flex-end;align-items:center;gap:.7rem}' +
      '.lang-mobile{position:relative}' +
      '.lang-mobile-toggle{display:flex;align-items:center;gap:.4rem;border:1px solid rgba(243,244,238,.4);background:none;color:#F3F4EE;' +
      'padding:.35rem .7rem;border-radius:99px;font-family:var(--sans);font-size:.78rem;cursor:pointer}' +
      '.lang-mobile-toggle .chevron{font-size:.65rem;transition:transform .2s}' +
      '.lang-mobile.open .lang-mobile-toggle .chevron{transform:rotate(180deg)}' +
      '.lang-mobile-list{position:absolute;top:calc(100% + .5rem);right:0;background:#0F1712;border:1px solid rgba(243,244,238,.25);' +
      'border-radius:10px;padding:.3rem;display:none;flex-direction:column;min-width:130px;box-shadow:0 10px 24px rgba(0,0,0,.35);z-index:5}' +
      '.lang-mobile.open .lang-mobile-list{display:flex}' +
      '.lang-mobile-list button{border:0;background:none;color:#F3F4EE;padding:.55rem .7rem;border-radius:6px;font-family:var(--sans);' +
      'font-size:.85rem;text-align:left;cursor:pointer}' +
      '.lang-mobile-list button:hover{background:rgba(243,244,238,.1)}' +
      '.lang-mobile-list button[aria-pressed="true"]{background:rgba(243,244,238,.16);font-weight:500}' +
      '.mobile-close{width:38px;height:38px;border-radius:50%;border:1px solid rgba(243,244,238,.4);background:none;color:#F3F4EE;' +
      'font-size:1.1rem;cursor:pointer;flex:0 0 auto;display:flex;align-items:center;justify-content:center;padding:0}' +
      '.mobile-nav{display:flex;flex-direction:column;margin-top:2.6rem;overflow-y:auto}' +
      '.mobile-item{border-bottom:1px solid rgba(243,244,238,.14)}' +
      '.mobile-item-row{display:flex;align-items:stretch}' +
      '.mobile-nav a{color:#F3F4EE;text-decoration:none;font-family:var(--serif);font-size:1.65rem;font-weight:300;padding:.75rem 0;display:block;flex:1 1 auto}' +
      '.mobile-nav a.tribute{font-style:italic;color:#E8C9D4}' +
      '.mobile-toggle{flex:0 0 auto;background:none;border:0;color:rgba(243,244,238,.7);font-size:1.1rem;padding:0 .3rem;cursor:pointer;transition:transform .2s}' +
      '.mobile-item.expanded .mobile-toggle{transform:rotate(180deg)}' +
      '.mobile-sub-group{display:none;flex-direction:column;padding:0 0 .7rem 1.1rem}' +
      '.mobile-item.expanded .mobile-sub-group{display:flex}' +
      '.mobile-sub-group a{font-family:var(--sans);font-size:1rem;font-weight:400;color:rgba(243,244,238,.72);padding:.4rem 0;flex:none}' +
      '.mobile-sub-group a[aria-current]{color:#F3F4EE;font-weight:500}' +
      '.mobile-give{margin-top:auto;text-align:center;font-family:var(--sans);font-weight:500;background:var(--mist);color:var(--pine);padding:.9rem;border-radius:99px;text-decoration:none}' +
      '@media (min-width:901px){.mobile-menu{display:none}}';
    document.head.appendChild(style);
  }

  var LANG_KEY = 'eiab-lang';

  function getLang() {
    try {
      return localStorage.getItem(LANG_KEY) || 'DE';
    } catch (e) {
      return 'DE';
    }
  }

  function setLang(key) {
    try {
      localStorage.setItem(LANG_KEY, key);
    } catch (e) {
    }
    window.dispatchEvent(new CustomEvent('eiab:langchange', {detail: {lang: key}}));
  }

  window.EIAB_I18N = window.EIAB_I18N || {getLang: getLang, setLang: setLang};

  // Single source of truth for both the main nav and every section's subnav —
  // used by the desktop <eiab-subnav> bar, the mobile menu's per-section
  // accordion, AND (via .label/.i18n) the main top nav itself. A section's own
  // root page is always subnav item 0, matching how every section already
  // linked to itself first in its desktop subnav bar.
  var LINKS = [
    {key: 'thay', href: 'thich-nhat-hanh.html', label: 'Thích Nhất Hạnh', special: true},
    {
      key: 'ueber-uns', href: 'ueber-uns/ueber-uns.html', label: 'Über uns',
      i18n: {ENG: 'About us', VI: 'Về chúng tôi'},
      subnav: [
        {href: 'ueber-uns/ueber-uns.html', label: 'Über das EIAB', i18n: {ENG: 'About EIAB', VI: 'Về EIAB'}},
        {
          href: 'ueber-uns/moenche-und-nonnen.html',
          label: 'Mönche und Nonnen',
          i18n: {ENG: 'Monks and Nuns', VI: 'Tăng Ni'}
        },
        {
          href: 'ueber-uns/laien-kursleiter.html',
          label: 'Lehrerinnen und Lehrer aus der Laiengemeinschaft',
          i18n: {ENG: 'Lay Dharma Teachers', VI: 'Giáo thọ cư sĩ'}
        },
        {
          href: 'ueber-uns/history.html',
          label: 'Das Haus und seine Geschichte',
          i18n: {ENG: 'The House and Its History', VI: 'Ngôi nhà và lịch sử'}
        },
        {
          href: 'info/kontakt.html',
          label: 'Anfahrt und Kontakt',
          i18n: {ENG: 'Directions and Contact', VI: 'Đường đi và Liên hệ'}
        }
      ]
    },
    {
      key: 'praxis', href: 'praxis/praxis.html', label: 'Praxis',
      i18n: {ENG: 'Practice', VI: 'Thực hành'},
      subnav: [
        {href: 'praxis/praxis.html', label: 'Praxis', i18n: {ENG: 'Practice', VI: 'Thực hành'}},
        {
          href: 'praxis/5-achtsamkeitsuebungen.html',
          label: 'Die 5 Achtsamkeitsübungen',
          i18n: {ENG: 'The Five Mindfulness Trainings', VI: 'Năm Giới'}
        },
        {
          href: 'praxis/14-achtsamkeitsuebungen.html',
          label: 'Die 14 Achtsamkeitsübungen',
          i18n: {ENG: 'The Fourteen Mindfulness Trainings', VI: 'Mười Bốn Giới'}
        },
        {href: 'praxis/neubeginn.html', label: 'Neubeginn', i18n: {ENG: 'Beginning Anew', VI: 'Làm mới'}}
      ]
    },
    {
      key: 'programm', href: 'programm/program.html', label: 'Programm',
      i18n: {ENG: 'Program', VI: 'Chương trình'},
      subnav: [
        {
          href: 'programm/program.html',
          label: 'Retreats im eiab',
          i18n: {ENG: 'Retreats at EIAB', VI: 'Khóa tu tại EIAB'}
        },
        {href: 'programm/anmeldung.html', label: 'Anmeldung', i18n: {ENG: 'Registration', VI: 'Đăng ký'}}
      ]
    },
    {
      key: 'medien', href: 'medien/news.html', label: 'Medien',
      i18n: {ENG: 'Media', VI: 'Truyền thông'},
      subnav: [
        {href: 'medien/news.html', label: 'News', i18n: {ENG: 'News', VI: 'Tin tức'}},
        {href: 'medien/magazin.html', label: 'Magazin', i18n: {ENG: 'Magazine', VI: 'Tạp chí'}}
      ]
    }
  ];

  var LINKS_BY_KEY = {};
  LINKS.forEach(function (l) {
    LINKS_BY_KEY[l.key] = l;
  });

  var STR_I18N = {
    give: {DE: 'Spenden', ENG: 'Donate', VI: 'Quyên góp'},
    burger: {DE: 'Menü', ENG: 'Menu', VI: 'Menu'},
    langGroup: {DE: 'Sprache wählen', ENG: 'Choose language', VI: 'Chọn ngôn ngữ'},
    toggle: {DE: 'Untermenü', ENG: 'Submenu', VI: 'Menu con'}
  };

  function t(dict, lang, fallback) {
    return (dict && dict[lang]) || fallback;
  }

  const LANG = {
    DE: {key: 'DE', label: 'Deutsch'},
    ENG: {key: 'ENG', label: 'English'},
    VI: {key: 'VI', label: 'Tiếng Việt'}
  };

  function render(el) {
    var current = el.getAttribute('current') || 'besuch';
    var base = el.getAttribute('base') || '';
    var lang = getLang();

    var navLinks = LINKS.map(function (l) {
      var cls = l.special ? ' class="tribute"' : '';
      var label = l.special ? l.label : t(l.i18n, lang, l.label);
      return '<a href="' + base + l.href + '"' + cls + (l.key === current ? ' aria-current="page"' : '') + '>' + label + '</a>';
    }).join('');

    // On mobile, every section's subpages are always reachable in the full-page menu (accordion),
    // not just the section the visitor currently happens to be on.
    var currentFile = (location.pathname.split('/').pop() || '').toLowerCase();
    var navLinksMobile = LINKS.map(function (l) {
      var cls = l.special ? ' class="tribute"' : '';
      var label = l.special ? l.label : t(l.i18n, lang, l.label);
      var a = '<a href="' + base + l.href + '"' + cls + (l.key === current ? ' aria-current="page"' : '') + '>' + label + '</a>';
      var subs = l.subnav;
      if (!subs) return '<div class="mobile-item"><div class="mobile-item-row">' + a + '</div></div>';

      var isCurrentSection = l.key === current;
      var subHtml = subs.map(function (s) {
        var isActive = s.href.split('/').pop().toLowerCase() === currentFile;
        return '<a href="' + base + s.href + '"' + (isActive ? ' aria-current="page"' : '') + '>' + t(s.i18n, lang, s.label) + '</a>';
      }).join('');
      var toggle = '<button type="button" class="mobile-toggle" aria-expanded="' + isCurrentSection + '" aria-label="' + t(STR_I18N.toggle, lang, 'Untermenü') + '">▾</button>';
      return '<div class="mobile-item' + (isCurrentSection ? ' expanded' : '') + '">' +
        '<div class="mobile-item-row">' + a + toggle + '</div>' +
        '<div class="mobile-sub-group">' + subHtml + '</div>' +
        '</div>';
    }).join('');

    var wasOpen = !!el.querySelector('.mobile-menu.open');

    el.innerHTML =
      '<header class="top">' +
      '<div class="wrap top-in">' +
      '<a class="mark" href="' + base + 'index.html"><img src="' + base + 'img/logo.png" alt="" width="38" height="38"><b>EIAB</b></a>' +
      '<nav class="main">' + navLinks + '</nav>' +
      '<div id="langs" class="lang" role="group" aria-label="' + t(STR_I18N.langGroup, lang, 'Sprache wählen') + '">' +
      '</div>' +
      '<a class="give" href="' + base + 'info/spenden.html">' + t(STR_I18N.give, lang, 'Spenden') + '</a>' +
      '</div>' +
      '</header>' +
      '<button class="burger" aria-expanded="' + wasOpen + '" aria-label="' + t(STR_I18N.burger, lang, 'Menü') + '">' + (wasOpen ? '✕' : '☰') + '</button>' +
      '<div class="mobile-menu' + (wasOpen ? ' open' : '') + '" id="mobileMenu" role="dialog" aria-modal="true" aria-label="' + t(STR_I18N.burger, lang, 'Menü') + '">' +
      '<div class="mobile-menu-top">' +
      '<div id="langsMobile" class="lang-mobile" role="group" aria-label="' + t(STR_I18N.langGroup, lang, 'Sprache wählen') + '"></div>' +
      '<button class="mobile-close" type="button" aria-label="Schließen">✕</button>' +
      '</div>' +
      '<nav class="mobile-nav">' + navLinksMobile + '</nav>' +
      '<a class="mobile-give" href="' + base + 'info/spenden.html">' + t(STR_I18N.give, lang, 'Spenden') + '</a>' +
      '</div>';

    var langsEl = el.querySelector('#langs');
    var langsMobileEl = el.querySelector('#langsMobile');

    function renderLangs() {
      var current = getLang();
      langsEl.innerHTML = Object.values(LANG).map(function (l) {
        return '<button type="button" aria-pressed="' + (l.key === current ? 'true' : 'false') + '" data-lang="' + l.key + '">' + l.label + '</button>';
      }).join('');

      var currentEntry = LANG[current] || LANG.DE;
      langsMobileEl.innerHTML =
        '<button type="button" class="lang-mobile-toggle" aria-haspopup="listbox" aria-expanded="false">' +
        '<span class="lang-mobile-current">' + currentEntry.label + '</span><span class="chevron">▾</span>' +
        '</button>' +
        '<div class="lang-mobile-list" role="listbox">' +
        Object.values(LANG).map(function (l) {
          return '<button type="button" role="option" aria-pressed="' + (l.key === current ? 'true' : 'false') + '" data-lang="' + l.key + '">' + l.label + '</button>';
        }).join('') +
        '</div>';
    }

    renderLangs();

    langsEl.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      setLang(btn.getAttribute('data-lang'));
      render(el);
    });

    var langToggle = langsMobileEl.querySelector('.lang-mobile-toggle');
    langToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = langsMobileEl.classList.toggle('open');
      langToggle.setAttribute('aria-expanded', String(open));
    });
    langsMobileEl.querySelector('.lang-mobile-list').addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      setLang(btn.getAttribute('data-lang'));
      render(el);
    });

    var burger = el.querySelector('.burger');
    var menu = el.querySelector('.mobile-menu');
    var closeBtn = el.querySelector('.mobile-close');

    menu.addEventListener('click', function (e) {
      if (langsMobileEl.classList.contains('open') && !langsMobileEl.contains(e.target)) {
        langsMobileEl.classList.remove('open');
        langToggle.setAttribute('aria-expanded', 'false');
      }
    });

    function openMenu() {
      menu.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
      burger.textContent = '✕';
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function closeMenu() {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.textContent = '☰';
      document.body.style.overflow = '';
      burger.focus();
    }

    burger.addEventListener('click', function () {
      if (menu.classList.contains('open')) closeMenu(); else openMenu();
    });
    closeBtn.addEventListener('click', closeMenu);
    menu.querySelectorAll('.mobile-nav a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    menu.querySelectorAll('.mobile-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.mobile-item');
        var open = item.classList.toggle('expanded');
        btn.setAttribute('aria-expanded', String(open));
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
    });

    if (wasOpen) {
      document.body.style.overflow = 'hidden';
    }
  }

  // Desktop subnav bar for one section, e.g.
  // <eiab-subnav section="praxis" current="neubeginn.html" base="../"></eiab-subnav>
  // Reads the same LINKS[].subnav data as the mobile accordion above, so a page's
  // subnav items and their translations only ever need to be edited in one place.
  function renderSubnav(el) {
    var sectionKey = el.getAttribute('section');
    var current = (el.getAttribute('current') || '').toLowerCase();
    var base = el.getAttribute('base') || '';
    var section = LINKS_BY_KEY[sectionKey];
    if (!section || !section.subnav) {
      console.error('eiab-subnav: unknown section "' + sectionKey + '"');
      return;
    }

    function render() {
      var lang = getLang();
      var label = t(section.i18n, lang, section.label);
      var links = section.subnav.map(function (s) {
        var isActive = s.href.split('/').pop().toLowerCase() === current;
        return '<a href="' + base + s.href + '"' + (isActive ? ' aria-current="page"' : '') + '>' + t(s.i18n, lang, s.label) + '</a>';
      }).join('');
      el.innerHTML =
        '<nav class="subnav" aria-label="' + label + '">' +
        '<div class="wrap subnav-in">' + links + '</div>' +
        '</nav>';
    }

    render();
    window.addEventListener('eiab:langchange', render);
  }

  if (typeof customElements !== 'undefined') {
    customElements.define('eiab-header', class extends HTMLElement {
      connectedCallback() {
        render(this);
      }
    });
    customElements.define('eiab-subnav', class extends HTMLElement {
      connectedCallback() {
        renderSubnav(this);
      }
    });
  }
})();
