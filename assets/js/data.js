const PRODUCTS_DATA = [
  {
    "id": "عبوة-6-ابيض",
    "name": "عبوة ٦ أبيض",
    "group": "عبوة ٦",
    "color": "أبيض",
    "image": "assets/images/عبوة 6 ابيض.jpeg",
    "desc": "عبوة ٦ أبيض بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "عبوة-6-بلدي",
    "name": "عبوة ٦ بلدي",
    "group": "عبوة ٦",
    "color": "بلدي",
    "image": "assets/images/عبوة 6 بلدي.png",
    "desc": "عبوة ٦ بلدي بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "عبوة-15-ابيض-2",
    "name": "عبوة ١٥ أبيض (2)",
    "group": "عبوة ١٥",
    "color": "أبيض",
    "image": "assets/images/عبوة 15 ابيض (2).png",
    "desc": "عبوة ١٥ أبيض بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "عبوة-15-ابيض",
    "name": "عبوة ١٥ أبيض",
    "group": "عبوة ١٥",
    "color": "أبيض",
    "image": "assets/images/عبوة 15 ابيض.png",
    "desc": "عبوة ١٥ أبيض بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "عبوة-15-احمر",
    "name": "عبوة ١٥ أحمر",
    "group": "عبوة ١٥",
    "color": "أحمر",
    "image": "assets/images/عبوة 15 احمر.png",
    "desc": "عبوة ١٥ أحمر بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "عبوة-15-بلدي",
    "name": "عبوة ١٥ بلدي",
    "group": "عبوة ١٥",
    "color": "بلدي",
    "image": "assets/images/عبوة 15 بلدي.png",
    "desc": "عبوة ١٥ بلدي بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "عبوة-18-ابيض",
    "name": "عبوة ١٨ أبيض",
    "group": "عبوة ١٨",
    "color": "أبيض",
    "image": "assets/images/عبوة 18 ابيض.jpeg",
    "desc": "عبوة ١٨ أبيض بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "عبوة-18-احمر",
    "name": "عبوة ١٨ أحمر",
    "group": "عبوة ١٨",
    "color": "أحمر",
    "image": "assets/images/عبوة 18 احمر.jpeg",
    "desc": "عبوة ١٨ أحمر بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "عبوة-18-بلدي",
    "name": "عبوة ١٨ بلدي",
    "group": "عبوة ١٨",
    "color": "بلدي",
    "image": "assets/images/عبوة 18 بلدي.png",
    "desc": "عبوة ١٨ بلدي بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "عبوة-20-بلاستيك",
    "name": "عبوة ٢٠ بلاستيك",
    "group": "عبوة بلاستيك ٢٠",
    "color": "متنوع",
    "image": "assets/images/عبوة 20 بلاستيك.jpeg",
    "desc": "عبوة بلاستيك ٢٠ متنوع بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "عبوة-بلاستيك-20",
    "name": "عبوة بلاستيك ٢٠",
    "group": "عبوة بلاستيك ٢٠",
    "color": "متنوع",
    "image": "assets/images/عبوة بلاستيك 20.jpeg",
    "desc": "عبوة بلاستيك ٢٠ متنوع بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "طبق-30-ابيض",
    "name": "طبق ٣٠ أبيض",
    "group": "طبق ٣٠",
    "color": "أبيض",
    "image": "assets/images/طبق 30 ابيض.jpg",
    "desc": "طبق ٣٠ أبيض بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "طبق-30-بلدي",
    "name": "طبق ٣٠ بلدي",
    "group": "طبق ٣٠",
    "color": "بلدي",
    "image": "assets/images/طبق 30 بلدي.jpg",
    "desc": "طبق ٣٠ بلدي بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "طبق-30احمر",
    "name": "طبق ٣٠أحمر",
    "group": "طبق ٣٠",
    "color": "أحمر",
    "image": "assets/images/طبق 30احمر.jpg",
    "desc": "طبق ٣٠ أحمر بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "عبوة-30-بلدي-بلاستيك",
    "name": "عبوة ٣٠ بلدي بلاستيك",
    "group": "عبوة بلاستيك ٣٠",
    "color": "بلدي",
    "image": "assets/images/عبوة 30 بلدي بلاستيك.png",
    "desc": "عبوة بلاستيك ٣٠ بلدي بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "عبوة-بلاستيك-30بلدي",
    "name": "عبوة بلاستيك ٣٠بلدي",
    "group": "عبوة بلاستيك ٣٠",
    "color": "بلدي",
    "image": "assets/images/عبوة بلاستيك 30بلدي.jpeg",
    "desc": "عبوة بلاستيك ٣٠ بلدي بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  },
  {
    "id": "عبوه-بلاستيك-30-احمر",
    "name": "عبوة بلاستيك ٣٠ أحمر",
    "group": "عبوة بلاستيك ٣٠",
    "color": "أحمر",
    "image": "assets/images/عبوه بلاستيك 30 احمر.png",
    "desc": "عبوة بلاستيك ٣٠ أحمر بتغليف يليق بالعرض التجاري، مناسب للسلاسل والمنافذ وبيحافظ على شكل المنتج قدام العميل."
  }
];

const CLIENTS_DATA = [
  {
    "client": "امازون",
    "type": "amazon",
    "branches": [
      {
        "code": "QCA4",
        "name": "امازون الشيخ زايد",
        "area": "Badr Eddin Center, Sheikh Zayed City, Giza",
        "map": "https://maps.app.goo.gl/R1g7nEyFAxx3roDw8"
      },
      {
        "code": "QCA3",
        "name": "امازون أرض الجولف",
        "area": "15, Abdalla Draz, Ard El Golf, Heliopolis, Cairo",
        "map": "https://maps.app.goo.gl/E8eDo7GZjhWPbzNJ9"
      },
      {
        "code": "QCA2",
        "name": "امازون هليوبوليس",
        "area": "253 El Hegaz St, Al Matar, El Nozha, Cairo",
        "map": "https://maps.app.goo.gl/2PNy7CBqZxCTb9h97"
      },
      {
        "code": "QCA5",
        "name": "امازون جولدن بلازا - التجمع",
        "area": "Golden Plaza Mall, New Cairo, Cairo",
        "map": "https://maps.app.goo.gl/hqiz5bTjxvTxB2Mr8"
      },
      {
        "code": "QCA6",
        "name": "امازون المعادي",
        "area": "زهراء المعادي، Maadi as Sarayat Al Gharbeyah, Maadi, Egypt",
        "map": "https://maps.app.goo.gl/U9D1jy2Lrpxoesy88?g_st=ic"
      },
      {
        "code": "QCA7",
        "name": "امازون المهندسين",
        "area": "El-Batal Ahmed Abd El-Aziz, Ad Doqi, Dokki, Giza Governorate, Egypt",
        "map": "https://maps.app.goo.gl/PVqso6XZXeiLsC8T6"
      },
      {
        "code": "QCA8",
        "name": "امازون الشروق",
        "area": "El Shorouk, Egypt",
        "map": "https://maps.app.goo.gl/SNuXyvXfcjvmfLM19"
      },
      {
        "code": "QGA3",
        "name": "امازون العبور",
        "area": "Capital Plaza Mall, El Obour",
        "map": "https://maps.app.goo.gl/p1HREd3HC2hCteEUA"
      },
      {
        "code": "QCA1",
        "name": "امازون التجمع",
        "area": "El-Banafseg Ahmed Okasha street - New Cairo, Cairo Governorate",
        "map": "https://maps.app.goo.gl/c3Lgd9CbTvEsK3uk8"
      },
      {
        "code": "QGA1",
        "name": "امازون مدينة نصر",
        "area": "19 The Street Facing Radio Talaat, Makram Ebeid, Al Mintaqah as Sadisah",
        "map": "https://maps.app.goo.gl/QDdiCAN9LbNtaHLQ6"
      },
      {
        "code": "QCD3",
        "name": "امازون المتميز - 6 أكتوبر",
        "area": "XXXJ+H7Q, Al Wagha St, First 6th of October",
        "map": "https://maps.app.goo.gl/oiqbd82WQ2FwAKnYA"
      },
      {
        "code": "QCD4",
        "name": "امازون حدائق الأهرام",
        "area": "X39R+6F4 Al Haram, Egypt",
        "map": "https://maps.app.goo.gl/xMSzg5pfyPTugtuj8"
      },
      {
        "code": "QGA4",
        "name": "امازون 6 أكتوبر - الحي الثالث",
        "area": "XW8M+W6C First 6th of October, Egypt",
        "map": "https://maps.app.goo.gl/yYQ1Pqu7Ske9LxqU6"
      },
      {
        "code": "QCC8",
        "name": "امازون العاشر من رمضان",
        "area": "مول تن بوينت بجانب مول الرؤى٢٦ مباشرة المدخل من الخلف",
        "map": "https://maps.app.goo.gl/WpKPPFyXQctBjDwy9?g_st=iw"
      },
      {
        "code": "QGA2",
        "name": "امازون الرحاب",
        "area": "Eastern Market, Second New Cairo, Cairo Governorate 4752280",
        "map": "https://maps.app.goo.gl/mESzHccERxx3E6tLA"
      },
      {
        "code": "QCC6",
        "name": "امازون شبرا الخيمة",
        "area": "4766+5QQ Shubra El Kheima",
        "map": "https://maps.app.goo.gl/YyWUZ9EBB6LXNEtB7"
      }
    ],
    "logo": "assets/images/امازون.jpeg"
  },
  {
    "client": "سوبيكو",
    "type": "سوبيكو",
    "branches": [
      {
        "code": "02-001",
        "name": "سوبيكو الأزهر",
        "area": "",
        "map": "https://maps.app.goo.gl/kFTNSjZ8s5gY7v7C9"
      },
      {
        "code": "02-002",
        "name": "سوبيكو شبرا سنجر",
        "area": "",
        "map": "https://maps.app.goo.gl/oGqzwqWAtWcj9vcw9"
      },
      {
        "code": "02-003",
        "name": "سوبيكو العباسية",
        "area": "",
        "map": "https://maps.app.goo.gl/ZhKsh5tKwQN4UKLJ6"
      },
      {
        "code": "02-004",
        "name": "سوبيكو الوايلي",
        "area": "",
        "map": "https://maps.app.goo.gl/MiW91vzoz37b989XA"
      },
      {
        "code": "02-005",
        "name": "سوبيكو النعام",
        "area": "",
        "map": "https://maps.app.goo.gl/4tMGUFh3kt7GqbBy7"
      },
      {
        "code": "02-006",
        "name": "سوبيكو الأسمرات",
        "area": "",
        "map": "https://maps.app.goo.gl/G9Hnu1fbT7VxLPgb8"
      },
      {
        "code": "02-007",
        "name": "سوبيكو حلوان",
        "area": "",
        "map": "https://maps.app.goo.gl/coa3B3wpyCmjRy3C9"
      },
      {
        "code": "02-008",
        "name": "سوبيكو طرة",
        "area": "",
        "map": "https://maps.app.goo.gl/jfqqG2UHMZKwHRK18"
      },
      {
        "code": "02-009",
        "name": "سوبيكو شينزو أبي",
        "area": "",
        "map": "https://maps.app.goo.gl/h67vbmypx2ZaSbh68"
      },
      {
        "code": "02-010",
        "name": "سوبيكو النزهة",
        "area": "",
        "map": "https://maps.app.goo.gl/c1L1QeRzQXbGHW1U9"
      },
      {
        "code": "02-011",
        "name": "سوبيكو التجمع الثالث",
        "area": "",
        "map": "https://maps.app.goo.gl/u9pmXRqzrBjWULJG9"
      },
      {
        "code": "02-012",
        "name": "سوبيكو مدينة بدر",
        "area": "",
        "map": "https://maps.app.goo.gl/UDNT4oPZdLgzHVc5A"
      },
      {
        "code": "02-013",
        "name": "سوبيكو السلام",
        "area": "",
        "map": "https://maps.app.goo.gl/LECqGaxa313n12cP6"
      },
      {
        "code": "02-014",
        "name": "سوبيكو سلام الشهيد أحمد حمدي",
        "area": "",
        "map": "https://maps.app.goo.gl/cHsPZFXx4HguQrWE9"
      },
      {
        "code": "02-015",
        "name": "سوبيكو 6 أكتوبر الياسمين",
        "area": "",
        "map": "https://maps.app.goo.gl/wNd3VDCHwSaUtWbQA"
      },
      {
        "code": "02-016",
        "name": "سوبيكو سوق المدينة",
        "area": "",
        "map": "https://maps.app.goo.gl/LRRXgbtgVHE2qNH28"
      },
      {
        "code": "02-017",
        "name": "سوبيكو العمرانية",
        "area": "",
        "map": "https://maps.app.goo.gl/JPN19Jgc8mUpAeXx8"
      },
      {
        "code": "02-018",
        "name": "سوبيكو إمبابة",
        "area": "",
        "map": "https://maps.app.goo.gl/vG8jKmgCescCrpxg8"
      },
      {
        "code": "02-019",
        "name": "سوبيكو بشتيل",
        "area": "",
        "map": "https://maps.app.goo.gl/JPN19Jgc8mUpAeXx8"
      },
      {
        "code": "02-020",
        "name": "سوبيكو وينجت",
        "area": "",
        "map": "https://maps.app.goo.gl/nCiDdwVLs6Jf8gbf6"
      },
      {
        "code": "02-021",
        "name": "سوبيكو سموحة",
        "area": "",
        "map": "https://maps.app.goo.gl/HgJRTZMyhj6ta3na6"
      },
      {
        "code": "02-022",
        "name": "سوبيكو سيدي جابر",
        "area": "",
        "map": "https://maps.app.goo.gl/MN2h6NKpjLEhEKWB6"
      },
      {
        "code": "02-023",
        "name": "سوبيكو العجمي",
        "area": "",
        "map": "https://maps.app.goo.gl/EGxjKDuVAQd76ukJ9"
      },
      {
        "code": "02-024",
        "name": "سوبيكو السيوف",
        "area": "",
        "map": "https://maps.app.goo.gl/GrQfqsMbqZy9yNoc7"
      },
      {
        "code": "02-025",
        "name": "سوبيكو محرم بك",
        "area": "",
        "map": "https://maps.app.goo.gl/Q15Z3KTejEY1miGN9"
      },
      {
        "code": "02-026",
        "name": "سوبيكو شدس",
        "area": "",
        "map": "https://maps.app.goo.gl/ZRLcmxbtNNHPHtSA7"
      },
      {
        "code": "02-027",
        "name": "سوبيكو شبرا الخيمة",
        "area": "",
        "map": "https://maps.app.goo.gl/p5dQf5yW8FQqavjb9"
      },
      {
        "code": "02-028",
        "name": "سوبيكو القناطر الخيرية",
        "area": "",
        "map": "https://maps.app.goo.gl/hBPFgHhW1U8uCRk1A"
      },
      {
        "code": "02-029",
        "name": "سوبيكو الفيوم",
        "area": "",
        "map": "https://maps.app.goo.gl/EA9mVHimKTF1AU9E7"
      },
      {
        "code": "02-030",
        "name": "سوبيكو الزقازيق",
        "area": "",
        "map": "https://maps.app.goo.gl/qnw5YVMgaTxjzD9eA"
      },
      {
        "code": "02-031",
        "name": "سوبيكو دمنهور",
        "area": "",
        "map": "https://maps.app.goo.gl/vY5ifKvss5KGDByy7"
      },
      {
        "code": "02-032",
        "name": "سوبيكو المنصورة",
        "area": "",
        "map": "https://maps.app.goo.gl/UdLaZuAXfcsdqvEV8"
      },
      {
        "code": "02-033",
        "name": "سوبيكو شبين الكوم",
        "area": "",
        "map": "https://maps.app.goo.gl/8nb3biBfC6yeEUdu6"
      },
      {
        "code": "02-034",
        "name": "سوبيكو قويسنا",
        "area": "",
        "map": "https://maps.app.goo.gl/mTCxtfx3vCBKFRAD6?g_st=iw"
      },
      {
        "code": "02-035",
        "name": "سوبيكو سوتش",
        "area": "",
        "map": "https://maps.app.goo.gl/ZRLcmxbtNNHPHtSA7"
      },
      {
        "code": "02-036",
        "name": "سوبيكو المطار",
        "area": "",
        "map": "https://maps.app.goo.gl/Q15Z3KTejEY1miGN9"
      }
    ],
    "logo": "assets/images/سوبيكو.png"
  },
  {
    "client": "بانكيكس",
    "type": "بانكيكس",
    "branches": [
      {
        "code": "03-001",
        "name": "مطعم بانكيكس",
        "area": "",
        "map": "https://maps.google.com/?q=29.967222,30.933388"
      }
    ],
    "logo": "assets/images/بانكيكس.jpg"
  },
  {
    "client": "جودذ مارت",
    "type": "جودذ_مارت",
    "branches": [
      {
        "code": "04-001",
        "name": "جودذ مارت",
        "area": "",
        "map": "https://maps.app.goo.gl/9ZW9fjpwHfz6VDZy6?g_st=aw"
      }
    ],
    "logo": "assets/images/جودذ.jpg"
  },
  {
    "client": "سوبر سنتر",
    "type": "سوبر_سنتر",
    "branches": [
      {
        "code": "05-001",
        "name": "سوبر سنتر",
        "area": "",
        "map": "https://maps.app.goo.gl/JySB1qusgonapvMX8?g_st=ic"
      }
    ],
    "logo": "assets/images/سوبر سنتر.jpg"
  },
  {
    "client": "كارفور",
    "type": "carrefour",
    "branches": [
      {
        "code": "06-001",
        "name": "كارفور المعادي",
        "area": "",
        "map": "   https://share.google/lM2LePFW2Y8uoWKyr   "
      },
      {
        "code": "06-002",
        "name": "كارفور مدينة نصر",
        "area": "",
        "map": "#"
      },
      {
        "code": "06-003",
        "name": "كارفور الماظة",
        "area": "",
        "map": "https://share.google/odfqRIaYQaZgZ7210 "
      },
      {
        "code": "06-004",
        "name": "كارفور سيتي لايت",
        "area": "",
        "map": "https://share.google/MwZuzSfdfaMYi4z6L "
      },
      {
        "code": "06-005",
        "name": "كارفور سيتي سنتر",
        "area": "",
        "map": "https://share.google/ayYE8quwZnASCiMQc "
      },
      {
        "code": "06-006",
        "name": "كارفور داندي مول",
        "area": "",
        "map": "https://share.google/WNdQ6CRMyQOuNQCmL "
      },
      {
        "code": "06-007",
        "name": "كارفور العاشر",
        "area": "",
        "map": "https://share.google/LnEybS5nYe1B5tyVR "
      },
      {
        "code": "06-008",
        "name": "كارفور السلام",
        "area": "",
        "map": "https://share.google/kpsnmF6PIEF7ZUXxg "
      },
      {
        "code": "06-009",
        "name": "كارفور الشروق",
        "area": "",
        "map": "https://share.google/KZ7pihfxvQKhiGlM9 "
      },
      {
        "code": "06-010",
        "name": "كارفور العبور",
        "area": "",
        "map": "#"
      },
      {
        "code": "06-011",
        "name": "كارفور 15 مايو",
        "area": "",
        "map": "https://maps.app.goo.gl/YEjjRgDESY5Z8sTi7?g_st=ic "
      },
      {
        "code": "06-012",
        "name": "كارفور سراية القبة",
        "area": "",
        "map": "https://share.google/sYjPOh4kUMrQwcqTl "
      },
      {
        "code": "06-013",
        "name": "كارفور مدينتي",
        "area": "",
        "map": "https://maps.app.goo.gl/tCeDERYHAjoXcGhX7?g_st=aw "
      },
      {
        "code": "06-014",
        "name": "كارفور كايرو فيستيفال",
        "area": "",
        "map": "https://maps.app.goo.gl/StRzt6HHvrpBNppA7"
      },
      {
        "code": "06-015",
        "name": "كارفور اعمار",
        "area": "",
        "map": "https://maps.app.goo.gl/pesmh3ro4j9f99P3A"
      },
      {
        "code": "06-016",
        "name": "كارفور مهدي عرفة",
        "area": "",
        "map": "https://share.google/FlXpsMhfDqr3c1v5J"
      },
      {
        "code": "06-017",
        "name": "كارفور الأهرام",
        "area": "",
        "map": "https://share.google/PWichvZrQph19H0MJ"
      },
      {
        "code": "06-018",
        "name": "كارفور داون تاون",
        "area": "",
        "map": "#"
      },
      {
        "code": "06-019",
        "name": "ميجا مول كارفور",
        "area": "",
        "map": "https://share.google/dPdgaXdqTVrK0znwR"
      }
    ],
    "logo": "assets/images/كارفور.png"
  },
  {
    "client": "سبينس",
    "type": "سبينس",
    "branches": [
      {
        "code": "07-001",
        "name": "سبينس بيرلي",
        "area": "",
        "map": "https://share.google/huqjJnfaGS0PtrDIw "
      },
      {
        "code": "07-002",
        "name": "سبينس ارينا مول",
        "area": "",
        "map": "https://maps.app.goo.gl/aiJ68jMrFYnpAquw5"
      },
      {
        "code": "07-003",
        "name": "سبينس ايناواكس",
        "area": "",
        "map": "#"
      },
      {
        "code": "07-004",
        "name": "سبينس النزهة",
        "area": "",
        "map": "https://share.google/B4exImiu2s4D1zSzX "
      },
      {
        "code": "07-005",
        "name": "سبينس المنصورة",
        "area": "",
        "map": "https://maps.app.goo.gl/dtrhQfWWb4kP9T2b6"
      },
      {
        "code": "07-006",
        "name": "سبينس شارع سوريا",
        "area": "",
        "map": "https://share.google/FN6Gx92R9FZAZK15p "
      },
      {
        "code": "07-007",
        "name": "سبينس جزيرة العرب",
        "area": "",
        "map": "https://share.google/MdxXbKLvh3esotmO8 "
      },
      {
        "code": "07-008",
        "name": "سبينس سيتي سكيب",
        "area": "",
        "map": "https://share.google/18cntKkksDrPK1Zsa "
      },
      {
        "code": "07-009",
        "name": "سبينس استرادا مول",
        "area": "",
        "map": "https://maps.app.goo.gl/iu9qButKv5cG6ysg7?g_st=ic "
      },
      {
        "code": "07-010",
        "name": "سبينس مكسيم مول",
        "area": "",
        "map": "https://share.google/dk6q8NkCRwrwuAjQf"
      },
      {
        "code": "07-011",
        "name": "سبينس مول العرب",
        "area": "",
        "map": "https://share.google/SiX624uvm9aUE1cmG "
      },
      {
        "code": "07-012",
        "name": "سبينس الهرم",
        "area": "",
        "map": "https://share.google/RBuUaM7ByGz5KmAET"
      },
      {
        "code": "07-013",
        "name": "سبينس مزارا مول",
        "area": "",
        "map": "https://share.google/eGVImVm3V7X8BXVYu"
      },
      {
        "code": "07-014",
        "name": "سبينس الشروق",
        "area": "",
        "map": "https://share.google/2owC8SE040ELp5e1M"
      },
      {
        "code": "07-015",
        "name": "سبينس العبور",
        "area": "",
        "map": "https://share.google/kpsI2XCK37T0HyH4R"
      },
      {
        "code": "07-016",
        "name": "سبينس المعادي",
        "area": "",
        "map": "https://maps.app.goo.gl/AAm4xXPngA7Fw3tk7?g_st=aw"
      },
      {
        "code": "07-017",
        "name": "سبينس جري بروجيكت",
        "area": "",
        "map": "https://maps.app.goo.gl/nLumeKaJBYtDdwHq6?g_st=ic"
      },
      {
        "code": "07-018",
        "name": "سبينس طنطا",
        "area": "",
        "map": "https://maps.apple/p/VQH1P1fLt_y.bV"
      }
    ],
    "logo": "assets/images/سبينس.jpg"
  },
  {
    "client": "أوسكار",
    "type": "أوسكار",
    "branches": [
      {
        "code": "08-001",
        "name": "أوسكار المعادي",
        "area": "",
        "map": "https://share.google/AZUvfoJVxLrIhVuVX"
      },
      {
        "code": "08-002",
        "name": "أوسكار مدينتي",
        "area": "",
        "map": "https://share.google/ZW748HWaEVm6WiTbv "
      },
      {
        "code": "08-003",
        "name": "أوسكار الشيخ زايد",
        "area": "",
        "map": "https://share.google/jvvFBmdHfxW5qSZhs"
      },
      {
        "code": "08-004",
        "name": "أوسكار التجمع",
        "area": "",
        "map": "https://share.google/o7rqMmoMVawnf8JoF "
      },
      {
        "code": "08-005",
        "name": "أوسكار ايتابا",
        "area": "",
        "map": "https://maps.app.goo.gl/cZ3Ko98UuaZRHnes8?g_st=aw"
      }
    ],
    "logo": "assets/images/اوسكار.jpg"
  },
  {
    "client": "محمود الفار",
    "type": "محمود_الفار",
    "branches": [
      {
        "code": "09-001",
        "name": "الفار زايد",
        "area": "",
        "map": "https://share.google/H4kCZq3OxyQF6WJ7N "
      },
      {
        "code": "09-002",
        "name": "الفار الميرغني",
        "area": "",
        "map": "https://maps.app.goo.gl/45fMwo26TV1EQpUs9"
      },
      {
        "code": "09-003",
        "name": "الفار ستريب زون",
        "area": "",
        "map": "https://share.google/5QtUvWG4n90jWHUYk "
      },
      {
        "code": "09-004",
        "name": "الفار مدينتي",
        "area": "",
        "map": "https://share.google/SOOiuskhqyMXU41xV "
      },
      {
        "code": "09-005",
        "name": "الفار المهندسين",
        "area": "",
        "map": "https://share.google/h3WZXy8CuwytrlKU5 "
      },
      {
        "code": "09-006",
        "name": "الفار اربيلا",
        "area": "",
        "map": "https://share.google/wzG0EbMW1Htj2z8BT "
      },
      {
        "code": "09-007",
        "name": "الفار ميفيدا",
        "area": "",
        "map": "https://share.google/FEqaHIehnLRHQLx23 "
      },
      {
        "code": "09-008",
        "name": "الفار شيراتون",
        "area": "",
        "map": "https://share.google/J6iR7E6lldJ9aCFJa "
      },
      {
        "code": "09-009",
        "name": "الفار التسعين الشمالي",
        "area": "",
        "map": "https://share.google/QGgeWogk2GAQpk9fi "
      },
      {
        "code": "09-010",
        "name": "الفار التسعين الجنوبي",
        "area": "",
        "map": "https://share.google/U65CAZWMx2Pl6k9OB "
      }
    ],
    "logo": "assets/images/الفار.jpg"
  },
  {
    "client": "بندة سوبر",
    "type": "بندة_سوبر",
    "branches": [
      {
        "code": "10-001",
        "name": "بندة الرحاب",
        "area": "",
        "map": "https://share.google/NCwuDf8FUS54ANTqj "
      },
      {
        "code": "10-002",
        "name": "بندة أكتوبر",
        "area": "",
        "map": "https://share.google/jrmtdC04elAfdZT7f "
      },
      {
        "code": "10-003",
        "name": "بندة المعادي",
        "area": "",
        "map": "https://share.google/s8fVa45ScicKTY8bV "
      },
      {
        "code": "10-004",
        "name": "بندة مدينة نصر",
        "area": "",
        "map": "https://share.google/yfR1crC7wgLYHycTq "
      },
      {
        "code": "10-005",
        "name": "بندة العبور",
        "area": "",
        "map": "https://share.google/s1pS2lnHndsfcmPQ2 "
      }
    ],
    "logo": "assets/images/بنده.jpg"
  },
  {
    "client": "أولاد رجب",
    "type": "أولاد_رجب",
    "branches": [
      {
        "code": "11-001",
        "name": "أولاد رجب حدايق حلوان",
        "area": "",
        "map": "https://maps.app.goo.gl/b76g9CHFHVnn1FLw8?g_st=ic"
      },
      {
        "code": "11-002",
        "name": "أولاد رجب الجولف",
        "area": "",
        "map": "https://maps.app.goo.gl/vCpAwhREaeaHZzHX6?g_st=aw"
      },
      {
        "code": "11-003",
        "name": "أولاد رجب التجنيد",
        "area": "",
        "map": "https://share.google/jP59oGEzhoS7RhaI9 "
      },
      {
        "code": "11-004",
        "name": "أولاد رجب العالمين",
        "area": "",
        "map": "https://maps.app.goo.gl/kGvyTRAFfr9ERTxA9?g_st=ic "
      },
      {
        "code": "11-005",
        "name": "أولاد رجب الظاهر العباسية",
        "area": "",
        "map": "https://maps.app.goo.gl/rwTgLSVgFziaRhrX9?g_st=ic "
      },
      {
        "code": "11-006",
        "name": "أولاد رجب المعادي",
        "area": "",
        "map": "https://maps.app.goo.gl/sbrHDQ2Qbmbp9Vg38?g_st=aw"
      }
    ],
    "logo": "assets/images/اولاد رجب.png"
  },
  {
    "client": "اللولو هايبر ماركت",
    "type": "اللولو_هايبر_ماركت",
    "branches": [
      {
        "code": "12-001",
        "name": "لولو تاون بلازا",
        "area": "",
        "map": "https://share.google/AAYAYLv204osT86MA"
      },
      {
        "code": "12-002",
        "name": "لولو بارك مول",
        "area": "",
        "map": "https://share.google/IHtQPhGPFM6HUECdN"
      },
      {
        "code": "12-003",
        "name": "لولو وادي دجلة",
        "area": "",
        "map": "https://share.google/nTTVTftqgJf73lsqf"
      },
      {
        "code": "12-004",
        "name": "لولو التجمع الخامس",
        "area": "",
        "map": "https://maps.app.goo.gl/LbTGbUFsDtwSEamo8?g_st=ic"
      }
    ],
    "logo": "assets/images/لولو.jpg"
  },
  {
    "client": "جيان ماركت",
    "type": "جيان_ماركت",
    "branches": [
      {
        "code": "13-001",
        "name": "جيان التجمع",
        "area": "",
        "map": "https://share.google/T76rBS4Y06F4tG5hi"
      },
      {
        "code": "13-002",
        "name": "جيان الرحاب",
        "area": "",
        "map": "https://share.google/23eY3ZA5N9gp1sdil "
      }
    ],
    "logo": "assets/images/جيان.jpg"
  },
  {
    "client": "زهران ماركت",
    "type": "زهران_ماركت",
    "branches": [
      {
        "code": "14-001",
        "name": "زهران العجمي",
        "area": "",
        "map": "https://maps.app.goo.gl/h9vzWPYEWmNkArD56?g_st=aw"
      },
      {
        "code": "14-002",
        "name": "زهران سموحة",
        "area": "",
        "map": "https://share.google/lApCPbLAXAlkqdEdU "
      },
      {
        "code": "14-003",
        "name": "زهران المعمورة",
        "area": "",
        "map": "https://maps.app.goo.gl/h9vzWPYEWmNkArD56?g_st=aw "
      },
      {
        "code": "14-004",
        "name": "زهران المعادي",
        "area": "",
        "map": "https://share.google/otNkUpcoJlQVet9JT "
      },
      {
        "code": "14-005",
        "name": "زهران مدينتي",
        "area": "",
        "map": "https://share.google/BNFzs4r2VdrxTU5aZ "
      },
      {
        "code": "14-006",
        "name": "زهران زايد",
        "area": "",
        "map": "https://share.google/ZSlZxQw1d5QTxfn7O "
      },
      {
        "code": "14-007",
        "name": "زهران التجمع الاول",
        "area": "",
        "map": "https://share.google/RU3K4qiij2MBNMvhU "
      },
      {
        "code": "14-008",
        "name": "زهران التجمع الخامس",
        "area": "",
        "map": "https://share.google/8jN5xwVg6BXPdwJF9 "
      },
      {
        "code": "14-009",
        "name": "زهران الفراعنة اسكندرية",
        "area": "",
        "map": "https://maps.app.goo.gl/kgRsAdNDmT71YXud8?g_st=aw "
      },
      {
        "code": "14-010",
        "name": "زهران زيزينيا اسكندرية",
        "area": "",
        "map": "https://share.google/3FQogR7qncHOfqj5H "
      },
      {
        "code": "14-011",
        "name": "زهران سوريا اسكندرية",
        "area": "",
        "map": "https://maps.app.goo.gl/r4eTXfb4dkJvtYyY6?g_st=aw "
      }
    ],
    "logo": "assets/images/زهران ماركت.jpg"
  },
  {
    "client": "فندق راديسون",
    "type": "فندق_راديسون",
    "branches": [
      {
        "code": "15-001",
        "name": "فندق راديسون",
        "area": "",
        "map": "https://share.google/le5U9HbePBsXhoJtl"
      }
    ],
    "logo": "assets/images/Screenshot 2025-07-03 192620.png"
  },
  {
    "client": "وكالة المنصورة",
    "type": "وكالة_المنصورة",
    "branches": [
      {
        "code": "16-001",
        "name": "وكالة المنصورة الهايبر",
        "area": "",
        "map": "https://share.google/PQYYvqHyw7VcBi75e"
      },
      {
        "code": "16-002",
        "name": "وكالة المنصورة الترعة",
        "area": "",
        "map": "https://share.google/cSTuHvAtO8s8YUQjb"
      },
      {
        "code": "16-003",
        "name": "وكالة المنصورة طالخا",
        "area": "",
        "map": "https://share.google/CPA8kI8t5AInUH0yT"
      },
      {
        "code": "16-004",
        "name": "وكالة المنصورة السويس",
        "area": "",
        "map": "https://share.google/pF7KOwnWYcbLFFvZJ"
      },
      {
        "code": "16-005",
        "name": "وكالة المنصورة دكرنس",
        "area": "",
        "map": "https://share.google/HfuIu8RGrT9Auc2Pl"
      },
      {
        "code": "16-006",
        "name": "وكالة المنصورة بلقاس",
        "area": "",
        "map": "https://share.google/Zd2aBix9ZseUeN5fW"
      }
    ],
    "logo": "assets/images/وكاله المنصوره.jpg"
  }
];
