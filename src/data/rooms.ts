export interface Room {
  slug: string;
  name: string;
  capacity: number;
  bathrooms: number;
  category: 'suite' | 'family' | 'standard' | 'economy';
  shortDescription: { en: string; fr: string; ar: string };
  description: { en: string; fr: string; ar: string };
  amenities: string[];
  features: { en: string; fr: string; ar: string }[];
  images: string[];
}

export const rooms: Room[] = [
  {
    slug: 'badiaa',
    name: 'Badiaa Room',
    capacity: 4,
    bathrooms: 1,
    category: 'suite',
    shortDescription: {
      en: 'A spacious suite blending traditional Moroccan craftsmanship with refined comfort.',
      fr: 'Une suite spacieuse mêlant artisanat marocain traditionnel et confort raffiné.',
      ar: 'جناح واسع يجمع بين الحرفية المغربية التقليدية والراحة الراقية.',
    },
    description: {
      en: 'The Badiaa Room is our flagship suite, offering generous space for up to four guests. Featuring hand-crafted tadelakt walls, traditional zellige tilework, and elegant Moroccan furnishings, this room embodies the authentic riad experience. Large windows overlook the central patio, filling the space with warm natural light.',
      fr: "La chambre Badiaa est notre suite principale, offrant un espace généreux pour jusqu'à quatre personnes. Avec ses murs en tadelakt faits main, ses zelliges traditionnels et son mobilier marocain élégant, cette chambre incarne l'expérience authentique du riad. De grandes fenêtres donnent sur le patio central, inondant l'espace d'une lumière naturelle chaleureuse.",
      ar: 'غرفة بادية هي جناحنا الرئيسي، حيث توفر مساحة واسعة تتسع لأربعة ضيوف. تتميز بجدران التديلاكت المصنوعة يدويًا وزليج التقليدي والأثاث المغربي الأنيق، وتجسد هذه الغرفة تجربة الرياض الأصيلة. تطل النوافذ الكبيرة على الفناء المركزي، مما يملأ المساحة بضوء طبيعي دافئ.',
    },
    amenities: ['Free Wi-Fi', 'En-suite bathroom', 'Tadelakt walls', 'Air conditioning', 'Patio view', 'Traditional furnishings'],
    features: [
      { en: 'Hand-crafted tadelakt walls', fr: 'Murs en tadelakt faits main', ar: 'جدران التديلاكت المصنوعة يدويًا' },
      { en: 'Traditional zellige tilework', fr: 'Zellige traditionnel', ar: 'زليج تقليدي' },
      { en: 'Views over the central patio', fr: 'Vue sur le patio central', ar: 'إطلالة على الفناء المركزي' },
      { en: 'Authentic Moroccan furnishings', fr: 'Mobilier marocain authentique', ar: 'أثاث مغربي أصيل' },
    ],
    images: [
      'https://images.pexels.com/photos/30301193/pexels-photo-30301193.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/15531319/pexels-photo-15531319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673757/pexels-photo-30673757.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673755/pexels-photo-30673755.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
    ],
  },
  {
    slug: 'terasse-family',
    name: 'Terasse Family Room',
    capacity: 4,
    bathrooms: 1,
    category: 'family',
    shortDescription: {
      en: 'A welcoming family room with terrace access and authentic Moroccan charm.',
      fr: 'Une chambre familiale accueillante avec accès terrasse et charme marocain authentique.',
      ar: 'غرفة عائلية ترحيبية مع الوصول إلى التراس وسحر مغربي أصيل.',
    },
    description: {
      en: 'The Terasse Family Room provides comfortable accommodation for families or groups of up to four. With direct access to a private terrace area, guests can enjoy Marrakech\'s famous sunshine in privacy. The room features traditional decor, tadelakt walls, and an en-suite bathroom.',
      fr: "La chambre familiale Terasse offre un hébergement confortable pour les familles ou les groupes de quatre personnes maximum. Avec un accès direct à une terrasse privée, les invités peuvent profiter du célèbre soleil de Marrakech en toute intimité. La chambre présente un décor traditionnel, des murs en tadelakt et une salle de bain privative.",
      ar: 'توفر غرفة تيراس العائلية إقامة مريحة للعائلات أو المجموعات حتى أربعة أشخاص. مع الوصول المباشر إلى تراس خاص، يمكن للضيوف الاستمتاع بشمس مراكش الشهيرة على انفراد. تتميز الغرفة بديكور تقليدي وجدران التديلاكت وحمام خاص.',
    },
    amenities: ['Free Wi-Fi', 'En-suite bathroom', 'Tadelakt walls', 'Air conditioning', 'Terrace access', 'Family-friendly'],
    features: [
      { en: 'Private terrace access', fr: 'Accès terrasse privée', ar: 'الوصول إلى تراس خاص' },
      { en: 'Spacious layout for families', fr: 'Agencement spacieux pour les familles', ar: 'تصميم واسع للعائلات' },
      { en: 'Traditional Moroccan decor', fr: 'Décor marocain traditionnel', ar: 'ديكور مغربي تقليدي' },
      { en: 'En-suite bathroom with tadelakt', fr: 'Salle de bain privative en tadelakt', ar: 'حمام خاص بالتديلاكت' },
    ],
    images: [
      'https://images.pexels.com/photos/4946761/pexels-photo-4946761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/32969458/pexels-photo-32969458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/35198986/pexels-photo-35198986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30374221/pexels-photo-30374221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
    ],
  },
  {
    slug: 'djemila',
    name: 'Djemila Room',
    capacity: 3,
    bathrooms: 1,
    category: 'standard',
    shortDescription: {
      en: 'An elegant room for three, combining traditional design with modern comfort.',
      fr: 'Une chambre élégante pour trois personnes, alliant design traditionnel et confort moderne.',
      ar: 'غرفة أنيقة لثلاثة أشخاص، تجمع بين التصميم التقليدي والراحة العصرية.',
    },
    description: {
      en: 'The Djemila Room accommodates up to three guests in a setting that celebrates Moroccan artistry. Tadelakt walls in warm earth tones, hand-carved wood details, and traditional textiles create an atmosphere of refined authenticity. The room includes an en-suite bathroom and views toward the patio.',
      fr: "La chambre Djemila accueille jusqu'à trois personnes dans un décor qui célèbre l'artisanat marocain. Des murs en tadelakt aux tons terre chauds, des détails en bois sculpté à la main et des textiles traditionnels créent une atmosphère d'authenticité raffinée. La chambre comprend une salle de bain privative et une vue sur le patio.",
      ar: 'تستقبل غرفة جميلة حتى ثلاثة ضيوف في بيئة تحتفي بالحرفية المغربية. جدران التديلاكت بألوان ترابية دافئة وتفاصيل خشبية منحوتة يدويًا وأقمشة تقليدية تخلق جوًا من الأصالة الراقية. تشمل الغرفة حمامًا خاصًا وإطلالة على الفناء.',
    },
    amenities: ['Free Wi-Fi', 'En-suite bathroom', 'Tadelakt walls', 'Air conditioning', 'Patio view', 'Hand-carved woodwork'],
    features: [
      { en: 'Warm tadelakt walls in earth tones', fr: 'Murs en tadelakt aux tons terre', ar: 'جدران التديلاكت بألوان ترابية دافئة' },
      { en: 'Hand-carved wood details', fr: 'Détails en bois sculpté main', ar: 'تفاصيل خشبية منحوتة يدويًا' },
      { en: 'Traditional Moroccan textiles', fr: 'Textiles marocains traditionnels', ar: 'أقمشة مغربية تقليدية' },
      { en: 'En-suite bathroom', fr: 'Salle de bain privative', ar: 'حمام خاص' },
    ],
    images: [
      'https://images.pexels.com/photos/15531319/pexels-photo-15531319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673755/pexels-photo-30673755.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30301193/pexels-photo-30301193.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673757/pexels-photo-30673757.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
    ],
  },
  {
    slug: 'toubkal',
    name: 'Toubkal Room',
    capacity: 2,
    bathrooms: 1,
    category: 'standard',
    shortDescription: {
      en: 'A cozy double room named after Morocco\'s majestic peak, with authentic decor.',
      fr: "Une chambre double confortable nommée d'après le majestueux sommet marocain, au décor authentique.",
      ar: 'غرفة مزدوجة مريحة سميت باسم القمة المغربية المهيبة، بديكور أصيل.',
    },
    description: {
      en: 'Named after the highest peak in North Africa, the Toubkal Room offers a cozy retreat for two guests. The room features traditional tadelakt walls, warm lighting, and authentic Moroccan furnishings. An en-suite bathroom and comfortable bedding ensure a restful stay.',
      fr: "Nommée d'après le plus haut sommet d'Afrique du Nord, la chambre Toubkal offre un refuge confortable pour deux personnes. La chambre présente des murs en tadelakt traditionnel, un éclairage chaleureux et un mobilier marocain authentique. Une salle de bain privative et une literie confortable assurent un séjour reposant.",
      ar: 'سميت باسم أعلى قمة في شمال أفريقيا، وتوفر غرفة توبقال ملاذًا مريحًا لضيفين. تتميز الغرفة بجدران التديلاكت التقليدية والإضاءة الدافئة والأثاث المغربي الأصيل. حمام خاص وفراش مريح يضمنان إقامة هادئة.',
    },
    amenities: ['Free Wi-Fi', 'En-suite bathroom', 'Tadelakt walls', 'Air conditioning', 'Comfortable bedding'],
    features: [
      { en: 'Named after Mount Toubkal', fr: 'Nommée d\'après le mont Toubkal', ar: 'سميت باسم جبل توبقال' },
      { en: 'Cozy intimate atmosphere', fr: 'Ambiance intime et confortable', ar: 'جو حميمي ومريح' },
      { en: 'Traditional tadelakt walls', fr: 'Murs en tadelakt traditionnel', ar: 'جدران التديلاكت التقليدية' },
      { en: 'En-suite bathroom', fr: 'Salle de bain privative', ar: 'حمام خاص' },
    ],
    images: [
      'https://images.pexels.com/photos/30673749/pexels-photo-30673749.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673755/pexels-photo-30673755.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30301193/pexels-photo-30301193.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/15531319/pexels-photo-15531319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
    ],
  },
  {
    slug: 'jbilat',
    name: 'Jbilat Room',
    capacity: 2,
    bathrooms: 1,
    category: 'standard',
    shortDescription: {
      en: 'A serene double room with mountain-inspired decor and traditional craftsmanship.',
      fr: 'Une chambre double sereine au décor inspiré des montagnes et à l\'artisanat traditionnel.',
      ar: 'غرفة مزدوجة هادئة بديكور مستوحى من الجبال وحرفية تقليدية.',
    },
    description: {
      en: 'The Jbilat Room, whose name evokes the mountains, is a tranquil double room designed for rest and relaxation. Tadelakt walls, traditional textiles, and careful lighting create a peaceful ambiance. The room includes an en-suite bathroom and all modern amenities.',
      fr: "La chambre Jbilat, dont le nom évoque les montagnes, est une chambre double tranquille conçue pour le repos et la détente. Des murs en tadelakt, des textiles traditionnels et un éclairage soigné créent une ambiance paisible. La chambre comprend une salle de bain privative et tous les équipements modernes.",
      ar: 'غرفة جبيلات، التي يوحي اسمها بالجبال، هي غرفة مزدوجة هادئة مصممة للراحة والاسترخاء. جدران التديلاكت والأقمشة التقليدية والإضاءة المدروسة تخلق جوًا سلاميًا. تشمل الغرفة حمامًا خاصًا ووسائل الراحة العصرية.',
    },
    amenities: ['Free Wi-Fi', 'En-suite bathroom', 'Tadelakt walls', 'Air conditioning', 'Traditional textiles'],
    features: [
      { en: 'Mountain-inspired tranquility', fr: 'Tranquillité inspirée des montagnes', ar: 'هدوء مستوحى من الجبال' },
      { en: 'Peaceful ambiance', fr: 'Ambiance paisible', ar: 'جو سلامي' },
      { en: 'Traditional tadelakt walls', fr: 'Murs en tadelakt traditionnel', ar: 'جدران التديلاكت التقليدية' },
      { en: 'En-suite bathroom', fr: 'Salle de bain privative', ar: 'حمام خاص' },
    ],
    images: [
      'https://images.pexels.com/photos/30374221/pexels-photo-30374221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/35198986/pexels-photo-35198986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673749/pexels-photo-30673749.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673757/pexels-photo-30673757.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
    ],
  },
  {
    slug: 'bahia',
    name: 'Bahia Room',
    capacity: 2,
    bathrooms: 1,
    category: 'standard',
    shortDescription: {
      en: 'A beautiful double room inspired by the famous Bahia Palace, full of elegance.',
      fr: 'Une belle chambre double inspirée du célèbre palais Bahia, pleine d\'élégance.',
      ar: 'غرفة مزدوجة جميلة مستوحاة من قصر الباهية الشهير، مليئة بالأناقة.',
    },
    description: {
      en: 'The Bahia Room takes its name from the Arabic word for "beautiful" and the renowned Bahia Palace of Marrakech. This elegant double room features intricate Moroccan craftsmanship, tadelakt walls, and refined decor. An en-suite bathroom and comfortable amenities complete the experience.',
      fr: "La chambre Bahia tire son nom du mot arabe pour « beau » et du célèbre palais Bahia de Marrakech. Cette chambre double élégante présente un artisanat marocain complexe, des murs en tadelakt et un décor raffiné. Une salle de bain privative et des équipements confortables complètent l'expérience.",
      ar: 'غرفة بهية تأخذ اسمها من الكلمة العربية لـ "جميل" وقصر الباهية الشهير في مراكش. تتميز هذه الغرفة المزدوجة الأنيقة بالحرفية المغربية المعقدة وجدران التديلاكت والديكور الراقي. حمام خاص ووسائل راحة مريحة تكمل التجربة.',
    },
    amenities: ['Free Wi-Fi', 'En-suite bathroom', 'Tadelakt walls', 'Air conditioning', 'Intricate craftsmanship'],
    features: [
      { en: 'Named after the Bahia Palace', fr: 'Nommée d\'après le palais Bahia', ar: 'سميت باسم قصر الباهية' },
      { en: 'Intricate Moroccan craftsmanship', fr: 'Artisanat marocain complexe', ar: 'حرفية مغربية معقدة' },
      { en: 'Refined elegant decor', fr: 'Décor raffiné et élégant', ar: 'ديكور راقي وأنيق' },
      { en: 'En-suite bathroom', fr: 'Salle de bain privative', ar: 'حمام خاص' },
    ],
    images: [
      'https://images.pexels.com/photos/15531319/pexels-photo-15531319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30301193/pexels-photo-30301193.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673755/pexels-photo-30673755.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673757/pexels-photo-30673757.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
    ],
  },
  {
    slug: 'medina',
    name: 'Medina Room',
    capacity: 2,
    bathrooms: 1,
    category: 'economy',
    shortDescription: {
      en: 'A charming room capturing the spirit of Marrakech\'s ancient medina.',
      fr: "Une chambre charmante capturant l'esprit de l'ancienne médina de Marrakech.",
      ar: 'غرفة ساحرة تجسد روح المدينة القديمة في مراكش.',
    },
    description: {
      en: 'The Medina Room captures the essence of the old city. This comfortable double room features traditional Moroccan decor with tadelakt walls and authentic furnishings. Perfect for travelers seeking an immersive cultural experience in the heart of the medina.',
      fr: "La chambre Médina capture l'essence de la vieille ville. Cette chambre double confortable présente un décor marocain traditionnel avec des murs en tadelakt et un mobilier authentique. Parfaite pour les voyageurs cherchant une expérience culturelle immersive au cœur de la médina.",
      ar: 'غرفة المدينة تجسد جوهر المدينة القديمة. تتميز هذه الغرفة المزدوجة المريحة بالديكور المغربي التقليدي مع جدران التديلاكت والأثاث الأصيل. مثالية للمسافرين الباحثين عن تجربة ثقافية غامرة في قلب المدينة.',
    },
    amenities: ['Free Wi-Fi', 'En-suite bathroom', 'Tadelakt walls', 'Air conditioning'],
    features: [
      { en: 'Inspired by the ancient medina', fr: 'Inspirée par l\'ancienne médina', ar: 'مستوحاة من المدينة القديمة' },
      { en: 'Authentic Moroccan decor', fr: 'Décor marocain authentique', ar: 'ديكور مغربي أصيل' },
      { en: 'Tadelakt walls', fr: 'Murs en tadelakt', ar: 'جدران التديلاكت' },
      { en: 'En-suite bathroom', fr: 'Salle de bain privative', ar: 'حمام خاص' },
    ],
    images: [
      'https://images.pexels.com/photos/30673755/pexels-photo-30673755.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673757/pexels-photo-30673757.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30301193/pexels-photo-30301193.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/15531319/pexels-photo-15531319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
    ],
  },
  {
    slug: 'deloula',
    name: 'Deloula Room',
    capacity: 2,
    bathrooms: 1,
    category: 'economy',
    shortDescription: {
      en: 'A warm and inviting double room with traditional Moroccan character.',
      fr: 'Une chambre double chaleureuse et accueillante au caractère marocain traditionnel.',
      ar: 'غرفة مزدوجة دافئة ومرحبة بشخصية مغربية تقليدية.',
    },
    description: {
      en: 'The Deloula Room welcomes guests with warmth and authenticity. This comfortable double room features tadelakt walls, traditional Moroccan textiles, and an en-suite bathroom. A perfect choice for couples or solo travelers exploring the red city.',
      fr: "La chambre Deloula accueille les invités avec chaleur et authenticité. Cette chambre double confortable présente des murs en tadelakt, des textiles marocains traditionnels et une salle de bain privative. Un choix parfait pour les couples ou les voyageurs solo explorant la ville rouge.",
      ar: 'غرفة دلولة ترحب بالضيوف بالدفء والأصالة. تتميز هذه الغرفة المزدوجة المريحة بجدران التديلاكت والأقمشة المغربية التقليدية وحمام خاص. خيار مثالي للأزواج أو المسافرين المنفردين لاستكشاف المدينة الحمراء.',
    },
    amenities: ['Free Wi-Fi', 'En-suite bathroom', 'Tadelakt walls', 'Air conditioning'],
    features: [
      { en: 'Warm and inviting atmosphere', fr: 'Atmosphère chaleureuse et accueillante', ar: 'جو دافئ ومرحب' },
      { en: 'Traditional Moroccan textiles', fr: 'Textiles marocains traditionnels', ar: 'أقمشة مغربية تقليدية' },
      { en: 'Tadelakt walls', fr: 'Murs en tadelakt', ar: 'جدران التديلاكت' },
      { en: 'En-suite bathroom', fr: 'Salle de bain privative', ar: 'حمام خاص' },
    ],
    images: [
      'https://images.pexels.com/photos/30673749/pexels-photo-30673749.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30374221/pexels-photo-30374221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/35198986/pexels-photo-35198986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/15531319/pexels-photo-15531319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
    ],
  },
  {
    slug: 'safia',
    name: 'Safia Room',
    capacity: 2,
    bathrooms: 1,
    category: 'economy',
    shortDescription: {
      en: 'A peaceful double room whose name means "pure" in Arabic, offering serene comfort.',
      fr: 'Une chambre double paisible dont le nom signifie « pure » en arabe, offrant un confort serein.',
      ar: 'غرفة مزدوجة هادئة اسمها يعني "نقية" بالعربية، تقدم راحة سلامية.',
    },
    description: {
      en: 'The Safia Room — "pure" in Arabic — is a serene retreat for two guests. With its clean lines, tadelakt walls, and restful ambiance, this room offers a tranquil escape from the bustling medina. Includes an en-suite bathroom and all essential amenities.',
      fr: "La chambre Safia — « pure » en arabe — est un refuge serein pour deux personnes. Avec ses lignes épurées, ses murs en tadelakt et son ambiance reposante, cette chambre offre une évasion tranquille loin de la médina animée. Comprend une salle de bain privative et tous les équipements essentiels.",
      ar: 'غرفة صافية - "نقية" بالعربية - هي ملاذ سلامي لضيفين. بخطوطها النقية وجدران التديلاكت وجوها الهادئ، تقدم هذه الغرفة ملاذًا هادئًا بعيدًا عن المدينة الصاخبة. تشمل حمامًا خاصًا وكل وسائل الراحة الأساسية.',
    },
    amenities: ['Free Wi-Fi', 'En-suite bathroom', 'Tadelakt walls', 'Air conditioning'],
    features: [
      { en: 'Name means "pure" in Arabic', fr: 'Le nom signifie « pur » en arabe', ar: 'الاسم يعني "نقية" بالعربية' },
      { en: 'Serene and tranquil atmosphere', fr: 'Atmosphère sereine et tranquille', ar: 'جو سلامي وهادئ' },
      { en: 'Clean, restful design', fr: 'Design épuré et reposant', ar: 'تصميم نقي ومريح' },
      { en: 'En-suite bathroom', fr: 'Salle de bain privative', ar: 'حمام خاص' },
    ],
    images: [
      'https://images.pexels.com/photos/35198986/pexels-photo-35198986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673755/pexels-photo-30673755.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30374221/pexels-photo-30374221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673749/pexels-photo-30673749.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
    ],
  },
  {
    slug: 'atika',
    name: 'Atika Room',
    capacity: 1,
    bathrooms: 1,
    category: 'economy',
    shortDescription: {
      en: 'A cozy single room perfect for solo travelers, with authentic Moroccan charm.',
      fr: "Une chambre simple confortable parfaite pour les voyageurs solo, au charme marocain authentique.",
      ar: 'غرفة فردية مريحة مثالية للمسافرين المنفردين بسحر مغربي أصيل.',
    },
    description: {
      en: 'The Atika Room is an intimate single room ideal for solo travelers. Despite its compact size, it offers all the charm of a traditional Moroccan riad with tadelakt walls and authentic decor. Includes an en-suite bathroom and free Wi-Fi.',
      fr: "La chambre Atika est une chambre simple intime idéale pour les voyageurs solo. Malgré sa taille compacte, elle offre tout le charme d'un riad marocain traditionnel avec des murs en tadelakt et un décor authentique. Comprend une salle de bain privative et le Wi-Fi gratuit.",
      ar: 'غرفة عتيقة هي غرفة فردية حميمية مثالية للمسافرين المنفردين. على الرغم من حجمها المدمج، تقدم كل سحر الرياض المغربي التقليدي بجدران التديلاكت والديكور الأصيل. تشمل حمامًا خاصًا وواي فاي مجاني.',
    },
    amenities: ['Free Wi-Fi', 'En-suite bathroom', 'Tadelakt walls', 'Air conditioning'],
    features: [
      { en: 'Perfect for solo travelers', fr: 'Parfaite pour les voyageurs solo', ar: 'مثالية للمسافرين المنفردين' },
      { en: 'Compact and intimate', fr: 'Compacte et intime', ar: 'مدمجة وحميمية' },
      { en: 'Traditional tadelakt walls', fr: 'Murs en tadelakt traditionnel', ar: 'جدران التديلاكت التقليدية' },
      { en: 'En-suite bathroom', fr: 'Salle de bain privative', ar: 'حمام خاص' },
    ],
    images: [
      'https://images.pexels.com/photos/30673757/pexels-photo-30673757.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673749/pexels-photo-30673749.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30374221/pexels-photo-30374221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/35198986/pexels-photo-35198986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
    ],
  },
  {
    slug: 'halima',
    name: 'Halima Room',
    capacity: 1,
    bathrooms: 1,
    category: 'economy',
    shortDescription: {
      en: 'A charming single room offering comfort and authenticity for the solo traveler.',
      fr: "Une chambre simple charmante offrant confort et authenticité pour le voyageur solo.",
      ar: 'غرفة فردية ساحرة تقدم الراحة والأصالة للمسافر المنفرد.',
    },
    description: {
      en: 'The Halima Room is a welcoming single room designed for the solo traveler. With its tadelakt walls, traditional decor, and en-suite bathroom, it provides a comfortable and authentic Moroccan experience in an intimate setting.',
      fr: "La chambre Halima est une chambre simple accueillante conçue pour le voyageur solo. Avec ses murs en tadelakt, son décor traditionnel et sa salle de bain privative, elle offre une expérience marocaine confortable et authentique dans un cadre intime.",
      ar: 'غارة حليمة هي غرفة فردية مرحبة مصممة للمسافر المنفرد. بجدران التديلاكت والديكور التقليدي والحمام الخاص، تقدم تجربة مغربية مريحة وأصيلة في بيئة حميمية.',
    },
    amenities: ['Free Wi-Fi', 'En-suite bathroom', 'Tadelakt walls', 'Air conditioning'],
    features: [
      { en: 'Designed for solo travelers', fr: 'Conçue pour les voyageurs solo', ar: 'مصممة للمسافرين المنفردين' },
      { en: 'Welcoming and comfortable', fr: 'Accueillante et confortable', ar: 'مرحبة ومريحة' },
      { en: 'Traditional tadelakt walls', fr: 'Murs en tadelakt traditionnel', ar: 'جدران التديلاكت التقليدية' },
      { en: 'En-suite bathroom', fr: 'Salle de bain privative', ar: 'حمام خاص' },
    ],
    images: [
      'https://images.pexels.com/photos/30374221/pexels-photo-30374221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673749/pexels-photo-30673749.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673757/pexels-photo-30673757.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/35198986/pexels-photo-35198986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
    ],
  },
  {
    slug: 'koutoubia',
    name: 'Koutoubia Room',
    capacity: 1,
    bathrooms: 1,
    category: 'economy',
    shortDescription: {
      en: 'A single room named after Marrakech\'s iconic mosque, ideal for solo explorers.',
      fr: "Une chambre simple nommée d'après la mosquée emblématique de Marrakech, idéale pour les explorateurs solitaires.",
      ar: 'غرفة فردية سميت باسم مسجد مراكش الأيقوني، مثالية للمستكشفين المنفردين.',
    },
    description: {
      en: 'The Koutoubia Room takes its name from the iconic Koutoubia Mosque, whose minaret dominates the Marrakech skyline. This single room offers comfortable accommodation for solo travelers, with tadelakt walls, traditional decor, and an en-suite bathroom.',
      fr: "La chambre Koutoubia tire son nom de la mosquée Koutoubia emblématique, dont le minaret domine l'horizon de Marrakech. Cette chambre simple offre un hébergement confortable pour les voyageurs solo, avec des murs en tadelakt, un décor traditionnel et une salle de bain privative.",
      ar: 'غرفة الكتبية تأخذ اسمها من مسجد الكتبية الشهير، الذي يهيمن مئذنته على أفق مراكش. توفر هذه الغرفة الفردية إقامة مريحة للمسافرين المنفردين، بجدران التديلاكت والديكور التقليدي وحمام خاص.',
    },
    amenities: ['Free Wi-Fi', 'En-suite bathroom', 'Tadelakt walls', 'Air conditioning'],
    features: [
      { en: 'Named after the Koutoubia Mosque', fr: 'Nommée d\'après la mosquée Koutoubia', ar: 'سميت باسم مسجد الكتبية' },
      { en: 'Ideal for solo explorers', fr: 'Idéale pour les explorateurs solitaires', ar: 'مثالية للمستكشفين المنفردين' },
      { en: 'Traditional tadelakt walls', fr: 'Murs en tadelakt traditionnel', ar: 'جدران التديلاكت التقليدية' },
      { en: 'En-suite bathroom', fr: 'Salle de bain privative', ar: 'حمام خاص' },
    ],
    images: [
      'https://images.pexels.com/photos/30673749/pexels-photo-30673749.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/35198986/pexels-photo-35198986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30673757/pexels-photo-30673757.png?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
      'https://images.pexels.com/photos/30374221/pexels-photo-30374221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1890&fit=crop',
    ],
  },
];

export const getRoomBySlug = (slug: string): Room | undefined =>
  rooms.find((r) => r.slug === slug);
