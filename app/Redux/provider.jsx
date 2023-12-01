'use client'

import { Provider } from "react-redux";
import { store } from "./store";


export function Providers({ children }) {
    return (
        <Provider store={store}>
       
            <div  className="mx-auto lg:px-32 px-6">
                {children}
            </div>
      
           
        </Provider>
    )
}