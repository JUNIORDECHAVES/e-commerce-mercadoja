import { Star } from "lucide-react";
type ProductProps = {
    id: number;
    image: string;
    title: string;
    price: number;
    rating: number;
    category?: string;
};

// Componente do Card de Produto
// O componente agora espera um único objeto ProductProps
export const ProductCard = ({ product }: { product: ProductProps }) => {
    return (
        // Container principal do card com estilos de layout, sombra e transição
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
            {/* Imagem do Produto */}
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
                {/* Título do Produto */}
                <h3
                    className="font-semibold text-lg text-gray-800 mb-2 truncate"
                    title={product.title}
                >
                    {product.title}
                </h3>
                {/* Avaliação (Estrelas) */}
                <div className="flex items-center mb-2">
                    {/* Renderização dinâmica das estrelas com base na classificação (rating) */}
                    {Array.from({ length: 5 }, (_, i) => (
                        <Star
                            key={i}
                            size={16}
                            className={
                                i < product.rating
                                    ? 'text-[#FF9900] fill-current' // Laranja vibrante para estrelas preenchidas
                                    : 'text-gray-300' // Cinza claro para estrelas vazias
                            }
                        />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                        ({product.rating}.0)
                    </span>
                </div>
                {/* Preço do Produto */}
                <p className="text-xl font-bold text-gray-900 mb-4">
                    R$ {product.price.toFixed(2)}
                </p>
                {/* Botão Adicionar ao Carrinho */}
                <button className="mt-auto w-full bg-[#FF9900] text-[#232F3E] font-semibold py-2 px-4 rounded-md hover:bg-[#E68A00] transition-colors duration-200">
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    );
};