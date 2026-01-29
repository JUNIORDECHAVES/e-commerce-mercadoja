import { Link, useParams } from "react-router-dom";
import { products } from "../../data/data.json"

import { ProductCard } from "../../components/ProductCard/Productcard"


export const CategoryPage = () => {

    const { category } = useParams();
    const filteredProducts = products.filter(product => product.category === category);

    return (
        <div className="mt-10 w-screen">
            <section className="container mx-auto px-4 py-8 my-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                            <ProductCard product={product} />
                        </Link>
                    ))}

                </div>
            </section>
        </div>
    )
}