import heroImg from '../assets/images/hero_cleaning_1789487560240.jpg';
import mattressImg from '../assets/images/mattress_clean_1789487576188.jpg';
import carDetailImg from '../assets/images/car_detailing_1789487598387.jpg';
import leatherImg from '../assets/images/leather_couch_1789487611971.jpg';
import motoImg from '../assets/images/moto_wash_1789487624756.jpg';
import rugImg from '../assets/images/rug_carpet_1789487640971.jpg';
import blindsImg from '../assets/images/blinds_clean_1789487652193.jpg';
import sofaIntroImg from '../assets/images/limpieza_profesional_inneva.webp';
import sofaSliderImg from '../assets/images/sofa_slider_1789487717404.jpg';

import { ServiceItem, BenefitItem, StepItem, TestimonialItem, FaqItem, GalleryItem } from '../types';

export const HERO_ANIMATION_URL = "https://bleqwekikznebkjogjgb.supabase.co/storage/v1/object/sign/innova/Cleaning_sofa_with_extraction_va_20260914100513-ezgif.com-video-to-webp-converter.webp?token=eyJraWQiOiIwOWEyOGY2OC02MDFiLTQ2OTQtOTNmNS02OTdlNTM0Njg5N2QiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJpbm5vdmEvQ2xlYW5pbmdfc29mYV93aXRoX2V4dHJhY3Rpb25fdmFfMjAyNjA5MTQxMDA1MTMtZXpnaWYuY29tLXZpZGVvLXRvLXdlYnAtY29udmVydGVyLndlYnAiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg5Njc4MDEzLCJleHAiOjE4MjEyMTQwMTN9.imlYHlVKYp1YDkFDrk7_a6WgogQeouHbhYyo8W_IE9c-XbHVSsBQhowP-Lar0UsXoYJfYo0VmZ2gbEluzAXRkg";
export const LOCAL_HERO_ANIMATION = "/hero-animation.webp";

export const MUEBLES_IMAGE_URL = "https://bleqwekikznebkjogjgb.supabase.co/storage/v1/object/sign/innova/lavado%20de%20muebles.avif?token=eyJraWQiOiIwOWEyOGY2OC02MDFiLTQ2OTQtOTNmNS02OTdlNTM0Njg5N2QiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJpbm5vdmEvbGF2YWRvIGRlIG11ZWJsZXMuYXZpZiIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODk2ODU3MjMsImV4cCI6MTgyMTIyMTcyM30.z-yXwejq0Xrh5QwgdV5aklCN0K7YWw_9GUeHZ7PWvcHX4T_tyINkyblQpyaBablON8E-hzPIOs6rcR2_oPTpwA";
export const MUEBLES_2_IMAGE_URL = "https://bleqwekikznebkjogjgb.supabase.co/storage/v1/object/sign/innova/lavado%20de%20muebles%202.webp?token=eyJraWQiOiIwOWEyOGY2OC02MDFiLTQ2OTQtOTNmNS02OTdlNTM0Njg5N2QiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJpbm5vdmEvbGF2YWRvIGRlIG11ZWJsZXMgMi53ZWJwIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4OTY4NjMyMSwiZXhwIjoxODIxMjIyMzIxfQ.oUaMz4BHEVmP5ThhIl4pXZFmBVVwAcDF_NH3O3lQoShSe2-S8HEhjIMD52ka0hwEu0bwB8XCofjWzO3Bd1Fiww";
export const COLCHONES_IMAGE_URL = "https://bleqwekikznebkjogjgb.supabase.co/storage/v1/object/sign/innova/lavado%20de%20colchones%202.webp?token=eyJraWQiOiIwOWEyOGY2OC02MDFiLTQ2OTQtOTNmNS02OTdlNTM0Njg5N2QiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJpbm5vdmEvbGF2YWRvIGRlIGNvbGNob25lcyAyLndlYnAiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg5OTk0MDUyLCJleHAiOjE4MjE1MzAwNTJ9.FC31RfpDVLYTBd1vFroIeLCfdlk1fzulgD8kd8AIZ4IHfoHBqqsjeW3JwRDV7-gUYL64vMLOta_x3eQTBqdDwA";
export const ALFOMBRAS_IMAGE_URL = "https://bleqwekikznebkjogjgb.supabase.co/storage/v1/object/sign/innova/lavado%20de%20tapetes%202.webp?token=eyJraWQiOiIwOWEyOGY2OC02MDFiLTQ2OTQtOTNmNS02OTdlNTM0Njg5N2QiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJpbm5vdmEvbGF2YWRvIGRlIHRhcGV0ZXMgMi53ZWJwIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4OTk5Mzg2OSwiZXhwIjoxODIxNTI5ODY5fQ.Cy8LJwJWtUnP018CrKXb-C_4QDqqQfzQy1h4acMWHa9eq1OdmuVomu9DNeHLDFZEXm3tVhJgakzGfVJWgGs9Jg";
export const VEHICULOS_IMAGE_URL = "https://bleqwekikznebkjogjgb.supabase.co/storage/v1/object/sign/innova/detailing%20de%20autos.avif?token=eyJraWQiOiIwOWEyOGY2OC02MDFiLTQ2OTQtOTNmNS02OTdlNTM0Njg5N2QiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJpbm5vdmEvZGV0YWlsaW5nIGRlIGF1dG9zLmF2aWYiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg5Njc5Njk3LCJleHAiOjE4MjEyMTU2OTd9.Iy4rQPf03dCQCMR9N5sXRLSDX03kM07hVJf2N7QwBazdh38ryVHea_teBMShxRC6MyriajkEbsq8OnhinvdykA";
export const CUERO_IMAGE_URL = "https://bleqwekikznebkjogjgb.supabase.co/storage/v1/object/sign/innova/Limpieza-de-cuero.avif?token=eyJraWQiOiIwOWEyOGY2OC02MDFiLTQ2OTQtOTNmNS02OTdlNTM0Njg5N2QiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJpbm5vdmEvTGltcGllemEtZGUtY3Vlcm8uYXZpZiIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODk2ODAyMTMsImV4cCI6MTgyMTIxNjIxM30.yde6S0q6f8JL5kMLnbo5mWYX0gFPz8T4tJEsgdqcusPTXJZLeseckKPtETqTvGUp_Q3dAxUwngT19lMMy6YFdw";
export const PERSIANAS_IMAGE_URL = "https://bleqwekikznebkjogjgb.supabase.co/storage/v1/object/sign/innova/Limpieza-de-persianas-y-paneles-japoneses.avif?token=eyJraWQiOiIwOWEyOGY2OC02MDFiLTQ2OTQtOTNmNS02OTdlNTM0Njg5N2QiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJpbm5vdmEvTGltcGllemEtZGUtcGVyc2lhbmFzLXktcGFuZWxlcy1qYXBvbmVzZXMuYXZpZiIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODk2ODA1MzIsImV4cCI6MTgyMTIxNjUzMn0.i9bMfvQIYzDCzjtNQ76qY7mld007Oah5es09wW0TWRaiEhbD-SjwBynnkU7jM0tGjWSsQliGODE4Jsjv9AIS2w";
export const PISOS_IMAGE_URL = "https://bleqwekikznebkjogjgb.supabase.co/storage/v1/object/sign/innova/Limpieza%20de%20pisos%20y%20superficies.avif?token=eyJraWQiOiIwOWEyOGY2OC02MDFiLTQ2OTQtOTNmNS02OTdlNTM0Njg5N2QiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJpbm5vdmEvTGltcGllemEgZGUgcGlzb3MgeSBzdXBlcmZpY2llcy5hdmlmIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4OTY4MDY3MiwiZXhwIjoxODIxMjE2NjcyfQ._rvsFHxXd9G3EozHPO-uUth4sxeX_n2NgOt8S01CA4GofmtI1Dvk90dJr6KHUimg4XQQ8-wvW1Tsrmi6to4lRQ";
export const MOTOS_IMAGE_URL = "https://bleqwekikznebkjogjgb.supabase.co/storage/v1/object/sign/innova/lavado%20de%20motos%202.png?token=eyJraWQiOiIwOWEyOGY2OC02MDFiLTQ2OTQtOTNmNS02OTdlNTM0Njg5N2QiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJpbm5vdmEvbGF2YWRvIGRlIG1vdG9zIDIucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4OTk5NDY1MSwiZXhwIjoxODIxNTMwNjUxfQ.OeiKfe8yAm_98XszB9iWGsJwXQdrmEK9TuH1taIxdzGCAOy9RFlkIWJ3ShhpRg6kbwb5gzeYT9FS2v3XIzTLtA";
export const CORTINAS_IMAGE_URL = "https://bleqwekikznebkjogjgb.supabase.co/storage/v1/object/sign/innova/limpieza%20de%20cortinas%20inneva.webp?token=eyJraWQiOiIwOWEyOGY2OC02MDFiLTQ2OTQtOTNmNS02OTdlNTM0Njg5N2QiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJpbm5vdmEvbGltcGllemEgZGUgY29ydGluYXMgaW5uZXZhLndlYnAiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg5OTE3NjA0LCJleHAiOjE4MjE0NTM2MDR9.DL423-lwcX_DAKQ3_xBe2KIEUynMFOsowKID41pjCaq5ERw4wzM1rqPnNVqJPmkM-FDf86a0EdYM1oPFHIcSsw";

export const IMAGES = {
  hero: heroImg,
  mattress: COLCHONES_IMAGE_URL,
  car: carDetailImg,
  leather: leatherImg,
  moto: motoImg,
  rug: rugImg,
  blinds: blindsImg,
  sofaIntro: sofaIntroImg,
  sofaSlider: MUEBLES_2_IMAGE_URL,
};

export const WHATSAPP_NUMBER = '573105356080';
export const DISPLAY_PHONE = '310 535 6080';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola INNEVA SOLUCIONES, me gustaría cotizar un servicio de limpieza profesional.')}`;
export const OFFICIAL_ADDRESS = 'Cl. 30 # CRA 30, San Diego, 630007, Armenia, Quindío, Colombia';
export const OFFICIAL_CITY = 'Armenia, Quindío, Colombia';

export const BENEFITS: BenefitItem[] = [
  {
    icon: 'Sparkles',
    title: 'Tecnología especializada',
    description: 'Equipos de última generación',
  },
  {
    icon: 'Leaf',
    title: 'Productos ecoamigables',
    description: 'Fórmulas seguras para tu familia',
  },
  {
    icon: 'ShieldCheck',
    title: 'Servicio profesional',
    description: 'Personal capacitado y de confianza',
  },
  {
    icon: 'Home',
    title: 'Atención a domicilio',
    description: 'Llegamos hasta ti, cuando lo necesitas',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'muebles',
    number: '01',
    title: 'Lavado de muebles y tapicería',
    description: 'Lavamos muebles, sofás, salas, sillas y otras superficies tapizadas a domicilio en Armenia, utilizando procesos profesionales de limpieza para ayudar a recuperar su apariencia, frescura y cuidado.',
    image: MUEBLES_IMAGE_URL,
    category: 'Tapicería & Muebles',
    surfaces: ['Sofás y seccionales', 'Sillas de comedor', 'Poltronas y butacas', 'Cabeceros de cama', 'Cojines decorativos'],
    ctaText: 'Quiero cotizar',
  },
  {
    id: 'colchones',
    number: '02',
    title: 'Limpieza de colchones',
    description: 'Realizamos limpieza profesional de colchones a domicilio en Armenia, utilizando procesos especializados para ayudar a retirar suciedad, manchas y malos olores y recuperar una sensación de mayor frescura.',
    image: COLCHONES_IMAGE_URL,
    category: 'Descanso & Salud',
    surfaces: ['Colchones individuales', 'Colchones Queen & King', 'Colchonetas y somieres', 'Aspirado y desinfección profunda'],
    ctaText: 'Cotizar limpieza de colchón',
  },
  {
    id: 'alfombras',
    number: '03',
    title: 'Lavado de alfombras y tapetes',
    description: 'Lavamos alfombras y tapetes a domicilio en Armenia mediante procesos profesionales orientados a retirar suciedad acumulada, manchas y malos olores, cuidando el material y la superficie.',
    image: ALFOMBRAS_IMAGE_URL,
    category: 'Alfombras & Tapetes',
    surfaces: ['Tapetes decorativos', 'Alfombras de pelo largo / corto', 'Alfombras persas y orientales', 'Carpetas residenciales'],
    ctaText: 'Quiero cotizar',
  },
  {
    id: 'vehiculos',
    number: '04',
    title: 'Detallado de vehículos',
    description: 'Limpieza detallada de interiores y tapicería automotriz para que tu vehículo se vea y se sienta impecable.',
    image: VEHICULOS_IMAGE_URL,
    category: 'Automotriz',
    surfaces: ['Asientos en tela y cuero', 'Techo y parales interiores', 'Alfombra de piso y baúl', 'Paneles de puertas y millaré'],
    ctaText: 'Cotizar detallado',
  },
  {
    id: 'cuero',
    number: '05',
    title: 'Limpieza de cuero',
    description: 'Cuidado especializado para superficies en cuero, con procesos pensados para respetar el material.',
    image: CUERO_IMAGE_URL,
    category: 'Cuidado de Cuero',
    surfaces: ['Salas en cuero genuino', 'Sintéticos y vinilo', 'Hidratación y sellado', 'Protección contra resecamiento'],
    ctaText: 'Quiero cotizar',
  },
  {
    id: 'persianas',
    number: '06',
    title: 'Limpieza de persianas y paneles japoneses',
    description: 'Limpieza cuidadosa de persianas, cortinas enrollables y paneles japoneses sin maltratar el material.',
    image: PERSIANAS_IMAGE_URL,
    category: 'Cortinas & Persianas',
    surfaces: ['Paneles japoneses', 'Cortinas tipo Sheer Elegance', 'Persianas verticales y horizontales', 'Blackouts enrollables'],
    ctaText: 'Quiero cotizar',
  },
  {
    id: 'cortinas',
    number: '07',
    title: 'Limpieza de cortinas',
    description: 'Eliminamos polvo, manchas y malos olores, devolviendo frescura y cuidado a tus cortinas.',
    image: CORTINAS_IMAGE_URL,
    category: 'Cortinas & Telas',
    surfaces: ['Cortinas tradicionales y de tela', 'Cortinas tipo velo y visillo', 'Cortinas pesadas y blackout', 'Paneles y pliegues decorativos'],
    ctaText: 'Quiero cotizar',
  },
  {
    id: 'pisos',
    number: '08',
    title: 'Limpieza de pisos y superficies',
    description: 'Procesos de limpieza profesional para pisos y superficies de espacios residenciales y comerciales.',
    image: PISOS_IMAGE_URL,
    category: 'Superficies',
    surfaces: ['Pisos laminados y madera', 'Porcelanato y baldosas', 'Superficies comerciales', 'Desmanchado técnico'],
    ctaText: 'Quiero cotizar',
  },
  {
    id: 'motos',
    number: '09',
    title: 'Limpieza de motos y cascos',
    description: 'Limpieza detallada de motos y cascos, cuidando cada parte y devolviendo la sensación de limpio.',
    image: MOTOS_IMAGE_URL,
    category: 'Motos & Protección',
    surfaces: ['Desinfección de interior de cascos', 'Visores con tratamiento anti-rayones', 'Chasis y carenaje con espuma activa', 'Detallado de rines y motor'],
    ctaText: 'Cotizar detallado',
  },
];

export const PROCESS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Solicita tu cotización',
    description: 'Escríbenos por WhatsApp y cuéntanos qué necesitas limpiar.',
  },
  {
    number: '02',
    title: 'Coordinamos el servicio',
    description: 'Definimos contigo el día y la hora que mejor te funcione.',
  },
  {
    number: '03',
    title: 'Realizamos la limpieza profesional',
    description: 'Trabajamos con equipos especializados y productos ecoamigables.',
  },
  {
    number: '04',
    title: 'Disfruta nuevamente de tu espacio',
    description: 'Recibes tus superficies limpias, frescas y cuidadas.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    author: 'Familia Ramírez G.',
    quote: 'Excelente servicio muy buena calidad, recomendadísimo. Dejaron el sofá de la sala como nuevo y el secado fue rápido.',
    rating: 5,
    source: 'Reseña de Google',
  },
  {
    author: 'Carlos E. Duque',
    quote: 'Excelente servicio personal cualificado y productos de calidad. Muy puntuales y cuidadosos con el resto del apartamento.',
    rating: 5,
    source: 'Reseña de Google',
  },
  {
    author: 'Mariana Restrepo',
    quote: 'Una empresa que cumple totalmente tus expectativas recomendadísimos. El colchón y las sillas del comedor quedaron impecables.',
    rating: 5,
    source: 'Reseña de Google',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Hacen servicio a domicilio?',
    answer: 'Sí, nos desplazamos directamente a tu domicilio en Armenia y municipios del Quindío (Calarcá, Circasia, Montenegro, La Tebaida, etc.) con todos los equipos industriales y productos necesarios.',
  },
  {
    question: '¿Qué productos utilizan?',
    answer: 'Utilizamos fórmulas profesionales biodegradables y ecoamigables de grado profesional, seguras para el hogar y la familia, dejando un aroma fresco sin vapores tóxicos ni residuos agresivos.',
  },
  {
    question: '¿Cuánto tiempo tarda el servicio?',
    answer: 'Un servicio regular de sala o colchón toma entre 1.5 y 3 horas, según el tamaño y grado de suciedad. Gracias a nuestro sistema de extracción por inyección-succión de alta potencia, el tiempo de secado promedio es de 3 a 5 horas.',
  },
  {
    question: '¿Qué zonas cubren?',
    answer: 'Cubrimos toda la ciudad de Armenia (Quindío) y municipios aledaños del departamento, incluyendo condominios campestres y conjuntos residenciales.',
  },
  {
    question: '¿Cómo solicito una cotización?',
    answer: 'Es muy sencillo: nos escribes por WhatsApp al 310 535 6080 enviando una foto o descripción del mueble, colchón o vehículo que deseas limpiar. Te daremos una cotización exacta y sin compromiso en pocos minutos.',
  },
  {
    question: '¿Qué servicios realizan?',
    answer: 'Realizamos lavado y desinfección profunda de muebles y salas, colchones, alfombras y tapetes, detallado automotriz, cuidado e hidratación de cuero, persianas y paneles japoneses, además de motos y cascos.',
  },
  {
    question: '¿Trabajan vehículos?',
    answer: 'Sí, atendemos automóviles, camionetas, camperos, motocicletas y cascos a domicilio o en punto coordinado, realizando limpieza profunda de tapicería, techo, suelo, plásticos y desinfección.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Limpieza de sofá contemporáneo',
    category: 'muebles',
    image: heroImg,
    tag: 'Salas & Sofás',
  },
  {
    id: 'g2',
    title: 'Desinfección profunda de colchón',
    category: 'colchones',
    image: mattressImg,
    tag: 'Colchones',
  },
  {
    id: 'g3',
    title: 'Detallado de tapicería de camioneta',
    category: 'vehiculos',
    image: carDetailImg,
    tag: 'Vehículos',
  },
  {
    id: 'g4',
    title: 'Hidratación y restauración de cuero',
    category: 'cuero',
    image: leatherImg,
    tag: 'Cuero Especial',
  },
  {
    id: 'g5',
    title: 'Lavado con espuma activa de moto',
    category: 'vehiculos',
    image: motoImg,
    tag: 'Motos & Cascos',
  },
  {
    id: 'g6',
    title: 'Extracción profunda en alfombra de sala',
    category: 'alfombras',
    image: rugImg,
    tag: 'Alfombras',
  },
  {
    id: 'g7',
    title: 'Vaporizado de persianas y paneles',
    category: 'especiales',
    image: blindsImg,
    tag: 'Persianas & Paneles',
  },
  {
    id: 'g8',
    title: 'Renovación de sala modular',
    category: 'muebles',
    image: sofaIntroImg,
    tag: 'Salas & Sofás',
  },
];
