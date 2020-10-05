import React, { useState, createContext } from "react";

export const ShopProductList = createContext();

export const ShopProductListProvider = props => {
    const [item_list, setItem_list] = useState([{
        item: {
            images: {

            }
        }
    }
    ]);

    return (
        <ShopProductList.Provider value={[item_list, setItem_list]}>
            {props.children}
        </ShopProductList.Provider>
    )
}


