export interface Town {
  name: string;
  slug: string;
  county: 'Carroll County' | 'Baltimore County';
  description: string;
  longDescription: string[];
  metaTitle: string;
  metaDescription: string;
  image: {
    url: string;
    alt: string;
  };
  zipCodes: string[];
  landmarks: string[];
  hyperlocalIntro: string;
  solutionScenarios: Array<{
    title: string;
    description: string;
    imageUrl: string;
  }>;
  localInsights: {
    title: string;
    content: string;
  };
  geoCoordinates: {
    latitude: number;
    longitude: number;
  };
}

export const carrollCountyTowns: Town[] = [
  {
    name: 'Westminster',
    slug: 'westminster',
    county: 'Carroll County',
    description: 'The county seat of Carroll County, Westminster is a vibrant college town home to McDaniel College. With a thriving downtown area, numerous businesses, and active community life, Westminster offers excellent opportunities for Smart Stores and Micro Markets in office buildings, educational facilities, and commercial spaces.',
    longDescription: [
      "As the county seat of Carroll County and home to McDaniel College, Westminster is a vibrant hub of activity. Smart Market Retail is proud to offer this dynamic community our most advanced unattended retail solutions, perfectly suited for its diverse mix of businesses, educational institutions, and public spaces.",
      "From the bustling downtown area to modern office parks, we provide tailored vending solutions that meet the demands of students, professionals, and residents alike. Our Smart Stores are perfect for high-traffic areas, while our Micro Markets can transform any breakroom into a perk that employees and tenants will love."
    ],
    metaTitle: 'Smart Vending & Micro Markets in Westminster, MD | Smart Market Retail',
    metaDescription: "Upgrade your Westminster, MD business or office with our modern vending machines and micro markets. Serving McDaniel College and local businesses. Free placement available.",
    image: {
      url: '/Main Street - Westminster_large.webp',
      alt: 'A bustling view of Main Street in Westminster, Maryland.'
    },
    zipCodes: ['21157', '21158'],
    landmarks: [
      'McDaniel College',
      'Wakefield Valley Park',
      'TownMall of Westminster',
      'Carroll County Farm Museum',
      'Carroll County Arts Council',
      'Carroll County Regional Airport',
      'Westminster National Golf Course',
      'Carroll County Agriculture Center',
      'Downtown Westminster Business District'
    ],
    hyperlocalIntro: "Westminster, as Carroll County's vibrant hub, offers unique opportunities for modern workplace convenience through our cutting-edge vending solutions.",
    solutionScenarios: [
      {
        title: "College Campus Solution",
        description: "Smart Stores in McDaniel College residence halls and student centers provide 24/7 access to healthy snacks and beverages for busy students.",
        imageUrl: "/Smart Store 700 10.1_medium.webp"
      },
      {
        title: "Convenience for Manufacturers",
        description: "Micro Markets in Knorr Brake Company, Strouse, and FR Conversions can offer fresh meals and premium coffee to fuel productivity in professional environments conveniently onsite.",
        imageUrl: "/Large Micro Market 15.1_medium.webp"
      },
      {
        title: "Healthcare Facility Support",
        description: "Micro Markets and Smart Coolers at Carroll Hospital Center can provide essential refreshments and meals for staff, patients, and visitors around the clock.",
        imageUrl: "/Small Micro Market 06.1_medium.webp"
      }
    ],
    localInsights: {
      title: "Westminster Business Climate",
      content: "With Carroll Hospital Center employing 1,000+ staff, Carroll County government as a major employer base, large scale manufacturing facilities just off of Airport Drive & Magna Way, destination Car Dealerships, and renowned higher education institutions like McDaniel College & Carroll Community College, drive Westminster's diverse economy and demands workplace amenities that boost employee satisfaction and retention across all sectors."
    },
    geoCoordinates: {
      latitude: 39.575187,
      longitude: -76.995985
    }
  }
  // Add other towns here...
];

export const baltimoreCountyTowns: Town[] = [
  {
    name: 'Owings Mills',
    slug: 'owings-mills',
    county: 'Baltimore County',
    description: 'A major suburban center with extensive office complexes, shopping centers, and business parks. Owings Mills\' concentration of corporate offices, healthcare facilities, and commercial developments makes it a prime location for our comprehensive Smart Store and Micro Market solutions.',
    longDescription: [
      "Owings Mills is a bustling corporate and commercial center in Baltimore County, home to major company headquarters and vibrant shopping destinations. Smart Market Retail meets the fast-paced demands of this area with high-capacity, tech-forward solutions.",
      "Our Micro Markets and Smart Stores are a perfect fit for large office buildings and corporate campuses, offering a wide variety of fresh food, snacks, and beverages to keep employees energized and satisfied throughout the day."
    ],
    metaTitle: 'Micro Markets for Owings Mills, MD Offices | Smart Market Retail',
    metaDescription: "Smart Market Retail provides high-tech Micro Markets and Smart Stores for corporate offices and business parks in Owings Mills, MD.",
    image: { url: '/Owings Mills Metro Center_medium.webp', alt: 'A corporate center in Owings Mills, Maryland.' },
    zipCodes: ['21117'],
    landmarks: [
      'Owings Mills Metro Centre', 
      'Foundry Row', 
      'T. Rowe Price', 
      'McDonogh School',
      'Irvine Nature Center',
      'Stevenson University',
      'Marriott Owings Mills Metro Centre',
      'CareFirst BlueCross BlueShield',
      'Len Stoler Automotive Group & Heritage | MileOne Autogroup'
    ],
    hyperlocalIntro: "Owings Mills' position as a corporate hub, enhanced by Foundry Row mixed-use development and Metro transit advantages for commuters, demands sophisticated vending solutions that meet high professional standards.",
    solutionScenarios: [
      {
        title: "Corporate Campus Excellence",
        description: "Large-scale Micro Markets in office complexes provide thousands of employees with fresh meals, premium coffee, and healthy snacks throughout the workday.",
        imageUrl: "/Large Micro Market 10.1_medium.webp"
      },
      {
        title: "University Community Service",
        description: "Smart Stores at Stevenson University offer students and faculty convenient access to study snacks, beverages, and quick meals between classes.",
        imageUrl: "/Smart Store 700 30.1_medium.webp"
      },
      {
        title: "Metro Transit Hub Support",
        description: "High-capacity vending at Metro Centre serves commuters with grab-and-go options for busy travel schedules.",
        imageUrl: "/Smart Store 700 40_medium.webp"
      }
    ],
    localInsights: {
      title: "Corporate Vending Leader",
      content: "Owings Mills' concentration of major employers like T. Rowe Price and CareFirst BlueCross BlueShield creates the largest corporate vending market in the region, with over 25,000 daily workers seeking convenient refreshment options."
    },
    geoCoordinates: {
      latitude: 39.412007,
      longitude: -76.778152
    }
  }
  // Add other Baltimore County towns here...
];

export const allTowns = [...carrollCountyTowns, ...baltimoreCountyTowns];

const townsBySlug = new Map(allTowns.map(town => [town.slug, town]));
export const getTownBySlug = (slug: string | undefined): Town | undefined => {
  if (!slug) return undefined;
  return townsBySlug.get(slug);
};