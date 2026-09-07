export interface Poster {
  id: string;
  index: string;
  title: string;
  year: string;
  format: string;
  paperStock: string;
  dimensions: string;
  palette: string[];
  description: string;
  imageWebp: string | null;
  imageJpg: string | null;
  aspectRatio: string;
  isPlaceholder?: boolean;
}

export const postersData: Poster[] = [
  {
    id: 'forma-brutale',
    index: '01',
    title: 'Forma Brutale // 26',
    year: '2026',
    format: 'Silkscreen Print / Exhibition Poster',
    paperStock: '300gsm Munken Kristall Rough',
    dimensions: '594 × 841 mm (DIN A1)',
    palette: ['#0E0E0E', '#F6F3EC', '#FF4B21'],
    description:
      'Architectural typography study exploring constructivist diagonal tension and asymmetric typographic block-weighting. Designed for the Aura Museum Zürich exhibition.',
    imageWebp: '/assets/poster_01_forma_brutale.webp',
    imageJpg: '/assets/poster_01_forma_brutale.jpg',
    aspectRatio: '3:4',
  },
  {
    id: 'optical-frequency',
    index: '02',
    title: 'Optics of Information',
    year: '2026',
    format: 'Riso Duo-Tone & Screenprint',
    paperStock: '270gsm Colorplan Dark Smoke',
    dimensions: '594 × 841 mm (DIN A1)',
    palette: ['#0E0E0E', '#FF4B21', '#0F4C81', '#00A896'],
    description:
      'Information visualization of air-gap optical data transmission, chromatic dispersion vectors, and wave interference geometries in physical communication channels.',
    imageWebp: '/assets/poster_02_optics_frequency.webp',
    imageJpg: '/assets/poster_02_optics_frequency.jpg',
    aspectRatio: '3:4',
  },
  {
    id: 'ghost-architecture',
    index: '03',
    title: 'Ghost Architecture // Vol. VII',
    year: '2026',
    format: 'Fine Art Pigment Print',
    paperStock: '310gsm Hahnemühle Photo Rag',
    dimensions: '700 × 1000 mm (DIN B1)',
    palette: ['#0E0E0E', '#F6F3EC', '#FF4B21'],
    description:
      'Monochrome cryptographic grid exploration examining invisible network topology, heuristic obfuscation boundaries, and decentralized security frameworks.',
    imageWebp: '/assets/poster_03_ghost_architecture.webp',
    imageJpg: '/assets/poster_03_ghost_architecture.jpg',
    aspectRatio: '3:4',
  },
  {
    id: 'kinetic-type',
    index: '04',
    title: 'Kinetic Type & Syntax',
    year: '2026',
    format: 'Letterpress & Silkscreen',
    paperStock: '250gsm Archival Cotton Vellum',
    dimensions: '594 × 841 mm (DIN A1)',
    palette: ['#0E0E0E', '#F6F3EC', '#FF4B21'],
    description:
      'Deconstructed grotesque typography examining the intersection of code grammar, movement vectors, and Swiss typographic discipline.',
    imageWebp: '/assets/poster_04_kinetic_type.webp',
    imageJpg: '/assets/poster_04_kinetic_type.jpg',
    aspectRatio: '3:4',
  },
  {
    id: 'poster-placeholder-05',
    index: '05',
    title: 'Poster Slot 05 [Staged Frame]',
    year: '2025',
    format: 'Silkscreen Print Slot',
    paperStock: '300gsm Archival Paper',
    dimensions: '594 × 841 mm (DIN A1)',
    palette: ['#0E0E0E', '#FF4B21'],
    description:
      'TODO: replace with real poster image. Pre-styled placeholder frame ready for Erfan to drop in high-resolution poster print file.',
    imageWebp: null,
    imageJpg: null,
    aspectRatio: '3:4',
    isPlaceholder: true,
  },
  {
    id: 'poster-placeholder-06',
    index: '06',
    title: 'Poster Slot 06 [Staged Frame]',
    year: '2025',
    format: 'Silkscreen Print Slot',
    paperStock: '300gsm Archival Paper',
    dimensions: '594 × 841 mm (DIN A1)',
    palette: ['#0E0E0E', '#0F4C81'],
    description:
      'TODO: replace with real poster image. Pre-styled placeholder frame with interactive print-registration crosshair and hover dynamics.',
    imageWebp: null,
    imageJpg: null,
    aspectRatio: '3:4',
    isPlaceholder: true,
  },
];
