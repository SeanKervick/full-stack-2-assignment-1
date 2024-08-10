import React, { useState, useCallback } from "react";
import { BaseActorProps } from "../types/interfaces";


interface ActorContextInterface {
    favourites: number[];
    addToFavourites: ((actor: BaseActorProps) => void);
    removeFromFavourites: ((actor: BaseActorProps) => void);
    
}
const initialContextState: ActorContextInterface = {
    favourites: [],
    addToFavourites: () => {},
    removeFromFavourites: () => {},
    // addToPlaylist: (actor) => { actor.id }
};

export const ActorsContext = React.createContext<ActorContextInterface>(initialContextState);;

const ActorsContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [favourites, setFavourites] = useState<number[]>([]);

    const addToFavourites = useCallback((actor: BaseActorProps) => {
        setFavourites((prevFavourites) => {
            if (!prevFavourites.includes(actor.id)) {
                return [...prevFavourites, actor.id];
            }
            return prevFavourites;
        });
    }, []);

const removeFromFavourites = useCallback((actor: BaseActorProps) => {
    setFavourites((prevFavourites) => prevFavourites.filter((mId) => mId !== actor.id));
}, []);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [playlist, setPlaylist] = useState<number[]>([]);  // NEW

    // const addToPlaylist = useCallback((actor: BaseActorProps) => {  // NEW
    //     setPlaylist((prevPlaylist) => {
    //         if (!prevPlaylist.includes(actor.id)) {
    //             return [...prevPlaylist, actor.id];
    //         }
    //         return prevPlaylist;
    //     });
    // }, []);

    return (
        <ActorsContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                // addToPlaylist,
            }}
        >
            {children}
        </ActorsContext.Provider>
    );
};

export default ActorsContextProvider;