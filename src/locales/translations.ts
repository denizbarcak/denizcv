export type Language = 'en' | 'tr';

interface TranslationItem {
  src: string;
  title: string;
  description: string;
}

interface ProjectType {
  title: string;
  description: string;
  gallery: TranslationItem[];
}

interface TranslationType {
  portfolio: {
    design: {
      title: string;
      view_project: string;
      projects: {
        video_project: ProjectType;
        silivri_villa: ProjectType;
        jetkent: ProjectType;
        difc: ProjectType;
      };
    };
  };
  portfolio_categories: {
    design: string;
    software: string;
    design_desc: string;
    software_desc: string;
      under_construction: {
        status: string;
    };
  };
  nav: {
    home: string;
    about: string;
    portfolio: string;
    resume: string;
    contact: string;
  };
  contact: {
    title: string;
    methods: {
      email: string;
      whatsapp: string;
      phone: string;
      linkedin: string;
      github: string;
    };
  };
  resume: {
    professional_journey: string;
    download_cv: string;
    achievements: {
      kartelam: string[];
      teampack: string[];
      atlas34: string[];
      tabanlioglu: string[];
      kavram: string[];
    };
  };
  hero: {
    greeting: string;
    name: string;
    description: string;
    download_cv: string;
  };
  skills: {
    title: string;
    design_title: string;
    software_title: string;
  };
  about: {
    title: string;
    subtitle: string;
    personal_info: string;
    location: string;
    location_value: string;
    languages: string;
    languages_value: string;
    birth_date: string;
    birth_date_value: string;
    military: string;
    military_value: string;
    drivers_license: string;
    drivers_license_value: string;
    education: string;
    scroll_down: string;
  };
  education: {
    ucuncu_binyil: {
      name: string;
      program: string;
      period: string;
    };
    halic: {
      name: string;
      program: string;
      period: string;
    };
    ata: {
      name: string;
      program: string;
      period: string;
    };
  };
}

interface TranslationsType {
  en: TranslationType;
  tr: TranslationType;
}

export const translations: TranslationsType = {
  en: {
    // Portfolio Page
    portfolio: {
      design: {
        title: '3D & Design',
        view_project: 'View Project',
        projects: {
          video_project: {
            title: 'Product Design & Color Studies',
            description: '',
            gallery: [
              {
                src: '/3D/staffs/video/4592-Crimson- 4592.jpg',
                title: 'Crimson Design',
                description: 'Modern crimson color concept'
              },
              {
                src: '/3D/staffs/video/4578-Retro Siyah- 4578.jpg',
                title: 'Retro Black',
                description: 'Classic retro black style'
              },
              {
                src: '/3D/staffs/video/4550-Bebek Mavi- 4550.jpg',
                title: 'Baby Blue',
                description: 'Soft baby blue design'
              },
              {
                src: '/3D/staffs/video/4524-Antik Pembe- 4524.jpg',
                title: 'Antique Pink',
                description: 'Elegant antique pink concept'
              },
              {
                src: '/3D/staffs/video/4514-Başak- 4514.jpg',
                title: 'Başak Design',
                description: 'Natural wheat-inspired design'
              },
              {
                src: '/3D/staffs/video/4512-Kese Kağıdı- 4512.jpg',
                title: 'Kraft Paper',
                description: 'Eco-friendly kraft paper concept'
              }
            ]
          },
          silivri_villa: {
            title: 'Silivri Villa Project',
            description: 'Modern villa project featuring contemporary architecture with pool and landscape design.',
            gallery: [
              {
                src: '/3D/Silivri villa/1.jpg',
                title: 'Front View',
                description: 'Main entrance and front facade of the villa'
              },
              {
                src: '/3D/Silivri villa/4.jpg',
                title: 'Pool Area',
                description: 'Swimming pool and outdoor living space'
              },
              {
                src: '/3D/Silivri villa/Havuz cephe.jpg',
                title: 'Pool Facade',
                description: 'View from the pool area showing the villa facade'
              },
              {
                src: '/3D/Silivri villa/Ön çephe.jpg',
                title: 'Front Facade',
                description: 'Detailed view of the front facade architecture'
              },
              {
                src: '/3D/Silivri villa/Plan-1.png',
                title: 'Floor Plan',
                description: 'Architectural floor plan of the villa'
              },
              {
                src: '/3D/Silivri villa/MİMARİ PROJESl.png',
                title: 'Architectural Project',
                description: 'Complete architectural project overview'
              }
            ]
          },
          jetkent: {
            title: 'Jetkent Housing Project',
            description: 'Modern residential project featuring contemporary architecture and sustainable design solutions.',
            gallery: [
              {
                src: '/3D/Jetkent/m1.jpg',
                title: 'Main View',
                description: 'Main perspective of the residential complex'
              },
              {
                src: '/3D/Jetkent/m2.jpg',
                title: 'Side View',
                description: 'Side perspective showing architectural details'
              },
              {
                src: '/3D/Jetkent/3.jpg',
                title: 'Aerial View',
                description: 'Bird\'s eye view of the entire complex'
              }
            ]
          },
          difc: {
            title: 'DIFC 2.0 Dubai',
            description: 'Dubai International Financial Centre expansion project featuring modern architectural design and innovative space solutions.',
            gallery: [
              {
                src: '/3D/DİFC/Kapak.jpg',
                title: 'Main Entrance View',
                description: 'The grand entrance featuring modern architecture with palm trees and glass facades'
              },
              {
                src: '/3D/DİFC/470_DIFC_2.jpg',
                title: 'Exterior View',
                description: 'Exterior perspective showing the building\'s distinctive architectural elements'
              },
              {
                src: '/3D/DİFC/Ekran görüntüsü 2022-08-10 215850.jpg',
                title: 'Night View',
                description: 'Evening perspective highlighting the building\'s illumination'
              },
              {
                src: '/3D/DİFC/Ekran görüntüsü 2022-08-10 215952.jpg',
                title: 'Interior Court',
                description: 'Internal courtyard with natural lighting and vegetation'
              },
              {
                src: '/3D/DİFC/Ekran görüntüsü 2022-08-10 220329.jpg',
                title: 'Aerial View',
                description: 'Bird\'s eye view of the complex showing the overall layout'
              },
              {
                src: '/3D/DİFC/Ekran görüntüsü 2022-08-10 220502.jpg',
                title: 'Plaza Detail',
                description: 'Detailed view of the plaza showing architectural elements'
              },
              {
                src: '/3D/DİFC/Ekran görüntüsü 2022-08-10 221509.jpg',
                title: 'Facade Detail',
                description: 'Close-up view of the building\'s facade patterns'
              },
              {
                src: '/3D/DİFC/Ekran görüntüsü 2022-08-10 221700.jpg',
                title: 'Courtyard View',
                description: 'Internal courtyard showing the integration of nature and architecture'
              }
            ]
          }
        }
      }
    },

    // Portfolio Categories
    portfolio_categories: {
      design: '3D & Design',
      software: 'Software & Web',
      design_desc: 'Explore 3D modeling and design projects',
      software_desc: 'View web development and software projects',
      under_construction: {
        status: 'Status: Under Construction 🚧'
      }
    },

    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      resume: 'Resume',
      contact: 'Contact'
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
          'Designed API integrations, authentication (JWT), and admin panel architecture.'
        ],
        teampack: [
          'Designed custom packaging solutions, vacuum forms, and color charts for various products.',
          'Prepared 3D technical modeling of vacuum molds using Fusion 360.',
          'Created 3D product visualizations and provided technical support for the production process.'
        ],
        atlas34: [
          'Managed interior architectural design, visualization, and project management for residential and villa projects.',
          'Developed design concepts and implementation details based on client requirements.'
        ],
        tabanlioglu: [
          'Provided support with AutoCAD drawings and 3D visualizations.',
          'Contributed to international projects including DIFC 2.0 (Dubai), Neuwied (Germany), and Folkart Alacati.'
        ],
        kavram: [
          'Assisted with VAT refund reports and filing processes.'
        ]
      }
    },

    // Hero Section
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Deniz Barçak',
      description: 'I combine creative thinking and technical skills to develop productive solutions in both 3D modeling and software development. With a design-thinking approach, I bring projects together aesthetically, functionally, and technically as a whole. I am passionate about exploring new technologies and pushing boundaries in every project.',
      download_cv: 'Download CV'
    },

    // Skills Section
    skills: {
      title: 'Skills & Expertise',
      design_title: '3D & Design',
      software_title: 'Software & Web'
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
      scroll_down: 'Scroll Down'
    },

    // Education Section
    education: {
      ucuncu_binyil: {
        name: 'Üçüncü Binyıl Academy',
        program: 'Software Development',
        period: 'Sep 2023 - Dec 2024'
      },
      halic: {
        name: 'Halic University',
        program: 'Interior Design',
        period: '2018 - 2020'
      },
      ata: {
        name: 'Ata College',
        program: 'High School',
        period: '2011 - 2014'
      }
    }
  },

  tr: {
    // Portfolio Page
    portfolio: {
      design: {
        title: '3D & Tasarım',
        view_project: 'Projeyi Görüntüle',
        projects: {
          video_project: {
            title: 'Ürün Tasarımı & Renk Çalışmaları',
            description: '',
            gallery: [
              {
                src: '/3D/staffs/video/4592-Crimson- 4592.jpg',
                title: 'Crimson Tasarımı',
                description: 'Modern kırmızı renk konsepti'
              },
              {
                src: '/3D/staffs/video/4578-Retro Siyah- 4578.jpg',
                title: 'Retro Siyah',
                description: 'Klasik retro siyah stil'
              },
              {
                src: '/3D/staffs/video/4550-Bebek Mavi- 4550.jpg',
                title: 'Bebek Mavisi',
                description: 'Yumuşak bebek mavisi tasarım'
              },
              {
                src: '/3D/staffs/video/4524-Antik Pembe- 4524.jpg',
                title: 'Antik Pembe',
                description: 'Zarif antik pembe konsept'
              },
              {
                src: '/3D/staffs/video/4514-Başak- 4514.jpg',
                title: 'Başak Tasarımı',
                description: 'Doğal başak esinli tasarım'
              },
              {
                src: '/3D/staffs/video/4512-Kese Kağıdı- 4512.jpg',
                title: 'Kese Kağıdı',
                description: 'Çevre dostu kese kağıdı konsepti'
              }
            ]
          },
          silivri_villa: {
            title: 'Silivri Villa Projesi',
            description: 'Havuz ve peyzaj tasarımı ile modern mimari özellikler taşıyan villa projesi.',
            gallery: [
              {
                src: '/3D/Silivri villa/1.jpg',
                title: 'Ön Görünüm',
                description: 'Villanın ana girişi ve ön cephesi'
              },
              {
                src: '/3D/Silivri villa/4.jpg',
                title: 'Havuz Alanı',
                description: 'Yüzme havuzu ve dış yaşam alanı'
              },
              {
                src: '/3D/Silivri villa/Havuz cephe.jpg',
                title: 'Havuz Cephesi',
                description: 'Havuz alanından villa cephesi görünümü'
              },
              {
                src: '/3D/Silivri villa/Ön çephe.jpg',
                title: 'Ön Cephe',
                description: 'Ön cephe mimarisinin detaylı görünümü'
              },
              {
                src: '/3D/Silivri villa/Plan-1.png',
                title: 'Kat Planı',
                description: 'Villanın mimari kat planı'
              },
              {
                src: '/3D/Silivri villa/MİMARİ PROJESl.png',
                title: 'Mimari Proje',
                description: 'Tüm mimari proje genel görünümü'
              }
            ]
          },
          jetkent: {
            title: 'Jetkent Konut Projesi',
            description: 'Modern mimari ve sürdürülebilir tasarım çözümleri içeren çağdaş konut projesi.',
            gallery: [
              {
                src: '/3D/Jetkent/m1.jpg',
                title: 'Ana Görünüm',
                description: 'Konut kompleksinin ana perspektifi'
              },
              {
                src: '/3D/Jetkent/m2.jpg',
                title: 'Yan Görünüm',
                description: 'Mimari detayları gösteren yan perspektif'
              },
              {
                src: '/3D/Jetkent/3.jpg',
                title: 'Kuş Bakışı Görünüm',
                description: 'Tüm kompleksin havadan görünümü'
              }
            ]
          },
          difc: {
            title: 'DIFC 2.0 Dubai',
            description: 'Dubai Uluslararası Finans Merkezi genişletme projesi, modern mimari tasarım ve yenilikçi alan çözümleri içerir.',
            gallery: [
              {
                src: '/3D/DİFC/Kapak.jpg',
                title: 'Ana Giriş Görünümü',
                description: 'Palmiye ağaçları ve cam cephelerle modern mimariye sahip görkemli giriş'
              },
              {
                src: '/3D/DİFC/470_DIFC_2.jpg',
                title: 'Dış Görünüm',
                description: 'Binanın karakteristik mimari öğelerini gösteren dış perspektif'
              },
              {
                src: '/3D/DİFC/Ekran görüntüsü 2022-08-10 215850.jpg',
                title: 'Gece Görünümü',
                description: 'Binanın aydınlatmasını vurgulayan akşam perspektifi'
              },
              {
                src: '/3D/DİFC/Ekran görüntüsü 2022-08-10 215952.jpg',
                title: 'İç Avlu',
                description: 'Doğal aydınlatma ve bitkilendirmeye sahip iç avlu'
              },
              {
                src: '/3D/DİFC/Ekran görüntüsü 2022-08-10 220329.jpg',
                title: 'Kuş Bakışı Görünüm',
                description: 'Kompleksin genel yerleşimini gösteren havadan görünüm'
              },
              {
                src: '/3D/DİFC/Ekran görüntüsü 2022-08-10 220502.jpg',
                title: 'Plaza Detayı',
                description: 'Plazanın mimari öğelerini gösteren detaylı görünüm'
              },
              {
                src: '/3D/DİFC/Ekran görüntüsü 2022-08-10 221509.jpg',
                title: 'Cephe Detayı',
                description: 'Bina cephe desenlerinin yakın görünümü'
              },
              {
                src: '/3D/DİFC/Ekran görüntüsü 2022-08-10 221700.jpg',
                title: 'Avlu Görünümü',
                description: 'Doğa ve mimarinin bütünleşmesini gösteren iç avlu'
              }
            ]
          }
        }
      }
    },

    // Portfolio Categories
    portfolio_categories: {
      design: '3D & Tasarım',
      software: 'Yazılım & Web',
      design_desc: '3D modelleme ve tasarım projelerini keşfedin',
      software_desc: 'Web geliştirme ve yazılım projelerini görüntüleyin',
      under_construction: {
        status: 'Durum: Yapım Aşamasında 🚧'
      }
    },

    // Navigation
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      portfolio: 'Portfolyo',
      resume: 'Özgeçmiş',
      contact: 'İletişim'
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
          'API entegrasyonları, kimlik doğrulama (JWT) ve yönetici paneli mimarisi tasarladım.'
        ],
        teampack: [
          'Çeşitli ürünler için özel ambalaj çözümleri, vakum formları ve renk kartları tasarladım.',
          'Fusion 360 kullanarak vakum kalıplarının 3D teknik modellemesini hazırladım.',
          'Üretim süreci için 3D ürün görselleştirmeleri oluşturdum ve teknik destek sağladım.'
        ],
        atlas34: [
          'Konut ve villa projeleri için iç mimari tasarım, görselleştirme ve proje yönetimi yaptım.',
          'Müşteri gereksinimlerine göre tasarım konseptleri ve uygulama detayları geliştirdim.'
        ],
        tabanlioglu: [
          'AutoCAD çizimleri ve 3D görselleştirmeler konusunda destek sağladım.',
          'DIFC 2.0 (Dubai), Neuwied (Almanya) ve Folkart Alaçatı dahil uluslararası projelere katkıda bulundum.'
        ],
        kavram: [
          'KDV iade raporları ve dosyalama süreçlerinde yardımcı oldum.'
        ]
      }
    },

    // Hero Section
    hero: {
      greeting: 'Merhaba, Ben',
      name: 'Deniz Barçak',
      description: 'Yaratıcı düşünme ve teknik becerileri birleştirerek hem 3D modelleme hem de yazılım geliştirme alanlarında üretken çözümler geliştiriyorum. Tasarım odaklı düşünme yaklaşımıyla projeleri estetik, işlevsel ve teknik olarak bir bütün haline getiriyorum. Yeni teknolojileri keşfetmeye ve her projede sınırları zorlamaya tutkuluyum.',
      download_cv: 'CV İndir'
    },

    // Skills Section
    skills: {
      title: 'Yetenekler & Uzmanlık',
      design_title: '3D & Tasarım',
      software_title: 'Yazılım & Web'
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
      scroll_down: 'Aşağı Kaydır'
    },

    // Education Section
    education: {
      ucuncu_binyil: {
        name: 'Üçüncü Binyıl Akademi',
        program: 'Yazılım Geliştirme',
        period: 'Eyl 2023 - Ara 2024'
      },
      halic: {
        name: 'Haliç Üniversitesi',
        program: 'İç Mimarlık',
        period: '2018 - 2020'
      },
      ata: {
        name: 'Ata Koleji',
        program: 'Lise',
        period: '2011 - 2014'
      }
    }
  }
};

export function getTranslation(lang: Language, path: string): any {
  try {
    return path.split('.').reduce((obj: any, key: string) => obj?.[key], translations[lang]);
  } catch (error) {
    console.error('Translation error:', error);
    return '';
  }
}