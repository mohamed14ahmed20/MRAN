export interface Branch {
  id: string;
  name: { ar: string; en: string };
  region: { ar: string; en: string };
  address: { ar: string; en: string };
  phone: string;
  phoneFormatted: string;
  isHeadquarter?: boolean;
  sports: string[];
  features: {
    ar: string[];
    en: string[];
  };
  qrAsset?: string;
  hours: { ar: string; en: string };
}

export const BRANCHES: Branch[] = [
  {
    id: "helwan",
    name: {
      ar: "فرع حلوان - نادي المصانع الحربية",
      en: "Helwan Hub - Military Factory Club"
    },
    region: {
      ar: "جنوب القاهرة",
      en: "South Cairo"
    },
    address: {
      ar: "نادي المصانع الحربية، ميدان المحطة، حلوان، القاهرة",
      en: "Military Factory Club, Station Square, Helwan, Cairo"
    },
    phone: "01551146629",
    phoneFormatted: "+20 155 114 6629",
    isHeadquarter: true,
    sports: ["football", "padel", "martial-arts", "fitness"],
    features: {
      ar: [
        "المقر الرياضي الرئيسي لمجموعة مران والشراكة الاستراتيجية",
        "ملاعب كرة قدم قانونية وخماسية بنجيل معتمد",
        "مجمع ملاعب بادل بانورامية مجهزة",
        "صالات مغطاة للفنون القتالية والإعداد البدني"
      ],
      en: [
        "Primary sports operational hub & landmark strategic partnership",
        "Regulation FIFA-standard and 5-a-side turf pitches",
        "Dedicated panoramic glass padel court complex",
        "Indoor dojo and climate-controlled conditioning halls"
      ]
    },
    qrAsset: "/brand/qr/facebook_helwan.png",
    hours: {
      ar: "السبت إلى الخميس: 9:00 ص – 11:00 م | الجمعة: 1:00 م – 11:00 م",
      en: "Sat to Thu: 9:00 AM – 11:00 PM | Fri: 1:00 PM – 11:00 PM"
    }
  },
  {
    id: "nasrCity",
    name: {
      ar: "فرع مدينة نصر",
      en: "Nasr City Hub"
    },
    region: {
      ar: "شرق القاهرة",
      en: "East Cairo"
    },
    address: {
      ar: "المنطقة الرياضية الحيوية، مدينة نصر، بالقرب من طريق النصر، القاهرة",
      en: "Athletic Sector, Nasr City, near El Nasr Road, Cairo"
    },
    phone: "01551146629",
    phoneFormatted: "+20 155 114 6629",
    sports: ["football", "padel", "martial-arts", "fitness"],
    features: {
      ar: [
        "موقع مركزي يخدم مناطق مصر الجديدة والتجمع الخامس ومدينة نصر",
        "ملاعب بادل بإضاءة ليلية متطورة",
        "أكاديمية كرة قدم وتدريب حراس مرمى متخصص",
        "مواقف سيارات واسعة وخدمات عائلية متكاملة"
      ],
      en: [
        "Central hub serving Heliopolis, New Cairo, and Nasr City",
        "High-definition LED illuminated padel arena",
        "Football academy with dedicated goalkeeping clinics",
        "Ample parking and family viewing hospitality terrace"
      ]
    },
    qrAsset: "/brand/qr/facebook_mran.png",
    hours: {
      ar: "يوميًا: 9:00 ص – 11:30 م",
      en: "Daily: 9:00 AM – 11:30 PM"
    }
  },
  {
    id: "badr",
    name: {
      ar: "فرع مدينة بدر",
      en: "Badr City Hub"
    },
    region: {
      ar: "شرق القاهرة والمدن الجديدة",
      en: "East Cairo & New Cities"
    },
    address: {
      ar: "المجمع الرياضي المتطور، الحي المتميز، مدينة بدر، طريق السويس",
      en: "Sports Complex, Al-Motamayez District, Badr City, Suez Road"
    },
    phone: "01551146629",
    phoneFormatted: "+20 155 114 6629",
    sports: ["football", "martial-arts", "fitness"],
    features: {
      ar: [
        "مركز تنمية المواهب الرائد لخدمة مدينة بدر والعاصمة الإدارية",
        "أكاديمية كاراتيه وكونغ فو مجهزة ببساط أولمبي",
        "برامج لياقة بدنية للشباب وتأهيل بدني عام",
        "بيئة تدريب محفزة وآمنة تمامًا للأطفال والناشئين"
      ],
      en: [
        "Premier youth scouting ground serving Badr and New Administrative Capital",
        "Karate & Kung Fu dojo with Olympic-standard mats",
        "Athletic conditioning and youth stamina clinics",
        "Ultra-safe family-focused athletic environment"
      ]
    },
    qrAsset: "/brand/qr/facebook_mran.png",
    hours: {
      ar: "السبت إلى الخميس: 10:00 ص – 10:00 م",
      en: "Sat to Thu: 10:00 AM – 10:00 PM"
    }
  },
  {
    id: "october",
    name: {
      ar: "فرع حدائق أكتوبر",
      en: "October Gardens Hub"
    },
    region: {
      ar: "غرب القاهرة والجيزة",
      en: "West Cairo & Giza"
    },
    address: {
      ar: "المدينة الرياضية، طريق الواحات، حدائق أكتوبر، محافظة الجيزة",
      en: "Sports City, Al-Wahat Road, October Gardens, Giza"
    },
    phone: "01551146629",
    phoneFormatted: "+20 155 114 6629",
    sports: ["football", "padel", "fitness"],
    features: {
      ar: [
        "مجمع ملاعب متكامل يخدم حدائق أكتوبر ومدينة 6 أكتوبر والشيخ زايد",
        "ملاعب بادل بانورامية ومطاعم واستراحات للاعبين",
        "مدرسة حراس مرمى ومهاجمين مخصصة لكرة القدم",
        "تنظيم دوريات مجتمعية لرواد الأعمال والعائلات"
      ],
      en: [
        "Integrated complex serving October Gardens, 6th of October, and Zayed",
        "Panoramic padel courts with player lounges",
        "Specialized striking & goalkeeping football sessions",
        "Community corporate cups and family sport weekends"
      ]
    },
    qrAsset: "/brand/qr/facebook_padel.png",
    hours: {
      ar: "يوميًا: 8:30 ص – 12:00 منتصف الليل",
      en: "Daily: 8:30 AM – 12:00 Midnight"
    }
  },
  {
    id: "mostakbal",
    name: {
      ar: "فرع مدينة المستقبل",
      en: "Mostakbal City Hub"
    },
    region: {
      ar: "امتداد القاهرة الجديدة",
      en: "New Cairo Extension"
    },
    address: {
      ar: "النادي الرياضي، المجمع الأخضر، مدينة المستقبل، طريق مصر الإسماعيلية",
      en: "Sports Club, Green Complex, Mostakbal City, Cairo-Ismailia Road"
    },
    phone: "01551146629",
    phoneFormatted: "+20 155 114 6629",
    sports: ["football", "martial-arts", "fitness"],
    features: {
      ar: [
        "أحدث الفروع الرياضية في أحدث المدن الذكية بمصر",
        "ملاعب نجيل طبيعي وصناعي مجهزة بأحدث نظم الري والإنارة",
        "أكاديمية دفاع عن النفس متخصصة لكافة الفئات",
        "برامج لياقة خاصة للسيدات والرجال لأسلوب حياة صحي"
      ],
      en: [
        "Flagship modern facility in Egypt's premier smart residential city",
        "Hybrid & artificial turf pitches with smart eco-illumination",
        "Accredited self-defense and martial arts dojo",
        "Tailored adult fitness tracks for wellness and vitality"
      ]
    },
    qrAsset: "/brand/qr/facebook_mran.png",
    hours: {
      ar: "السبت إلى الخميس: 9:00 ص – 10:00 م | الجمعة: 1:00 م – 10:00 م",
      en: "Sat to Thu: 9:00 AM – 10:00 PM | Fri: 1:00 PM – 10:00 PM"
    }
  }
];
