import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import { useCartItems } from "../../contexts/userCarItens";

// interface ProductProps {
//     id: number;
//     images: string[];
//     title: string;
//     price: number;
//     rating: number;
//     description: string;
//     weight: string;
//     availability: string;
// }

const ProductPage = memo(() => {
    const { id } = useParams()

    const itemId = data.products.find((item) => item.id === Number(id));
    const imageArray = [itemId?.image];

    const { setCartItems, cartItems } = useCartItems();

const handleAddCart = () => {
    if (itemId && cartItems.find(item => item.id === itemId.id)) {
        const existingItem = cartItems.find(item => item.id === itemId.id);
        if (existingItem) {
            setCartItems((prevItems) =>{
                return prevItems.map((item) => {
                    return item.id === existingItem.id ? {...item, quantity: quantity} : item;
                })
            })
        }
        return alert("Produto já adicionado ao carrinho, aumente a quantidade!");
    }

    if (!itemId) {
    console.error("Produto não encontrado!");
    return;
}


    setCartItems((prevItems) => {
        return [
            ...prevItems,
            {
                id: itemId.id,
                title: itemId.name,
                price: itemId.price,
                quantity: quantity,
                image: itemId.image || 'https://placehold.co/400x300/D7CCC8/795548?text=Imagem+Indisponível',
            },
        ];
    });
};



    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleQuantityChange = (type: 'increase' | 'decrease') => {
        if (type === 'increase') {
            setQuantity(prevQuantity => prevQuantity + 1);
        } else if (type === 'decrease' && quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
        );
    };

    const goToNextImage = () => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        if (imageArray.length > 1) {
            const interval = setInterval(() => {
                goToNextImage();
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [currentImageIndex, imageArray.length]);

    if (!itemId) {
        return <div className="container mx-auto px-4 py-8">Produto não encontrado.</div>;
    }

    return (
        <main className="flex-grow container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-start md:space-x-8">
                <div className="w-full md:w-1/2 flex flex-col items-center mb-6 md:mb-0">
                    <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-md">
                        <img
                            src={imageArray[currentImageIndex]}
                            alt={`${itemId.name} - ${currentImageIndex + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform" /* Adicionado smooth transition */
                        />

                        {imageArray.length > 1 && (
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

                    {imageArray.length > 1 && (
                        <div className="flex justify-center space-x-2 mt-4">
                            {imageArray.map((_, index) => (
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
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{itemId.name}</h1>

                    {/* Avaliação */}
                    <div className="flex items-center mb-4">
                        {Array.from({ length: 5 }, (_, i) => (
                            <Star
                                key={i}
                                size={20}
                                className={
                                    i < itemId.rating
                                        ? 'text-[#FF9900] fill-current'
                                        : 'text-gray-300'
                                }
                            />
                        ))}
                        <span className="ml-2 text-gray-600 text-lg">({itemId.rating} avaliações)</span>
                    </div>

                    {/* Preço */}
                    <p className="text-4xl font-bold text-[#232F3E] mb-6">R$ {itemId.price.toFixed(2)}</p>

                    {/* Descrição */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                        {itemId.details}
                    </p>

                    {/* Detalhes Adicionais */}
                    <div className="mb-6 space-y-2 text-gray-700">
                        <p><span className="font-semibold">Peso/Volume:</span> {itemId.weight}</p>
                        <p><span className="font-semibold">Disponibilidade:</span> <span className={itemId.available ? 'text-green-500' : 'text-red-500'}>{itemId.available ? 'Disponível' : 'Indisponível'}</span></p>
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

                    <button className="cursor-pointer w-full bg-[#E68A00] text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-[#FF9900] transition-colors duration-200 text-lg mb-4 flex items-center justify-center space-x-2">
                        <span>Comprar Agora</span>
                    </button>

                    <button className="cursor-pointer w-full bg-[#FF9900] text-[#232F3E] font-bold py-3 px-6 rounded-md shadow-lg hover:bg-[#E68A00] transition-colors duration-200 text-lg flex items-center justify-center space-x-2" onClick={handleAddCart}>
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