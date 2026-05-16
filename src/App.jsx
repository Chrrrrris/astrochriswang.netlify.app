import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Orbit,
  Search,
  Telescope,
  X as XIcon
} from 'lucide-react';


import atmosphereImage from '../assets/media/atmospheres.jpeg';
import formationImage from '../assets/media/formation.jpg';
import dynamicsImage from '../assets/media/dynamics.jpg';

import heroImage from '../assets/media/exo.jpg';
import avatarImage from '../content/authors/admin/avatar.jpg';
import arctosImage from '../content/project/ARCTOS/featured.JPG';
import eznoteImage from '../content/project/EZ-Notes/featured.jpg';
import astroPhotoImage from '../content/project/astrophoto/featured.jpg';
import eclipseImage from '../content/project/astrophoto/Eclipse.jpg';
import m51Image from '../content/project/astrophoto/M51.JPG';
import ngc2403Image from '../content/project/astrophoto/NGC2403.JPG';
import orionImage from '../content/project/astrophoto/Orion.jpg';
import dailyPhotoOne from '../assets/media/albums/demo1/IMG_0796.jpg';
import dailyPhotoTwo from '../assets/media/albums/demo1/IMG_0797.jpg';
import dailyPhotoThree from '../assets/media/albums/demo1/IMG_0798.jpg';
import dailyPhotoFour from '../assets/media/albums/demo1/IMG_0799.jpg';
import citationCounts from './citation-counts.json';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'News', href: '/#news' },
  { label: 'Publications', href: '/publications/' },
  { label: 'CV', href: '/cv/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Photos', href: '/photos/' }
];

const socials = [
  { label: 'Email', href: 'mailto:lechris.wang@princeton.edu', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/Chrrrrris', icon: Github },
  { label: 'Twitter', href: 'https://twitter.com/ChrrrrrisWang', text: 'X' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0002-6379-3816', text: 'iD' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chris-wang-a85524223/', icon: Linkedin },
  { label: 'CV', href: '/uploads/cv.pdf', text: 'CV' }
];

const scholarlyLinks = [
  { label: 'ORCID', href: 'https://orcid.org/0000-0002-6379-3816' },
  { label: 'ADS', href: 'https://ui.adsabs.harvard.edu/user/libraries/cUngKkq-SAi2aIQ3-w5DtA' },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?view_op=search_authors&mauthors=Le-Chris%20Wang'
  }
];

const profile = {
  name: 'Le-Chris Wang',
  role: 'Graduate Student',
  affiliation: 'Department of Astrophysical Sciences, Princeton University',
  location: 'Princeton, NJ',
  email: 'lechris.wang@princeton.edu',
  bio: [
    "My name is Le-Chris Wang. I am a first-year PhD student in the Department of Astrophysical Sciences at Princeton University. My research focuses on exoplanets, specifically their formation, demographics, and atmospheres.",
    'I use numerical simulations to study theoretical outcomes of planet formation and a combination of space-based and ground-based observations to characterize exoplanets.',
    'During my undergrad at Johns Hopkins, I worked with Prof. Kevin Schlaufman and Dr. Matthew Clement on theories of planet formation. I also worked with Prof. David Sing and Zafar Rustamkulov on exoplanet atmospheres with JWST and a variety of ground-based observatories.'
  ]
};

const lastUpdated = 'May 16, 2026';

const news = [
  {
    date: 'Sept 2, 2025',
    text: 'Started graduate school at Princeton University.'
  },
  {
    date: 'May 22, 2025',
    text: 'Graduated from Johns Hopkins University with double majors in physics and computer science and minors in pure math and applied math.'
  }
];

const interests = [
  'Planet Formation',
  'Exoplanet Atmosphere',
  'Dynamics',
  'Data Mining in Astronomy'
];

const education = [
  {
    degree: 'PhD in Astrophysical Sciences',
    institution: 'Princeton University',
    year: '2030',
    advisor: 'Advisor: Prof. Joshua Winn'
  },
  {
    degree: 'BSc in Computer Science and Physics',
    institution: 'Johns Hopkins University',
    year: '2025',
    advisor: 'Advisor: Prof. Kevin Schlaufman, Prof. David Sing',
    details: ['Minors: Applied Mathematics and Statistics; Pure Mathematics']
  }
];

const experience = [
  {
    title: 'Graduate Student',
    organization: 'Department of Astrophysical Sciences, Princeton University',
    location: 'Princeton, NJ',
    period: '2025 - present',
    icon: GraduationCap,
    details: [
      'Research focus: exoplanet formation, demographics, atmospheres, and astronomical data.'
    ]
  },
  {
    title: 'Undergraduate Researcher, BDP Fellow',
    organization: "David Sing's Exoplanet Group",
    location: 'Baltimore, MD',
    period: '2022 - 2025',
    icon: Telescope,
    details: [
      "Incorporated nested sampling and MCMC with Gaussian priors into FIREFLy, the group's JWST reduction pipeline.",
      'Developed FIREFLy to be capable of JWST NIRISS SOSS data.',
      'Extracted transmission spectra for HAT-P-14b, WASP-96b, and K2-18b with JWST NIRISS SOSS.'
    ]
  },
  {
    title: 'Undergraduate Researcher',
    organization: "Kevin Schlaufman's Exoplanet Group",
    location: 'Baltimore, MD',
    period: '2022 - 2025',
    icon: Orbit,
    details: [
      'Assembled photometry for stars confirmed as open cluster members by Gaia.',
      'Developed algorithms that fit HR diagrams and reject unresolved binary stars.',
      'Studied stellar abundance patterns, planet formation, pebble accretion, planetesimal accretion, and exoplanet demographics.'
    ]
  }
];

const honors = [
  {
    year: '2024',
    items: [
      'IDIES Summer Student Fellowship, Johns Hopkins university',
      '∑π∑ Physics Honor Society, Johns Hopkins University'
    ]
  },
  {
    year: '2023',
    items: ['Summer PURA Fellowship, Johns Hopkins University',
            "Dean's ASPIRE Fellowship, Johns Hopkins University"
    ]
  },
  {
    year: '2022',
    items: ['Overall second place and Most Useful Application to Help with Learning, HopHacks',
            'Bloomberg Distinguished Professor Fellowship, Johns Hopkins University'
    ]
  }
];

const otherInterests = ['Photography', 'Singing/A Cappella', 'Soccer', 'Running'];

const publications = [
  {
    contribution: 'lead',
    citationCount: null,
    year: '2026',
    status: 'AJ',
    title: 'A Comprehensive Analysis of the Panchromatic Transmission Spectrum of the Hot-Saturn WASP-96 b: Nondetection of Haze, Possible Sodium Limb Asymmetry, Stellar Characterization, and Formation History',
    authors: [
      { name: 'Le-Chris Wang' },
      { name: 'Zafar Rustamkulov' },
      { name: 'David K. Sing' },
      { name: 'Joshua Lothringer' },
      { name: 'Patrick McCreery' },
      { name: 'Daniel Thorngren' },
      { name: 'Munazza K. Alam' }
    ],
    venue: 'The Astronomical Journal',
    journalLine: '2026, Astronomical Journal',
    identifier: 'astro-ph/2511.16771',
    month: 'Mar 2026',
    summary:
      'We detected water in the atmosphere of HAT-P-14 b using JWST NIRISS SOSS and NIRSpec observations.',
    tags: ['Exoplanet', 'Transmission Spectroscopy'],
    links: [
      { label: 'DOI', href: 'https://doi.org/10.48550/arXiv.2511.16771' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2511.16771' }
    ]
  },

  {
    contribution: 'contributing',
    citationCount: null,
    year: '2025',
    status: 'ApJL',
    title: 'Born Dry or Born Wet? A Palette of Water Growth Histories in TRAPPIST-1 Analogs and Compact Planetary Systems',
    authors: 'Howard Chen, Matthew Clement, Le-Chris Wang, Jesse Gu',
    venue: 'The Astrophysical Journal Letters',
    journalLine: '2025, Astrophysical Journal Letters',
    identifier: 'doi:10.3847/2041-8213/adf282',
    month: 'Sept 2025',
    summary:
      'We combine volatile evolution models with N-body simulations to predict volatile inventories of compact M-dwarf planetary systems.',
    tags: ['Exoplanet', 'N-body Simulation', 'Dynamics'],
    links: [
      { label: 'DOI', href: 'https://doi.org/10.3847/2041-8213/adf282' },
      { label: 'PDF', href: 'https://iopscience.iop.org/article/10.3847/2041-8213/adf282/pdf' }
    ]
  },
  {
    contribution: 'contributing',
    citationCount: null,
    year: '2025',
    status: 'Science',
    title: 'Cloudy Mornings and Clear Evenings on a Giant Extrasolar World',
    authors:
      'Sagnick Mukherjee, David K. Sing, Guangwei Fu, et al.',
    venue: 'Science',
    journalLine: '2025, Science',
    identifier: 'astro-ph/2505.10910',
    month: 'May 2025',
    summary:
      'We report limb asymmetry in WASP-94A b, with a cloud-covered cooler morning limb and a clearer hotter evening limb.',
    tags: ['Exoplanet', 'Atmospheres', 'Transmission Spectroscopy'],
    links: [
      { label: 'DOI', href: 'https://doi.org/10.48550/arXiv.2505.10910' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2505.10910' }
    ]
  },
  {
    contribution: 'contributing',
    citationCount: null,
    year: '2025',
    status: 'AJ',
    title: 'A Revised Density Estimate for the Largest Known Exoplanet, HAT-P-67 b',
    authors:
      'Gavin Wang, William O. Balmer, Laurent Pueyo, Daniel Thorngren, Stephen P. Schmidt, Le-Chris Wang, et al.',
    venue: 'The Astronomical Journal',
    journalLine: '2025, Astronomical Journal',
    identifier: 'astro-ph/2504.13997',
    month: 'Apr 2025',
    summary:
      'We obtained a revised density for HAT-P-67 b and placed this extremely low-density planet in an evolutionary context.',
    tags: ['Exoplanet', 'Radial Velocity'],
    links: [
      { label: 'DOI', href: 'https://doi.org/10.48550/arXiv.2504.13997' },
      { label: 'PDF', href: 'https://arxiv.org/abs/2504.13997' }
    ]
  },
  {
    contribution: 'lead',
    citationCount: null,
    year: '2025',
    status: 'AJ',
    title: 'Unveiling the Atmosphere of the Super-Jupiter HAT-P-14b with JWST NIRISS and NIRSpec',
    authors: [
      { name: 'Rongrong Liu' },
      { name: 'Le-Chris Wang', note: '*', tooltip: 'co-first author' },
      { name: 'Zafar Rustamkulov' },
      { name: 'David K. Sing' }
    ],
    venue: 'The Astronomical Journal',
    journalLine: '2025, Astronomical Journal',
    identifier: 'astro-ph/2504.08903',
    month: 'Apr 2025',
    summary:
      'We detected water in the atmosphere of HAT-P-14 b using JWST NIRISS SOSS and NIRSpec observations.',
    tags: ['Exoplanet', 'Transmission Spectroscopy'],
    links: [
      { label: 'DOI', href: 'https://doi.org/10.48550/arXiv.2504.08903' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2504.08903' }
    ]
  },
  {
    contribution: 'lead',
    citationCount: null,
    year: '2021',
    status: 'ITCA',
    title: 'Test of Bell and Mermin Inequalities on Quantum Computer',
    authors: [
      { name: 'Yangping Zheng' },
      { name: 'Xuesi Wang' },
      { name: 'Le-Chris Wang', note: '*', tooltip: 'corresponding author' },
      { name: 'Diyang Bai' },
      { name: 'Lingyu Gu' }
    ],
    venue: '2020 2nd International Conference on Information Technology and Computer Application',
    journalLine: '2021, 2020 2nd International Conference on Information Technology and Computer Application',
    identifier: 'doi:10.1109/ITCA52113.2020.00009',
    month: 'May 2021',
    summary:
      'We used 2-qubit and 3-qubit IBM quantum circuits to test Bell and Mermin inequalities.',
    tags: ['Quantum Computing'],
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1109/ITCA52113.2020.00009' },
      {
        label: 'PDF',
        href: "https://raw.githubusercontent.com/Chrrrrris/astrochris.w/main/static/uploads/Experimental%20Verification%20of%20Bell's%20and%20Mermin's%20Inequalities%20on%20IBMQ%20Experience.pdf"
      }
    ]
  },
  {
    contribution: 'lead',
    citationCount: null,
    year: '2021',
    status: 'IOP',
    title: 'General Relativity Testing in Exoplanetary Systems',
    authors: [
      { name: 'Xirui Gou' },
      { name: 'Xinyue Pan' },
      { name: 'Le-Chris Wang', note: '*', tooltip: 'co-first author' }
    ],
    venue: 'IOP Conference Series: Earth and Environmental Science',
    journalLine: '2021, IOP Conference Series: Earth and Environmental Science, 658, 012051',
    identifier: 'doi:10.1088/1755-1315/658/1/012051',
    month: 'Feb 2021',
    summary:
      'We investigated the possibility of testing general relativity with orbital precession measurements in exoplanetary systems.',
    tags: ['Exoplanet', 'General Relativity'],
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1088/1755-1315/658/1/012051' },
      { label: 'PDF', href: 'https://iopscience.iop.org/article/10.1088/1755-1315/658/1/012051/pdf' }
    ]
  }
];

// Project card behavior:
// action.type = 'page' opens /projects/{slug}/, 'external' opens action.href, and 'none' makes a display-only card.
const projectGroups = [
  {
    title: 'Science Projects',
    eyebrow: 'Research',
    description:
      'Research projects on exoplanet atmospheres, formation, dynamics, and demographics.',
    items: [
      {
        slug: 'exoplanet-atmosphere',
        title: 'Exoplanet Atmosphere',
        summary:
          "It is the most exciting time to study exoplanet atmospheres with the advent of JWST. I use a combination of space-based and ground-based telescopes to study the atmospheres of extrasolar planets. I am especially interested in the connection between planet atmospheres and the planet's formation history.",
        tags: ['Exoplanet Atmospheres', 'JWST', 'Spectroscopy'],
        year: '2022 - present',
        image: atmosphereImage,
        // action: { type: 'page', label: 'Read more' },
        action: { type: 'none'},
        detailSections: [
          {
            heading: 'Overview',
            body:
              'I use space-based and ground-based observations to measure exoplanet atmospheres, with an emphasis on JWST time-series spectroscopy and transmission spectra.'
          },
          {
            heading: 'Methods',
            body:
              'This work includes light-curve fitting, limb-darkening treatment, noise modeling, and reduction of JWST NIRISS/SOSS and NIRSpec observations with custom and group-developed pipelines.'
          },
          {
            heading: 'Goal',
            body:
              'The goal is to connect measured spectra to atmospheric composition, clouds, hazes, and the broader formation histories of giant planets.'
          }
        ],
        links: [
          { label: 'Publications', href: '/publications/' }
        ]
      },
      {
        slug: 'planet-formation',
        title: 'Planet Formation',
        summary:
          'Exoplanetary systems display an enormous diversity of orbital architectures, many of which are unlike our own Solar System. I am particularly interested in planets in or near mean motion resonances, as well as the connection between the properties of the stars and the planets that they host.',
          tags: ['Planet Formation', 'N-body', 'Evolution'],
        year: '2022 - present',
        image: formationImage,
        // action: { type: 'page', label: 'Read more' },
        action: { type: 'none'},
        detailSections: [
          {
            heading: 'Overview',
            body:
              'I study how planetary systems form and evolve, especially how disk-driven growth, volatile delivery, and post-formation evolution shape the systems observed today.'
          },
          {
            heading: 'Approach',
            body:
              'The work uses N-body simulations, analytic arguments, and comparisons to observed system architectures to test formation scenarios.'
          },
          {
            heading: 'Applications',
            body:
              'Current applications include compact M-dwarf systems, volatile growth histories, and the transition from idealized formation models to the diverse architectures seen in exoplanet surveys.'
          }
        ]
      },
      {
        slug: 'dynamics',
        title: 'Dynamics',
        summary:
          'I am interested in dynamics as an inverse problem: using the planetary systems we observe today to infer the processes that shaped them. Orbital architectures, spin states, and planetary shapes all carry clues about a system’s past.',
        tags: ['Dynamics', 'Stability', 'Resonances'],
        year: '2024 - present',
        image: dynamicsImage,
        // action: { type: 'page', label: 'Read more' },
        action: { type: 'none'},
        detailSections: [
          {
            heading: 'Overview',
            body:
              'I study how orbital resonances, secular interactions, and chaotic diffusion shape the long-term stability of planetary systems.'
          },
          {
            heading: 'Science questions',
            body:
              'A major theme is how initially ordered planetary systems become unstable and how those instability pathways connect to the architectures observed by transit and radial-velocity surveys.'
          },
          {
            heading: 'Outcome',
            body:
              'This work links analytical stability criteria, numerical experiments, and observed system demographics.'
          }
        ]
      }
    ]
  },
  {
    title: 'Software Projects',
    eyebrow: 'Software and photos',
    description:
      'Tools, applications, and creative projects outside my main research program.',
    items: [
      {
        slug: 'arctos',
        title: 'ARCTOS',
        subtitle: 'Apache Point Observatory Reduction and Calibration Tool S',
        summary:
          'A custom data reduction pipeline for Apache Point Observatory data.',
        tags: ['Astronomy', 'Software', 'Data Reduction'],
        year: '2024',
        image: arctosImage,
        action: { type: 'external', label: 'GitHub', href: 'https://github.com/Chrrrrris/ARCTOS' },
        detailSections: [
          {
            heading: 'Overview',
            body:
              'ARCTOS is a reduction and calibration tool for data from Apache Point Observatory. It is designed to make repeated observing and calibration tasks easier to reproduce.'
          },
          {
            heading: 'Motivation',
            body:
              'The goal is to keep the workflow transparent, scriptable, and useful for time-series observations where consistent reductions are essential.'
          }
        ],
        links: [{ label: 'GitHub', href: 'https://github.com/Chrrrrris/ARCTOS' }]
      },
      {
        slug: 'eznote',
        title: 'EZ Note',
        summary:
          'An automatic note-taking tool that won overall second place and the Most Useful Application to Help with Learning award at HopHacks 2022.',
        tags: ['Software', 'Hackathon', 'Education'],
        year: '2022',
        image: eznoteImage,
        action: { type: 'external', label: 'GitHub', href: 'https://github.com/KeyiDing/EZnote' },
        detailSections: [
          {
            heading: 'Overview',
            body:
              'EZnote is an automatic note-taking tool designed to help students turn lecture material into organized notes more efficiently.'
          },
          {
            heading: 'Recognition',
            body:
              'The project won overall second place and the Most Useful Application to Help with Learning award at HopHacks 2022.'
          }
        ],
        links: [{ label: 'GitHub', href: 'https://github.com/KeyiDing/EZnote' }]
      }
    ]
  }
];


const allProjects = projectGroups.flatMap((group) =>
  group.items.map((project) => ({
    ...project,
    groupTitle: group.title
  }))
);

const getProjectBySlug = (slug) => allProjects.find((project) => project.slug === slug);

const getProjectAction = (project) =>
  project?.action || (project?.detailSections?.length ? { type: 'page', label: 'Read more' } : { type: 'none' });

const getProjectHref = (project) => {
  const action = getProjectAction(project);

  if (action.type === 'external') {
    return action.href;
  }

  if (action.type === 'page') {
    return action.href || `/projects/${project.slug}/`;
  }

  return null;
};

// Future uploaded static photos can be referenced as "/photos/astro/file.jpg" or "/photos/daily/file.jpg".
const photoCollections = [
  {
    title: 'Gallery',
    description: '',
    photos: [
      { title: 'My Princeton Astro Cohort; the best cohort ever', image: '../assets/media/albums/demo1/princeton.jpg', description: '' },
      { title: 'Prof Kevin Schlaufman, JHU; my first research advisor', image: '../assets/media/albums/demo1/kevin.jpg', description: '' },
      { title: 'My first academic conference in my sophomore year, with Kevin', image: '../assets/media/albums/demo1/Gordon.JPG', description: '' },
      { title: 'Prof Rosie Wyse, JHU; she taught me the most astronomy', image: '../assets/media/albums/demo1/IMG_6844.jpg', description: '' },
      { title: 'Sing Group, JHU', image: '../assets/media/albums/demo1/IMG_6819.JPG', description: '' },
      { title: 'Zafar, David, and Rongrong, JHU; my closest collaborators and best astro friends', image: '../assets/media/albums/demo1/IMG_1744.JPG', description: '' },
      { title: 'Music Dynasty, my A Cappella family', image: '../assets/media/albums/demo1/IMG_9727.JPG', description: '' },
      { title: 'NYC', image: dailyPhotoTwo, description: '' },
      { title: 'Washington D.C.', image: dailyPhotoThree, description: '' },
      { title: 'Italy', image: '../assets/media/albums/demo1/IMG_0803.jpg', description: '' },
      { title: 'West Lake, Hangzhou; my hometown', image: '../assets/media/albums/demo1/IMG_4677.jpg', description: '' },
      { title: 'London', image: '../assets/media/albums/demo1/IMG_5138.JPG', description: '' },
    ]
  },
  {
    title: 'Astrophotography',
    description: '',
    photos: [
      {
        title: 'M51',
        image: m51Image,
        description: 'Whirlpool Galaxy, observed with the 3.5m telescope at Apache Point Observatory.'
      },
      {
        title: 'NGC 2403',
        image: ngc2403Image,
        description: 'A spiral galaxy processed from APO observations across optical and H-alpha filters.'
      },
      {
        title: 'Orion Nebula',
        image: orionImage,
        description: 'A 90-minute DSLR exposure from the 20-inch Morris W. Offit Telescope at JHU.'
      },
      {
        title: '2024 Solar Eclipse',
        image: eclipseImage,
        description: 'Partial solar eclipse observed from Baltimore at approximately 90 percent coverage.'
      },
      {
        title: 'C/2023 A3',
        image: '../assets/media/albums/demo1/IMG_2979.JPG',
        description: 'Shot on my balcony.'
      }
    ]
  }
];

const normalizePath = (path) => {
  if (!path || path === '/') {
    return '/';
  }

  return path.endsWith('/') ? path : `${path}/`;
};

const getPathFromHref = (href) => normalizePath(href.split('#')[0] || '/');

const sortPublicationsReverseChronological = (items) =>
  [...items].sort((a, b) => {
    const yearDifference = Number(b.year) - Number(a.year);
    if (yearDifference !== 0) {
      return yearDifference;
    }

    return publications.indexOf(a) - publications.indexOf(b);
  });

const getReverseChronologicalNumber = (items, index) => items.length - index;

const scrollToHash = (hash) => {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  window.setTimeout(() => {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
};

function ScrollProgress({ path }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = null;

    const updateProgress = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const nextProgress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

        setProgress(Math.min(100, Math.max(0, nextProgress)));
      });
    };

    updateProgress();
    const routeUpdateId = window.setTimeout(updateProgress, 100);
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.clearTimeout(routeUpdateId);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [path]);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onPopState = () => {
      setPath(normalizePath(window.location.pathname));
      setHash(window.location.hash);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);


  const navigate = (event, href) => {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/uploads/');
    if (isExternal || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      setMenuOpen(false);
      return;
    }

    event.preventDefault();
    const nextPath = getPathFromHref(href);
    const nextHash = href.includes('#') ? `#${href.split('#')[1]}` : '';
    if (nextPath !== path) {
      window.history.pushState({}, '', href);
      setPath(nextPath);
      setHash(nextHash);
      scrollToHash(nextHash);
    } else {
      window.history.pushState({}, '', href);
      setHash(nextHash);
      scrollToHash(nextHash);
    }
    setMenuOpen(false);
  };

  const page = useMemo(() => {
    if (path.startsWith('/projects/') && path !== '/projects/') {
      const slug = path.replace(/^\/projects\//, '').replace(/\/$/, '');
      return <ProjectDetailPage project={getProjectBySlug(slug)} navigate={navigate} />;
    }

    switch (path) {
      case '/publications/':
        return <PublicationsPage />;
      case '/projects/':
        return <ProjectsPage navigate={navigate} />;
      case '/cv/':
        return <CvPage />;
      case '/photos/':
        return <PhotosPage />;
      case '/contact/':
        return <ContactPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  }, [path]);

  return (
    <div className="app">
      <ScrollProgress path={path} />
      <header className="site-header">
        <a className="brand" href="/" onClick={(event) => navigate(event, '/')}>
          <span className="brand-mark">LCW</span>
          <span className="brand-text">Le-Chris Wang</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <XIcon size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => {
            const itemPath = getPathFromHref(item.href);
            const isProjectRoute = itemPath === '/projects/' && path.startsWith('/projects/');
            const isActive =
              isProjectRoute ||
              (path === itemPath &&
                (item.href.includes('#') ? hash === `#${item.href.split('#')[1]}` : !hash));

            return (
              <a
                key={item.href}
                className={isActive ? 'is-active' : ''}
                href={item.href}
                onClick={(event) => navigate(event, item.href)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="nav-tools" aria-label="Quick links">
          <a href="https://twitter.com/ChrrrrrisWang" aria-label="Twitter">
            X
          </a>
          <Search size={25} aria-label="Search" />
        </div>
      </header>

      {page}

      <footer className="site-footer">
        <span>© 2026 Le-Chris Wang</span>
        <span>Last updated: {lastUpdated}</span>
      </footer>
    </div>
  );
}

function HomePage({ navigate }) {
  return (
    <main>
      <section
        className="biography-hero"
        style={{ '--hero-image': `url(${heroImage})` }}
        aria-labelledby="biography-heading"
      >
        <div className="section-shell bio-shell">
          <aside className="bio-card" aria-label="Profile">
            <img className="avatar" src={avatarImage} alt="Le-Chris Wang" />
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="department">Astrophysical Sciences</p>
            <a className="profile-university" href="https://web.astro.princeton.edu/">
              Princeton University
            </a>
            <div className="social-icons">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} aria-label={social.label}>
                    {Icon ? <Icon size={34} /> : <span>{social.text}</span>}
                  </a>
                );
              })}
            </div>
          </aside>

          <div className="bio-text-panel">
            <h2 id="biography-heading">Biography</h2>
            <div className="prose">
              <p>
                My name is Le-Chris Wang (王乐). I am a first-year PhD student at{' '}
                <a href="https://web.astro.princeton.edu/">
                  Astrophysical Science Department of Princeton University
                </a>
                . My research focus is exoplanets, specifically their formation, dynamics, demographics, and
                atmospheres. I use both numerical simulations to study the theoretical outcomes of
                planet formation and a combination of space-based and ground-based observations to
                characterize exoplanets.
              </p>
              <p>
                During my undergrad at Hopkins, I worked with{' '}
                <a href="http://www.kevinschlaufman.com/">Prof. Kevin Schlaufman</a> and{' '}
                <a href="https://www.jhuapl.edu/about/people/matt-clement">
                  Dr. Matthew Clement
                </a>{' '}
                on theories of planet formation. I also worked with{' '}
                <a href="https://physics-astronomy.jhu.edu/directory/david-sing/">
                  Prof. David Sing
                </a>{' '}
                and <a href="https://zafarrustamkulov.com/">Zafar Rustamkulov</a> on exoplanet
                atmospheres with JWST and a variety of ground-based observatories.
              </p>
            </div>
            <div className="bio-meta-grid">
              <section>
                <h3>Interests</h3>
                <ul className="icon-list">
                  {interests.map((interest) => (
                    <li key={interest}>
                      <BookOpen size={20} />
                      {interest}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h3>Education</h3>
                <div className="education-stack">
                  {education.map((item) => (
                    <div key={item.degree}>
                      <GraduationCap size={24} />
                      <p>
                        <strong>
                          {item.degree}, {item.year}
                        </strong>
                        <span>{item.institution}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <div className="bio-links">
              <a href="/publications/" onClick={(event) => navigate(event, '/publications/')}>
                Publications
                <ArrowUpRight size={16} />
              </a>
              <a href="/cv/" onClick={(event) => navigate(event, '/cv/')}>
                Short CV
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="section compact-section" aria-labelledby="news-heading">
        <div className="section-shell">
          <SectionHeader eyebrow="Updates" title="Recent News" id="news-heading" />
          <div className="news-list">
            {news.map((item) => (
              <article className="news-item" key={`${item.date}-${item.text}`}>
                <time>{item.date}</time>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function PublicationsPage() {
  const leadPublications = sortPublicationsReverseChronological(
    publications.filter((publication) => publication.contribution === 'lead')
  );
  const contributingPublications = sortPublicationsReverseChronological(
    publications.filter((publication) => publication.contribution === 'contributing')
  );

  return (
    <main className="page-main">
      <PageTitle
        eyebrow="Research"
        title="Publications"
        description=""
        action={
          <div className="scholarly-links">
            {scholarlyLinks.map((link) => (
              <a key={link.label} className="button secondary" href={link.href}>
                {link.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        }
      />

      <section className="section page-section">
        <div className="section-shell narrow-shell publication-sections">
          <nav className="publication-jump-links" aria-label="Publication sections">
            <a href="#lead-publications">First Author or Equivalent</a>
            <a href="#contributing-publications">Contributing Author</a>
          </nav>

          <section aria-labelledby="lead-publications">
            <h2 id="lead-publications">First Author or Equivalent</h2>
            <div className="simple-publication-list">
              {leadPublications.map((publication, index) => (
                <PublicationEntry
                  publication={publication}
                  number={getReverseChronologicalNumber(leadPublications, index)}
                  key={publication.title}
                />
              ))}
            </div>
          </section>
          <section aria-labelledby="contributing-publications">
            <h2 id="contributing-publications">Contributing Author</h2>
            <div className="simple-publication-list">
              {contributingPublications.map((publication, index) => (
                <PublicationEntry
                  publication={publication}
                  number={getReverseChronologicalNumber(contributingPublications, index)}
                  key={publication.title}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function ProjectsPage({ navigate }) {
  return (
    <main className="page-main project-page">
      <section className="section page-section">
        <div className="section-shell project-page-shell">
          {projectGroups.map((group) => (
            <section className="project-section-block" key={group.title}>
              <h2 className="project-section-title">{group.title}</h2>
              <div className="project-card-grid">
                {group.items.map((project) => (
                  <ProjectCard project={project} key={project.slug} navigate={navigate} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectDetailPage({ project, navigate }) {
  if (!project) {
    return (
      <main className="page-main project-detail-page">
        <section className="section page-section">
          <div className="section-shell project-detail-shell">
            <a className="project-back-link" href="/projects/" onClick={(event) => navigate(event, '/projects/')}>
              ← Back to projects
            </a>
            <h1>Project not found</h1>
            <p className="project-detail-summary">The project page you requested does not exist.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page-main project-detail-page">
      <section className="section page-section">
        <article className="section-shell project-detail-shell">
          <a className="project-back-link" href="/projects/" onClick={(event) => navigate(event, '/projects/')}>
            ← Back to projects
          </a>

          <header className="project-detail-header">
            <p className="project-detail-category">{project.groupTitle}</p>
            <h1>{project.title}</h1>
            {project.subtitle ? <p className="project-detail-subtitle">{project.subtitle}</p> : null}
            <p className="project-detail-summary">{project.summary}</p>
          </header>

          <img className="project-detail-hero" src={project.image} alt="" />

          <div className="project-detail-content">
            {(project.detailSections || []).map((section) => (
              <section className="project-detail-section" key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>

          {project.gallery ? (
            <div className="project-detail-gallery" aria-label="Project image gallery">
              {project.gallery.map((image, index) => (
                <img src={image} alt="" loading="lazy" key={`${project.slug}-gallery-${index}`} />
              ))}
            </div>
          ) : null}

          {project.links ? (
            <div className="project-detail-links">
              {project.links.map((link) => {
                const external = link.href.startsWith('http');
                return (
                  <a
                    href={link.href}
                    key={link.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                    onClick={external ? undefined : (event) => navigate(event, link.href)}
                  >
                    {link.label}
                    {external ? <ExternalLink size={16} /> : <ArrowUpRight size={16} />}
                  </a>
                );
              })}
            </div>
          ) : null}
        </article>
      </section>
    </main>
  );
}

const cvSectionLinks = [
  { id: 'general-information', label: 'General Information' },
  { id: 'education', label: 'Education' },
  { id: 'honors-and-awards', label: 'Honors and Awards' },
  { id: 'academic-interests', label: 'Academic Interests' },
  { id: 'other-interests', label: 'Other Interests' }
];

function CvPage() {
  const [activeSection, setActiveSection] = useState(cvSectionLinks[0].id);

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = 138;
      let currentSection = cvSectionLinks[0].id;

      cvSectionLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) {
          return;
        }

        if (section.getBoundingClientRect().top <= offset) {
          currentSection = id;
        }
      });

      const nearPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      if (nearPageBottom) {
        currentSection = cvSectionLinks[cvSectionLinks.length - 1].id;
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <main className="page-main cv-page">
      <section className="section page-section">
        <div className="section-shell cv-tab-layout">
          <aside className="cv-tabs" aria-label="CV sections">
            {cvSectionLinks.map((section) => (
              <a
                className={activeSection === section.id ? 'is-active' : undefined}
                href={`#${section.id}`}
                key={section.id}
              >
                {section.label}
              </a>
            ))}
          </aside>

          <div className="cv-content">
            <div className="cv-heading">
              <h1>CV</h1>
              <a className="pdf-icon-link" href="/uploads/cv.pdf" aria-label="Download CV">
                <Download size={54} />
                <span>PDF</span>
              </a>
            </div>

            <CvPanel title="General Information" id="general-information">
              <InfoTable
                rows={[
                  ['Full Name', profile.name],
                  ['Position', profile.role],
                  ['Affiliation', profile.affiliation],
                  ['Email', profile.email],
                  ['Location', profile.location]
                ]}
              />
            </CvPanel>

            <CvPanel title="Education" id="education">
              <CvTimeline
                items={education.map((item) => ({
                  year: item.year,
                  title: item.degree,
                  institution: item.institution,
                  advisor: item.advisor,
                  details: item.details
                }))}
              />
            </CvPanel>

            <CvPanel title="Honors and Awards" id="honors-and-awards">
              <CvTimeline
                items={honors.map((item) => ({
                  year: item.year,
                  listItems: item.items
                }))}
              />
            </CvPanel>

            <CvPanel title="Academic Interests" id="academic-interests">
              <ul className="cv-interest-list">
                {interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </CvPanel>

            <CvPanel title="Other Interests" id="other-interests">
              <ul className="cv-interest-list">
                {otherInterests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </CvPanel>
          </div>
        </div>
      </section>
    </main>
  );
}

function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (!selectedPhoto) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };

    document.body.classList.add('has-lightbox');
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.classList.remove('has-lightbox');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedPhoto]);

  return (
    <main className="page-main">
      <PageTitle
        eyebrow="Gallery"
        title="Photos"
        description="Photos of nature, sky, and people I love."
      />
      <section className="section page-section photo-page">
        <div className="section-shell">
          {photoCollections.map((collection) => (
            <section className="photo-collection" key={collection.title}>
              <div className="collection-heading">
                <div>
                  <p className="eyebrow">{collection.title}</p>
                  <h2>{collection.description}</h2>
                </div>
              </div>
              <div className="photo-grid">
                {collection.photos.map((photo) => (
                  <figure
                    className={`photo-tile ${photo.description ? 'has-description' : ''}`}
                    key={`${collection.title}-${photo.title}`}
                  >
                    <button
                      className="photo-open-button"
                      type="button"
                      aria-label={`Open ${photo.title} larger`}
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      <img src={photo.image} alt={photo.title} loading="lazy" />
                    </button>
                    <figcaption>
                      <strong>{photo.title}</strong>
                      {photo.description ? <span>{photo.description}</span> : null}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {selectedPhoto ? (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="photo-lightbox-close"
            type="button"
            aria-label="Close enlarged photo"
            onClick={() => setSelectedPhoto(null)}
          >
            <XIcon size={24} />
          </button>
          <figure className="photo-lightbox-frame" onClick={(event) => event.stopPropagation()}>
            <img src={selectedPhoto.image} alt={selectedPhoto.title} />
            <figcaption>
              <strong>{selectedPhoto.title}</strong>
              {selectedPhoto.description ? <span>{selectedPhoto.description}</span> : null}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </main>
  );
}

function ContactPage() {
  return (
    <main className="page-main contact-page">
      <section className="section contact-section" aria-labelledby="contact-heading">
        <div className="section-shell contact-layout">
          <h1 id="contact-heading">Contact</h1>
          <div>
            <form
              className="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden-field">
                <label>
                  Do not fill this out: <input name="bot-field" />
                </label>
              </p>
              <label>
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" placeholder="Name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" placeholder="Email" required />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="7" placeholder="Message" required />
              </label>
              <div data-netlify-recaptcha="true" />
              <button type="submit">Send</button>
            </form>
            <div className="contact-links">
              <a href="mailto:lwang178@jhu.edu">
                <Mail size={30} />
                lwang178@jhu.edu
              </a>
              <a href="https://twitter.com/ChrrrrrisWang">
                <span className="contact-x">X</span>
                DM Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PageTitle({ eyebrow, title, description, action }) {
  return (
    <section className="page-title">
      <div className="section-shell page-title-inner">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {description ? <p>{description}</p> : null}
        </div>
        {action}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, id }) {
  return (
    <div className="section-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
    </div>
  );
}

function PublicationEntry({ publication, number }) {
  const citationCount = citationCounts[publication.identifier] ?? publication.citationCount;

  return (
    <article className="publication-entry">
      <span className="publication-number">{number}</span>
      <h3>
        <a href={publication.links[0]?.href}>{publication.title}</a>
        <CitationCount count={citationCount} />
      </h3>
      <p className="authors">
        <AuthorList authors={publication.authors} />
      </p>
      <p className="venue">{publication.journalLine}</p>
      <a className="identifier" href={publication.links[0]?.href}>
        {publication.identifier}
      </a>
    </article>
  );
}

function AuthorList({ authors }) {
  const normalizedAuthors =
    typeof authors === 'string'
      ? authors.split(', ').map((name) => ({
          name,
          isMe: name === 'Le-Chris Wang' || name === 'L.-C. Wang'
        }))
      : authors;

  return normalizedAuthors.map((author, index) => (
    <span
      className={`author-token ${author.tooltip ? 'has-tooltip' : ''}`}
      data-tooltip={author.tooltip || undefined}
      tabIndex={author.tooltip ? '0' : undefined}
      key={`${author.name}-${index}`}
    >
      {index > 0 ? ', ' : ''}
      <strong className={author.isMe || author.name === 'Le-Chris Wang' ? 'me' : undefined}>{author.name}</strong>
      {author.note ? <span className="author-note">{author.note}</span> : null}
    </span>
  ));
}

function CitationCount({ count }) {
  if (typeof count !== 'number') {
    return null;
  }

  return (
    <span className="citation-count" title="Citation count synced from NASA ADS">
      <span>{count}</span>
      <small>ADS citations</small>
    </span>
  );
}

function ProjectCard({ project, navigate }) {
  const action = getProjectAction(project);
  const href = getProjectHref(project);
  const isExternal = action.type === 'external';
  const actionLabel = action.label || (action.type === 'page' ? 'Read more' : '');
  const content = (
    <>
      <figure className="project-card-image">
        <img src={project.image} alt="" loading="lazy" />
      </figure>
      <div className="project-card-body">
        <h3>{project.title}</h3>
        {project.subtitle ? <p className="project-card-subtitle">{project.subtitle}</p> : null}
        <p>{project.summary}</p>
        {actionLabel ? (
          <span className="project-card-action">
            {actionLabel}
            {isExternal ? <ExternalLink size={15} /> : <ArrowUpRight size={15} />}
          </span>
        ) : null}
      </div>
    </>
  );

  if (!href) {
    return <article className="project-card is-static">{content}</article>;
  }

  return (
    <a
      className={`project-card ${isExternal ? 'is-external' : ''}`}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      onClick={isExternal ? undefined : (event) => navigate(event, href)}
    >
      {content}
    </a>
  );
}

function CvPanel({ title, children, id }) {
  return (
    <section className="cv-panel" id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function InfoTable({ rows }) {
  return (
    <div className="info-table">
      {rows.map(([label, value]) => (
        <div className="info-row" key={label}>
          <strong>{label}</strong>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
}

function CvTimeline({ items }) {
  return (
    <div className="cv-timeline">
      {items.map((item) => (
        <article
          className="cv-item"
          key={`${item.year}-${item.title || item.details?.join('-') || item.listItems?.join('-')}`}
        >
          <time>{item.year}</time>
          <div>
            {item.title ? <h3>{item.title}</h3> : null}
            {item.institution ? <p className="institution">{item.institution}</p> : null}
            {item.advisor ? <p className="advisor">{item.advisor}</p> : null}
            {item.details
              ? item.details.map((detail) => (
                  <p className="advisor detail" key={detail}>
                    {detail}
                  </p>
                ))
              : null}
            {item.listItems ? (
              <ul className="cv-list-items">
                {item.listItems.map((listItem) => (
                  <li key={listItem}>{listItem}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}


export default App;
