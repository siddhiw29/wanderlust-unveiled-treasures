
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import CuisineCard from "@/components/CuisineCard";

// Mock data for cuisines
const localCuisines = [
  {
    name: 'Hyderabadi Biryani',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    description: 'A royal dish with aromatic Basmati rice layered with marinated meat, herbs, and spices, slow-cooked to perfection in the distinctive dum style.',
    type: 'Main Course'
  },
  {
    name: 'Chole Bhature',
    image: 'https://images.unsplash.com/photo-1626777553635-be344d710a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description: 'A popular Punjabi dish featuring spicy chickpea curry served with deep-fried bread, accompanied by pickles and onions.',
    type: 'Street Food'
  }
];

const CuisineSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="section-heading">Indian Culinary Delights</h2>
          <Link to="/category/local-cuisine" className="text-primary flex items-center gap-1 hover:underline text-sm">
            View all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="space-y-6">
          {localCuisines.map((cuisine, index) => (
            <CuisineCard
              key={index}
              name={cuisine.name}
              image={cuisine.image}
              description={cuisine.description}
              type={cuisine.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuisineSection;
