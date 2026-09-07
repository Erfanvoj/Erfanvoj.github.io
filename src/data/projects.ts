export interface Project {
  id: string;
  index: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  overview: string;
  technicalHighlights: string[];
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  imageWebp: string | null;
  imageJpg: string | null;
  logoWebp?: string;
  logoPng?: string;
  isPlaceholder?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'ghostblock',
    index: '01',
    title: 'Ghostblock',
    tagline: 'Zero-Detection Manifest V3 Ad Shield',
    category: 'BROWSER SECURITY & DOM GEOMETRY',
    year: '2026',
    overview:
      'A stealth ad-blocking engine re-engineered for Chromium’s Manifest V3 architecture. Rather than aggressively severing network requests and collapsing DOM nodes (which alerts anti-adblock detection scripts and breaks fluid layouts), Ghostblock intercepts ad vendor telemetry, synthesizes benign execution signals, and virtualizes element bounding boxes. To host websites, monetization scripts report healthy impressions while users experience a pristine, tracker-free viewport with zero layout jump.',
    technicalHighlights: [
      'DOM Geometry Virtualization: Preserves computed layout dimensions to prevent anti-adblock integrity tripwires.',
      'Signature Spoofing: Generates synthetic callback telemetry matching Google AdSense, Prebid.js, and Amazon TAM.',
      'Manifest V3 Declarative Engine: Leverages declarativeNetRequest with sub-millisecond rule evaluation latency.',
      'Zero Content-Script Footprint: Bypasses window-level prototype tampering inspections.'
    ],
    techStack: ['Manifest V3', 'TypeScript', 'WebExtensions API', 'DOM Heuristics', 'Chromium Internals'],
    githubUrl: 'https://github.com/erfanvoj',
    liveDemoUrl: '#demo-ghostblock',
    imageWebp: '/assets/project_ghostblock.webp',
    imageJpg: '/assets/project_ghostblock.jpg',
  },
  {
    id: 'rgb-file-transfer',
    index: '02',
    title: 'RGB Air-Gap Transfer',
    tagline: 'Physical-Layer Optical Data Transceiver',
    category: 'PHYSICAL LAYER & COMPUTER VISION',
    year: '2026',
    overview:
      'A browser-native optical data communication protocol engineered in TypeScript and Vite that moves arbitrary files across physical air-gaps without radio-frequency, Bluetooth, or local network access. The transmitter slices binary payloads into fountain-coded symbol blocks and projects them as high-density chromatic matrices on a display screen. The receiver ingests the visual stream via standard webcam feeds, executing real-time quad-corner perspective rectification and multi-channel color demultiplexing to assemble undamaged files.',
    technicalHighlights: [
      'Rateless Fountain Coding: Implements Luby Transform (LT) codes to guarantee error-free reassembly under severe frame drops.',
      'Real-Time Computer Vision: Fast canvas-level quadrilateral homography and skew correction for handheld camera angles.',
      'Chromatic Constellation Mapping: High-entropy spatial modulation across 8-color and 16-color RGB color spaces.',
      'Zero Network Overhead: Transmits fully isolated from TCP/IP, cellular, or RF spectrum eavesdropping.'
    ],
    techStack: ['TypeScript', 'Vite', 'Fountain Codes (LT)', 'Computer Vision', 'Canvas API', 'WebRTC'],
    githubUrl: 'https://github.com/erfanvoj',
    liveDemoUrl: 'https://rgb-file-transfer.netlify.app',
    imageWebp: '/assets/project_rgb_airgap.webp',
    imageJpg: '/assets/project_rgb_airgap.jpg',
  },
  {
    id: 'hear-this-pic',
    index: '03',
    title: 'HearThisPic',
    tagline: 'Multimodal Vision AI & Zero-Auth Sonic Curation Bot',
    category: 'MULTIMODAL AI & COMPUTER VISION',
    year: '2026',
    overview:
      'An asynchronous production Telegram bot engineered in Python that bridges computer vision with automated sonic curation. When users submit photographs, the system streams the image in-memory with zero disk persistence to Google Gemini Vision (featuring automatic waterfall failover between Gemini 3.5 Flash Lite and 3.1 Flash Lite) to extract visual aesthetics, color palettes, and narrative moods. A zero-auth music engine resolves tracks against public iTunes APIs to deliver 30-second audio preview streams and deterministic Spotify search deep-links with bilingual English/Persian localization.',
    technicalHighlights: [
      'Zero-Disk Memory Pipeline: Streams photo payloads strictly through in-memory io.BytesIO buffers, ensuring zero forensic storage and container ephemerality.',
      'Waterfall Model Failover: Implements automatic failover from Gemini 3.5 Flash Lite to 3.1 Flash Lite on HTTP 429 quota exhaustion.',
      'Zero-Auth Audio Engine: Concurrently queries public iTunes Search APIs via aiohttp connection pooling for 30s .m4a streams and 600×600 artwork without API credentials.',
      'Bilingual Cultural Music Supervision: Context-aware prompt engineering tuned for English and Persian musical nuances with strict Latin query formatting.'
    ],
    techStack: ['Python 3.12', 'aiogram 3.x', 'Google GenAI SDK', 'Gemini 3.5 Flash', 'Pydantic v2', 'aiohttp', 'Docker'],
    githubUrl: 'https://github.com/erfanvoj/HearThisPic',
    liveDemoUrl: 'https://t.me/HearThisPicBot',
    imageWebp: '/assets/project_hearthispic.webp',
    imageJpg: '/assets/project_hearthispic.jpg',
    logoWebp: '/assets/project_hearthispic_logo.webp',
    logoPng: '/assets/project_hearthispic_logo.png',
  },
];
