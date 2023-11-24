import React, { createContext, useState } from 'react';

export const CategoryContext = createContext({
    category: null,
    setCategory: () => {}
});

export const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState(null);

    return (
        <CategoryContext.Provider value={{ category, setCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};
