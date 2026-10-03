export type Language = 'en' | 'fr' | 'ar';

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'fr', label: 'Français', flag: 'FR' },
  { code: 'ar', label: 'العربية', flag: 'AR' },
];

export interface Translation {
  nav: {
    home: string;
    rooms: string;
    experience: string;
    services: string;
    marrakech: string;
    location: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    tagline: string;
    bookYourStay: string;
    discoverRiad: string;
    scroll: string;
  };
  home: {
    introTitle: string;
    introText: string;
    introText2: string;
    featuredRooms: string;
    featuredRoomsSubtitle: string;
    discoverRoom: string;
    bookNow: string;
    viewAllRooms: string;
    whyStayTitle: string;
    whyStaySubtitle: string;
    whyStay1Title: string;
    whyStay1Text: string;
    whyStay2Title: string;
    whyStay2Text: string;
    whyStay3Title: string;
    whyStay3Text: string;
    whyStay4Title: string;
    whyStay4Text: string;
    experienceTitle: string;
    experienceSubtitle: string;
    experienceText: string;
    experienceCta: string;
    servicesTitle: string;
    servicesSubtitle: string;
    viewAllServices: string;
    marrakechTitle: string;
    marrakechSubtitle: string;
    marrakechText: string;
    marrakechCta: string;
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    locationTitle: string;
    locationSubtitle: string;
    getDirections: string;
    bookingCtaTitle: string;
    bookingCtaText: string;
    bookingCtaButton: string;
  };
  rooms: {
    title: string;
    subtitle: string;
    capacity: string;
    guests: string;
    bathroom: string;
    bathrooms: string;
    keyAmenities: string;
    discoverRoom: string;
    bookNow: string;
    backToRooms: string;
    amenities: string;
    features: string;
    gallery: string;
    relatedRooms: string;
    roomCategorySuite: string;
    roomCategoryFamily: string;
    roomCategoryStandard: string;
    roomCategoryEconomy: string;
  };
  experience: {
    title: string;
    subtitle: string;
    atmosphereTitle: string;
    atmosphereText: string;
    lifestyleTitle: string;
    lifestyleText: string;
    relaxationTitle: string;
    relaxationText: string;
    localTitle: string;
    localText: string;
    hospitalityTitle: string;
    hospitalityText: string;
    architectureTitle: string;
    architectureText: string;
  };
  services: {
    title: string;
    subtitle: string;
    propertyInfoTitle: string;
  };
  marrakech: {
    title: string;
    subtitle: string;
    introTitle: string;
    introText: string;
    medinaTitle: string;
    medinaText: string;
    souksTitle: string;
    souksText: string;
    jemaaTitle: string;
    jemaaText: string;
    culturalTitle: string;
    culturalText: string;
    restaurantsTitle: string;
    restaurantsText: string;
    dayTripsTitle: string;
    dayTripsText: string;
    usefulInfoTitle: string;
    usefulInfoText: string;
  };
  location: {
    title: string;
    subtitle: string;
    address: string;
    getDirections: string;
    contactFormTitle: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSend: string;
    formSuccess: string;
    formError: string;
    callUs: string;
    emailUs: string;
    whatsapp: string;
  };
  booking: {
    title: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    guest: string;
    guestsPl: string;
    room: string;
    selectRoom: string;
    anyRoom: string;
    checkAvailability: string;
    subtitle: string;
    selectDates: string;
    nights: string;
    night: string;
    requestBooking: string;
    bookingNote: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    ourRooms: string;
    contactUs: string;
    followUs: string;
    rights: string;
    tagline: string;
  };
  common: {
    learnMore: string;
    close: string;
    menu: string;
    language: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      rooms: 'Rooms',
      experience: 'Experience',
      services: 'Services',
      marrakech: 'Marrakech',
      location: 'Location',
      contact: 'Contact',
      bookNow: 'Book Now',
    },
    hero: {
      tagline: 'A Boutique Riad in the Heart of Marrakech',
      bookYourStay: 'Book Your Stay',
      discoverRiad: 'Discover the Riad',
      scroll: 'Scroll to explore',
    },
    home: {
      introTitle: 'Welcome to Riad Viewpoint',
      introText:
        'Located next to the Royal Palace and a 15-minute walk from Jemaa el-Fna Square, Riad Viewpoint offers Moroccan-style seating areas and a rooftop terrace with views of the Koutoubia Mosque and the Atlas Mountains.',
      introText2:
        'The rooms are decorated in a traditional style and feature tadelakt walls. All rooms provide an en-suite bathroom and free Wi-Fi access, while some also include views of the patio. A continental breakfast is served on the terrace and evening meals are available in the dining room.',
      featuredRooms: 'Featured Rooms',
      featuredRoomsSubtitle: 'Discover our collection of thirteen uniquely crafted rooms',
      discoverRoom: 'Discover Room',
      bookNow: 'Book Now',
      viewAllRooms: 'View All Rooms',
      whyStayTitle: 'Why Stay With Us',
      whyStaySubtitle: 'An authentic Moroccan experience in the heart of the medina',
      whyStay1Title: 'Prime Location',
      whyStay1Text:
        'Situated 50 meters from the Royal Palace and just 1 km from the city center, you are perfectly positioned to explore Marrakech.',
      whyStay2Title: 'Authentic Moroccan Design',
      whyStay2Text:
        'Every room features hand-crafted tadelakt walls, traditional zellige tilework, and authentic Moroccan furnishings.',
      whyStay3Title: 'Rooftop Terrace Views',
      whyStay3Text:
        'Enjoy breathtaking views of the Koutoubia Mosque and the Atlas Mountains from our rooftop terrace.',
      whyStay4Title: 'Warm Hospitality',
      whyStay4Text:
        'Our 24-hour reception and dedicated staff ensure your stay is comfortable, memorable, and truly Moroccan.',
      experienceTitle: 'The Riad Experience',
      experienceSubtitle: 'Where tradition meets tranquility',
      experienceText:
        'Step through the doors of Riad Viewpoint and leave the bustling medina behind. Our riad is a sanctuary of calm — a place where the rhythms of Moroccan life unfold at their own pace. From the gentle splash of the patio fountain to the warm glow of lanterns at dusk, every moment is an invitation to slow down and savor the art of Moroccan living.',
      experienceCta: 'Explore the Experience',
      servicesTitle: 'Services & Facilities',
      servicesSubtitle: 'Everything you need for a comfortable stay',
      viewAllServices: 'View All Services',
      marrakechTitle: 'Discover Marrakech',
      marrakechSubtitle: 'The Red City awaits',
      marrakechText:
        'Marrakech, with its legendary hotels, spellbinding botanical displays, and much-talked-about museums, is a natural place to begin your Moroccan journey. From the vibrant souks to the majestic Jemaa el-Fna, the Red City offers an unforgettable sensory experience.',
      marrakechCta: 'Explore Marrakech',
      testimonialsTitle: 'Guest Experiences',
      testimonialsSubtitle: 'What our visitors say about their stay',
      locationTitle: 'Find Us in the Medina',
      locationSubtitle: 'In the heart of historic Marrakech',
      getDirections: 'Get Directions',
      bookingCtaTitle: 'Ready to Experience Riad Viewpoint?',
      bookingCtaText:
        'Book your stay at our boutique riad in the heart of the Marrakech medina. We look forward to welcoming you.',
      bookingCtaButton: 'Book Your Stay',
    },
    rooms: {
      title: 'Rooms & Suites',
      subtitle: 'Thirteen uniquely crafted rooms, each telling its own Moroccan story',
      capacity: 'Capacity',
      guests: 'guests',
      bathroom: 'bathroom',
      bathrooms: 'bathrooms',
      keyAmenities: 'Key Amenities',
      discoverRoom: 'Discover Room',
      bookNow: 'Book Now',
      backToRooms: 'Back to All Rooms',
      amenities: 'Amenities',
      features: 'Room Features',
      gallery: 'Gallery',
      relatedRooms: 'You May Also Like',
      roomCategorySuite: 'Suite',
      roomCategoryFamily: 'Family Room',
      roomCategoryStandard: 'Standard Room',
      roomCategoryEconomy: 'Single Room',
    },
    experience: {
      title: 'The Riad Experience',
      subtitle: 'An immersive journey into Moroccan living',
      atmosphereTitle: 'Moroccan Atmosphere',
      atmosphereText:
        'The air is thick with the scent of orange blossom and fresh mint tea. Sunlight filters through carved cedar screens, casting intricate patterns on tadelakt walls. This is the atmosphere of Riad Viewpoint — a place where every detail tells a story of Moroccan craftsmanship and centuries of tradition.',
      lifestyleTitle: 'Marrakech Lifestyle',
      lifestyleText:
        'Life at the riad follows the natural rhythms of the day. Mornings begin with breakfast on the terrace, overlooking the city\'s terracotta rooftops. Afternoons are for exploring the medina or resting in the cool of the patio. Evenings bring the sounds of the call to prayer and the distant hum of Jemaa el-Fna.',
      relaxationTitle: 'Pure Relaxation',
      relaxationText:
        'The central patio, with its gentle fountain and lush greenery, is the heart of the riad — a place to read, reflect, and recharge. The rooftop terrace offers panoramic views, perfect for sunset watching with a glass of Moroccan mint tea in hand.',
      localTitle: 'Local Experiences',
      localText:
        'From guided tours of the medina to cooking classes with local chefs, we can arrange authentic experiences that connect you with the real Marrakech. Visit the souks, learn the art of Moroccan cuisine, or venture into the Atlas Mountains for a day trip.',
      hospitalityTitle: 'Moroccan Hospitality',
      hospitalityText:
        'Hospitality is at the core of Moroccan culture. At Riad Viewpoint, our staff treats every guest as family. From the welcome mint tea to the personalized recommendations, we ensure your stay is filled with warmth and genuine care.',
      architectureTitle: 'Architecture & Interior',
      architectureText:
        'Traditional riad architecture centers around the patio — a courtyard that brings light, air, and nature into the heart of the home. Our riad features intricate zellige tilework, carved cedar ceilings, hand-crafted tadelakt walls, and authentic Moroccan furnishings that celebrate the artistry of local craftsmen.',
    },
    services: {
      title: 'Services & Facilities',
      subtitle: 'Everything you need for a comfortable and memorable stay',
      propertyInfoTitle: 'Property Information',
    },
    marrakech: {
      title: 'Marrakech Guide',
      subtitle: 'Your guide to the Red City',
      introTitle: 'Welcome to Marrakech',
      introText:
        'Marrakech, the legendary Red City of Morocco, is a sensory feast of colors, sounds, and flavors. Founded in 1062, it has been a crossroads of cultures for nearly a thousand years. Today, it is one of the world\'s most captivating travel destinations — a city where ancient traditions and modern luxury coexist in perfect harmony.',
      medinaTitle: 'The Medina',
      medinaText:
        'The medina of Marrakech is a UNESCO World Heritage site — a labyrinth of narrow streets, hidden courtyards, and ancient buildings. Within its walls, you\'ll find riads, palaces, mosques, and markets that have changed little in centuries. Staying at Riad Viewpoint places you in the heart of this living history.',
      souksTitle: 'The Souks',
      souksText:
        'The souks of Marrakech are among the most vibrant markets in the world. From spices and textiles to leather goods and lanterns, each section specializes in different crafts. Bargaining is expected and part of the experience. Our staff can recommend the best stalls and help you navigate the maze.',
      jemaaTitle: 'Jemaa el-Fna',
      jemaaText:
        'Jemaa el-Fna is the beating heart of Marrakech — a square that transforms throughout the day. By morning, juice sellers and snake charmers hold court. By night, the square fills with food stalls, storytellers, musicians, and a carnival of activity. It is a 15-minute walk from Riad Viewpoint.',
      culturalTitle: 'Cultural Experiences',
      culturalText:
        'Visit the Bahia Palace, the Ben Youssef Madrasa, and the Saadian Tombs. Explore the Majorelle Garden and the adjacent Yves Saint Laurent Museum. Discover contemporary art at the MACAAL or browse the galleries of the Gueliz district. Marrakech offers a rich tapestry of cultural experiences.',
      restaurantsTitle: 'Restaurants & Dining',
      restaurantsText:
        'From rooftop restaurants with sunset views to hidden medina eateries, Marrakech\'s dining scene is extraordinary. Try traditional Moroccan cuisine — tagine, couscous, pastilla — or explore the city\'s growing number of international restaurants. Our staff can recommend and reserve the best tables.',
      dayTripsTitle: 'Day Trips',
      dayTripsText:
        'Beyond the city, the Atlas Mountains offer hiking, Berber villages, and breathtaking landscapes. The coastal town of Essaouira is a 2.5-hour drive. The Agafay desert provides a taste of the Sahara closer to Marrakech. We can arrange guided excursions and transportation.',
      usefulInfoTitle: 'Useful Information',
      usefulInfoText:
        'The best time to visit Marrakech is spring (March to May) and autumn (September to November). The local currency is the Moroccan Dirham. French and Arabic are the official languages; English is widely spoken in tourist areas. Taxis are inexpensive but agree on the fare before departure.',
    },
    location: {
      title: 'Location & Contact',
      subtitle: 'Find us in the heart of the Marrakech medina',
      address: 'Address',
      getDirections: 'Get Directions',
      contactFormTitle: 'Send Us a Message',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formSubject: 'Subject',
      formMessage: 'Your Message',
      formSend: 'Send Message',
      formSuccess: 'Thank you! Your message has been sent. We will get back to you shortly.',
      formError: 'Sorry, there was an error sending your message. Please try again or contact us directly.',
      callUs: 'Call Us',
      emailUs: 'Email Us',
      whatsapp: 'WhatsApp',
    },
    booking: {
      title: 'Book Your Stay',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Guests',
      guest: 'guest',
      guestsPl: 'guests',
      room: 'Room',
      selectRoom: 'Select a room',
      anyRoom: 'Any room',
      checkAvailability: 'Check Availability',
      subtitle: 'Check availability and request your reservation',
      selectDates: 'Please select check-in and check-out dates',
      nights: 'nights',
      night: 'night',
      requestBooking: 'Request Booking',
      bookingNote: 'This is a booking request. Our team will confirm availability and contact you to finalize your reservation.',
    },
    footer: {
      description:
        'A boutique riad in the heart of the Marrakech medina, offering authentic Moroccan hospitality and traditional craftsmanship.',
      quickLinks: 'Quick Links',
      ourRooms: 'Our Rooms',
      contactUs: 'Contact',
      followUs: 'Follow Us',
      rights: 'All Rights Reserved',
      tagline: 'A Gateway to Marrakech',
    },
    common: {
      learnMore: 'Learn More',
      close: 'Close',
      menu: 'Menu',
      language: 'Language',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      rooms: 'Chambres',
      experience: 'Expérience',
      services: 'Services',
      marrakech: 'Marrakech',
      location: 'Localisation',
      contact: 'Contact',
      bookNow: 'Réserver',
    },
    hero: {
      tagline: 'Un riad boutique au cœur de Marrakech',
      bookYourStay: 'Réservez votre séjour',
      discoverRiad: 'Découvrir le riad',
      scroll: 'Faites défiler pour explorer',
    },
    home: {
      introTitle: 'Bienvenue au Riad Viewpoint',
      introText:
        "Situé à côté du Palais Royal et à 15 minutes à pied de la place Jemaa el-Fna, le Riad Viewpoint propose des salons de style marocain et une terrasse panoramique avec vue sur la mosquée Koutoubia et les montagnes de l'Atlas.",
      introText2:
        "Les chambres sont décorées dans un style traditionnel et présentent des murs en tadelakt. Toutes disposent d'une salle de bain privative et d'un accès Wi-Fi gratuit, et certaines offrent une vue sur le patio. Un petit-déjeuner continental est servi sur la terrasse et des repas du soir sont disponibles dans la salle à manger.",
      featuredRooms: 'Chambres en vedette',
      featuredRoomsSubtitle: 'Découvrez notre collection de treize chambres uniques',
      discoverRoom: 'Découvrir la chambre',
      bookNow: 'Réserver',
      viewAllRooms: 'Voir toutes les chambres',
      whyStayTitle: 'Pourquoi séjourner chez nous',
      whyStaySubtitle: 'Une expérience marocaine authentique au cœur de la médina',
      whyStay1Title: 'Emplacement idéal',
      whyStay1Text:
        "Situé à 50 mètres du Palais Royal et à seulement 1 km du centre-ville, vous êtes parfaitement positionné pour explorer Marrakech.",
      whyStay2Title: 'Design marocain authentique',
      whyStay2Text:
        'Chaque chambre présente des murs en tadelakt faits main, du zellige traditionnel et un mobilier marocain authentique.',
      whyStay3Title: 'Vue depuis la terrasse',
      whyStay3Text:
        "Profitez d'une vue imprenable sur la mosquée Koutoubia et les montagnes de l'Atlas depuis notre terrasse panoramique.",
      whyStay4Title: 'Chaleur de l\'accueil',
      whyStay4Text:
        'Notre réception ouverte 24h/24 et notre personnel dévoué assurent un séjour confortable et véritablement marocain.',
      experienceTitle: 'L\'expérience du riad',
      experienceSubtitle: 'Où la tradition rencontre la tranquillité',
      experienceText:
        "Franchissez les portes du Riad Viewpoint et laissez derrière vous l'effervescence de la médina. Notre riad est un sanctuaire de calme — un lieu où les rythmes de la vie marocaine se déploient à leur propre pace. Du doux clapotis de la fontaine du patio à la lueur des lanternes au crépuscule, chaque instant est une invitation à ralentir et à savourer l'art de vivre marocain.",
      experienceCta: "Explorer l'expérience",
      servicesTitle: 'Services & équipements',
      servicesSubtitle: 'Tout ce dont vous avez besoin pour un séjour confortable',
      viewAllServices: 'Voir tous les services',
      marrakechTitle: 'Découvrir Marrakech',
      marrakechSubtitle: 'La ville rouge vous attend',
      marrakechText:
        "Marrakech, avec ses hôtels légendaires, ses jardins botaniques envoûtants et ses musées renommés, est le point de départ naturel de votre voyage marocain. Des souks vibrants à la majestueuse place Jemaa el-Fna, la ville rouge offre une expérience sensorielle inoubliable.",
      marrakechCta: 'Explorer Marrakech',
      testimonialsTitle: 'Expériences de nos invités',
      testimonialsSubtitle: 'Ce que nos visiteurs disent de leur séjour',
      locationTitle: 'Trouvez-nous dans la médina',
      locationSubtitle: 'Au cœur du Marrakech historique',
      getDirections: 'Obtenir l\'itinéraire',
      bookingCtaTitle: 'Prêt à vivre l\'expérience du Riad Viewpoint ?',
      bookingCtaText:
        "Réservez votre séjour dans notre riad boutique au cœur de la médina de Marrakech. Nous avons hâte de vous accueillir.",
      bookingCtaButton: 'Réservez votre séjour',
    },
    rooms: {
      title: 'Chambres & Suites',
      subtitle: 'Treize chambres uniques, chacune racontant sa propre histoire marocaine',
      capacity: 'Capacité',
      guests: 'personnes',
      bathroom: 'salle de bain',
      bathrooms: 'salles de bain',
      keyAmenities: 'Équipements principaux',
      discoverRoom: 'Découvrir la chambre',
      bookNow: 'Réserver',
      backToRooms: 'Retour aux chambres',
      amenities: 'Équipements',
      features: 'Caractéristiques',
      gallery: 'Galerie',
      relatedRooms: 'Vous aimerez aussi',
      roomCategorySuite: 'Suite',
      roomCategoryFamily: 'Chambre familiale',
      roomCategoryStandard: 'Chambre standard',
      roomCategoryEconomy: 'Chambre simple',
    },
    experience: {
      title: "L'expérience du riad",
      subtitle: 'Un voyage immersif dans l\'art de vivre marocain',
      atmosphereTitle: 'Atmosphère marocaine',
      atmosphereText:
        "L'air est parfumé de fleur d'oranger et de thé à la menthe fraîche. La lumière du soleil filtre à travers les écrans de cèdre sculpté, projetant des motifs complexes sur les murs en tadelakt. Telle est l'atmosphère du Riad Viewpoint — un lieu où chaque détail raconte l'artisanat marocain et des siècles de tradition.",
      lifestyleTitle: 'Le mode de vie marrakchi',
      lifestyleText:
        "La vie au riad suit les rythmes naturels de la journée. Les matins commencent par le petit-déjeuner sur la terrasse, avec vue sur les toits en terre cuite de la ville. Les après-midi sont propices à l'exploration de la médina ou au repos dans la fraîcheur du patio. Les soirées apportent l'appel à la prière et le murmure lointain de Jemaa el-Fna.",
      relaxationTitle: 'Pure détente',
      relaxationText:
        "Le patio central, avec sa fontaine douce et sa verdure luxuriante, est le cœur du riad — un lieu pour lire, réfléchir et se ressourcer. La terrasse panoramique offre une vue à 360°, parfaite pour observer le coucher du soleil avec un verre de thé à la menthe marocain.",
      localTitle: 'Expériences locales',
      localText:
        "Des visites guidées de la médina aux cours de cuisine avec des chefs locaux, nous organisons des expériences authentiques qui vous connectent au vrai Marrakech. Visitez les souks, apprenez l'art de la cuisine marocaine ou aventurez-vous dans les montagnes de l'Atlas pour une excursion d'une journée.",
      hospitalityTitle: 'Hospitalité marocaine',
      hospitalityText:
        "L'hospitalité est au cœur de la culture marocaine. Au Riad Viewpoint, notre personnel traite chaque invité comme un membre de la famille. Du thé de bienvenue aux recommandations personnalisées, nous veillons à ce que votre séjour soit rempli de chaleur et de sincérité.",
      architectureTitle: 'Architecture & intérieur',
      architectureText:
        "L'architecture traditionnelle du riad s'articule autour du patio — une cour qui apporte lumière, air et nature au cœur de la maison. Notre riad présente des zelliges complexes, des plafonds en cèdre sculpté, des murs en tadelakt faits main et un mobilier marocain authentique qui célèbre l'artisanat des artisans locaux.",
    },
    services: {
      title: 'Services & équipements',
      subtitle: 'Tout ce dont vous avez besoin pour un séjour confortable et mémorable',
      propertyInfoTitle: 'Informations sur la propriété',
    },
    marrakech: {
      title: 'Guide de Marrakech',
      subtitle: 'Votre guide de la ville rouge',
      introTitle: 'Bienvenue à Marrakech',
      introText:
        "Marrakech, la légendaire ville rouge du Maroc, est une fête sensorielle de couleurs, de sons et de saveurs. Fondée en 1062, elle est un carrefour de cultures depuis près de mille ans. Aujourd'hui, c'est l'une des destinations de voyage les plus captivantes du monde — une ville où traditions anciennes et luxe moderne coexistent en parfaite harmonie.",
      medinaTitle: 'La médina',
      medinaText:
        "La médina de Marrakech est inscrite au patrimoine mondial de l'UNESCO — un labyrinthe de ruelles étroites, de cours cachées et de bâtiments anciens. Entre ses murs, vous trouverez des riads, des palais, des mosquées et des marchés qui ont peu changé depuis des siècles. Séjourner au Riad Viewpoint vous place au cœur de cette histoire vivante.",
      souksTitle: 'Les souks',
      souksText:
        "Les souks de Marrakech sont parmi les marchés les plus vibrants du monde. Des épices aux textiles, en passant par les articles en cuir et les lanternes, chaque section se spécialise dans différents métiers. Le marchandage est attendu et fait partie de l'expérience. Notre personnel peut recommander les meilleurs étals et vous aider à naviguer dans le dédale.",
      jemaaTitle: 'Jemaa el-Fna',
      jemaaText:
        "Jemaa el-Fna est le cœur battant de Marrakech — une place qui se transforme tout au long de la journée. Le matin, les vendeurs de jus et les charmeurs de serpents tiennent cour. Le soir, la square se remplit de stands de nourriture, de conteurs, de musiciens et d'un carnaval d'activités. Elle est à 15 minutes à pied du Riad Viewpoint.",
      culturalTitle: 'Expériences culturelles',
      culturalText:
        "Visitez le palais Bahia, la madrasa Ben Youssef et les tombeaux saadiens. Explorez le jardin Majorelle et le musée Yves Saint Laurent attenant. Découvrez l'art contemporain au MACAAL ou parcourez les galeries du quartier Gueliz. Marrakech offre une riche palette d'expériences culturelles.",
      restaurantsTitle: 'Restaurants & gastronomie',
      restaurantsText:
        "Des restaurants sur les toits avec vue sur le coucher du soleil aux eateries cachés de la médina, la scène gastronomique de Marrakech est extraordinaire. Essayez la cuisine marocaine traditionnelle — tajine, couscous, pastilla — ou explorez le nombre croissant de restaurants internationaux de la ville. Notre personnel peut recommander et réserver les meilleures tables.",
      dayTripsTitle: 'Excursions',
      dayTripsText:
        "Au-delà de la ville, les montagnes de l'Atlas offrent randonnée, villages berbères et paysages à couper le souffle. La ville côtière d'Essaouira est à 2h30 de route. Le désert d'Agafay offre un avant-goût du Sahara plus proche de Marrakech. Nous pouvons organiser des excursions guidées et des transports.",
      usefulInfoTitle: 'Informations utiles',
      usefulInfoText:
        "La meilleure période pour visiter Marrakech est le printemps (mars à mai) et l'automne (septembre à novembre). La monnaie locale est le dirham marocain. Le français et l'arabe sont les langues officielles ; l'anglais est largement parlé dans les zones touristiques. Les taxis sont abordables mais convenez du prix avant le départ.",
    },
    location: {
      title: 'Localisation & contact',
      subtitle: 'Trouvez-nous au cœur de la médina de Marrakech',
      address: 'Adresse',
      getDirections: 'Obtenir l\'itinéraire',
      contactFormTitle: 'Envoyez-nous un message',
      formName: 'Votre nom',
      formEmail: 'Votre email',
      formSubject: 'Sujet',
      formMessage: 'Votre message',
      formSend: 'Envoyer',
      formSuccess: 'Merci ! Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.',
      formError: 'Désolé, une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous contacter directement.',
      callUs: 'Appelez-nous',
      emailUs: 'Écrivez-nous',
      whatsapp: 'WhatsApp',
    },
    booking: {
      title: 'Réservez votre séjour',
      checkIn: 'Arrivée',
      checkOut: 'Départ',
      guests: 'Personnes',
      guest: 'personne',
      guestsPl: 'personnes',
      room: 'Chambre',
      selectRoom: 'Choisir une chambre',
      anyRoom: 'Toute chambre',
      checkAvailability: 'Vérifier la disponibilité',
      subtitle: 'Vérifiez la disponibilité et demandez votre réservation',
      selectDates: 'Veuillez sélectionner les dates d\'arrivée et de départ',
      nights: 'nuits',
      night: 'nuit',
      requestBooking: 'Demander une réservation',
      bookingNote: "Il s'agit d'une demande de réservation. Notre équipe confirmera la disponibilité et vous contactera pour finaliser votre réservation.",
    },
    footer: {
      description:
        "Un riad boutique au cœur de la médina de Marrakech, offrant une hospitalité marocaine authentique et un artisanat traditionnel.",
      quickLinks: 'Liens rapides',
      ourRooms: 'Nos chambres',
      contactUs: 'Contact',
      followUs: 'Suivez-nous',
      rights: 'Tous droits réservés',
      tagline: 'Une porte d\'entrée vers Marrakech',
    },
    common: {
      learnMore: 'En savoir plus',
      close: 'Fermer',
      menu: 'Menu',
      language: 'Langue',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      rooms: 'الغرف',
      experience: 'التجربة',
      services: 'الخدمات',
      marrakech: 'مراكش',
      location: 'الموقع',
      contact: 'اتصل بنا',
      bookNow: 'احجز الآن',
    },
    hero: {
      tagline: 'رياد بوتيك في قلب مراكش',
      bookYourStay: 'احجز إقامتك',
      discoverRiad: 'اكتشف الرياض',
      scroll: 'مرر للاستكشاف',
    },
    home: {
      introTitle: 'مرحباً بكم في رياض فيو بوينت',
      introText:
        'يقع رياض فيو بوينت بجوار القصر الملكي وعلى بعد 15 دقيقة سيراً على الأقدام من ساحة جامع الفناء. يوفر صالات جلوس على الطراز المغربي وتراساً بانورامياً مع إطلالات على مسجد الكتبية وجبال الأطلس.',
      introText2:
        'الغرف مزينة بطراز تقليدي وتتميز بجدران التديلاكت. توفر جميع الغرف حماماً خاصاً وواي فاي مجاني، وبعضها يطل على الفناء. يُقدم فطار كونتيننتال يومياً على التراس وتتوفر وجبات مسائية في غرفة الطعام.',
      featuredRooms: 'غرف مميزة',
      featuredRoomsSubtitle: 'اكتشف مجموعتنا من ثلاث عشرة غرفة فريدة',
      discoverRoom: 'اكتشف الغرفة',
      bookNow: 'احجز الآن',
      viewAllRooms: 'عرض جميع الغرف',
      whyStayTitle: 'لماذا تقيم معنا',
      whyStaySubtitle: 'تجربة مغربية أصيلة في قلب المدينة القديمة',
      whyStay1Title: 'موقع مثالي',
      whyStay1Text:
        'يقع على بعد 50 متراً من القصر الملكي وعلى بعد كيلومتر واحد فقط من وسط المدينة، مما يضعك في موقع مثالي لاستكشاف مراكش.',
      whyStay2Title: 'تصميم مغربي أصيل',
      whyStay2Text:
        'كل غرفة تتميز بجدران التديلاكت المصنوعة يدوياً والزليج التقليدي والأثاث المغربي الأصيل.',
      whyStay3Title: 'إطلالات التراس',
      whyStay3Text:
        'استمتع بإطلالات خلابة على مسجد الكتبية وجبال الأطلس من تراسنا البانورامي.',
      whyStay4Title: 'كرم الضيافة',
      whyStay4Text:
        'استقبالنا على مدار الساعة وموظفونا المتفانون يضمنون إقامة مريحة وتجربة مغربية حقيقية.',
      experienceTitle: 'تجربة الرياض',
      experienceSubtitle: 'حيث يلتقي التقليد بالهدوء',
      experienceText:
        'اعبر أبواب رياض فيو بوينت واترك صخب المدينة القديمة خلفك. رياضنا هو ملاذ للهدوء — مكان تتجلى فيه إيقاعات الحياة المغربية بوتيرتها الخاصة. من خرير نافورة الفناء إلى توهج الفوانيس عند الغسق، كل لحظة دعوة لإبطاء الوتيرة والتلذذ بفن العيش المغربي.',
      experienceCta: 'استكشف التجربة',
      servicesTitle: 'الخدمات والمرافق',
      servicesSubtitle: 'كل ما تحتاجه لإقامة مريحة',
      viewAllServices: 'عرض جميع الخدمات',
      marrakechTitle: 'اكتشف مراكش',
      marrakechSubtitle: 'المدينة الحمراء بانتظارك',
      marrakechText:
        'مراكش، بفنادقها الأسطورية وحدائقها الساحرة ومتاحفها الشهيرة، هي نقطة الانطلاق الطبيعية لرحلتك المغربية. من الأسواق النابضة بالحياة إلى ساحة جامع الفناء المهيبة، تقدم المدينة الحمراء تجربة حسية لا تُنسى.',
      marrakechCta: 'استكشف مراكش',
      testimonialsTitle: 'تجارب ضيوفنا',
      testimonialsSubtitle: 'ما يقوله زوارنا عن إقامتهم',
      locationTitle: 'تجدنا في المدينة القديمة',
      locationSubtitle: 'في قلب مراكش التاريخية',
      getDirections: 'احصل على الاتجاهات',
      bookingCtaTitle: 'هل أنت مستعد لتجربة رياض فيو بوينت؟',
      bookingCtaText:
        'احجز إقامتك في رياضنا البوتيك في قلب المدينة القديمة في مراكش. نتطلع إلى الترحيب بك.',
      bookingCtaButton: 'احجز إقامتك',
    },
    rooms: {
      title: 'الغرف والأجنحة',
      subtitle: 'ثلاث عشرة غرفة فريدة، كل منها يروي قصتها المغربية الخاصة',
      capacity: 'السعة',
      guests: 'ضيوف',
      bathroom: 'حمام',
      bathrooms: 'حمامات',
      keyAmenities: 'المرافق الرئيسية',
      discoverRoom: 'اكتشف الغرفة',
      bookNow: 'احجز الآن',
      backToRooms: 'العودة إلى جميع الغرف',
      amenities: 'المرافق',
      features: 'مميزات الغرفة',
      gallery: 'معرض الصور',
      relatedRooms: 'قد يعجبك أيضاً',
      roomCategorySuite: 'جناح',
      roomCategoryFamily: 'غرفة عائلية',
      roomCategoryStandard: 'غرفة عادية',
      roomCategoryEconomy: 'غرفة فردية',
    },
    experience: {
      title: 'تجربة الرياض',
      subtitle: 'رحلة غامرة في فن العيش المغربي',
      atmosphereTitle: 'الأجواء المغربية',
      atmosphereText:
        'الهواء مشبع برائحة زهر البرتقال والشاي بالنعناع الطازج. ضوء الشمس يتسلل عبر شبكات الأرز المنحوتة، مرسلاً أنماطاً معقدة على جدران التديلاكت. هذه هي أجواء رياض فيو بوينت — مكان يروي كل تفصيل فيه قصة الحرفية المغربية وقرون من التقاليد.',
      lifestyleTitle: 'نمط الحياة المراكشي',
      lifestyleText:
        'تتبع الحياة في الرياض إيقاعات اليوم الطبيعية. تبدأ الصباحات بالفطار على التراس، مع إطلالة على أسطح المدينة الطينية. بعد الظهر للاستكشاف أو الراحة في برودة الفناء. المساءات تجلب صوت الأذان وهمهمة ساحة جامع الفناء البعيدة.',
      relaxationTitle: 'استرخاء نقي',
      relaxationText:
        'الفناء المركزي، بنافورته الهادئة وخضرته اليانعة، هو قلب الرياض — مكان للقراءة والتأمل والتجدد. التراس البانورامي يوفر إطلالات شاملة، مثالية لمشاهدة الغروب مع كوب من الشاي المغربي بالنعناع.',
      localTitle: 'تجارب محلية',
      localText:
        'من الجولات المصحوبة في المدينة القديمة إلى دروس الطبخ مع الطهاة المحليين، ننظم تجارب أصيلة تربطك بمراكش الحقيقية. زر الأسواق، تعلم فن المطبخ المغربي، أو انطلق إلى جبال الأطلس في رحلة يومية.',
      hospitalityTitle: 'الضيافة المغربية',
      hospitalityText:
        'الضيافة في صميم الثقافة المغربية. في رياض فيو بوينت، يعامل موظفونا كل ضيف كعضو في العائلة. من شاي النعناع الترحيبي إلى التوصيات الشخصية، نضمن أن إقامتك مليئة بالدفء والاهتمام الصادق.',
      architectureTitle: 'العمارة والديكور',
      architectureText:
        'تتمحور عمارة الرياض التقليدية حول الفناء — ساحة داخلية تجلب الضوء والهواء والطبيعة إلى قلب المنزل. يتميز رياضنا بالزليج المعقد والأسقف الأرزية المنحوتة وجدران التديلاكت المصنوعة يدوياً والأثاث المغربي الأصيل الذي يحتفي بحرفية الحرفيين المحليين.',
    },
    services: {
      title: 'الخدمات والمرافق',
      subtitle: 'كل ما تحتاجه لإقامة مريحة ولا تُنسى',
      propertyInfoTitle: 'معلومات العقار',
    },
    marrakech: {
      title: 'دليل مراكش',
      subtitle: 'دليلك إلى المدينة الحمراء',
      introTitle: 'مرحباً بك في مراكش',
      introText:
        'مراكش، المدينة الحمراء الأسطورية في المغرب، هي مأدبة حسية من الألوان والأصوات والنكهات. تأسست عام 1062، وكانت مفترق طرق الثقافات منذ ما يقارب ألف عام. اليوم، هي واحدة من أكثر وجهات السفر سحراً في العالم — مدينة تتعايش فيها التقاليد القديمة والرفاهية العصرية في وئام تام.',
      medinaTitle: 'المدينة القديمة',
      medinaText:
        'مدينة مراكش القديمة مدرجة في قائمة التراث العالمي لليونسكو — متاهة من الأزقة الضيحة والساحات المخفية والمباني العتيقة. داخل أسوارها، ستجد الرياض والقصور والمساجد والأسواق التي لم تتغير كثيراً منذ قرون. الإقامة في رياض فيو بوينت تضعك في قلب هذا التاريخ الحي.',
      souksTitle: 'الأسواق',
      souksText:
        'أسواق مراكش من بين أكثر الأسواق حيوية في العالم. من التوابل والأقمشة إلى الجلديات والفوانيس، يتخصص كل قسم في حرف مختلف. المساومة متوقعة وهي جزء من التجربة. يمكن لموظفينا أن يوصوا بأفضل المتاجر ويساعدوك في التنقل في المتاهة.',
      jemaaTitle: 'ساحة جامع الفناء',
      jemaaText:
        'ساحة جامع الفناء هي قلب مراكش النابض — ساحة تتحول طوال اليوم. في الصباح، يسيطر بائعو العصير ومدربو الأفاعي. في الليل، تمتلئ الساحة بأكشاك الطعام ورواة القصص والموسيقيين وكرنفال من الأنشطة. تبعد 15 دقيقة سيراً على الأقدام من رياض فيو بوينت.',
      culturalTitle: 'تجارب ثقافية',
      culturalText:
        'زر قصر الباهية ومدرسة بن يوسف والقبور السعدية. استكشف حديقة ماجوريل ومتحف إيف سان لوران المجاور. اكتشف الفن المعاصر في MACAAL أو تصفح معارض حي جليز. تقدم مراكش لوحة غنية من التجارب الثقافية.',
      restaurantsTitle: 'المطاعم والمأكولات',
      restaurantsText:
        'من المطاعم على الأسطح مع إطلالات الغروب إلى مطاعم المدينة المخفية، مشهد الطعام في مراكش استثنائي. جرب المطبخ المغربي التقليدي — الطاجين والكسكس والبسطيلة — أو استكشف المطاعم الدولية المتزايدة في المدينة. يمكن لموظفينا التوصية والحجز في أفضل الطاولات.',
      dayTripsTitle: 'رحلات يومية',
      dayTripsText:
        'خارج المدينة، تقدم جبال الأطلس رحلات المشي والقرى الأمازيغية والمناظر الخلابة. مدينة الصويرة الساحلية تبعد ساعتين ونصف بالسيارة. صحراء أكفاي تقدم لمحة من الصحراء الكبرى أقرب إلى مراكش. يمكننا تنظيم جولات مصحوبة ووسائل النقل.',
      usefulInfoTitle: 'معلومات مفيدة',
      usefulInfoText:
        'أفضل وقت لزيارة مراكش هو الربيع (مارس إلى مايو) والخريف (سبتمبر إلى نوفمبر). العملة المحلية هي الدرهم المغربي. الفرنسية والعربية هما اللغتان الرسميتان؛ الإنجليزية منتشرة في المناطق السياحية. سيارات الأجرة رخيصة لكن اتفق على السعر قبل الانطلاق.',
    },
    location: {
      title: 'الموقع واتصل بنا',
      subtitle: 'تجدنا في قلب المدينة القديمة في مراكش',
      address: 'العنوان',
      getDirections: 'احصل على الاتجاهات',
      contactFormTitle: 'أرسل لنا رسالة',
      formName: 'اسمك',
      formEmail: 'بريدك الإلكتروني',
      formSubject: 'الموضوع',
      formMessage: 'رسالتك',
      formSend: 'إرسال الرسالة',
      formSuccess: 'شكراً! تم إرسال رسالتك. سنعود إليك في أقرب وقت ممكن.',
      formError: 'نأسف، حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.',
      callUs: 'اتصل بنا',
      emailUs: 'راسلنا',
      whatsapp: 'واتساب',
    },
    booking: {
      title: 'احجز إقامتك',
      checkIn: 'تاريخ الوصول',
      checkOut: 'تاريخ المغادرة',
      guests: 'الضيوف',
      guest: 'ضيف',
      guestsPl: 'ضيوف',
      room: 'الغرفة',
      selectRoom: 'اختر غرفة',
      anyRoom: 'أي غرفة',
      checkAvailability: 'تحقق من التوفر',
      subtitle: 'تحقق من التوفر واطلب حجزك',
      selectDates: 'يرجى تحديد تواريخ الوصول والمغادرة',
      nights: 'ليالٍ',
      night: 'ليلة',
      requestBooking: 'اطلب الحجز',
      bookingNote: 'هذا طلب حجز. سيؤكد فريقنا التوفر ويتواصل معك لإنهاء حجزك.',
    },
    footer: {
      description:
        'رياد بوتيك في قلب المدينة القديمة في مراكش، يقدم ضيافة مغربية أصيلة وحرفية تقليدية.',
      quickLinks: 'روابط سريعة',
      ourRooms: 'غرفنا',
      contactUs: 'اتصل بنا',
      followUs: 'تابعنا',
      rights: 'جميع الحقوق محفوظة',
      tagline: 'بوابة إلى مراكش',
    },
    common: {
      learnMore: 'اعرف المزيد',
      close: 'إغلاق',
      menu: 'القائمة',
      language: 'اللغة',
    },
  },
};
