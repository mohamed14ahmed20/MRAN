export interface Subsidiary {
  id: string;
  slug: string;
  name: { ar: string; en: string };
  sector: { ar: string; en: string };
  tagline: { ar: string; en: string };
  description: { ar: string; en: string };
  fullOverview: { ar: string; en: string };
  iconName: string;
  accentColor: string;
  badge: { ar: string; en: string };
  features: {
    ar: string[];
    en: string[];
  };
  specs: {
    ar: { label: string; value: string }[];
    en: { label: string; value: string }[];
  };
  branches: string[];
  ageGroups: {
    ar: string[];
    en: string[];
  };
  schedule: {
    ar: string;
    en: string;
  };
}

export const SUBSIDIARIES: Subsidiary[] = [
  {
    id: "football",
    slug: "football",
    name: {
      ar: "أكاديمية مران لكرة القدم",
      en: "MRAN Football Academy"
    },
    sector: {
      ar: "كرة القدم واكتشاف المواهب",
      en: "Football & Scouting"
    },
    tagline: {
      ar: "منهجية تدريبية أوروبية لصناعة نجوم المستطيل الأخضر",
      en: "European Training Regimens Developing Tomorrow's Football Stars"
    },
    description: {
      ar: "برامج تدريبية متطورة في كرة القدم تجمع بين المهارة الفردية، التكتيك الجماعي، واللياقة البدنية الشاملة، تحت إشراف نخبة من المدربين المعتمدين دوليًا.",
      en: "Advanced football coaching programs combining individual technical prowess, tactical intelligence, and physical conditioning under UEFA & CAF accredited trainers."
    },
    fullOverview: {
      ar: "تعد أكاديمية مران لكرة القدم الذراع التدريبي الرائد للمجموعة، حيث تستقبل البراعم والناشئين من سن 4 إلى 18 عامًا في ملاعب قانونية مجهزة بأعلى مواصفات النجيل الصناعي المعتمد دوليًا. نعتمد على خطة تدريب مرحلية ترتكز على السيطرة الحركية، دقة التمرير، الذكاء التمركزي، وغرس روح القيادة والتحدي.",
      en: "MRAN Football Academy stands as the premier development arm of the group, welcoming juniors and youth aged 4 to 18 on certified FIFA-standard turf pitches. Our progressive curriculum emphasizes biomechanical control, passing accuracy, tactical spatial intelligence, and leadership resilience."
    },
    iconName: "Flame",
    accentColor: "from-red-600 to-rose-700",
    badge: {
      ar: "معتمدة للمسابقات الرسمية",
      en: "Official Tournament Certified"
    },
    features: {
      ar: [
        "تدريب فني وتكتيكي دوري بأسلوب محاكي للأندية الكبرى",
        "تقييم بدني ودوري لكل لاعب باستخدام أجهزة القياس الرقمية",
        "مشاركة منتظمة في الدوريات والبطولات التنشيطية والرسمية",
        "تأهيل بدني ونفسي وبناء انضباط رياضي وسلوكي متكامل"
      ],
      en: [
        "Structured technical drills mirroring top European academy tiers",
        "Periodic biometric performance tracking and agility testing",
        "Regular entry into official youth leagues and competitive fixtures",
        "Integrated physical conditioning and mental fortitude mentoring"
      ]
    },
    specs: {
      ar: [
        { label: "نوع الأرضية", value: "نجيل صناعي من الجيل الرابع معتمد" },
        { label: "الرخص التدريبية", value: "رخص CAF و UEFA معتمدة" },
        { label: "معدل المدرب للدارسين", value: "مدرب لكل 10 لاعبين كحد أقصى" },
        { label: "الرعاية الطبية", value: "أخصائي علاج طبيعي وتأهيل متواجد" }
      ],
      en: [
        { label: "Pitch Surface", value: "Certified 4th Gen Monofilament Turf" },
        { label: "Coaching Badges", value: "Accredited CAF & UEFA Licenses" },
        { label: "Coach to Athlete Ratio", value: "1:10 Maximum Dedicated Ratio" },
        { label: "Medical Support", value: "On-site physiotherapist & sports medic" }
      ]
    },
    branches: ["helwan", "nasrCity", "badr", "october", "mostakbal"],
    ageGroups: {
      ar: ["البراعم (4 - 7 سنوات)", "الناشئون (8 - 12 سنة)", "الشباب (13 - 18 سنة)"],
      en: ["Grassroots (4 - 7 yrs)", "Juniors (8 - 12 yrs)", "Youth (13 - 18 yrs)"]
    },
    schedule: {
      ar: "3 حصص تدريبية أسبوعيًا مع مباراة تطبيقية دورية",
      en: "3 training sessions weekly plus weekend tactical match"
    }
  },
  {
    id: "padel",
    slug: "padel",
    name: {
      ar: "أندية وبطولات مران بادل",
      en: "MRAN Padel Clubs & Arena"
    },
    sector: {
      ar: "رياضة البادل المجتمعية والاحترافية",
      en: "Padel Sports & Tournaments"
    },
    tagline: {
      ar: "ملاعب بانورامية عالمية وأجواء تنافسية لجميع أفراد الأسرة",
      en: "World-Class Panoramic Courts & Dynamic Tournaments for All Generations"
    },
    description: {
      ar: "مجمع ملاعب بادل متطور بتجهيزات إسبانية بانورامية، يتيح حجز الملاعب، الأكاديميات التدريبية للناشئين والكبار، وتنظيم البطولات التنافسية الدورية.",
      en: "State-of-the-art panoramic Spanish glass padel complex delivering premium court bookings, progressive coaching academies, and corporate tournament staging."
    },
    fullOverview: {
      ar: "تعد رياضة البادل إحدى أسرع الرياضات نموًا في العالم، وقد استثمرت مران في تشييد ملاعب بانورامية بمواصفات المنظمة الدولية للبادل (FIP). تضم الأكاديمية برامج تبدأ من المستويات التمهيدية وحتى الإعداد للبطولات الوطنية، بجانب إتاحة الملاعب للأسر والشباب كمنصة رياضية واجتماعية ملهمة.",
      en: "Padel represents one of the world's most dynamic modern sports. MRAN invested in building ultra-panoramic courts compliant with International Padel Federation (FIP) standards. The academy provides structured pathways from beginner stroke foundations to elite competitive circuit preparation, paired with vibrant community leagues."
    },
    iconName: "Trophy",
    accentColor: "from-blue-600 to-indigo-800",
    badge: {
      ar: "مواصفات FIP الدولية",
      en: "FIP Compliant Courts"
    },
    features: {
      ar: [
        "زجاج بانورامي فائق الرؤية وإضاءة LED معتمدة دوليًا",
        "حصص فردية وثنائية لتعليم التكتيك، حركة القدمين، والضربات الخاصة",
        "تنظيم بطولات تصنيفية دورية وجوائز تحفيزية",
        "تأجير مضارب وكرات احترافية ومتجر مستلزمات رياضي"
      ],
      en: [
        "12mm panoramic tempered glass and anti-glare competition LED lighting",
        "Private and semi-private tactical stroke & positioning clinics",
        "Sanctioned local ranking tournaments and social weekends",
        "Pro racquet rental, authorized accessories shop, and lounge"
      ]
    },
    specs: {
      ar: [
        { label: "المواصفات الإنشائية", value: "زجاج سيكوريت بانورامي 12 ملم" },
        { label: "الأرضية", value: "سجاد أزرق بمواصفات Mondo الدولية" },
        { label: "التدريب", value: "مدربون معتمدون من الاتحاد المصري للبادل" },
        { label: "الخدمات", value: "غرف تبديل ملابس، استراحة لاعبين، كافيه" }
      ],
      en: [
        { label: "Court Structure", value: "12mm Seamless Panoramic Tempered Glass" },
        { label: "Turf Quality", value: "Pro Mondo Textured Monofilament Turf" },
        { label: "Certifications", value: "Egyptian Padel Federation certified coaches" },
        { label: "Amenities", value: "Executive lockers, player lounge, recovery cafe" }
      ]
    },
    branches: ["helwan", "nasrCity", "october"],
    ageGroups: {
      ar: ["الأطفال والناشئون (من 6 سنوات)", "الشباب والكبار", "العائلات والمجموعات"],
      en: ["Kids & Juniors (Ages 6+)", "Youth & Adults", "Family Doubles & Social"]
    },
    schedule: {
      ar: "يوميًا من 8:00 صباحًا حتى منتصف الليل مع إمكانية الحجز المسبق",
      en: "Daily 8:00 AM to 12:00 Midnight with instant booking"
    }
  },
  {
    id: "martial-arts",
    slug: "martial-arts",
    name: {
      ar: "أكاديمية مران للفنون القتالية والدفاع عن النفس",
      en: "MRAN Combat & Martial Arts Academy"
    },
    sector: {
      ar: "الفنون القتالية وبناء الانضباط (كونغ فو & كاراتيه)",
      en: "Martial Arts & Self-Defense (Kung Fu & Karate)"
    },
    tagline: {
      ar: "انضباط ذهني، لياقة بدنية فائقة، وشجاعة متوازنة",
      en: "Mental Discipline, Peak Flexibility, and Balanced Confidence"
    },
    description: {
      ar: "تعليم تخصصي لرياضتي الكاراتيه والكونغ فو بمناهج معتمدة رسمياً، تسهم في تعزيز الثقة بالنفس، الانضباط الحركي، والدفاع الشرعي عن النفس.",
      en: "Specialized coaching in traditional Kung Fu (Wushu) and Karate governed by official national federations, cultivating supreme physical discipline, self-defense, and character integrity."
    },
    fullOverview: {
      ar: "تجسد أكاديمية الفنون القتالية رؤية مران في 'بناء الإنسان قبل اللاعب'. يتدرب الطلاب في صالات بساط تاتامي احترافية وفق تدرج الأحزمة والدرجات المعتمدة من الاتحاد المصري للكاراتيه والاتحاد المصري للووشو كونغ فو. نركز على تعزيز الاتزان النفسي، احترام الخصم، وسرعة البديهة والتركيز الذهني الحاد.",
      en: "The martial arts division embodies MRAN's philosophy: 'Building the Human Before the Athlete'. Athletes train on certified high-density tatami surfaces, progressing through belt rankings officially sanctioned by national federations. We focus on emotional balance, respect, instantaneous reaction times, and unyielding mental focus."
    },
    iconName: "ShieldCheck",
    accentColor: "from-amber-600 to-red-800",
    badge: {
      ar: "اتحادات رسمية معتمدة",
      en: "Nationally Federation Accredited"
    },
    features: {
      ar: [
        "تدريب كاراتيه (كاتا وكوميتيه) وتأهيل لاختبارات الأحزمة الرسمية",
        "تدريب كونغ فو (ساندا وأساليب) وبناء المرونة والقوة الانفجارية",
        "تنمية مهارات الدفاع عن النفس للأطفال والفتيات والشباب",
        "مشاركات سنوية في بطولات الجمهورية وبطولات المناطق"
      ],
      en: [
        "Karate curriculum (Kata & Kumite) with formal Dan belt testing",
        "Kung Fu / Wushu (Sanda & Taolu) for explosive power and flexibility",
        "Tailored practical self-defense courses for juniors and ladies",
        "Regular qualification for regional and national youth championships"
      ]
    },
    specs: {
      ar: [
        { label: "الأرضية", value: "أبسطة تاتامي معتمدة ضد الصدمات" },
        { label: "المدربون", value: "حاملو الحزام الأسود الدولي وأبطال سابقون" },
        { label: "الشهادات", value: "شهادات ترقية أحزمة موثقة من الاتحادات الرسمية" },
        { label: "التأمين", value: "أدوات حماية واقية كاملة أثناء التدريب" }
      ],
      en: [
        { label: "Training Floor", value: "Shock-absorbing certified Olympic Tatami" },
        { label: "Instructors", value: "International Black Belt masters & national champions" },
        { label: "Credentials", value: "Federation-recognized belt certificates" },
        { label: "Safety Gear", value: "Full ergonomic protective sparring gear provided" }
      ]
    },
    branches: ["helwan", "nasrCity", "badr", "mostakbal"],
    ageGroups: {
      ar: ["البراعم (من 5 سنوات)", "الناشئون والشباب (من 10 سنوات)", "الكبار والدفاع عن النفس"],
      en: ["Juniors (From 5 yrs)", "Youth & Teens (10+ yrs)", "Adult Self-Defense"]
    },
    schedule: {
      ar: "مجموعات مسائية موزعة على أيام الأسبوع والعطلات",
      en: "Structured weekday evening and weekend sessions"
    }
  },
  {
    id: "fitness",
    slug: "fitness",
    name: {
      ar: "مركز مران للإعداد البدني واللياقة العامة",
      en: "MRAN Athletic Conditioning & Fitness"
    },
    sector: {
      ar: "الإعداد البدني والتأهيل الرياضي",
      en: "Physical Conditioning & Fitness"
    },
    tagline: {
      ar: "برامج علمية لتطوير السرعة، القوة، والتحمل لجميع الأعمار",
      en: "Scientific Conditioning Regimens Elevating Speed, Strength & Endurance"
    },
    description: {
      ar: "برامج إعداد بدني عام وخاص مصممة علمياً لتحسين اللياقة القلبية والتنفسية، القوة العضلية، والرشاقة، مناسبة للرياضيين وأفراد المجتمع الباحثين عن صحة مستدامة.",
      en: "Scientifically engineered physical conditioning protocols enhancing cardiovascular stamina, muscular endurance, and functional mobility for aspiring athletes and wellness enthusiasts."
    },
    fullOverview: {
      ar: "يقدم مركز الإعداد البدني برامج تخدم الرياضيين المحترفين لرفع كفاءتهم التنافسية، إلى جانب برامج اللياقة الأسرية والعامة للكبار والصغار. يعتمد المركز على أدوات تدريب وظيفي (Functional Training) وتمارين القوة والسرعة المتوازنة التي تمنع الإصابات وتعزز نمط الحياة الصحي.",
      en: "The Athletic Conditioning Center caters both to competitive athletes seeking high-performance agility and speed, and to everyday individuals aiming for peak functional wellness. Rooted in functional kinesiology, our routines optimize core strength, joint stability, and metabolic vitality while preventing sports injuries."
    },
    iconName: "Zap",
    accentColor: "from-emerald-600 to-teal-800",
    badge: {
      ar: "منهجية علمية متكاملة",
      en: "Science-Driven Protocols"
    },
    features: {
      ar: [
        "برامج الإعداد البدني المتخصص للاعبي كرة القدم والبادل والفنون القتالية",
        "فصول لياقة بدنية للأمهات والآباء لتحسين اللياقة والنشاط اليومي",
        "قياسات دورية لنسبة الدهون والكتلة العضلية ومعدل اللياقة",
        "تأهيل حركي وعلاجي بعد فترات التوقف أو الإصابات البسيطة"
      ],
      en: [
        "Sport-specific conditioning for football, padel, and combat athletes",
        "Adult functional movement sessions for healthy lifestyle maintenance",
        "Monthly biometric body composition and cardiovascular evaluations",
        "Post-rehab corrective exercises and injury prevention programming"
      ]
    },
    specs: {
      ar: [
        { label: "الأجهزة المستخدمة", value: "أجهزة تدريب وظيفي وأوزان حرة متكاملة" },
        { label: "الإشراف", value: "متخصصون في علوم الرياضة والتربية البدنية" },
        { label: "التخصيص", value: "خطط لياقة فردية وجماعية حسب الهدف" },
        { label: "المتابعة", value: "تطبيق ذكي لتتبع الحضور والتقدم البدني" }
      ],
      en: [
        { label: "Equipment", value: "Olympic conditioning rigs, functional sleds & free weights" },
        { label: "Supervision", value: "Holders of Bachelor / Master in Physical Education" },
        { label: "Customization", value: "Target-tailored individualized conditioning profiles" },
        { label: "Tracking", value: "Biometric and workout attendance tracking" }
      ]
    },
    branches: ["helwan", "nasrCity", "badr", "october", "mostakbal"],
    ageGroups: {
      ar: ["الأطفال لتنمية التوافق العضلي", "الشباب لبناء القوة والسرعة", "الكبار للصحة العامة والرشاقة"],
      en: ["Kids (Agility & Coordination)", "Teens (Speed & Hypertrophy)", "Adults (Cardio & Longevity)"]
    },
    schedule: {
      ar: "مواعيد صباحية ومسائية مرنة تلائم أوقات العمل والدراسة",
      en: "Flexible morning and evening sessions fitting work schedules"
    }
  },
  {
    id: "facilities-management",
    slug: "facilities-management",
    name: {
      ar: "مران لإدارة وتشغيل المنشآت الرياضية",
      en: "MRAN Sports Facilities & Club Management"
    },
    sector: {
      ar: "الاستثمار وإدارة الأندية الرياضية",
      en: "Facilities Investment & Management"
    },
    tagline: {
      ar: "تطوير وتشغيل احترافي للمجمعات والمنشآت الرياضية الكبرى",
      en: "Professional Turnkey Operations of Premier Sports Arenas & Clubs"
    },
    description: {
      ar: "قطاع الاستثمار وإدارة المجمعات الرياضية والأندية، ويتولى تشغيل المنشآت الرياضية الحيوية مثل نادي المصانع الحربية بحلوان ومجمعات المدن الجديدة وفق أرقى النظم الإدارية.",
      en: "The strategic facility investment division managing major athletic complexes, including the prestigious Helwan Military Factory Club and New City complexes, through world-class operational governance."
    },
    fullOverview: {
      ar: "تعد إدارة وتشغيل المنشآت الرياضية الركيزة المؤسسية لمجموعة مران، حيث توظف المجموعة خبراتها الإدارية والمالية في عقد شراكات استراتيجية طويلة الأجل مع الهيئات الحكومية والأندية العريقة. نتولى الصيانة الدورية، تطوير البنية التحتية، تجهيز الملاعب، وابتكار الفعاليات الرياضية التي تحقق أعلى عائد استثماري ومجتمعي.",
      en: "Facilities management forms the institutional backbone of MRAN Group. Leveraging deep operational and financial acumen, MRAN crafts high-impact public-private partnerships, handling turnkey operations, facility maintenance, field upgrades, and large-scale sporting activations that maximize community well-being."
    },
    iconName: "Building2",
    accentColor: "from-slate-700 to-indigo-950",
    badge: {
      ar: "شراكات استراتيجية وطنية",
      en: "Strategic Public-Private Partnerships"
    },
    features: {
      ar: [
        "إدارة وتشغيل كامل لنادي المصانع الحربية بحلوان والمرافق التابعة له",
        "تطوير الملاعب وصيانتها وفق المقاييس العالمية للسلامة والإنارة",
        "تنظيم المهرجانات الرياضية، الفعاليات الأسرية، والبطولات المجمعة",
        "حلول استثمارية مبتكرة للرعاة والشراكات التجارية في القطاع الرياضي"
      ],
      en: [
        "Turnkey management of Helwan Military Factory Club sporting grounds",
        "World-class maintenance, illumination, and safety compliance audits",
        "Hosting multi-sport community festivals, corporate cups, and gala events",
        "Sponsorship brokerage and athletic commercial asset monetization"
      ]
    },
    specs: {
      ar: [
        { label: "نطاق العمل", value: "ملاعب كرة قدم، ملاعب بادل، صالات مغطاة، قاعات لياقة" },
        { label: "الأمن والسلامة", value: "أنظمة مراقبة متكاملة وفرق أمن متخصصة على مدار الساعة" },
        { label: "الصيانة", value: "فرق هندسية متخصصة لصيانة الأرضيات والإنارة الدورية" },
        { label: "الحوكمة", value: "نظام إلكتروني لإدارة العضويات والاشتراكات والمدفوعات" }
      ],
      en: [
        { label: "Scope of Assets", value: "Turf pitches, padel arenas, martial arts dojos, gym facilities" },
        { label: "Security & Safety", value: "24/7 CCTV surveillance and dedicated event safety teams" },
        { label: "Maintenance", value: "Specialized engineering teams for lighting and surface care" },
        { label: "Governance", value: "Integrated ERP software for memberships, bookings & payments" }
      ]
    },
    branches: ["helwan", "nasrCity", "badr", "october", "mostakbal"],
    ageGroups: {
      ar: ["كافة الفئات والمؤسسات والشركات والجهات الحكومية والخاصة"],
      en: ["Enterprises, sports federations, schools, and civic communities"]
    },
    schedule: {
      ar: "تشغيل المنشآت على مدار الأسبوع من 7:00 صباحًا حتى 1:00 بعد منتصف الليل",
      en: "Year-round operations 7:00 AM to 1:00 AM daily"
    }
  }
];
