// Boutons « Copier » de la section contact
document.querySelectorAll('.copy').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var el = document.getElementById(btn.dataset.target);
    var text = el.textContent.trim();
    var done = function () { btn.textContent = 'Copié'; setTimeout(function () { btn.textContent = 'Copier'; }, 1600); };
    var fallback = function () {
      var r = document.createRange(); r.selectNodeContents(el);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      btn.textContent = 'Sélectionné';
      setTimeout(function () { btn.textContent = 'Copier'; }, 1600);
    };
    try {
      navigator.clipboard.writeText(text).then(done, fallback);
    } catch (e) { fallback(); }
  });
});
