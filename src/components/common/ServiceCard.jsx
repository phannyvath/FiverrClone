import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const ServiceCard = ({ service }) => {
  const {
    id,
    title,
    category,
    price,
    rating,
    reviewCount,
    deliveryTime,
    seller,
    image
  } = service;

  return (
    <Link to={`/services/${id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
        <div className="p-4">
          <div className="flex items-center mb-2">
            <img 
              src={seller.avatar} 
              alt={seller.name} 
              className="w-8 h-8 rounded-full mr-2" 
            />
            <div>
              <p className="text-sm font-medium">{seller.name}</p>
              <p className="text-xs text-gray-500">{seller.level}</p>
            </div>
          </div>
          <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-600">
            {title}
          </h3>
          <div className="flex items-center text-sm text-yellow-500 mb-2">
            <Star className="h-4 w-4 fill-current mr-1" />
            <span className="font-medium">{rating}</span>
            <span className="text-gray-500 ml-1">({reviewCount})</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <span className="text-xs text-gray-500">Delivery in {deliveryTime}</span>
            <div className="text-right">
              <p className="text-xs text-gray-500">Starting at</p>
              <p className="text-lg font-bold text-gray-800">${price}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;