(function(){
  var STYLE_ID = 'eiab-footer-styles';
  if(!document.getElementById(STYLE_ID)){
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent =
      'eiab-footer{display:block}' +
      'footer{background:#14201A;color:rgba(233,236,227,.78);font-family:var(--sans);font-size:.85rem;padding-block:3.4rem 2rem;margin-top:1.5rem}' +
      '.fgrid{display:grid;grid-template-columns:1.3fr 1fr 1fr 1fr;gap:2.4rem}' +
      'footer h4{font-family:var(--sans);font-size:.74rem;font-weight:500;color:var(--stone);margin-bottom:1rem;letter-spacing:.04em}' +
      'footer ul{list-style:none;padding:0;margin:0;display:grid;gap:.5rem}' +
      'footer a{text-decoration:none;color:rgba(233,236,227,.78)}' +
      'footer a:hover{color:#fff;text-decoration:underline;text-underline-offset:3px}' +
      '.addr{font-family:var(--serif);font-size:1rem;line-height:1.6;color:rgba(233,236,227,.9)}' +
      '.addr b{display:block;font-weight:400;font-size:1.25rem;color:#F4F6EE;margin-bottom:.7rem}' +
      '.legal{display:flex;gap:1.4rem;flex-wrap:wrap;margin-top:2.8rem;padding-top:1.3rem;border-top:1px solid rgba(233,236,227,.16);font-size:.76rem;color:rgba(233,236,227,.55)}' +
      '@media (max-width:960px){.fgrid{grid-template-columns:1fr 1fr}}' +
      '@media (max-width:560px){.fgrid{grid-template-columns:1fr}}';
    document.head.appendChild(style);
  }

  var COLUMNS = [
    { title: 'Programm und Praxis', titleI18n:{ENG:'Programme and Practice', VI:'Chương trình và Thực hành'}, links: [
      {key:'retreats', href:'programm/program.html', label:'Alle Retreats', i18n:{ENG:'All retreats', VI:'Tất cả khóa tu'}},
      {key:'praxis', href:'praxis/praxis.html', label:'Praxis', i18n:{ENG:'Practice', VI:'Thực hành'}},
      {key:'anmeldung', href:'programm/anmeldung.html', label:'Anmeldung und Beitrag', i18n:{ENG:'Registration and fees', VI:'Đăng ký và chi phí'}},
    ]},
    { title: 'Die Gemeinschaft', titleI18n:{ENG:'The Community', VI:'Tăng thân'}, links: [
      {key:'moenche', href:'ueber-uns/moenche-und-nonnen.html', label:'Mönche und Nonnen', i18n:{ENG:'Monks and nuns', VI:'Tăng ni'}},
      {key:'lehrer', href:'ueber-uns/laien-kursleiter.html', label:'Lehrerinnen und Lehrer', i18n:{ENG:'Lay teachers', VI:'Giảng viên cư sĩ'}},
      {key:'geschichte', href:'ueber-uns/history.html', label:'Das Haus und seine Geschichte', i18n:{ENG:'The house and its history', VI:'Ngôi nhà và lịch sử'}},
      {key:'magazin', href:'medien/magazin.html', label:'EIAB-Magazin', i18n:{ENG:'EIAB magazine', VI:'Tạp chí EIAB'}},
      {key:'news', href:'medien/news.html', label:'Nachrichten', i18n:{ENG:'News', VI:'Tin tức'}}
    ]},
    { title: 'In unserer Tradition', titleI18n:{ENG:'In Our Tradition', VI:'Trong Truyền Thống Của Chúng Tôi'}, links: [
      {key:'plumvillage', href:'https://plumvillage.org', label:'Plum Village, Frankreich', i18n:{ENG:'Plum Village, France', VI:'Làng Mai, Pháp'}, external:true},
      {key:'maison', href:'https://plumvillage.org/practice-centre/maison-de-linspir', label:'Maison de l\'Inspir, Paris', external:true},
      {key:'deerpark', href:'https://deerparkmonastery.org', label:'Deer Park Monastery, USA', external:true},
      {key:'thai', href:'https://www.thaiplumvillage.org', label:'Thai Plum Village', external:true},
      {key:'sangha', href:'http://intersein.de/', label:'Sangha-Gruppen in Deutschland', i18n:{ENG:'Sangha groups in Germany', VI:'Các nhóm Sangha tại Đức'}, external:true}
    ]}
  ];

  var LEGAL = [
    {key:'impressum', href:'info/impressum.html', label:'Impressum', i18n:{ENG:'Imprint', VI:'Thông tin pháp lý'}},
    {key:'datenschutz', href:'info/datenschutz.html', label:'Datenschutz', i18n:{ENG:'Privacy policy', VI:'Chính sách bảo mật'}},
    {key:'schutzkonzept', href:'info/schutzkonzept.html', label:'Schutzkonzept', i18n:{ENG:'Safeguarding policy', VI:'Chính sách bảo vệ'}}
  ];

  var STR_I18N = {
    visit: {DE:'Besuchen Sie uns', ENG:'Visit us', VI:'Ghé thăm chúng tôi'},
    kontakt: {DE:'Anfahrt und Kontakt', ENG:'Directions and contact', VI:'Chỉ đường và liên hệ'},
    country: {DE:'Deutschland', ENG:'Germany', VI:'Đức'}
  };
  function t(dict, lang, fallback){
    return (dict && dict[lang]) || fallback;
  }

  function render(el){
    var current = el.getAttribute('current') || '';
    var base = el.getAttribute('base') || '';
    var lang = (window.EIAB_I18N && window.EIAB_I18N.getLang()) || 'DE';

    function linkHtml(l){
      var attrs = (l.key === current ? ' aria-current="page"' : '') +
        (l.external ? ' target="_blank" rel="noopener noreferrer"' : '');
      var href = l.external ? l.href : (base + l.href);
      var label = t(l.i18n, lang, l.label);
      return '<a href="' + href + '"' + attrs + '>' + label + '</a>';
    }

    var columnsHtml = COLUMNS.map(function(col){
      var title = t(col.titleI18n, lang, col.title);
      return '<div><h4>' + title + '</h4><ul>' + col.links.map(function(l){
        return '<li>' + linkHtml(l) + '</li>';
      }).join('') + '</ul></div>';
    }).join('');

    var legalHtml = LEGAL.map(linkHtml).join('');

    el.innerHTML =
      '<footer>' +
        '<div class="wrap">' +
          '<div class="fgrid">' +
            '<div>' +
              '<h4>' + t(STR_I18N.visit, lang, 'Besuchen Sie uns') + '</h4>' +
              '<p class="addr"><b>EIAB</b>Schaumburgweg 3<br>51545 Waldbröl<br>' + t(STR_I18N.country, lang, 'Deutschland') + '</p>' +
              '<p style="margin-top:1rem">' + linkHtml({key:'kontakt', href:'info/kontakt.html', label:'Anfahrt und Kontakt', i18n:STR_I18N.kontakt}) + '</p>' +
            '</div>' +
            columnsHtml +
          '</div>' +
          '<div class="legal">' +
            '<span>© 2026 EIAB gGmbH</span>' +
            legalHtml +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  if(typeof customElements !== 'undefined'){
    customElements.define('eiab-footer', class extends HTMLElement {
      connectedCallback(){
        render(this);
        window.addEventListener('eiab:langchange', function(){ render(this); }.bind(this));
      }
    });
  }
})();
