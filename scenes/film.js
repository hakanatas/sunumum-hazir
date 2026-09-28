/* ─────────────────────────────────────────────────────────────
   SUNUMUM HAZIR — BTY.5.2.7 (senaryo)
   Her vuruş bir altyazıdır: tr, en, note (öğretmen için seslendirme).
   Değiştirdikten sonra: npm run build
   ───────────────────────────────────────────────────────────── */
BF.defineFilm({
  meta: {
    slug: 'sunumum-hazir', title: 'Sunumum Hazır', titleEn: 'My Deck Is Ready', code: 'BTY.5.2.7',
    outcomeEn: 'Developing a presentation file',
    summary: '"Ekran Molası" konulu bir sunum dosyası hazırlanır. Önce süreç planlanır: konu, güvenilir kaynak, içerik seçimi, slaytlar ve kaynakça. İçerik seçerken telif hakkı ve lisanslar (Creative Commons, kamu malı) dikkate alınır. Sunum programında slayt eklenir, tema seçilir, başlık, maddeler ve görsel eklenir, geçiş ve konuşmacı notu kullanılır. Son olarak sunum; doğruluk, kaynakça, okunaklılık ve yapay zekâ içeriğinin kontrolü ölçütleriyle değerlendirilir.',
    summaryEn: 'Karo builds a deck on screen breaks: plan the process, choose content with copyright and licences in mind, build slides with theme, bullets, images, transitions and speaker notes, and check it for accuracy, references, readability and verified AI content.',
    blurb: 'Plan, telif ve lisans, slaytları hazırlamak, kaynakça ve ölçütlerle değerlendirme.',
    posterAlt: 'Başlık ve Karo; çevresinde slayt, telif, lisans ve göz karoları',
  },
  scenes: [
    { type: 'intro', icons: [{ icon: 'slides', c: 'mercan' }, { icon: 'eyeTired', c: 'kobalt' }, { icon: 'clock', c: 'safran' }, { icon: 'copyright', c: 'mor' }, { icon: 'cc', c: 'zumrut' }, { icon: 'search', c: 'turkuaz' }, { icon: 'library', c: 'kobalt' }, { icon: 'rubric', c: 'safran' }],
      beats: [
        { tr: 'Konumuz: ekran molası', en: 'Our topic: screen breaks',
          note: 'Karo\'nun grubu dijital bağımlılık hakkında bir sunum hazırlayacak. Konuları: ekran molası.' },
        { tr: 'Sunum dosyamızı adım adım hazırlayalım', en: 'Let\'s build our presentation file step by step',
          note: 'Bu derste bir sunum dosyasını baştan sona hazırlayıp değerlendireceğiz.' },
      ] },
    { type: 'steps', name: 'Plan', en: 'Plan', desc: 'Konu, güvenilir kaynak, içerik seçimi, slaytlar ve kaynakça.', out: 'a',
      steps: [
        { icon: 'target', label: 'Konu', text: 'Ekran molası', c: 'mercan' },
        { icon: 'search', label: 'Araştır', text: 'Güvenilir kaynaklardan bilgi bul', c: 'turkuaz' },
        { icon: 'cc', label: 'Seç', text: 'Kullanabileceğin görselleri seç', c: 'zumrut' },
        { icon: 'slides', label: 'Hazırla', text: 'Slaytları oluştur', c: 'kobalt' },
        { icon: 'library', label: 'Kaynakça', text: 'Son slayta kaynakları yaz', c: 'safran' },
      ],
      beats: [
        { tr: 'Konuyu seç, güvenilir kaynaklardan araştır', en: 'Pick the topic and research reliable sources', show: 2,
          note: 'Önce konumuzu belirleriz. Sonra bilgiyi güvenilir kaynaklardan araştırırız: resmi kurumların ve uzmanların sayfaları gibi.' },
        { tr: 'İçeriği seç, slaytları hazırla', en: 'Choose the content and build the slides', show: 4,
          note: 'Kullanacağımız görselleri ve metinleri seçer, slaytları hazırlarız.' },
        { tr: 'En sona kaynakçayı ekle', en: 'Add the references at the end', show: 5,
          note: 'Son slayta kullandığımız kaynakları yazarız. Buna kaynakça denir.' },
      ] },
    { type: 'sort', name: 'Telif ve lisans', en: 'Copyright and licences', desc: 'Hangi içerik serbestçe kullanılabilir, hangisi izin gerektirir?', out: 'a',
      bins: [{ label: 'KULLANABİLİRİM', c: 'zumrut' }, { label: 'İZİN GEREKİR', c: 'mercan' }],
      items: [
        { icon: 'photo', name: 'Kendi çektiğim fotoğraf', bin: 0, beat: 1 },
        { icon: 'cc', name: 'CC lisanslı çizim (kaynağıyla)', bin: 0, beat: 1 },
        { icon: 'library', name: 'Kamu malı eski bir fotoğraf', bin: 0, beat: 1 },
        { icon: 'film', name: 'Bir filmin afişi', bin: 1, beat: 2 },
        { icon: 'headphones', name: 'Ünlü bir şarkı', bin: 1, beat: 2 },
      ],
      beats: [
        { tr: 'Her görseli kullanabilir miyiz?', en: 'Can we use any picture we find?',
          note: 'İnternette bulduğumuz her görsel, müzik ya da metin bize ait değildir. Her eserin bir sahibi vardır; buna telif hakkı denir.' },
        { tr: 'Kendi eserimiz, CC ve kamu malı serbest', en: 'Our own work, CC and public domain are free to use', extra: 1,
          note: 'Kendi çektiğimiz fotoğrafı kullanabiliriz. Creative Commons lisanslı eserleri kaynağını yazarak, kamu malı eserleri de serbestçe kullanabiliriz.' },
        { tr: 'Başkasının eseri için izin gerekir', en: 'Someone else\'s work needs permission',
          note: 'Bir filmin afişi ya da ünlü bir şarkı başkasına aittir. Kullanmak için izin gerekir.' },
      ] },
    { type: 'app', app: 'slides', title: 'Sunum Programı', name: 'Sunumu oluştur', en: 'Build the deck', desc: 'Tema, başlık, maddeler, görsel, geçiş ve konuşmacı notu.', out: 'a',
      data: { title: 'Ekran Molası', bullets: ['20 dakikada bir mola ver', 'Uzağa bak, gözün dinlensin', 'Uykudan önce ekranı kapat'], icon: 'eyeTired', theme: 'mor', notes: 'Konuşmacı notu: Göz egzersizini sınıfla birlikte yap.' },
      tools: [{ id: 'theme', label: 'Tema' }, { id: 'title', label: 'Başlık' }, { id: 'bullets', label: 'Madde' }, { id: 'image', label: 'Görsel' }, { id: 'new', label: 'Yeni slayt' }, { id: 'transition', label: 'Geçiş' }, { id: 'notes', label: 'Not' }],
      beats: [
        { tr: 'Tema seç, başlığı yaz', en: 'Pick a theme and write the title', tools: ['theme', 'title'], hint: 'Mor tema',
          note: 'Konumuza uygun bir tema seçer ve başlığı yazarız: Ekran Molası.' },
        { tr: 'Kısa maddeler ve kendi görselimiz', en: 'Short bullet points and our own picture', tools: ['bullets', 'image'], hint: 'Kendi çizdiğimiz görsel',
          note: 'Araştırdığımız bilgileri kısa maddelerle yazarız ve kendi çizdiğimiz görseli ekleriz.' },
        { tr: 'Yeni slayt ve yumuşak bir geçiş', en: 'A new slide and a gentle transition', tools: ['new', 'transition'], hint: 'Tek, sade bir geçiş',
          note: 'Yeni bir slayt ekleriz ve slaytlar arasına sade bir geçiş koyarız.' },
        { tr: 'Konuşmacı notu: ne anlatacağını unutma', en: 'Speaker notes help you remember what to say', tool: 'notes', hint: 'Notları yalnız sen görürsün',
          note: 'Konuşmacı notlarını sunum sırasında yalnızca biz görürüz. Ne anlatacağımızı hatırlatır.' },
      ] },
    { type: 'judge', name: 'Ölçütlerle değerlendir', en: 'Check with criteria', desc: 'Sunum doğruluk, kaynakça, okunaklılık ve yapay zekâ içeriğinin kontrolü açısından değerlendirilir.', out: 'b', labels: { ok: 'uygun', no: 'eksik' },
      beats: [
        { tr: 'Bilgiler güvenilir kaynaktan mı?', en: 'Is the information from reliable sources?',
          note: 'Bilgileri güvenilir kaynaklardan aldık. Uygun.',
          row: { icon: 'search', text: 'Bilgileri güvenilir kaynaklardan aldım', ok: true, why: 'Doğruluğundan eminim' } },
        { tr: 'Kaynakça slaytı var mı?', en: 'Is there a references slide?',
          note: 'Kaynakça slaytı unutulmuş. Eklemeliyiz.',
          row: { icon: 'library', text: 'Sunumda kaynakça slaytı yok', ok: false, why: 'Son slayta kaynakları eklemeliyim' } },
        { tr: 'Yapay zekâ bilgisini kontrol ettin mi?', en: 'Did you check the AI information?',
          note: 'Yapay zekâ aracından aldığımız bir bilgiyi başka bir güvenilir kaynaktan kontrol ettik. Uygun.',
          row: { icon: 'ai', text: 'Yapay zekâdan aldığım bilgiyi başka kaynaktan doğruladım', ok: true, why: 'Yanlış bilgi yaymam' } },
      ] },
    { type: 'summary',
      lines: [
        { icon: 'search', c: 'turkuaz', text: 'Güvenilir kaynaklardan araştır' },
        { icon: 'cc', c: 'zumrut', text: 'Telif hakkına uy, lisansa bak' },
        { icon: 'library', c: 'safran', text: 'Kaynakçayı unutma' },
      ],
      beats: [
        { tr: 'Aklında kalsın: doğru bilgi, izinli içerik', en: 'Remember: correct facts, permitted content',
          note: 'Aklında kalsın: doğru bilgiyi güvenilir kaynaktan al, izinli içerik kullan, kaynaklarını yaz.' },
        { tr: 'Sunumun hazır, sahne senin!', en: 'Your deck is ready, the stage is yours!',
          note: 'Ölçütleri karşılayan sunumun hazır. Şimdi sınıfa anlatma zamanı!' },
      ] },
  ],
});
