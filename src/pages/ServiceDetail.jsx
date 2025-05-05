import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceCard from '../components/common/ServiceCard';

const ServiceDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('basic');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock service data - in a real app, this would be fetched from an API
  const service = {
    id: parseInt(id),
    title: 'I will design a professional logo for your business',
    description: 'I will create a modern, unique, and professional logo design for your business or brand. My designs are creative, memorable, and tailored to your specific needs. I use the latest design techniques and tools to ensure high-quality results that will make your brand stand out from the competition.',
    category: 'Graphics & Design',
    subcategory: 'Logo Design',
    tags: ['logo', 'branding', 'business', 'design'],
    images: [
      'https://via.placeholder.com/800x500?text=Logo+Design+1',
      'https://via.placeholder.com/800x500?text=Logo+Design+2',
      'https://via.placeholder.com/800x500?text=Logo+Design+3',
      'https://via.placeholder.com/800x500?text=Logo+Design+4',
    ],
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
    seller: {
      id: 101,
      name: 'Alex Johnson',
      avatar: 'https://via.placeholder.com/100',
      level: 'Level 2 Seller',
      rating: 4.9,
      reviewCount: 156,
      responseTime: '1 hour',
      lastDelivery: 'about 2 hours ago',
      memberSince: 'Jun 2020',
      location: 'United States',
      description: 'Professional graphic designer with over 5 years of experience in logo design and branding. I specialize in creating unique and memorable logos that help businesses stand out in their industry.',
      languages: ['English', 'Spanish'],
    },
    reviews: [
      {
        id: 1,
        user: {
          name: 'John Smith',
          avatar: 'https://via.placeholder.com/40',
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
          avatar: 'https://via.placeholder.com/40',
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
          avatar: 'https://via.placeholder.com/40',
          country: 'Canada',
        },
        rating: 5,
        date: '2 months ago',
        comment: 'Amazing service! Fast delivery and excellent quality. I highly recommend Alex for any logo design needs.',
      },
    ],
  };

  // Mock related services
  const relatedServices = [
    {
      id: 7,
      title: 'I will design a modern business card for your brand',
      category: 'Graphics & Design',
      price: 35,
      rating: 4.8,
      reviewCount: 92,
      deliveryTime: '1 day',
      seller: {
        name: 'Alex Johnson',
        avatar: 'https://via.placeholder.com/40',
        level: 'Level 2 Seller',
      },
      image: 'https://via.placeholder.com/300x200?text=Business+Card',
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
        name: 'Sarah Williams',
        avatar: 'https://via.placeholder.com/40',
        level: 'Top Rated Seller',
      },
      image: 'https://via.placeholder.com/300x200?text=Brand+Identity',
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
        name: 'Michael Chen',
        avatar: 'https://via.placeholder.com/40',
        level: 'Level 1 Seller',
      },
      image: 'https://via.placeholder.com/300x200?text=T-Shirt+Design',
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === service.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? service.images.length - 1 : prevIndex - 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex text-sm">
          <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link to="/services" className="text-gray-500 hover:text-primary-600">Services</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link to={`/services?category=${service.category.toLowerCase().replace(' & ', '-')}`} className="text-gray-500 hover:text-primary-600">{service.category}</Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-900">{service.title.substring(0, 30)}...</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Service Details */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h1>
          
          {/* Seller Brief Info */}
          <div className="flex items-center mb-6">
            <img 
              src={service.seller.avatar} 
              alt={service.seller.name} 
              className="w-10 h-10 rounded-full mr-3" 
            />
            <div>
              <p className="font-medium">{service.seller.name}</p>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {renderStars(service.seller.rating)}
                </div>
                <span className="text-sm text-gray-600">{service.seller.rating} ({service.seller.reviewCount})</span>
              </div>
            </div>
          </div>
          
          {/* Service Images */}
          <div className="mb-8">
            <div className="relative rounded-lg overflow-hidden h-80 mb-2">
              <img 
                src={service.images[currentImageIndex]} 
                alt={`${service.title} - Image ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover" 
              />
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {service.images.map((image, index) => (
                <button 
                  key={index} 
                  onClick={() => selectImage(index)}
                  className={`h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border-2 ${currentImageIndex === index ? 'border-primary-600' : 'border-transparent'}`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Service Description */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">About This Service</h2>
            <p className="text-gray-700 whitespace-pre-line">{service.description}</p>
          </div>
          
          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Reviews */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Reviews ({service.reviews.length})</h2>
            <div className="space-y-6">
              {service.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6">
                  <div className="flex items-start">
                    <img 
                      src={review.user.avatar} 
                      alt={review.user.name} 
                      className="w-10 h-10 rounded-full mr-3" 
                    />
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium mr-2">{review.user.name}</p>
                        <span className="text-sm text-gray-500">{review.user.country}</span>
                      </div>
                      <div className="flex items-center mt-1 mb-2">
                        <div className="flex mr-2">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Column - Pricing Packages */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              {/* Package Tabs */}
              <div className="flex border-b border-gray-200">
                {Object.keys(service.packages).map((pkg) => (
                  <button
                    key={pkg}
                    className={`flex-1 py-3 text-center font-medium ${activeTab === pkg ? 'bg-gray-50 text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    onClick={() => setActiveTab(pkg)}
                  >
                    {service.packages[pkg].name}
                  </button>
                ))}
              </div>
              
              {/* Active Package Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">${service.packages[activeTab].price}</h3>
                  <p className="text-gray-700">{service.packages[activeTab].description}</p>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{service.packages[activeTab].deliveryTime} delivery</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  {service.packages[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors">
                  Continue (${service.packages[activeTab].price})
                </button>
              </div>
            </div>
            
            {/* Seller Contact */}
            <div className="mt-6 bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <button className="w-full py-2.5 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors">
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Services */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;