const defaultPackages = {
  basic: {
    name: 'Basic',
    description: 'Basic package',
    price: 30,
    deliveryTime: '2 days',
    revisions: 1,
    features: ['Feature 1', 'Feature 2'],
  },
  standard: {
    name: 'Standard',
    description: 'Standard package',
    price: 60,
    deliveryTime: '4 days',
    revisions: 2,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  premium: {
    name: 'Premium',
    description: 'Premium package',
    price: 100,
    deliveryTime: '7 days',
    revisions: 'Unlimited',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
};

const defaultImages = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=500&fit=crop',
];

const services = [
  {
    id: 1,
    title: 'I will design a professional logo for your business',
    category: 'Graphics & Design',
    price: 50,
    rating: 4.9,
    reviewCount: 156,
    deliveryTime: '2 days',
    seller: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop',
      level: 'Level 2 Seller',
    },
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=200&fit=crop',
    description: 'I will create a modern, unique, and professional logo design for your business or brand. My designs are creative, memorable, and tailored to your specific needs. I use the latest design techniques and tools to ensure high-quality results that will make your brand stand out from the competition.',
    tags: ['logo', 'branding', 'business', 'design'],
    packages: {
      basic: {
        name: 'Basic',
        description: 'One concept logo design with minimal revisions',
        price: 50,
        deliveryTime: '2 days',
        revisions: 1,
        features: [
          'Logo in JPG format',
          'One concept',
          'Logo transparency',
          'Color options',
        ],
      },
      standard: {
        name: 'Standard',
        description: 'Three concept logo designs with more revisions',
        price: 100,
        deliveryTime: '3 days',
        revisions: 3,
        features: [
          'Logo in JPG & PNG formats',
          'Three concepts',
          'Logo transparency',
          'Color options',
          'Vector file',
          'Source file',
        ],
      },
      premium: {
        name: 'Premium',
        description: 'Five concept logo designs with unlimited revisions',
        price: 150,
        deliveryTime: '5 days',
        revisions: 'Unlimited',
        features: [
          'Logo in all formats',
          'Five concepts',
          'Logo transparency',
          'Color options',
          'Vector file',
          'Source file',
          'Social media kit',
          'Stationery design',
        ],
      },
    },
    reviews: [
      {
        id: 1,
        user: {
          name: 'John Smith',
          avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&fit=crop',
          country: 'United Kingdom',
        },
        rating: 5,
        date: '2 weeks ago',
        comment: 'Excellent work! Alex delivered exactly what I was looking for. The logo is perfect for my business and the communication was great throughout the process.',
      },
      {
        id: 2,
        user: {
          name: 'Maria Garcia',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
          country: 'Spain',
        },
        rating: 4,
        date: '1 month ago',
        comment: 'Good work overall. The design needed a few revisions but Alex was patient and made all the changes I requested. Happy with the final result.',
      },
      {
        id: 3,
        user: {
          name: 'Robert Chen',
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop',
          country: 'Canada',
        },
        rating: 5,
        date: '2 months ago',
        comment: 'Amazing service! Fast delivery and excellent quality. I highly recommend Alex for any logo design needs.',
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&h=500&fit=crop',
    ],
  },
  {
    id: 2,
    title: 'I will develop a responsive website using React',
    category: 'Programming & Tech',
    price: 120,
    rating: 4.8,
    reviewCount: 89,
    deliveryTime: '5 days',
    seller: {
      name: 'Sarah Williams',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
      level: 'Top Rated Seller',
    },
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
    description: 'I will build a modern, fast, and responsive website using React. Clean code, best practices, and pixel-perfect design guaranteed.',
    tags: ['react', 'web development', 'frontend', 'responsive'],
    packages: {
      basic: {
        name: 'Basic',
        description: 'Landing page with basic features',
        price: 120,
        deliveryTime: '5 days',
        revisions: 2,
        features: [
          '1 page',
          'Responsive design',
          'Basic SEO',
        ],
      },
      standard: {
        name: 'Standard',
        description: 'Multi-page website',
        price: 200,
        deliveryTime: '7 days',
        revisions: 4,
        features: [
          'Up to 5 pages',
          'Responsive design',
          'SEO optimized',
          'Contact form',
        ],
      },
      premium: {
        name: 'Premium',
        description: 'Full-featured website with CMS',
        price: 350,
        deliveryTime: '14 days',
        revisions: 'Unlimited',
        features: [
          'Up to 10 pages',
          'CMS integration',
          'Advanced SEO',
          'Custom animations',
        ],
      },
    },
    reviews: [
      {
        id: 1,
        user: {
          name: 'Emily Rodriguez',
          avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=40&h=40&fit=crop',
          country: 'USA',
        },
        rating: 5,
        date: '1 week ago',
        comment: 'Sarah is a React wizard! My site looks amazing and works perfectly on all devices.',
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=500&fit=crop',
    ],
  },
  {
    id: 3,
    title: 'I will create engaging social media content',
    category: 'Digital Marketing',
    price: 75,
    rating: 4.7,
    reviewCount: 112,
    deliveryTime: '3 days',
    seller: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&fit=crop',
      level: 'Level 1 Seller',
    },
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop',
    description: 'Boost your brand with creative and engaging social media content tailored to your audience.',
    tags: ['social media', 'content', 'marketing'],
    packages: {},
    reviews: [],
    images: [],
  },
  {
    id: 4,
    title: 'I will write SEO-optimized blog articles',
    category: 'Writing & Translation',
    price: 45,
    rating: 4.9,
    reviewCount: 203,
    deliveryTime: '2 days',
    seller: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=40&h=40&fit=crop',
      level: 'Level 2 Seller',
    },
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=300&h=200&fit=crop',
    description: 'SEO-optimized, well-researched blog articles to boost your website ranking and engagement.',
    tags: ['blog', 'SEO', 'writing'],
    packages: {},
    reviews: [],
    images: [],
  },
  {
    id: 5,
    title: 'I will create a professional video intro',
    category: 'Video & Animation',
    price: 85,
    rating: 4.8,
    reviewCount: 78,
    deliveryTime: '4 days',
    seller: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=40&h=40&fit=crop',
      level: 'Level 1 Seller',
    },
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=300&h=200&fit=crop',
    description: 'Eye-catching video intros for your YouTube channel or business presentations.',
    tags: ['video', 'intro', 'animation'],
    packages: {},
    reviews: [],
    images: [],
  },
  {
    id: 6,
    title: 'I will do data analysis and visualization',
    category: 'Data',
    price: 95,
    rating: 4.7,
    reviewCount: 64,
    deliveryTime: '3 days',
    seller: {
      name: 'Jessica Lee',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop',
      level: 'New Seller',
    },
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=300&h=200&fit=crop',
    description: 'Get insights from your data with professional analysis and beautiful visualizations.',
    tags: ['data', 'analysis', 'visualization'],
    packages: {},
    reviews: [],
    images: [],
  },
  {
    id: 7,
    title: 'I will design a modern business card for your brand',
    category: 'Graphics & Design',
    price: 35,
    rating: 4.8,
    reviewCount: 92,
    deliveryTime: '1 day',
    seller: {
      name: 'Olivia Brown',
      avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=40&h=40&fit=crop',
      level: 'Level 2 Seller',
    },
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=300&h=200&fit=crop',
    description: 'Custom business card designs that make a lasting impression.',
    tags: ['business card', 'design'],
    packages: {},
    reviews: [],
    images: [],
  },
  {
    id: 8,
    title: 'I will create a complete brand identity package',
    category: 'Graphics & Design',
    price: 200,
    rating: 4.9,
    reviewCount: 45,
    deliveryTime: '7 days',
    seller: {
      name: 'Sophia Turner',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=40&h=40&fit=crop',
      level: 'Top Rated Seller',
    },
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=300&h=200&fit=crop',
    description: 'Full brand identity design including logo, business card, and social media kit.',
    tags: ['brand', 'identity', 'logo'],
    packages: {},
    reviews: [],
    images: [],
  },
  {
    id: 9,
    title: 'I will design a custom t-shirt with your logo',
    category: 'Graphics & Design',
    price: 60,
    rating: 4.7,
    reviewCount: 38,
    deliveryTime: '3 days',
    seller: {
      name: 'Liam Scott',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop',
      level: 'Level 1 Seller',
    },
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=300&h=200&fit=crop',
    description: 'Unique t-shirt designs featuring your logo or artwork.',
    tags: ['t-shirt', 'design', 'logo'],
    packages: {},
    reviews: [],
    images: [],
  },
  {
    id: 10,
    title: 'I will translate your document to Spanish',
    category: 'Writing & Translation',
    price: 30,
    rating: 4.9,
    reviewCount: 120,
    deliveryTime: '2 days',
    seller: {
      name: 'Carlos Martinez',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=40&h=40&fit=crop',
      level: 'Level 2 Seller',
    },
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=300&h=200&fit=crop',
    description: 'Professional Spanish translation for your documents, websites, and more.',
    tags: ['translation', 'spanish', 'writing'],
    packages: {},
    reviews: [],
    images: [],
  },
].map((service, idx) => {
  if (idx < 2) return service; // keep first two as is
  return {
    ...service,
    packages: service.packages && Object.keys(service.packages).length ? service.packages : defaultPackages,
    images: service.images && service.images.length ? service.images : defaultImages,
    reviews: Array.isArray(service.reviews) ? service.reviews : [],
  };
});

export default services; 