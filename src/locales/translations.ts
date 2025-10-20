export type Language = 'en' | 'tr';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      resume: 'Resume',
      contact: 'Contact',
    },

    // Contact Page
    contact: {
      title: 'Contact',
      methods: {
        email: 'Email',
        whatsapp: 'WhatsApp',
        phone: 'Phone',
        linkedin: 'LinkedIn',
        github: 'GitHub'
      }
    },

    // Resume Page
    resume: {
      professional_journey: 'Professional Journey',
      download_cv: 'Download CV (PDF)',
      achievements: {
        kartelam: [
          'Contributed to frontend and backend development of a B2B fabric supply platform.',
          'Utilized Go (Fiber), Next.js, React, and MongoDB technologies.',
          'Developed order management, product, and variant systems between suppliers and stores.',
          'Designed API integrations, authentication (JWT), and admin panel architecture.',
        ],
        teampack: [
          'Designed custom packaging solutions, vacuum forms, and color charts for various products.',
          'Prepared 3D technical modeling of vacuum molds using Fusion 360.',
          'Created 3D product visualizations and provided technical support for the production process.',
        ],
        atlas34: [
          'Managed interior architectural design, visualization, and project management for residential and villa projects.',
          'Developed design concepts and implementation details based on client requirements.',
        ],
        tabanlioglu: [
          'Provided support with AutoCAD drawings and 3D visualizations.',
          'Contributed to international projects including DIFC 2.0 (Dubai), Neuwied (Germany), and Folkart Alacati.',
        ],
        kavram: [
          'Assisted with VAT refund reports and filing processes.',
        ]
      }
    },

    // Portfolio Categories
    portfolio_categories: {
      design: '3D & Design',
      software: 'Software & Web',
      design_desc: 'Explore 3D modeling and design projects',
      software_desc: 'View web development and software projects',
    },

    // Hero Section
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Deniz Barçak',
      description: 'I combine creative thinking and technical skills to develop productive solutions in both 3D modeling and software development. With a design-thinking approach, I bring projects together aesthetically, functionally, and technically as a whole. I am passionate about exploring new technologies and pushing boundaries in every project.',
      download_cv: 'Download CV',
    },

    // Skills Section
    skills: {
      title: 'Skills & Expertise',
      design_title: '3D & Design',
      software_title: 'Software & Web',
    },

    // About Section
    about: {
      title: 'About Me',
      subtitle: 'Industrial Designer & Web Developer',
      personal_info: 'Personal Information',
      location: 'Location',
      location_value: 'Istanbul, Turkey',
      languages: 'Languages',
      languages_value: 'English, Turkish',
      birth_date: 'Birth Date',
      birth_date_value: '26.08.1996',
      military: 'Military Service',
      military_value: 'Completed',
      drivers_license: 'Driver\'s License',
      drivers_license_value: 'Class A and B',
      education: 'Education',
      scroll_down: 'Scroll Down',
    },

    // Education Section
    education: {
      ucuncu_binyil: {
        name: 'Üçüncü Binyıl Academy',
        program: 'Software Development',
        period: 'Sep 2023 - Dec 2024',
      },
      halic: {
        name: 'Halic University',
        program: 'Interior Design',
        period: '2018 - 2020',
      },
      ata: {
        name: 'Ata College',
        program: 'High School',
        period: '2011 - 2014',
      },
    },
  },

  tr: {
    // Navigation
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      portfolio: 'Portfolyo',
      resume: 'Özgeçmiş',
      contact: 'İletişim',
    },

    // Contact Page
    contact: {
      title: 'İletişim',
      methods: {
        email: 'E-posta',
        whatsapp: 'WhatsApp',
        phone: 'Telefon',
        linkedin: 'LinkedIn',
        github: 'GitHub'
      }
    },

    // Resume Page
    resume: {
      professional_journey: 'Profesyonel Yolculuk',
      download_cv: 'CV İndir (PDF)',
      achievements: {
        kartelam: [
          'B2B kumaş tedarik platformunun frontend ve backend geliştirmesine katkıda bulundum.',
          'Go (Fiber), Next.js, React ve MongoDB teknolojilerini kullandım.',
          'Tedarikçiler ve mağazalar arasında sipariş yönetimi, ürün ve varyant sistemleri geliştirdim.',
          'API entegrasyonları, kimlik doğrulama (JWT) ve yönetici paneli mimarisi tasarladım.',
        ],
        teampack: [
          'Çeşitli ürünler için özel ambalaj çözümleri, vakum formları ve renk kartları tasarladım.',
          'Fusion 360 kullanarak vakum kalıplarının 3D teknik modellemesini hazırladım.',
          'Üretim süreci için 3D ürün görselleştirmeleri oluşturdum ve teknik destek sağladım.',
        ],
        atlas34: [
          'Konut ve villa projeleri için iç mimari tasarım, görselleştirme ve proje yönetimi yaptım.',
          'Müşteri gereksinimlerine göre tasarım konseptleri ve uygulama detayları geliştirdim.',
        ],
        tabanlioglu: [
          'AutoCAD çizimleri ve 3D görselleştirmeler konusunda destek sağladım.',
          'DIFC 2.0 (Dubai), Neuwied (Almanya) ve Folkart Alaçatı dahil uluslararası projelere katkıda bulundum.',
        ],
        kavram: [
          'KDV iade raporları ve dosyalama süreçlerinde yardımcı oldum.',
        ]
      }
    },

    // Portfolio Categories
    portfolio_categories: {
      design: '3D & Tasarım',
      software: 'Yazılım & Web',
      design_desc: '3D modelleme ve tasarım projelerini keşfedin',
      software_desc: 'Web geliştirme ve yazılım projelerini görüntüleyin',
    },

    // Hero Section
    hero: {
      greeting: 'Merhaba, Ben',
      name: 'Deniz Barçak',
      description: 'Yaratıcı düşünme ve teknik becerileri birleştirerek hem 3D modelleme hem de yazılım geliştirme alanlarında üretken çözümler geliştiriyorum. Tasarım odaklı düşünme yaklaşımıyla projeleri estetik, işlevsel ve teknik olarak bir bütün haline getiriyorum. Yeni teknolojileri keşfetmeye ve her projede sınırları zorlamaya tutkuluyum.',
      download_cv: 'CV İndir',
    },

    // Skills Section
    skills: {
      title: 'Yetenekler & Uzmanlık',
      design_title: '3D & Tasarım',
      software_title: 'Yazılım & Web',
    },

    // About Section
    about: {
      title: 'Hakkımda',
      subtitle: 'Endüstriyel Tasarımcı & Web Geliştirici',
      personal_info: 'Kişisel Bilgiler',
      location: 'Konum',
      location_value: 'İstanbul, Türkiye',
      languages: 'Diller',
      languages_value: 'İngilizce, Türkçe',
      birth_date: 'Doğum Tarihi',
      birth_date_value: '26.08.1996',
      military: 'Askerlik',
      military_value: 'Tamamlandı',
      drivers_license: 'Sürücü Belgesi',
      drivers_license_value: 'A ve B Sınıfı',
      education: 'Eğitim',
      scroll_down: 'Aşağı Kaydır',
    },

    // Education Section
    education: {
      ucuncu_binyil: {
        name: 'Üçüncü Binyıl Akademi',
        program: 'Yazılım Geliştirme',
        period: 'Eyl 2023 - Ara 2024',
      },
      halic: {
        name: 'Haliç Üniversitesi',
        program: 'İç Mimarlık',
        period: '2018 - 2020',
      },
      ata: {
        name: 'Ata Koleji',
        program: 'Lise',
        period: '2011 - 2014',
      },
    },
  },
} as const;

// Type-safe translation key helper
export type TranslationKey = keyof typeof translations.en;

// Helper function to get nested translation
export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value[k];
  }
  
  return value as string;
}