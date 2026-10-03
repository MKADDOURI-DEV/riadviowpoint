export interface ServiceItem {
  icon: string;
  title: { en: string; fr: string; ar: string };
  description: { en: string; fr: string; ar: string };
}

export const services: ServiceItem[] = [
  {
    icon: 'Wifi',
    title: { en: 'Free Wi-Fi', fr: 'Wi-Fi gratuit', ar: 'واي فاي مجاني' },
    description: {
      en: 'Complimentary high-speed internet access throughout the riad.',
      fr: 'Accès internet haut débit gratuit dans tout le riad.',
      ar: 'وصول مجاني عالي السرعة إلى الإنترنت في جميع أنحاء الرياض.',
    },
  },
  {
    icon: 'Coffee',
    title: { en: 'Coffee Shop', fr: 'Café', ar: 'مقهى' },
    description: {
      en: 'A cozy coffee shop within the riad serving fresh beverages throughout the day.',
      fr: 'Un café confortable dans le riad servant des boissons fraîches tout au long de la journée.',
      ar: 'مقهى مريح داخل الرياض يقدم مشروبات طازجة طوال اليوم.',
    },
  },
  {
    icon: 'Sunrise',
    title: { en: 'Continental Breakfast', fr: 'Petit-déjeuner continental', ar: 'فطار كونتيننتال' },
    description: {
      en: 'Continental breakfast served daily on the terrace with views of the Atlas Mountains.',
      fr: 'Petit-déjeuner continental servi quotidiennement sur la terrasse avec vue sur les montagnes de l\'Atlas.',
      ar: 'فطار كونتيننتال يقدم يوميًا على التراس مع إطلالة على جبال الأطلس.',
    },
  },
  {
    icon: 'UtensilsCrossed',
    title: { en: 'Evening Meals', fr: 'Repas du soir', ar: 'وجبات العشاء' },
    description: {
      en: 'Traditional Moroccan evening meals available in the dining room upon request.',
      fr: 'Repas marocains traditionnels disponibles dans la salle à manger sur demande.',
      ar: 'وجبات مغربية تقليدية متوفرة في غرفة الطعام عند الطلب.',
    },
  },
  {
    icon: 'Clock',
    title: { en: '24-Hour Reception', fr: 'Réception 24h/24', ar: 'استقبال على مدار الساعة' },
    description: {
      en: 'Round-the-clock reception desk to assist you with any needs during your stay.',
      fr: 'Réception ouverte 24h/24 pour vous assister pendant votre séjour.',
      ar: 'استقبال على مدار الساعة لمساعدتك في أي احتياجات خلال إقامتك.',
    },
  },
  {
    icon: 'Plane',
    title: { en: 'Airport Shuttle', fr: 'Navette aéroport', ar: 'نقل المطار' },
    description: {
      en: 'Airport shuttle service to Marrakesh-Menara Airport, just 8 km away.',
      fr: 'Service de navette vers l\'aéroport Marrakech-Menara, à seulement 8 km.',
      ar: 'خدمة نقل المطار إلى مطار مراكش المنارة، على بعد 8 كم فقط.',
    },
  },
  {
    icon: 'Mountain',
    title: { en: 'Rooftop Terrace', fr: 'Terrasse panoramique', ar: 'تراس السطح' },
    description: {
      en: 'Rooftop terrace with stunning views of the Koutoubia Mosque and Atlas Mountains.',
      fr: 'Terrasse avec vue imprenable sur la mosquée Koutoubia et les montagnes de l\'Atlas.',
      ar: 'تراس سطحي مع إطلالات خلابة على مسجد الكتبية وجبال الأطلس.',
    },
  },
  {
    icon: 'Armchair',
    title: { en: 'Moroccan Seating Areas', fr: 'Salons marocains', ar: 'صالونات مغربية' },
    description: {
      en: 'Traditional Moroccan-style seating areas for relaxation and socializing.',
      fr: 'Salons de style marocain traditionnel pour la détente et les rencontres.',
      ar: 'صالونات مغربية تقليدية للاسترخاء والتواصل.',
    },
  },
];

export interface FacilityInfo {
  label: { en: string; fr: string; ar: string };
  value: { en: string; fr: string; ar: string };
}

export const propertyInfo: FacilityInfo[] = [
  {
    label: { en: 'Location', fr: 'Emplacement', ar: 'الموقع' },
    value: {
      en: 'Heart of the Medina, next to the Royal Palace',
      fr: 'Cœur de la médina, à côté du Palais Royal',
      ar: 'قلب المدينة، بجوار القصر الملكي',
    },
  },
  {
    label: { en: 'Distance to Jemaa el-Fna', fr: 'Distance de Jemaa el-Fna', ar: 'المسافة إلى ساحة جامع الفناء' },
    value: {
      en: '15-minute walk (1 km from city center)',
      fr: '15 minutes à pied (1 km du centre-ville)',
      ar: '15 دقيقة سيرًا (1 كم من وسط المدينة)',
    },
  },
  {
    label: { en: 'Distance to Airport', fr: 'Distance de l\'aéroport', ar: 'المسافة إلى المطار' },
    value: {
      en: '8 km to Marrakesh-Menara Airport',
      fr: '8 km de l\'aéroport Marrakech-Menara',
      ar: '8 كم إلى مطار مراكش المنارة',
    },
  },
  {
    label: { en: 'Total Bedrooms', fr: 'Chambres totales', ar: 'إجمالي الغرف' },
    value: { en: '13 bedrooms', fr: '13 chambres', ar: '13 غرفة' },
  },
  {
    label: { en: 'Check-in', fr: 'Arrivée', ar: 'موعد الوصول' },
    value: { en: 'From 14:00', fr: 'À partir de 14h', ar: 'من الساعة 14:00' },
  },
  {
    label: { en: 'Check-out', fr: 'Départ', ar: 'موعد المغادرة' },
    value: { en: 'Until 11:00', fr: 'Jusqu\'à 11h', ar: 'حتى الساعة 11:00' },
  },
];

export const contactInfo = {
  address: {
    en: 'Derb Sidi Musa, Medina of Marrakech, Morocco',
    fr: 'Derb Sidi Musa, Médina de Marrakech, Maroc',
    ar: 'درب سيدي موسى، المدينة القديمة، مراكش، المغرب',
  },
  email: 'contact@riadviewpoint.com',
  phone: '+212 5 24 00 00 00',
  whatsapp: '+212 6 00 00 00 00',
  mapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332.4!2d-7.9891!3d31.6255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM3JzMxLjgiTiA3wrA1OScyMC43Ilc!5e0!3m2!1sen!2sma!4v1700000000000',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=31.6255,-7.9891',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tripadvisor: 'https://tripadvisor.com',
  },
};
