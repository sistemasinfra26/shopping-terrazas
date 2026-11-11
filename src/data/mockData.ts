export interface StoreItem {
  id: string;
  name: string;
  category: "moda" | "gastronomia" | "entretenimiento" | "tecnologia" | "hogar";
  categoryLabel: string;
  floor: string;
  tags: string[];
  description: string;
  badge?: string;
  image: string;
  phone?: string;
}

export interface DiningItem {
  id: string;
  name: string;
  type: string;
  location: string;
  highlight: string;
  atmosphere: string;
  image: string;
  openingHours: string;
  featuredPlate: string;
}

export interface MovieItem {
  id: string;
  title: string;
  genre: string;
  duration: string;
  format: "IMAX 3D" | "4D Laser" | "2D Sub" | "VIP Lounge";
  rating: string;
  image: string;
  nextShowtime: string;
}

export interface PromoItem {
  id: string;
  bank: string;
  discount: string;
  installments: string;
  days: string;
  category: string;
  badgeColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  status: string;
}

export const STORES_DATA: StoreItem[] = [
  {
    id: "zara",
    name: "ZARA Flagship",
    category: "moda",
    categoryLabel: "Moda & Tendencias",
    floor: "Nivel 1 - Plaza Central",
    tags: ["Indumentaria", "Mujer", "Hombre", "Kids"],
    description: "Espacio insignia de 2.400 m² con las últimas colecciones de temporada y autocobro inteligente.",
    badge: "Nuevo Formato",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    phone: "+54 11 4890-2101",
  },
  {
    id: "massimo-dutti",
    name: "Massimo Dutti",
    category: "moda",
    categoryLabel: "Moda & Elegancia",
    floor: "Nivel 1 - Paseo Alto",
    tags: ["Sastrería", "Calzado", "Accesorios"],
    description: "Elegancia contemporánea y materiales nobles en un ambiente sobrio y distinguido.",
    badge: "Exclusivo",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    phone: "+54 11 4890-2102",
  },
  {
    id: "nike-rise",
    name: "Nike Rise Concept",
    category: "moda",
    categoryLabel: "Deportes & Athleisure",
    floor: "Nivel 2 - Galería Sport",
    tags: ["Running", "Training", "Sneakers"],
    description: "Tienda digital interactiva con análisis de pisada 3D y personalización de indumentaria.",
    badge: "Digital Store",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    phone: "+54 11 4890-2103",
  },
  {
    id: "apple-premium",
    name: "iStore Premium Reseller",
    category: "tecnologia",
    categoryLabel: "Tecnología & Innovación",
    floor: "Nivel 1 - Hall Tecnológico",
    tags: ["iPhone", "MacBook", "Soporte Oficial"],
    description: "Todo el ecosistema Apple, accesorios certificados y servicio técnico autorizado con cita previa.",
    badge: "Oficial",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    phone: "+54 11 4890-2104",
  },
  {
    id: "starbucks-reserve",
    name: "Starbucks Reserve™",
    category: "gastronomia",
    categoryLabel: "Café de Especialidad",
    floor: "Nivel 0 - Entrada Peatonal",
    tags: ["Café Exclusivo", "Nitro Cold Brew", "Pastelería"],
    description: "Granos de micro-lotes seleccionados a mano tostados a la vista y métodos de extracción premium.",
    badge: "Edición Reserve",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    phone: "+54 11 4890-2105",
  },
  {
    id: "rooftop-bistro",
    name: "Terrazas Sky Bar & Fuego",
    category: "gastronomia",
    categoryLabel: "Alta Cocina & Coctelería",
    floor: "Rooftop - Terraza Panorámica",
    tags: ["Carnes Maduradas", "Coctelería de Autor", "DJ Sessions"],
    description: "Fuegos a la leña, cócteles botánicos y la mejor vista al atardecer sobre la arboleda.",
    badge: "Vista Panorámica",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    phone: "+54 11 4890-2106",
  },
  {
    id: "cinepolis-imax",
    name: "Cinépolis Laser & IMAX",
    category: "entretenimiento",
    categoryLabel: "Cine & Sala 4D",
    floor: "Nivel 3 - Complejo Cinemas",
    tags: ["IMAX", "Dolby Atmos", "Butacas VIP"],
    description: "8 salas de última generación con proyección láser 4K y servicio a la butaca gourmet.",
    badge: "IMAX Oficial",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    phone: "+54 11 4890-2107",
  },
  {
    id: "nespresso-boutique",
    name: "Nespresso Boutique",
    category: "gastronomia",
    categoryLabel: "Café Gourmet",
    floor: "Nivel 1 - Plaza de la Moda",
    tags: ["Cápsulas", "Degustación", "Máquinas"],
    description: "Experiencia sensorial guiada por Coffee Bards y punto oficial de reciclaje de cápsulas.",
    badge: "Boutique",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    phone: "+54 11 4890-2108",
  },
];

export const DINING_HIGHLIGHTS: DiningItem[] = [
  {
    id: "sky-bar",
    name: "Aura Rooftop & Lounge",
    type: "Coctelería de Autor & Tapas",
    location: "Terraza Piso 3 - Ala Norte",
    highlight: "Sunset Sessions & Dj Sets acústicos en vivo",
    atmosphere: "Open-air lounge con braseros de diseño y pérgolas bioclimáticas",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=80",
    openingHours: "12:00 a 02:00 hs",
    featuredPlate: "Cóctel Terrazas Gold Spritz & Tabla de quesos madurados",
  },
  {
    id: "fuego-bistro",
    name: "Brasa & Olivo Bistró",
    type: "Cocina Mediterránea al Fuego",
    location: "Terraza Jardín - Nivel 2",
    highlight: "Horno de barro a leña y pesca fresca del día",
    atmosphere: "Rodeado de olivos añosos, espejos de agua y música suave",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    openingHours: "11:30 a 00:30 hs",
    featuredPlate: "Ojo de bife con costra de hierbas y papas rústicas al romero",
  },
  {
    id: "botanica-cafe",
    name: "Botánica Bakery & Specialty",
    type: "Café de Origen & Brunch",
    location: "Plaza de Aguas - Planta Baja",
    highlight: "Pastelería artesanal y masa madre horneada cada mañana",
    atmosphere: "Invernadero acristalado rodeado de jardines verticales",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
    openingHours: "08:30 a 22:00 hs",
    featuredPlate: "Tostón brioche con palta trufada, huevo poché y flat white",
  },
];

export const MOVIES_DATA: MovieItem[] = [
  {
    id: "m1",
    title: "Duna: Parte Dos (Re-estreno Exclusivo)",
    genre: "Ciencia Ficción / Aventura",
    duration: "166 min",
    format: "IMAX 3D",
    rating: "+13",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    nextShowtime: "Hoy 19:40 • 22:30 hs",
  },
  {
    id: "m2",
    title: "Gladiador II",
    genre: "Acción / Drama Histórico",
    duration: "148 min",
    format: "4D Laser",
    rating: "+16",
    image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=600&q=80",
    nextShowtime: "Hoy 18:15 • 21:00 hs",
  },
  {
    id: "m3",
    title: "Wicked: Parte Uno",
    genre: "Musical / Fantasía",
    duration: "160 min",
    format: "VIP Lounge",
    rating: "ATP",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    nextShowtime: "Hoy 17:30 • 20:45 hs",
  },
];

export const PROMOTIONS_DATA: PromoItem[] = [
  {
    id: "p1",
    bank: "Banco Galicia",
    discount: "25% OFF",
    installments: "Hasta 6 cuotas sin interés",
    days: "Jueves y Viernes",
    category: "Moda y Calzado",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  },
  {
    id: "p2",
    bank: "Santander Select",
    discount: "30% OFF",
    installments: "Hasta 3 cuotas sin interés",
    days: "Miércoles",
    category: "Gastronomía en Terrazas",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/40",
  },
  {
    id: "p3",
    bank: "BBVA Francés",
    discount: "2x1 Entradas",
    installments: "Combo Popcorn + Bebida",
    days: "Lunes a Domingos",
    category: "Cinépolis IMAX & Laser",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  },
  {
    id: "p4",
    bank: "Club Terrazas VIP",
    discount: "Estacionamiento Bonificado",
    installments: "3 horas gratis en compras +$50.000",
    days: "Todos los días",
    category: "Servicio Premium",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "s1",
    title: "Estacionamiento Inteligente",
    subtitle: "1.500 Plazas Cubiertas",
    description: "Sensores lumínicos en tiempo real que te guían al lugar libre más cercano. Monitoreo por cámaras y lectura de patente.",
    iconName: "Car",
    status: "Disponible (780 lugares libres)",
  },
  {
    id: "s2",
    title: "Wi-Fi 6 de Alta Velocidad",
    subtitle: "Fibra 1000 Mbps Libre",
    description: "Conexión ultrarrápida y sin límites en todas las áreas cerradas, pasillos comerciales y terrazas al aire libre.",
    iconName: "Wifi",
    status: "Cobertura 100%",
  },
  {
    id: "s3",
    title: "Espacio Pet Friendly",
    subtitle: "Mascotas bienvenidas",
    description: "Dispensadores de agua fresca, kit de limpieza y zonas de descanso al aire libre para disfrutar el paseo con tu mejor amigo.",
    iconName: "PawPrint",
    status: "Todos los días",
  },
  {
    id: "s4",
    title: "Cargadores Eléctricos (EV)",
    subtitle: "Estaciones de carga rápida",
    description: "Carga tu vehículo eléctrico o híbrido mientras disfrutas de tus compras con conectores Tipo 2 de alta potencia.",
    iconName: "Zap",
    status: "8 Puntos Activos",
  },
  {
    id: "s5",
    title: "Seguridad Integral 24/7",
    subtitle: "Tranquilidad garantizada",
    description: "Personal capacitado en primeros auxilios, patrullaje constante y centro de monitoreo digital con más de 300 cámaras.",
    iconName: "ShieldCheck",
    status: "Operativo",
  },
  {
    id: "s6",
    title: "Servicios de Cortesía",
    subtitle: "Atención personalizada",
    description: "Cochecitos de bebé de cortesía, lockers inteligentes con pin digital, préstamo de paraguas y punto de enfermería.",
    iconName: "Sparkles",
    status: "En Concierge Nivel 0",
  },
];

export const SCHEDULE_DATA = [
  {
    sector: "Locales Comerciales & Marcas",
    days: "Lunes a Domingos y Feriados",
    hours: "10:00 a 22:00 hs",
    note: "Abierto todos los días del año excepto 25/12 y 01/01",
  },
  {
    sector: "Terrazas & Gastronomía Gourmet",
    days: "Domingos a Jueves",
    hours: "10:00 a 00:00 hs",
    note: "Cocinas abiertas hasta las 23:30 hs",
  },
  {
    sector: "Terrazas & Sky Bar (Fin de semana)",
    days: "Viernes, Sábados y Vísperas",
    hours: "10:00 a 02:00 hs",
    note: "Coctelería y música en vivo con reserva preferencial",
  },
  {
    sector: "Cinépolis Laser & IMAX",
    days: "Todos los días",
    hours: "12:00 a 01:30 hs (Trasnoche)",
    note: "Boletería online 24 hs / Función trasnoche viernes y sábados",
  },
];

