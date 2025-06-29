export const Footer = () => {
    return (
        <footer className="bg-[#232F3E] text-white p-6 mt-8"> {/* Azul escuro para o rodapé */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-4">Sobre Nós</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-[#FF9900]">Nossa História</a></li>
                        <li><a href="#" className="hover:text-[#FF9900]">Nossas Lojas</a></li>
                        <li><a href="#" className="hover:text-[#FF9900]">Sustentabilidade</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Ajuda</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-[#FF9900]">Central de Ajuda</a></li>
                        <li><a href="#" className="hover:text-[#FF9900]">Rastrear Pedido</a></li>
                        <li><a href="#" className="hover:text-[#FF9900]">Política de Trocas</a></li>
                        <li><a href="#" className="hover:text-[#FF9900]">Fale Conosco</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Serviços</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-[#FF9900]">Cartão Fidelidade</a></li>
                        <li><a href="#" className="hover:text-[#FF9900]">Clube de Vantagens</a></li>
                        <li><a href="#" className="hover:text-[#FF9900]">Entrega Expressa</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Meu Super Online. Todos os direitos reservados.
            </div>
        </footer>
    );
};