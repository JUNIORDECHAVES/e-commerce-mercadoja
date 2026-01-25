import { Link } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard/Productcard';
import data from '../../data/data.json';

export const Home = () => {

    const products = data.products;
    const weekOffersProducts = products.filter((product) => product.discount > 0);
    const productsnew = products.filter((product) => product.lastRenewalDate > '2025-01-17');



    return (
        <main className="flex-grow container mx-auto px-4 py-8">

            <section className="bg-gradient-to-r from-[#232F3E] to-[#47576B] text-white rounded-lg shadow-lg p-8 mb-8 text-center">
                <h2 className="text-4xl font-bold mb-4">Sua Feira Fresca na Porta de Casa!</h2>
                <p className="text-xl mb-6">Encontre as melhores ofertas e a maior variedade de produtos.</p>
                <button className="bg-[#FF9900] text-[#232F3E] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#E68A00] transition-colors duration-300">
                    Começar a Comprar!
                </button>
            </section>

            <section className="mb-8 block md:hidden ">
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
                        <h3 className="font-semibold text-lg text-gray-800">Padaria e Confeitaria</h3>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/150x100/FBE9E7/FF7043?text=Carnes e Aves" alt="Congelados" className="mx-auto mb-4 rounded-md" />
                        <h3 className="font-semibold text-lg text-gray-800">Carnes e Aves</h3>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/150x100/FFFDE7/FFEB3B?text=Bebidas" alt="Congelados" className="mx-auto mb-4 rounded-md" />
                        <h3 className="font-semibold text-lg text-gray-800">Bebidas</h3>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/150x100/f2cfff/9c2aff?text=Limpeza" alt="Congelados" className="mx-auto mb-4 rounded-md" />
                        <h3 className="font-semibold text-lg text-gray-800">Limpeza</h3>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#FF9900] pb-2">Ofertas da Semana</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {weekOffersProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    )).slice(0, 8)
                    }
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#FF9900] pb-2">engeral</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <Link key={product.id}  to={`/product/${product.id}`}>
                            <ProductCard  product={product} />
                        </Link>
                    ))}
                </div>
            </section>


            <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#FF9900] pb-2">Chegando Fresquinho</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {productsnew.map(product => (
                        <ProductCard key={product.id} product={product} />
                    )).slice(0, 8)
                    }
                </div>
            </section>
        </main>

    );
};
