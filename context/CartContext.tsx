import { createContext, useContext, useState } from 'react';

interface CartContextType {
  cart: string[];
  setCart: React.Dispatch<React.SetStateAction<string[]>>;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartContext');
  }

  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (id: string) => {
    setCart((prev) => [...prev, id]);
  };

  const removeFromCart = (id: string) => {
    console.log('cart', cart);
    setCart((prev) => prev.filter((item) => item !== id));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
