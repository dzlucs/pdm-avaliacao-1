import React, { createContext, useContext, useState, ReactNode } from "react";

type FavoritosContextType = {
  favoritos: string[];
  toggleFavorito: (id: string) => void;
};

const FavoritosContext = createContext<FavoritosContextType | undefined>(
  undefined
);

export const useFavoritos = () => {
  const ctx = useContext(FavoritosContext);
  if (!ctx)
    throw new Error("useFavoritos must be used within a FavoritosProvider");
  return ctx;
};

export const FavoritosProvider = ({ children }: { children: ReactNode }) => {
  const [favoritos, setFavoritos] = useState<string[]>([]);

  const toggleFavorito = (id: string) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};
