// lib/copy.js
// Edini vir besedil za pristajalno stran. Nobenega besedila ne sme biti znotraj komponent.
export const copy = {
  metadata: {
    title: "+500 Receptov za Barske Prigrizke",
    description:
      "Hrustljavi, hitri in preprosti domači prigrizki. Več kot 500 receptov + 3 ekskluzivni bonusi. Takojšen dostop.",
  },

  promoBar: {
    text: "Ta akcija poteče danes:",
    icon: "Flame",
  },

  hero: {
    eyebrow: "Posebna izdaja · Takojšen dostop",
    titleEmoji: "🍻",
    headline: "Več kot 500 Receptov za Barske Prigrizke!",
    subheadline: "Za popolno sprostitev in užitek skozi vse leto",
    paragraphPrefix: "Dovolj je bilo enih in istih,",
    paragraphHighlight:
      "dolgočasnih in pustih prigrizkov. Spremeni to še danes z našo knjigo!",
    imageAlt: "Naslovnica e-knjige Več kot 500 Receptov",
    badge: "Doživljenjski dostop",
    regularPriceLabel: "Namesto",
    regularPrice: "97.00 €",
    offerPrefix: "samo",
    offerPrice: "9.90 €",
    cta: "ŽELIM RECEPTE!",
    stats: [
      { value: "500+", label: "Ekskluzivnih receptov" },
      { value: "3", label: "Darilni bonusi" },
      { value: "100%", label: "Digitalen dostop" },
    ],
  },

  benefits: {
    eyebrow: "Zakaj jo boš oboževal",
    headline: "Kaj dela to knjigo edinstveno",
    items: [
      { title: "Več kot 500 klasičnih in modernih prigrizkov", icon: "BookOpen" },
      { title: "Ogromna izbira receptov za vsak okus", icon: "Sparkles" },
      { title: "Hitra in hrustljava priprava brez napora", icon: "Zap" },
      { title: "Odlična rešitev za goste, zabave in sproščanje", icon: "Users" },
      { title: "Zdrave različice brez olja za Airfryer", icon: "Wind" },
      { title: "Preproste sestavine iz vsakdanjega življenja", icon: "Carrot" },
      { title: "Spletni dostop ali možnost tiskanja", icon: "Printer" },
    ],
  },

  carouselSection: {
    eyebrow: "Pokukaj v notranjost",
    headline: "Hrustljavi, hitri in čisti prigrizki – naravnost v tvojem domu.",
    paragraph1:
      "Ta digitalna knjiga enkrat za vselej reši problem dolgočasnih, dragih in zahtevnih prigrizkov.",
    paragraph2:
      "Z več kot 500 recepti se boš naučil pripravljati neustavljive klasike, hrustljave kombinacije in popolne omake. Vključene so tudi različice brez olja za Airfryer, za tiste, ki obožujejo tradicionalen okus, a raje jedo lažjo hrano.",
    closingLines: [
      "Vse poteka preprosto, praktično in brez nepotrebnega kaosa v kuhinji.",
      "Če se ti že nocoj zalušta nekaj hrustljavega, je to tvoja rešitev."
    ],
    images: [
      { src: "/carousel/slide-1.webp", alt: "Pogled v knjigo prigrizkov — stran 1" },
      { src: "/carousel/slide-2.webp", alt: "Pogled v knjigo prigrizkov — stran 2" },
    ],
    chips: [
      { icon: "CheckCircle2", label: "Prigrizki BREZ KAOSA" },
      { icon: "Clock", label: "Dobrote v NEKAJ MINUTAH" },
      { icon: "BookOpen", label: "Več kot 500 RECEPTOV" },
    ],
    cta: "ŽELIM RECEPTE!",
    a11y: {
      prev: "Prejšnji",
      next: "Naslednji",
      goToSlide: "Pojdi na stran",
    },
  },

  features: {
    eyebrow: "Konec s pustimi, dragimi in mastnimi prigrizki",
    headline: "Hrustljavi, hitri in preprosti za pripravo",
    badge: "Poglej, kaj prejmeš v digitalni knjigi (PDF):",
    ingredientsLabel: "Sest.",
    timeLabel: "Čas:",
    items: [
      {
        title: "Hrustljave mesne kroglice",
        description:
          "Hrustljave zunaj, sočne znotraj. Neustavljiva klasika, pri kateri vsak prosi za repete.",
        image: "/recipes/bolitas-carne.webp",
        ingredients: 3,
        time: "10 min",
      },
      {
        title: "Gostilniške kozice",
        description:
          "Sočne, dobro začinjene in hitro pripravljene. Prigrizek, ki navduši s preprostostjo in okusom.",
        image: "/recipes/camarones-bar.webp",
        ingredients: 2,
        time: "8 min",
      },
      {
        title: "Klobasa v Airfryerju",
        description:
          "Hrustljava zunaj, sočna znotraj in gotova v nekaj minutah. Popoln prigrizek za delitev.",
        image: "/recipes/chorizo-airfryer.webp",
        ingredients: 3,
        time: "7 min",
      },
      {
        title: "Velika barska plošča",
        description:
          "Raznolikost, hrustljavost in pravi gostilniški okus na enem pladnju. V trenutku očara vsakega gosta.",
        image: "/recipes/tabla-bar.webp",
        ingredients: 7,
        time: "18 min",
      },
      {
        title: "Krompirček s cheddarjem in slanino",
        description:
          "Hrustljav, kremast in brutalno okusen. Klasika, ki se ji nihče ne more upreti.",
        image: "/recipes/papas-cheddar.webp",
        ingredients: 3,
        time: "8 min",
      },
      {
        title: "Dišeč česnov kruhek",
        description:
          "Mehak znotraj, hrustljav zunaj in poln okusa. Prigrizek, ki prvi izgine z mize.",
        image: "/recipes/pan-ajo.webp",
        ingredients: 3,
        time: "6 min",
      },
      {
        title: "Pikantni krompirček",
        description:
          "Hrustljav, odlično začinjen in zasvojljiv. Tisti, ki ga ješ neopazno, dokler ne zmanjka.",
        image: "/recipes/papas-bravas.webp",
        ingredients: 3,
        time: "10 min",
      },
      {
        title: "Hrustljavi piščančji koščki",
        description:
          "Hrustljavi, sočni in povsem brez olja. Prigrizek, ki ga obožuje vsa družba.",
        image: "/recipes/pollo-frito.webp",
        ingredients: 2,
        time: "5 min",
      },
      {
        title: "Plošča mešanih prigrizkov",
        description:
          "Hitra, bogata in popolna za začetek vsakega pogovora. Idealna družba za hladno pivo.",
        image: "/recipes/aperitivos-variados.webp",
        ingredients: 5,
        time: "12 min",
      },
      {
        title: "Hrustljave sirove palčke",
        description:
          "Hrustljave zunaj, stopljene znotraj. Preprost, hiter prigrizek, pri katerem je nemogoče pojesti samo enega.",
        image: "/recipes/queso-bar.webp",
        ingredients: 2,
        time: "6 min",
      },
    ],
    moreBlock: {
      title: "IN ŠE MNOGO VEČ...",
      text: "To je več kot 500 receptov, idealnih za vsakogar, ki obožuje barske dobrote, a išče udobje v vsakdanu.",
    },
    cta: "ŽELIM RECEPTE!",
  },

  bonuses: {
    eyebrowMain: "Bonusi, ki jih prejmeš,",
    eyebrowSuffix: "če naročiš danes:",
    freeLabel: "DANES BREZPLAČNO",
    items: [
      {
        badge: "Bonus 1",
        title: "Popoln seznam barskih omak in začimb",
        subtext: "Skrivne sestavine, kombinacije in osnovne začimbe",
        image: "/bonuses/bonus-1-salsas.webp",
        imageAlt: "Bonus 1 — Seznam omak in začimb",
        price: "9.00 €",
      },
      {
        badge: "Bonus 2",
        title: "Tedenski jedilnik prigrizkov za Airfryer",
        subtext: "Prigrizki, razporejeni po dnevih v tednu",
        image: "/bonuses/bonus-2-menu-airfryer.webp",
        imageAlt: "Bonus 2 — Tedenski jedilnik",
        price: "5.90 €",
      },
      {
        badge: "Bonus 3",
        title: "Priročnik za hitre priloge",
        subtext: "Paniranje, namazi in solate za družbo",
        image: "/bonuses/bonus-3-acompanamientos.webp",
        imageAlt: "Bonus 3 — Hitre priloge",
        price: "7.90 €",
      },
    ],
  },

  finalCta: {
    eyebrow: "Tvoja ponudba",
    headline: "Takojšen dostop — plačaš enkrat, uporabljaš za vedno",
    subheadline: "Vse, kar potrebuješ, zbrano na enem mestu.",
    plans: [
      {
        kind: "super",
        ribbon: "Super Ponudba",
        popularLabel: "🔥 NAJBOLJ PRILJUBLJENO",
        title: "Več kot 500 Receptov za Barske Prigrizke",
        bullets: [
          "Več kot 500 receptov za barske prigrizke",
          "Recepti, prilagojeni posebej za Airfryer",
          "Različice z oljem in brez njega",
          "Doživljenjski dostop v formatu PDF",
          "Takojšnja dostava na tvoj e-mail"
        ],
        bonusBullets: [
          "Popoln seznam barskih omak in začimb",
          "Tedenski jedilnik prigrizkov za Airfryer",
          "Pametni in ugodni nadomestki za sestavine",
        ],
        regularPrice: "97.00 €",
        discountTag: "-90%",
        offerPrice: "9.90 €",
        priceFootnote: "Enkratno plačilo",
        cta: "KUPI ZDAJ",
        analyticsId: "aperitivos_bar_super",
        analyticsName: "Super Ponudba - +500 Receptov + Bonusi",
        priceValue: 9.9,
      },
    ],
    trust: {
      secure: "Varno plačilo",
      guarantee: "30-dnevna garancija",
    },
  },

  testimonials: {
    eyebrow: "Skupnost",
    headline: "Mnenja naših strank",
    actions: ["Všeč mi je", "Komentiraj", "Deli"],
    items: [
      {
        name: "Maja Kovač",
        time: "Pred 2 urama",
        content:
          "Res hudi recepti! Naredila sem hrustljave mesne kroglice in izpadle so vrhunsko 🔥",
        likes: 23,
        avatar: "/testimonials/maria.webp",
      },
      {
        name: "Matej Novak",
        time: "Pred 5 urami",
        content:
          "Uau, nori recepti! Včeraj sem poskusil kozice in žena je bila čisto navdušena.",
        likes: 34,
        avatar: "/testimonials/juan.webp",
      },
      {
        name: "Ana Zupan",
        time: "Pred 1 dnem",
        content:
          "Ljudje, nikoli si nisem mislila, da se da narediti toliko različnih prigrizkov. Preizkusila sem že 3 recepte in vsi so bili top! ❤️",
        likes: 45,
        avatar: "/testimonials/ana.webp",
      },
      {
        name: "Nejc Vidmar",
        time: "Pred 1 dnem",
        content:
          "Vredno vsakega centa. Že več kot leto dni nisem ponovil istega prigrizka. Družina je navdušena.",
        likes: 28,
        avatar: "/testimonials/carlos.webp",
      },
      {
        name: "Špela Horvat",
        time: "Pred 2 dnevoma",
        content:
          "Včeraj sem jo kupila in takoj naredila nekaj barskih receptov... izpadlo je noro okusno. Toplo priporočam!",
        likes: 52,
        avatar: "/testimonials/lucia.webp",
      },
    ],
    cta: "ŽELIM RECEPTE!",
  },

  story: {
    eyebrow: "O AVTORJU",
    headline: "CHEF LUKA HORVAT",
    image: "/chef-juan-carlos.webp",
    imageAlt: "Chef Luka Horvat",
    paragraphs: [
      { text: "Živijo, sem chef Luka Horvat!", style: "bold" },
      {
        text: "Vedno sem verjel, da je dober prigrizek srce vsake mize. Ni treba, da je komplicirano, samo da je okusno.",
        style: "default",
      },
      {
        text: "Po letih vodenja profesionalnih kuhinj in opazovanja, kako ljudje obožujejo prigrizke ob mrzlem pivu, sem ugotovil, da se mnogi doma mučijo s kupljenimi čipsi ali dolgočasnim pomfrijem preprosto zato, ker nimajo idej.",
        style: "default",
      },
      {
        text: "Tako se je rodila ideja za ta priročnik: zbrati več kot 500 različnih načinov priprave barskih prigrizkov — praktičnih, noro okusnih in iz sestavin, ki ne izpraznijo denarnice.",
        style: "highlight",
      },
      {
        text: "Vse sem pripravil z veliko truda, da ti pokažem, kako preprosto je v svoj dom vnesti pravi gostilniški okus, in to prav vsak dan.",
        style: "default",
      },
      { text: "Bomo to uresničili skupaj?", style: "bold-accent" },
    ],
    cta: "ŽELIM RECEPTE!",
  },

  faq: {
    eyebrow: "POGOSTA VPRAŠANJA",
    headline: "NAJPOGOSTEJŠA VPRAŠANJA",
    items: [
      {
        q: "Kako bom prejel gradivo?",
        a: "Dostop do e-knjige in bonusov ti bomo poslali na e-mail takoj po potrditvi plačila.",
      },
      {
        q: "Se da knjigo natisniti?",
        a: "Seveda! Datoteka je v visokokakovostnem PDF formatu, idealnem za branje na telefonu, tablici in računalniku ali pa za tisk.",
      },
      {
        q: "So notri recepti za popolne začetnike?",
        a: "Da, vsi recepti so razloženi korak za korakom, preprosto in jasno. Popolno tudi za tiste, ki nikoli ne kuhajo.",
      },
      {
        q: "So na voljo recepti brez olja?",
        a: "Seveda! Veliko receptov je prilagojenih za Airfryer ali pečico, tako da ohranijo okus brez odvečne maščobe.",
      },
      {
        q: "So recepti res lahki in praktični?",
        a: "Popolnoma! Poudarek je na praktičnosti, da ne izgubljaš ur in ur v kuhinji.",
      },
      {
        q: "Kaj pa, če ne znam dobro kuhati... je ta knjiga zame?",
        a: "Brez dvoma. Navodila so jasna, sestavine pa najdeš v vsaki lokalni trgovini.",
      },
      {
        q: "Jo lahko berem na telefonu?",
        a: "Da, format je popolnoma prilagojen za pametne telefone.",
      },
      {
        q: "Kaj pa, če mi ne bo všeč? Je kakšna garancija?",
        a: "Nudimo brezpogojno 30-dnevno garancijo. Če ti knjiga ne bo všeč, nam preprosto piši na e-mail in povrnili ti bomo denar.",
      },
    ],
  },

  closing: {
    eyebrow: "Zadnja priložnost",
    headline: "Pripelji okus bara v svoj dom še danes",
    paragraph:
      "Dostop je takojšen, plačilo je enkratno, garancija pa te ščiti celih 30 dni. Ni nobenega tveganja: samo hrustljavi, praktični in nepozabni prigrizki.",
    cta: "ŽELIM RECEPTE!",
  },

  footer: {
    brand: "Več kot 500 Receptov za Barske Prigrizke",
    tagline: "Pravi gostilniški okus — naravnost v tvojo kuhinjo.",
    rightsPrefix: "Vse pravice pridržane ©",
    disclaimer:
      "To spletno mesto ni del spletnega mesta Facebook ali družbe Facebook Inc. Prav tako Facebook tega spletnega mesta na noben način ne podpira. FACEBOOK je registrirana blagovna znamka družbe FACEBOOK, Inc.",
  },
};