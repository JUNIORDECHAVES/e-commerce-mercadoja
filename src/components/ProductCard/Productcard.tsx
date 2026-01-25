import { Star } from "lucide-react";

type ProductProps = {
    id: number;
    image: string;
    name: string;
    price: number;
    rating: number;
    category?: string;
};

export const ProductCard = ({ product }: { product: ProductProps }) => {
    return (
        <div className="bg-white border-2 border-solid border-[#e086004e] rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#e7c48eb8] flex flex-col p-5">
            
            <img
                src={product.image}
                alt={product.name}
                className="w-50 h-50 mx-auto rounded-sm "
            />
            <div className="p-4 flex flex-col flex-grow text-center">
                
                <h3
                    className="font-semibold text-lg text-orange-500 mb-2 truncate"
                    title={product.name}
                >
                    {product.name}
                </h3>
                
                <div className="flex justify-center items-center mb-2">
                    
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
                        ({product.rating})
                    </span>
                </div>
                
                <p className="text-xl font-bold text-gray-700 mb-4">
                    R$ {product.price.toFixed(2)}
                </p>
                
                
            </div>
        </div>
    );
};