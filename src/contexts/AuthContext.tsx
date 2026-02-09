import { createContext, useContext, useState, type ReactNode } from 'react';

interface Usuario {
    id: number;
    nome: string;
    email: string;
}

interface LoginDados {
    email: string;
    senha: string;
}

interface AuthContextData {
    usuario: Usuario | null;
    isLogado: boolean;
    login: (dados: LoginDados) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// 👉 Clientes mockados (simulação de backend)
const clientesMock: Array<Usuario & { senha: string }> = [
    {
        id: 1,
        nome: 'João Silva',
        email: 'joao@email.com',
        senha: '123456',
    },
    {
        id: 2,
        nome: 'Maria Souza',
        email: 'maria@email.com',
        senha: '123456',
    },
    {
        id: 3,
        nome: 'Pedro Santos',
        email: 'pedro@email.com',
        senha: '123456',
    },
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    const login = ({ email, senha }: LoginDados): boolean => {
        const cliente = clientesMock.find(
            (c) => c.email === email && c.senha === senha
        );

        if (!cliente) return false;

        const { senha: _, ...clienteSemSenha } = cliente;
        setUsuario(clienteSemSenha);
        return true;
    };

    const logout = () => {
        setUsuario(null);
    };

    return (
        <AuthContext.Provider
            value={{
                usuario,
                isLogado: !!usuario,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
