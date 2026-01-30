type CategoryCardProps = {
    category: {
        id: number;
        category: string;
    };
};
export const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
        <button
            className="group bg-white rounded-xl shadow-sm p-6 text-center 
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300 ease-in-out
                border border-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
            <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-50 aspect-video flex items-center justify-center">
                <img
                    src={`https://placehold.co/300x200/FFFDE7/FFC107?text=${category.category}`}
                    alt={`Explorar produtos da categoria ${category.category}`}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                />
            </div>
            <h3 className="font-bold text-lg text-gray-800 group-hover:text-amber-600 transition-colors">
                {category.category}
            </h3>
        </button>
    );
};