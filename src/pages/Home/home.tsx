import { ProductCard } from '../../components/ProductCard/Productcard';
import data from '../../data/data.json';

export const Home = () => {
    const featuredProducts = [
        { id: 1, image: 'https://placehold.co/400x300/C8E6C9/2E7D32?text=Maçãs+Frescas', title: 'Maçãs Frescas - Kg', price: 9.90, rating: 5 },
        { id: 2, image: 'https://placehold.co/400x300/B2EBF2/00BCD4?text=Leite+Integral', title: 'Leite Integral Longa Vida 1L', price: 5.50, rating: 4 },
        { id: 3, image: 'https://placehold.co/400x300/FFCCBC/FF5722?text=Pão+Francês', title: 'Pão Francês - Unidade', price: 1.20, rating: 4 },
        { id: 4, image: 'https://placehold.co/400x300/F0F4C3/8BC34A?text=Frango+Congelado', title: 'Frango Congelado Inteiro', price: 18.99, rating: 5 },
    ];

    const newArrivals = [
        { id: 5, image: 'https://placehold.co/400x300/FFF9C4/FFEB3B?text=Arroz+5kg', title: 'Arroz Branco Tipo 1 - 5kg', price: 25.00, rating: 5 },
        { id: 6, image: 'https://placehold.co/400x300/BBDEFB/2196F3?text=Café+Torrado', title: 'Café Torrado e Moído 500g', price: 15.75, rating: 4 },
        { id: 7, image: 'https://placehold.co/400x300/E1BEE7/9C27B0?text=Cerveja+Pilsen', title: 'Cerveja Pilsen Lata 350ml (Pack)', price: 32.00, rating: 5 },
        { id: 8, image: 'https://placehold.co/400x300/D7CCC8/795548?text=Detergente', title: 'Detergente Lava Louças 500ml', price: 3.80, rating: 4 },
    ];

    return (
        <main className="flex-grow container mx-auto px-4 py-8">
            
            <section className="bg-gradient-to-r from-[#232F3E] to-[#47576B] text-white rounded-lg shadow-lg p-8 mb-8 text-center"> 
                <h2 className="text-4xl font-bold mb-4">Sua Feira Fresca na Porta de Casa!</h2>
                <p className="text-xl mb-6">Encontre as melhores ofertas e a maior variedade de produtos.</p>
                <button className="bg-[#FF9900] text-[#232F3E] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#E68A00] transition-colors duration-300"> 
                    Começar a Comprar!
                </button>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#FF9900] pb-2">Explore Nossas Seções</h2> {/* Laranja vibrante para a borda */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/150x100/E8F5E9/4CAF50?text=Frutas+e+Vegetais" alt="Frutas e Vegetais" className="mx-auto mb-4 rounded-md" />
                        <h3 className="font-semibold text-lg text-gray-800">Frutas e Vegetais</h3>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/150x100/E3F2FD/2196F3?text=Laticínios" alt="Laticínios" className="mx-auto mb-4 rounded-md" />
                        <h3 className="font-semibold text-lg text-gray-800">Laticínios e Frios</h3>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/150x100/FFFDE7/FFC107?text=Padaria" alt="Padaria" className="mx-auto mb-4 rounded-md" />
                        <h3 className="font-semibold text-lg text-gray-800">Padaria</h3>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/150x100/FBE9E7/FF7043?text=Congelados" alt="Congelados" className="mx-auto mb-4 rounded-md" />
                        <h3 className="font-semibold text-lg text-gray-800">Congelados</h3>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#FF9900] pb-2">Ofertas da Semana</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#FF9900] pb-2">engeral</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.supermarket.products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            
            <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#FF9900] pb-2">Chegando Fresquinho</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {newArrivals.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Seção de Categorias (exemplo) */}
            
        </main>

    );
};
