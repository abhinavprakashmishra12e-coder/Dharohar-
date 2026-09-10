import { PanoramicScene } from '../types/heritage';

export const PANORAMIC_SCENES: PanoramicScene[] = [
  {
    id: 'taj-mahal-360',
    landmarkId: 'taj-mahal',
    title: 'Taj Mahal - Main Marble Courtyard & Reflecting Pool',
    hindiTitle: 'ताज महल - मुख्य संगमरमर प्रांगण',
    location: 'Agra, Uttar Pradesh (27.1751° N, 78.0421° E)',
    era: '1632–1653 CE • Mughal Dynasty (Emperor Shah Jahan)',
    architecturalStyle: 'Mughal Architectural Masterpiece with White Makrana Marble',
    description: 'Immerse yourself directly before the monumental marble plinth of the Taj Mahal. Look up at the soaring 73-meter bulbous dome, the four sentinel minarets gracefully leaning outward, and the tranquil reflections in the Charbagh waterway.',
    skyGradient: {
      top: '#1d4263',
      middle: '#3d779f',
      horizon: '#e0c08b',
    },
    groundColor: '#4f5459',
    accentColor: '#f59e0b',
    ambientSound: 'sitar_raga',
    hotspots: [
      {
        id: 'taj-dome',
        yaw: 0,
        pitch: 28,
        title: 'The Great Onion Dome (Amrud)',
        description: 'Soaring 35 meters above the drum, the central dome is topped with a gilded bronze finial combining Persian crescent and Hindu trident motifs.',
        architecturalDetail: 'Constructed entirely from translucent Makrana marble with double-dome internal acoustics that sustain whispers for over 28 seconds.',
        category: 'Architecture'
      },
      {
        id: 'taj-pishtaq',
        yaw: 0,
        pitch: -2,
        title: 'The Grand Central Pishtaq Archway',
        description: 'The monumental recessed iwan arch framed by intricate floral arabesques inlaid with semi-precious lapis lazuli, carnelian, and jade.',
        architecturalDetail: 'The Quranic calligraphy in Thuluth script is optically adjusted: lettering gradually enlarges towards the top so it appears perfectly uniform to viewers below.',
        category: 'Art & Inlay'
      },
      {
        id: 'taj-minaret-left',
        yaw: -38,
        pitch: 16,
        title: 'Western Outer Minaret (40m)',
        description: 'One of four freestanding circular minarets flanking the marble plinth, deliberately constructed tilting slightly outward (approx 2 degrees).',
        architecturalDetail: 'In the event of an earthquake, the towers would collapse outward away from the sacred central tomb rather than onto it.',
        category: 'Architecture'
      },
      {
        id: 'taj-reflecting-pool',
        yaw: 0,
        pitch: -45,
        title: 'Al Hawd al-Kawthar (Pool of Abundance)',
        description: 'The central raised marble water tank at the intersection of the four primary Charbagh water axes.',
        architecturalDetail: 'Engineered with subterranean terracotta piping and copper reservoirs to ensure identical water pressure across all fountains simultaneously.',
        category: 'Sacred Symbolism'
      },
      {
        id: 'taj-yamuna-rear',
        yaw: 180,
        pitch: -8,
        title: 'Yamuna River & Mehtab Bagh Vista',
        description: 'Looking directly behind towards the meandering sacred Yamuna River and the Moonlight Gardens where Shah Jahan envisioned a companion monument.',
        architecturalDetail: 'The sandstone foundation plinth rests upon deep wooden wells sunk into the riverbed, preserved for centuries by the continuous moisture of the river.',
        category: 'History'
      }
    ],
    featureDetails: [
      { label: 'Height of Central Dome', value: '73 meters (240 ft)' },
      { label: 'Material', value: 'Makrana Marble & 28 Inlaid Gemstones' },
      { label: 'Architects', value: 'Ustad Ahmad Lahori & Mir Abd-ul Karim' },
      { label: 'UNESCO Inscription', value: '1983 World Heritage Site' }
    ]
  },
  {
    id: 'golden-temple-360',
    landmarkId: 'golden-temple',
    title: 'Sri Harmandir Sahib - Amrit Sarovar & Gold Sanctum',
    hindiTitle: 'स्वर्ण मंदिर - अमृत सरोवर व गर्भगृह',
    location: 'Amritsar, Punjab (31.6200° N, 74.8765° E)',
    era: '1581–1604 CE • Guru Ram Das & Guru Arjan Dev',
    architecturalStyle: 'Sikh Architecture with Rajput & Mughal Elegance',
    description: 'Stand on the Parikrama marble promenade overlooking the holy Pool of Immortality (Amrit Sarovar). The glistening golden two-story sanctum floats serenely at the end of the causeway as sacred Gurbani kirtan echoes across the waters.',
    skyGradient: {
      top: '#193352',
      middle: '#2a5a8a',
      horizon: '#f4ba68',
    },
    groundColor: '#dedbd2',
    accentColor: '#f59e0b',
    ambientSound: 'temple_bells',
    hotspots: [
      {
        id: 'gold-sanctum',
        yaw: 5,
        pitch: 8,
        title: 'Harmandir Sanctum Sanctorum',
        description: 'The lower level is decorated with white marble relief carving, while the upper floor is clad with 500 kilograms of pure beaten 24-karat gold leaf.',
        architecturalDetail: 'Contains the original Guru Granth Sahib under a jewel-encrusted canopy, where hymnal recitation continues uninterrupted from dawn to midnight.',
        category: 'Sacred Symbolism'
      },
      {
        id: 'amrit-sarovar-water',
        yaw: -15,
        pitch: -35,
        title: 'Amrit Sarovar (Holy Pool of Nectar)',
        description: 'Excavated by Guru Ram Das in 1577. Pilgrims bathe in its sanctifying waters believing in its healing and spiritual purification properties.',
        architecturalDetail: 'The sarovar is fed by a natural subterranean aquifer and the Ravi River via the Hasli canal, kept crystal clear by constant circulation.',
        category: 'Sacred Symbolism'
      },
      {
        id: 'akal-takht',
        yaw: -110,
        pitch: 12,
        title: 'The Akal Takht (Throne of the Timeless)',
        description: 'The highest temporal seat of Sikh authority, established directly opposite the sanctum by Guru Hargobind in 1606.',
        architecturalDetail: 'Represents the synthesis of Miri (temporal power) and Piri (spiritual authority).',
        category: 'History'
      },
      {
        id: 'langar-hall',
        yaw: 145,
        pitch: -5,
        title: 'Guru Ram Das Langar Hall',
        description: 'The world’s largest communal dining hall, serving over 100,000 free, nutritious meals every single day to all visitors without caste distinction.',
        architecturalDetail: 'Run completely by volunteer seva (selfless service), cooking tons of lentils, roti, and kheer around the clock.',
        category: 'Architecture'
      }
    ],
    featureDetails: [
      { label: 'Gold Foil Weight', value: '500+ kg Pure 24K Gold' },
      { label: 'Entrances', value: '4 Directions (Open to All Humanity)' },
      { label: 'Daily Free Meals (Langar)', value: '100,000+ Visitors Daily' },
      { label: 'Founded by', value: 'Guru Ram Das (4th Sikh Guru)' }
    ]
  },
  {
    id: 'hawa-mahal-360',
    landmarkId: 'hawa-mahal',
    title: 'Hawa Mahal & Amber Fort - Royal Courtyards of Jaipur',
    hindiTitle: 'हवा महल व आमेर दुर्ग - जयपुर का शाही प्रांगण',
    location: 'Jaipur, Rajasthan (26.9239° N, 75.8267° E)',
    era: '1799 CE • Maharaja Sawai Pratap Singh',
    architecturalStyle: 'Rajput & Mughal Synthesis in Pink Terracotta Sandstone',
    description: 'Peer out through the honeycomb sandstone screens of the Palace of Winds overlooking the Pink City bazaar, or step into the Sheesh Mahal (Hall of Mirrors) at the Amber Fort hilltop.',
    skyGradient: {
      top: '#213b5c',
      middle: '#476887',
      horizon: '#f39c6b',
    },
    groundColor: '#a15b3c',
    accentColor: '#ef4444',
    ambientSound: 'courtyard_breeze',
    hotspots: [
      {
        id: 'jharokha-lattice',
        yaw: 0,
        pitch: 18,
        title: '953 Carved Stone Jharokha Windows',
        description: 'Delicate sandstone lattice screens designed with Venturi effect geometry: warm desert winds compress through small apertures and emerge chilled.',
        architecturalDetail: 'Royal ladies could observe religious processions in the streets below with complete privacy and natural air-conditioning.',
        category: 'Architecture'
      },
      {
        id: 'sheesh-mahal',
        yaw: 130,
        pitch: 5,
        title: 'Sheesh Mahal (Palace of Mirrors)',
        description: 'Walls and vaulted ceilings adorned with thousands of concave Belgian convex mirrors and stained glass that sparkle like constellations.',
        architecturalDetail: 'A single candle lit at night reflects thousands of times, illuminating the entire hall with starlight brilliance.',
        category: 'Art & Inlay'
      },
      {
        id: 'krishna-crown-facade',
        yaw: -60,
        pitch: 30,
        title: 'Crown of Lord Krishna Silhouette',
        description: 'The stepped five-story facade replicates the peacock-feathered crown (mukut) of Lord Krishna, to whom Maharaja Sawai Pratap Singh was devoted.',
        architecturalDetail: 'Remarkably, the five-story structure has no stairs inside; upper levels are accessed entirely through sloping ramps for royal palanquins.',
        category: 'History'
      }
    ],
    featureDetails: [
      { label: 'Casements (Jharokhas)', value: '953 Lattice Windows' },
      { label: 'Facade Height', value: '15 meters (50 ft) across 5 Stories' },
      { label: 'Primary Material', value: 'Red & Pink Sandstone' },
      { label: 'Architect', value: 'Lal Chand Ustad' }
    ]
  },
  {
    id: 'meenakshi-360',
    landmarkId: 'meenakshi-temple',
    title: 'Meenakshi Amman Temple - Gopuram Hall & Sacred Tank',
    hindiTitle: 'मीनाक्षी अम्मन मंदिर - गोपुरम व स्वर्ण कमल सरोवर',
    location: 'Madurai, Tamil Nadu (9.9195° N, 78.1193° E)',
    era: '6th Century BCE (Current structure 1623–1655 CE Nayaka Dynasty)',
    architecturalStyle: 'Dravidian Classical Architecture with Monumental Sculpted Towers',
    description: 'Stand amidst the multi-tiered 52-meter high Southern Gopuram encrusted with 1,511 polychrome stucco deities, demons, and celestial guardians, then walk the Hall of Thousand Pillars.',
    skyGradient: {
      top: '#183654',
      middle: '#255e7e',
      horizon: '#f5ba6a',
    },
    groundColor: '#3d444b',
    accentColor: '#10b981',
    ambientSound: 'temple_bells',
    hotspots: [
      {
        id: 'south-gopuram',
        yaw: 10,
        pitch: 35,
        title: 'Southern Gateway Gopuram (52m)',
        description: 'The tallest of the 14 gateway towers, rising across 9 tiers covered in 1,511 sculpted mythological figures repainted every 12 years.',
        architecturalDetail: 'Slightly curved parabolic contour designed to appear taller against the skyline while resisting cyclonic winds.',
        category: 'Architecture'
      },
      {
        id: 'thousand-pillars',
        yaw: -85,
        pitch: -2,
        title: 'Hall of Thousand Pillars (Ayiram Kaal Mandapam)',
        description: 'Built in 1569 by Ariyanatha Mudaliar, featuring 985 exquisitely carved granite pillars arranged in precise optical alignment.',
        architecturalDetail: 'Each pillar is carved from a single monolithic granite block. At the western entrance stand musical pillars that chime note frequencies.',
        category: 'Art & Inlay'
      },
      {
        id: 'golden-lotus-pond',
        yaw: 70,
        pitch: -30,
        title: 'Potramarai Kulam (Golden Lotus Tank)',
        description: 'The ancient sacred tank where Tamil Sangam literary poets placed their palm-leaf manuscripts to test their divine merit.',
        architecturalDetail: 'Legend states valid classical manuscripts floated on the water while flawed ones sank to the bottom.',
        category: 'Sacred Symbolism'
      }
    ],
    featureDetails: [
      { label: 'Total Towers (Gopurams)', value: '14 Monumental Towers' },
      { label: 'Highest Tower', value: 'South Gopuram (51.9 meters)' },
      { label: 'Number of Pillars in Hall', value: '985 Monolithic Granite Pillars' },
      { label: 'Patron', value: 'Thirumalai Nayak' }
    ]
  },
  {
    id: 'konark-360',
    landmarkId: 'konark-sun-temple',
    title: 'Konark Sun Temple - Chariot of Surya & Astronomical Wheel',
    hindiTitle: 'कोणार्क सूर्य मंदिर - सूर्य का रथ व खगोलीय चक्र',
    location: 'Konark, Odisha (19.8876° N, 86.0945° E)',
    era: '1250 CE • King Narasimhadeva I (Eastern Ganga Dynasty)',
    architecturalStyle: 'Kalinga Stone Temple Architecture (Khondalite & Chlorite)',
    description: 'Stand beside the gigantic 3-meter high stone chariot wheels carved with celestial musicians and dancers, facing the Bay of Bengal sunrise.',
    skyGradient: {
      top: '#163857',
      middle: '#2a6a8c',
      horizon: '#f6b864',
    },
    groundColor: '#7a5a40',
    accentColor: '#f97316',
    ambientSound: 'sitar_raga',
    hotspots: [
      {
        id: 'sundial-wheel',
        yaw: 0,
        pitch: 0,
        title: 'The Great Sundial Chariot Wheel',
        description: 'One of 24 wheels measuring 9.8 feet in diameter, equipped with 8 major spokes (representing 8 prahars or 3-hour periods) and 8 minor spokes.',
        architecturalDetail: 'The shadow of the center axle pin falls precisely upon the bead rings, calculating local solar time to the exact minute.',
        category: 'Architecture'
      },
      {
        id: 'nata-mandira',
        yaw: 120,
        pitch: 10,
        title: 'Nata Mandira (Hall of Dance)',
        description: 'A hypostyle hall dedicated to ritual Odissi dance, covered from top to bottom with 128 classic Natya Shastra dance postures.',
        architecturalDetail: 'Open on all four sides so morning sunlight illuminated the dancers performing for the deities.',
        category: 'Art & Inlay'
      },
      {
        id: 'seven-horses',
        yaw: -70,
        pitch: -15,
        title: 'Seven Galloping Horses of the Sun',
        description: 'Sculpted stallions straining on their harnesses to pull the monumental chariot eastward into the sunrise.',
        architecturalDetail: 'Symbolize the seven days of the week and the seven colors of visible sunlight (VIBGYOR).',
        category: 'Sacred Symbolism'
      }
    ],
    featureDetails: [
      { label: 'Chariot Wheels', value: '24 Giant Stone Wheels (Sundials)' },
      { label: 'Horses', value: '7 Carved Granite Horses' },
      { label: 'Orientation', value: 'Eastward toward Bay of Bengal Dawn' },
      { label: 'UNESCO Inscribed', value: '1984 World Heritage Site' }
    ]
  },
  {
    id: 'ellora-360',
    landmarkId: 'ellora-caves',
    title: 'Kailasa Temple (Cave 16) - Monolithic Basalt Wonder',
    hindiTitle: 'कैलाश मंदिर (एलोरा) - अखंड चट्टान से निर्मित विश्व आश्चर्य',
    location: 'Sambhaji Nagar / Aurangabad, Maharashtra (20.0258° N, 75.1780° E)',
    era: '756–774 CE • Rashtrakuta King Krishna I',
    architecturalStyle: 'Rock-Cut Dravidian Monolith (Top-Down Excavation)',
    description: 'Gaze upwards from the central sunken courtyard carved deep inside the volcanic basalt cliff face. The entire multi-story temple complex was sculpted without scaffolding from above.',
    skyGradient: {
      top: '#1b3754',
      middle: '#2a5b7d',
      horizon: '#dbaa66',
    },
    groundColor: '#3a3d42',
    accentColor: '#eab308',
    ambientSound: 'temple_bells',
    hotspots: [
      {
        id: 'kailasa-shikhara',
        yaw: 5,
        pitch: 32,
        title: '32-Meter Soaring Shikhara Spire',
        description: 'Carved straight down out of the mountain summit, replicating Mount Kailash in the Himalayas.',
        architecturalDetail: 'Originally coated with white lime plaster so the entire mountain temple gleamed like snow in the moonlight.',
        category: 'Architecture'
      },
      {
        id: 'monolithic-elephants',
        yaw: -45,
        pitch: -12,
        title: 'Life-Size Plinth War Elephants',
        description: 'A subterranean row of colossal elephants carved directly into the lower plinth, appearing to hold the entire multi-thousand-ton temple aloft.',
        architecturalDetail: 'Each elephant is sculpted in dynamic walking poses with detailed trunks and harness bells.',
        category: 'Art & Inlay'
      },
      {
        id: 'dhwaja-stambhas',
        yaw: 40,
        pitch: 15,
        title: 'Freestanding Victory Pillars (15m)',
        description: 'Two gigantic monolithic obelisks standing isolated in the courtyard, carved out of the original rock bed without any joins or mortar.',
        architecturalDetail: 'Engineered with plumb-line accuracy through continuous rock removal.',
        category: 'History'
      }
    ],
    featureDetails: [
      { label: 'Rock Excavated', value: 'Over 200,000 Tonnes of Solid Basalt' },
      { label: 'Construction Method', value: 'Top-to-Bottom Cliff Excavation' },
      { label: 'Courtyard Depth', value: '107 ft deep into the Cliff' },
      { label: 'Scaffolding Used', value: 'None (Carved from natural rock steps)' }
    ]
  },
  {
    id: 'victoria-memorial-360',
    landmarkId: 'victoria-memorial',
    title: 'Victoria Memorial - White Marble Palace & Reflecting Lakes',
    hindiTitle: 'विक्टोरिया मेमोरियल - संगमरमर महल व उद्यान',
    location: 'Kolkata, West Bengal (22.5448° N, 88.3426° E)',
    era: '1906–1921 CE • Sir William Emerson & Lord Curzon',
    architecturalStyle: 'Indo-Saracenic & British Classical with Italian Marble Detailing',
    description: 'Stand in the manicured royal gardens overlooking the magnificent white marble dome crowned by the rotating Angel of Victory, mirrored in the serene ornamental waters.',
    skyGradient: {
      top: '#1c3e5e',
      middle: '#31698f',
      horizon: '#f0c78a',
    },
    groundColor: '#304a37',
    accentColor: '#38bdf8',
    ambientSound: 'courtyard_breeze',
    hotspots: [
      {
        id: 'central-dome',
        yaw: 0,
        pitch: 24,
        title: 'The Great Makrana Marble Dome (56m)',
        description: 'Echoing the Renaissance dome of St. Paul’s Cathedral in London, built using the same high-grade Rajasthan Makrana marble as the Taj Mahal.',
        architecturalDetail: 'Surrounded by sculpted allegorical figures of Art, Architecture, Justice, and Charity.',
        category: 'Architecture'
      },
      {
        id: 'angel-victory',
        yaw: 0,
        pitch: 42,
        title: 'The 16-Foot Rotating Angel of Victory',
        description: 'A 3-tonne bronze sculpture mounted on ball bearings atop the cupola, serving as a functional wind vane facing into the breeze.',
        architecturalDetail: 'Cast by George Frampton in England and transported to Kolkata by sea.',
        category: 'Art & Inlay'
      },
      {
        id: 'memorial-lakes',
        yaw: 15,
        pitch: -38,
        title: 'Ornamental Reflection Lakes',
        description: 'Expansive water bodies reflecting the pristine white colonnades amidst 64 acres of lush botanical gardens.',
        architecturalDetail: 'Provides habitat for migratory birds arriving during Kolkata winters.',
        category: 'History'
      }
    ],
    featureDetails: [
      { label: 'Garden Grounds', value: '64 Acres of Landscaped Gardens' },
      { label: 'Galleries', value: '25 Dedicated Historic & Art Galleries' },
      { label: 'Central Dome Height', value: '56 meters (184 ft)' },
      { label: 'Stone Type', value: 'Makrana Marble from Jodhpur' }
    ]
  },
  {
    id: 'varanasi-360',
    landmarkId: 'varanasi-ghats',
    title: 'Varanasi Ghats - Sacred Ganga Aarti at Dashashwamedh',
    hindiTitle: 'वाराणसी घाट - दशाश्वमेध घाट की भव्य गंगा आरती',
    location: 'Varanasi, Uttar Pradesh (25.3109° N, 83.0107° E)',
    era: 'Ancient (Continuously active for 3,000+ years)',
    architecturalStyle: 'Stepped Stone River Ghats & Golden Temple Domes',
    description: 'Float upon the sacred River Ganga at twilight as thousands of brass lamps (diyas) illuminate the stepped ghats and priests chant ancient Vedic mantras during the Maha Aarti.',
    skyGradient: {
      top: '#15243b',
      middle: '#2a446a',
      horizon: '#f39446',
    },
    groundColor: '#1e3852',
    accentColor: '#f97316',
    ambientSound: 'river_dawn',
    hotspots: [
      {
        id: 'aarti-dais',
        yaw: 0,
        pitch: 0,
        title: 'Maha Aarti Sacred Platforms',
        description: 'Seven elevated brass stages where saffron-clad pujaris perform the synchronized ritual offering of fire, conch shells, and incense to Mother Ganga.',
        architecturalDetail: 'The giant multi-tiered brass lamp stands weigh over 5 kilograms and hold 108 camphor flames.',
        category: 'Sacred Symbolism'
      },
      {
        id: 'stepped-ghats',
        yaw: -60,
        pitch: 12,
        title: 'Dashashwamedh Stepped Stone Embankment',
        description: 'According to the Brahma Purana, Lord Brahma sacrificed ten horses (dasa-ashwa-medha) here to welcome Lord Shiva to Kashi.',
        architecturalDetail: 'Reinforced by the Marathas and Ahilyabai Holkar with red Chunar sandstone steps that absorb river floods.',
        category: 'History'
      },
      {
        id: 'sacred-river-ganga',
        yaw: 170,
        pitch: -30,
        title: 'Crescent Meander of Holy River Ganga',
        description: 'The sacred river uniquely flows northward (Uttaravahini) at Kashi, believed to turn back toward its Himalayan source.',
        architecturalDetail: 'Pilgrims launch thousands of leaf-boat oil lamps (deepdan) that float downstream in glowing constellations.',
        category: 'Sacred Symbolism'
      }
    ],
    featureDetails: [
      { label: 'Riverfront Length', value: '84 Contiguous Stone Ghats' },
      { label: 'Age of Habitation', value: 'Over 3,000 Continuous Years' },
      { label: 'Evening Aarti Lamps', value: '108 Flame Multi-Tiered Brass Deeps' },
      { label: 'Patrons of Reconstruction', value: 'Queen Ahilyabai Holkar & Maratha Kings' }
    ]
  }
];
