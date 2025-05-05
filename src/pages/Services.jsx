import { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import ServiceCard from '../components/common/ServiceCard';

const Services = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    deliveryTime: '',
    rating: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for services - in a real app, this would come from an API
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
        avatar: 'https://via.placeholder.com/40',
        level: 'Level 2 Seller',
      },
      image: 'https://via.placeholder.com/300x200',
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
        avatar: 'https://via.placeholder.com/40',
        level: 'Top Rated Seller',
      },
      image: 'https://via.placeholder.com/300x200',
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
        avatar: 'https://via.placeholder.com/40',
        level: 'Level 1 Seller',
      },
      image: 'https://via.placeholder.com/300x200',
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
        avatar: 'https://via.placeholder.com/40',
        level: 'Level 2 Seller',
      },
      image: 'https://via.placeholder.com/300x200',
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
        avatar: 'https://via.placeholder.com/40',
        level: 'Level 1 Seller',
      },
      image: 'https://via.placeholder.com/300x200',
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
        avatar: 'https://via.placeholder.com/40',
        level: 'New Seller',
      },
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  // Categories for filter
  const categories = [
    'All Categories',
    'Graphics & Design',
    'Digital Marketing',
    'Writing & Translation',
    'Video & Animation',
    'Programming & Tech',
    'Data',
    'Business',
    'Lifestyle',
  ];

  // Price ranges for filter
  const priceRanges = [
    'Any Price',
    'Under $50',
    '$50 to $100',
    '$100 to $200',
    '$200 & Above',
  ];

  // Delivery times for filter
  const deliveryTimes = [
    'Any Delivery Time',
    'Express 24H',
    'Up to 3 days',
    'Up to 7 days',
    'Anytime',
  ];

  // Rating options for filter
  const ratings = [
    'Any Rating',
    '4.5 & up',
    '4.0 & up',
    '3.5 & up',
    '3.0 & up',
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Services</h1>
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search for services"
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <button
            onClick={toggleFilters}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 md:w-auto w-full justify-center"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {/* Filters Section */}
        {showFilters && (
          <div className="bg-white p-4 rounded-md shadow-sm mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                {priceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Delivery Time Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Time</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={filters.deliveryTime}
                onChange={(e) => handleFilterChange('deliveryTime', e.target.value)}
              >
                {deliveryTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={filters.rating}
                onChange={(e) => handleFilterChange('rating', e.target.value)}
              >
                {ratings.map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;