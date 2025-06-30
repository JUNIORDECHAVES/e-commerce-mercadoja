import { Star } from "lucide-react";

type ProductProps = {
    id: number;
    image: string;
    title: string;
    price: number;
    rating: number;
    category?: string;
};

export const ProductCard = ({ product }: { product: ProductProps }) => {
    return (
        <div className="bg-white border-2 border-solid border-[#e086004e] rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#e7c48eb8] flex flex-col">
            
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
                
                <h3
                    className="font-semibold text-lg text-gray-800 mb-2 truncate"
                    title={product.title}
                >
                    {product.title}
                </h3>
                
                <div className="flex items-center mb-2">
                    
                    {Array.from({ length: 5 }, (_, i) => (
                        <Star
                            key={i}
                            size={16}
                            className={
                                i < product.rating
                                    ? 'text-[#FF9900] fill-current' 
                                    : 'text-gray-300' 
                            }
                        />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                        ({product.rating}.0)
                    </span>
                </div>
                
                <p className="text-xl font-bold text-gray-900 mb-4">
                    R$ {product.price.toFixed(2)}
                </p>
                
                
            </div>
        </div>
    );
};