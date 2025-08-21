// Location data for different business types
export interface LocationData {
  slug: string;
  title: string;
  path: string;
  hero: {
    description: string;
    peachText: string;
    image?: string;
    pexelsId?: string;
  };
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  painPoints: Array<{
    title: string;
    point: string;
    icon: string;
  }>;
  customSolutions: Array<{
    title: string;
    description: string;
  }>;
  smartStore: {
    title: string;
    description: string;
    features: string[];
    image: string;
  };
  microMarket: {
    title: string;
    description: string;
    features: string[];
    image: string;
  };
  smartCoolers?: {
    title: string;
    description: string;
    features: string[];
    image: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const locationTypes = [
  {
    slug: 'office-buildings',
    title: 'Office Buildings',
    path: '/locations/office-buildings'
  },
  {
    slug: 'apartments-multi-family',
    title: 'Apartments & Multi-Family Housing',
    path: '/locations/apartments-multi-family'
  },
  {
    slug: 'hotels-motels',
    title: 'Hotels & Motels',
    path: '/locations/hotels-motels'
  },
  {
    slug: 'healthcare-facilities',
    title: 'Healthcare Facilities',
    path: '/locations/healthcare-facilities'
  },
  {
    slug: 'colleges-universities',
    title: 'Colleges & Universities',
    path: '/locations/colleges-universities'
  },
  {
    slug: 'high-schools',
    title: 'High Schools',
    path: '/locations/high-schools'
  },
  {
    slug: 'car-dealerships',
    title: 'Car Dealerships',
    path: '/locations/car-dealerships'
  },
  {
    slug: 'sports-fitness',
    title: 'Sports & Fitness',
    path: '/locations/sports-fitness'
  },
  {
    slug: 'warehouse-distribution',
    title: 'Warehouse & Distribution',
    path: '/locations/warehouse-distribution'
  },
  {
    slug: 'senior-living',
    title: 'Senior Living',
    path: '/locations/senior-living'
  },
  {
    slug: 'construction-sites',
    title: 'Construction Sites',
    path: '/locations/construction-sites'
  },
  {
    slug: 'high-traffic-locations',
    title: 'High-Traffic Locations',
    path: '/locations/high-traffic-locations'
  }
];

// Sample location data - you would expand this for each location type
const officeBuildings: LocationData = {
  slug: 'office-buildings',
  title: 'Office Buildings',
  path: '/locations/office-buildings',
  hero: {
    description: 'Transform your office building into a modern workplace destination with Smart Market Retail\'s comprehensive vending solutions.',
    peachText: 'Elevate Your Office Experience',
    pexelsId: '1170412'
  },
  benefits: {
    title: 'Benefits for Office Buildings',
    items: [
      {
        title: 'Increased Employee Satisfaction',
        description: 'Keep your team fueled and focused without needing to leave the workplace.',
        icon: 'Users'
      },
      {
        title: 'Modern Amenity',
        description: 'Attract and retain top talent with cutting-edge workplace conveniences.',
        icon: 'Star'
      },
      {
        title: 'Zero Maintenance',
        description: 'We handle all stocking, maintenance, and service at no cost to you.',
        icon: 'Settings'
      },
      {
        title: '24/7 Availability',
        description: 'Round-the-clock access to snacks, meals, and beverages for all shifts.',
        icon: 'Clock'
      }
    ]
  },
  painPoints: [
    {
      title: 'Long Lunch Lines',
      point: 'Employees waste time traveling to restaurants and waiting in lines.',
      icon: 'Clock'
    },
    {
      title: 'Limited Healthy Options',
      point: 'Nearby food options may not align with wellness goals.',
      icon: 'Frown'
    },
    {
      title: 'Productivity Loss',
      point: 'Extended lunch breaks reduce overall workplace productivity.',
      icon: 'TrendingDown'
    }
  ],
  customSolutions: [
    {
      title: 'Executive Floor Solutions',
      description: 'Premium Smart Stores for executive floors with gourmet options and sophisticated design.'
    },
    {
      title: 'Lobby Micro Markets',
      description: 'Impressive lobby installations that serve employees and visitors alike.'
    },
    {
      title: 'Breakroom Transformation',
      description: 'Complete breakroom makeovers with Micro Markets and coffee service.'
    }
  ],
  smartStore: {
    title: 'Smart Store for Offices',
    description: 'Perfect for high-traffic office environments, our Smart Stores provide instant access to snacks, beverages, and essentials with contactless payment options.',
    features: [
      'Contactless payment with Apple Pay, Google Pay, and credit cards',
      'Real-time inventory monitoring ensures products are always available',
      'Sleek design that enhances your office aesthetic',
      'Customizable product selection based on employee preferences'
    ],
    image: '/Smart Store 700 05.1_medium.webp'
  },
  microMarket: {
    title: 'Office Micro Markets',
    description: 'Transform your breakroom into a modern convenience store with fresh food, healthy options, and self-checkout convenience.',
    features: [
      'Fresh salads, sandwiches, and healthy meal options',
      'Open shopping experience with no barriers',
      'Self-checkout kiosks for quick and easy transactions',
      'Customizable layout to fit any breakroom space'
    ],
    image: '/Large Micro Market 15.1_medium.webp'
  },
  smartCoolers: {
    title: 'Smart Coolers for Offices',
    description: 'High-capacity cooling solutions perfect for busy office environments with grab-and-go convenience.',
    features: [
      'Highest capacity single unit for maximum variety',
      'Energy Star rated for efficient operation',
      'Computer vision technology for accurate transactions',
      'Perfect for corner installations and tight spaces'
    ],
    image: '/CoolSmart_AI_Solo_Center_medium.webp'
  },
  faq: [
    {
      question: 'How much space do you need for installation?',
      answer: 'Our solutions are flexible and can fit in spaces as small as a corner or as large as a dedicated breakroom. We work with your available space.'
    },
    {
      question: 'What are the costs involved?',
      answer: 'There are no upfront costs to your business. We provide, install, and maintain all equipment at no charge.'
    },
    {
      question: 'How do you handle maintenance?',
      answer: 'We provide full-service maintenance including restocking, cleaning, and repairs through remote monitoring and local service teams.'
    }
  ],
  seo: {
    title: 'Office Building Vending Solutions | Smart Market Retail',
    description: 'Enhance your office building with Smart Market Retail\'s modern vending solutions. Micro Markets, Smart Stores, and coffee service for Carroll & Baltimore County MD offices.',
    keywords: 'office building vending, workplace amenities, employee satisfaction, micro markets, smart stores, office coffee service'
  }
};

// Create a lookup map for easy access
const locationDataMap = new Map<string, LocationData>();
locationDataMap.set('office-buildings', officeBuildings);

export const getLocationBySlug = (slug: string | undefined): LocationData | undefined => {
  if (!slug) return undefined;
  return locationDataMap.get(slug);
};