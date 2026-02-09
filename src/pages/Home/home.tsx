import { Link } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard/Productcard';
import data from '../../data/data.json';
import { CategoryCard } from '../../components/CategoryCard/categoryCard';

export const Home = () => {

    const products = data.products;
    const weekOffersProducts = products.filter((product) => product.discount > 0);
    const productsnew = products.filter((product) => product.lastRenewalDate > '2025-01-17');

    const Categories = data.categories;

    return (
        <main className="flex-grow container mx-auto px-4 py-8">

            <section className="bg-gradient-to-r from-[#232F3E] to-[#47576B] text-white rounded-lg shadow-lg p-8 mb-8 text-center">
                <h2 className="text-4xl font-bold mb-4">Sua Feira Fresca na Porta de Casa!</h2>
                <p className="text-xl mb-6">Encontre as melhores ofertas e a maior variedade de produtos.</p>
                <button className="bg-[#FF9900] text-[#232F3E] font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                    Começe a Comprar!
                </button>
            </section>

            <section className="mb-8 block md:hidden ">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#FF9900] pb-2">Explore Nossas Seções</h2> {/* Laranja vibrante para a borda */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {
                        Categories.map((category) => (
                            <Link to={`/category/${category.name}`} key={category.id}>
                                <CategoryCard category={category} />
                            </Link>
                        ))
                    }
                    
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#FF9900] pb-2">Ofertas da Semana</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {weekOffersProducts.map(product => (
                        <Link key={product.id}  to={`/product/${product.id}`}>
                            <ProductCard  product={product  } />
                        </Link>
                    )).slice(0, 8)
                    }
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#FF9900] pb-2">engeral</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <Link key={product.id}  to={`/product/${product.id}`}>
                            <ProductCard  product={product  } />
                        </Link>
                    ))}
                </div>
            </section>


            <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#FF9900] pb-2">Chegando Fresquinho</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {productsnew.map(product => (
                        <Link key={product.id}  to={`/product/${product.id}`}>
                            <ProductCard  product={product  } />
                        </Link>
                    )).slice(0, 8)
                    }
                </div>
            </section>
        </main>

    );
};
