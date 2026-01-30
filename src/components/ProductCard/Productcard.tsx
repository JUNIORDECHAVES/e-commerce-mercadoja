import { Star, ShoppingCart, Percent } from "lucide-react";

type ProductProps = {
    id: number;
    image: string;
    name: string;
    price: number;
    rating: number;
    category?: string;
    discount?: number; // Ex: 15 para 15%
};

export const ProductCard = ({ product }: { product: ProductProps }) => {
    const discountedPrice = product.discount
        ? product.price * (1 - product.discount / 100)
        : product.price;

    return (
        <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">

            {/* Badge de Desconto */}
            {product.discount! > 0 && (
                <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Percent size={12} />
                    {product.discount}% OFF
                </div>
            )}

            {/* Container da Imagem */}
            <div className="relative aspect-square overflow-hidden bg-slate-50 p-6">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply transform transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Conteúdo */}
            <div className="p-4 flex flex-col flex-grow">
                {/* Categoria ou Subtítulo Opcional */}
                {product.category && (
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">
                        {product.category}
                    </span>
                )}

                <h3 className="font-semibold text-slate-800 text-sm md:text-base leading-tight mb-2 line-clamp-2 h-10 group-hover:text-orange-600 transition-colors">
                    {product.name}
                </h3>

                {/* Avaliação */}
                <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-amber-400">
                        {Array.from({ length: 5 }, (_, i) => (
                            <Star
                                key={i}
                                size={14}
                                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                                className={i < Math.floor(product.rating) ? "text-amber-400" : "text-slate-200"}
                            />
                        ))}
                    </div>
                    <span className="text-xs font-medium text-slate-400">({product.rating})</span>
                </div>

                {/* Preços */}
                <div className="mt-auto mb-4 ">
                    {product.discount ? (
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-400 line-through decoration-red-400/50">
                                R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                            <span className="text-xl font-extrabold text-slate-900">
                                R$ {discountedPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <div className="h-[14px] invisible">
                                
                            </div>
                            <span className="text-xl font-extrabold text-slate-900">
                                R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                    )}
                </div>

                {/* Botão de Ação */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-orange-200">
                    <ShoppingCart size={18} />
                    <span className="text-sm">Adicionar</span>
                </button>
            </div>
        </div>
    );
};