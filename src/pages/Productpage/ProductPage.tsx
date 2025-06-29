import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { memo, useEffect, useState } from "react";

interface ProductProps {
    id: number;
    images: string[];
    title: string;
    price: number;
    rating: number;
    description: string;
    weight: string;
    availability: string;
}

const ProductPage = memo(() => {
    const product: ProductProps = {
        id: 1,
        images: [
            'https://placehold.co/600x400/C8E6C9/2E7D32?text=Maçãs+Frescas+1',
            'https://placehold.co/600x400/B2EBF2/00BCD4?text=Maçãs+Frescas+2',
            'https://placehold.co/600x400/FFCCBC/FF5722?text=Maçãs+Frescas+3',
        ],
        title: 'Maçãs Frescas - Pacote 1kg',
        price: 9.90,
        rating: 5,
        description: 'Maçãs Gala frescas e crocantes, colhidas na estação. Perfeitas para lanches saudáveis, sucos ou para complementar suas receitas favoritas. Embalagem com aproximadamente 1kg. Ricas em vitaminas e fibras, ideais para o consumo diário.',
        weight: '1 kg',
        availability: 'Em estoque',
    };

    const [quantity, setQuantity] = useState(1); // Estado para controlar a quantidade
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para o índice da imagem atual no slider

    const handleQuantityChange = (type: 'increase' | 'decrease') => {
        if (type === 'increase') {
            setQuantity(prevQuantity => prevQuantity + 1);
        } else if (type === 'decrease' && quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
    };

    const goToNextImage = () => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Efeito para o slider automático
    useEffect(() => {
        if (product.images.length > 1) { // Só ativa o slider se houver mais de uma imagem
            const interval = setInterval(() => {
                goToNextImage();
            }, 2000); // Mudar a imagem a cada 2 segundos

            return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
        }
    }, [currentImageIndex, product.images.length]);

    return (
        <main className="flex-grow container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-start md:space-x-8">
                {/* Coluna do Slider de Imagens do Produto */}
                <div className="w-full md:w-1/2 flex flex-col items-center mb-6 md:mb-0">
                    <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-md">
                        <img
                            src={product.images[currentImageIndex]}
                            alt={`${product.title} - ${currentImageIndex + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform" /* Adicionado smooth transition */
                        />
                        {/* Botões de navegação do slider */}
                        {product.images.length > 1 && (
                            <>
                                <button
                                    onClick={goToPreviousImage}
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-md hover:bg-opacity-75 transition-colors duration-200"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={goToNextImage}
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-md hover:bg-opacity-75 transition-colors duration-200"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}
                    </div>
                    {/* Indicadores de slide (pontos) */}
                    {product.images.length > 1 && (
                        <div className="flex justify-center space-x-2 mt-4">
                            {product.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-[#FF9900]' : 'bg-gray-400'} transition-colors duration-200`}
                                ></button>
                            ))}
                        </div>
                    )}

                    
                </div>

                {/* Coluna dos Detalhes do Produto */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>

                    {/* Avaliação */}
                    <div className="flex items-center mb-4">
                        {Array.from({ length: 5 }, (_, i) => (
                            <Star
                                key={i}
                                size={20}
                                className={
                                    i < product.rating
                                        ? 'text-[#FF9900] fill-current'
                                        : 'text-gray-300'
                                }
                            />
                        ))}
                        <span className="ml-2 text-gray-600 text-lg">({product.rating}.0 avaliações)</span>
                    </div>

                    {/* Preço */}
                    <p className="text-4xl font-bold text-[#232F3E] mb-6">R$ {product.price.toFixed(2)}</p>

                    {/* Descrição */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                        {product.description}
                    </p>

                    {/* Detalhes Adicionais */}
                    <div className="mb-6 space-y-2 text-gray-700">
                        <p><span className="font-semibold">Peso/Volume:</span> {product.weight}</p>
                        <p><span className="font-semibold">Disponibilidade:</span> <span className="text-green-600">{product.availability}</span></p>
                    </div>

                    {/* Seletor de Quantidade */}
                    <div className="flex items-center mb-6 space-x-4">
                        <span className="text-gray-800 font-semibold">Quantidade:</span>
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                                onClick={() => handleQuantityChange('decrease')}
                                className="p-2 text-gray-600 hover:bg-gray-100 rounded-l-md transition-colors duration-200"
                            >
                                <Minus size={20} />
                            </button>
                            <span className="px-4 py-2 text-lg font-medium text-gray-800">{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange('increase')}
                                className="p-2 text-gray-600 hover:bg-gray-100 rounded-r-md transition-colors duration-200"
                            >
                                <Plus size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Novo Botão: Comprar Agora */}
                    <button className="w-full bg-[#E68A00] text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-[#FF9900] transition-colors duration-200 text-lg mb-4 flex items-center justify-center space-x-2">
                        <span>Comprar Agora</span>
                    </button>

                    {/* Botão Adicionar ao Carrinho */}
                    <button className="w-full bg-[#FF9900] text-[#232F3E] font-bold py-3 px-6 rounded-md shadow-lg hover:bg-[#E68A00] transition-colors duration-200 text-lg flex items-center justify-center space-x-2">
                        <ShoppingCart size={24} />
                        <span>Adicionar ao Carrinho</span>
                    </button>
                </div>
            </div>
        </main>
    )
}
)
export default ProductPage;