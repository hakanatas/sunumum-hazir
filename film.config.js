/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "sunumum-hazir",
    "title": "Sunumum Hazır",
    "titleEn": "My Deck Is Ready",
    "grade": 5,
    "theme": "Dijital Ürün Tasarımı ve Geliştirme",
    "code": "BTY.5.2.7",
    "outcome": "Sunum dosyası geliştirebilme",
    "outcomeEn": "Developing a presentation file",
    "duration": 124.5,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 14.6,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 14.6,
      "t1": 36.6,
      "name": "Plan",
      "en": "Plan",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 36.6,
      "t1": 59.3,
      "name": "Telif ve lisans",
      "en": "Copyright and licences",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 59.3,
      "t1": 87.4,
      "name": "Sunumu oluştur",
      "en": "Build the deck",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 87.4,
      "t1": 109,
      "name": "Ölçütlerle değerlendir",
      "en": "Check with criteria",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 109,
      "t1": 124.5,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
