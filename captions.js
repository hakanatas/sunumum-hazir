/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 6.6, tr: "Konumuz: ekran molası", en: "Our topic: screen breaks",
      note: "Karo'nun grubu dijital bağımlılık hakkında bir sunum hazırlayacak. Konuları: ekran molası." },
    { scene: 1, start: 7.4, end: 13.3, tr: "Sunum dosyamızı adım adım hazırlayalım", en: "Let's build our presentation file step by step",
      note: "Bu derste bir sunum dosyasını baştan sona hazırlayıp değerlendireceğiz." },
    { scene: 2, start: 16.1, end: 22.3, tr: "Konuyu seç, güvenilir kaynaklardan araştır", en: "Pick the topic and research reliable sources",
      note: "Önce konumuzu belirleriz. Sonra bilgiyi güvenilir kaynaklardan araştırırız: resmi kurumların ve uzmanların sayfaları gibi." },
    { scene: 2, start: 23.1, end: 28.8, tr: "İçeriği seç, slaytları hazırla", en: "Choose the content and build the slides",
      note: "Kullanacağımız görselleri ve metinleri seçer, slaytları hazırlarız." },
    { scene: 2, start: 29.6, end: 35.3, tr: "En sona kaynakçayı ekle", en: "Add the references at the end",
      note: "Son slayta kullandığımız kaynakları yazarız. Buna kaynakça denir." },
    { scene: 3, start: 38.1, end: 43.8, tr: "Her görseli kullanabilir miyiz?", en: "Can we use any picture we find?",
      note: "İnternette bulduğumuz her görsel, müzik ya da metin bize ait değildir. Her eserin bir sahibi vardır; buna telif hakkı denir." },
    { scene: 3, start: 44.6, end: 51.5, tr: "Kendi eserimiz, CC ve kamu malı serbest", en: "Our own work, CC and public domain are free to use",
      note: "Kendi çektiğimiz fotoğrafı kullanabiliriz. Creative Commons lisanslı eserleri kaynağını yazarak, kamu malı eserleri de serbestçe kullanabiliriz." },
    { scene: 3, start: 52.3, end: 57.9, tr: "Başkasının eseri için izin gerekir", en: "Someone else's work needs permission",
      note: "Bir filmin afişi ya da ünlü bir şarkı başkasına aittir. Kullanmak için izin gerekir." },
    { scene: 4, start: 60.8, end: 66.5, tr: "Tema seç, başlığı yaz", en: "Pick a theme and write the title",
      note: "Konumuza uygun bir tema seçer ve başlığı yazarız: Ekran Molası." },
    { scene: 4, start: 67.2, end: 72.9, tr: "Kısa maddeler ve kendi görselimiz", en: "Short bullet points and our own picture",
      note: "Araştırdığımız bilgileri kısa maddelerle yazarız ve kendi çizdiğimiz görseli ekleriz." },
    { scene: 4, start: 73.7, end: 79.4, tr: "Yeni slayt ve yumuşak bir geçiş", en: "A new slide and a gentle transition",
      note: "Yeni bir slayt ekleriz ve slaytlar arasına sade bir geçiş koyarız." },
    { scene: 4, start: 80.3, end: 86, tr: "Konuşmacı notu: ne anlatacağını unutma", en: "Speaker notes help you remember what to say",
      note: "Konuşmacı notlarını sunum sırasında yalnızca biz görürüz. Ne anlatacağımızı hatırlatır." },
    { scene: 5, start: 88.8, end: 94.5, tr: "Bilgiler güvenilir kaynaktan mı?", en: "Is the information from reliable sources?",
      note: "Bilgileri güvenilir kaynaklardan aldık. Uygun." },
    { scene: 5, start: 95.3, end: 101, tr: "Kaynakça slaytı var mı?", en: "Is there a references slide?",
      note: "Kaynakça slaytı unutulmuş. Eklemeliyiz." },
    { scene: 5, start: 101.8, end: 107.6, tr: "Yapay zekâ bilgisini kontrol ettin mi?", en: "Did you check the AI information?",
      note: "Yapay zekâ aracından aldığımız bir bilgiyi başka bir güvenilir kaynaktan kontrol ettik. Uygun." },
    { scene: 6, start: 110.4, end: 116.6, tr: "Aklında kalsın: doğru bilgi, izinli içerik", en: "Remember: correct facts, permitted content",
      note: "Aklında kalsın: doğru bilgiyi güvenilir kaynaktan al, izinli içerik kullan, kaynaklarını yaz." },
    { scene: 6, start: 117.4, end: 123.1, tr: "Sunumun hazır, sahne senin!", en: "Your deck is ready, the stage is yours!",
      note: "Ölçütleri karşılayan sunumun hazır. Şimdi sınıfa anlatma zamanı!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
