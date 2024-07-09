import { useEffect, useState } from "react";
import { Gif, buscarGifsPorCategoria } from "../helpers/getGifs";

export type UseFetchGifsHook = {
    gifs: Gif[];
    estaCargando: boolean;
}

export const useFetchGifs = (categoria: string): UseFetchGifsHook => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [estaCargando, setEstaCargando] = useState<boolean>(true);

    const establecerGifs = async (categoria: string): Promise<void> => {
        const gifsPorCategoria: Gif[] = await buscarGifsPorCategoria(categoria);
        if (gifsPorCategoria) {
            setGifs(gifsPorCategoria);
        }
        setEstaCargando(false);
    };

    useEffect(() => {
        establecerGifs(categoria);
    }, []);

    return {
        gifs,
        estaCargando
    }

}