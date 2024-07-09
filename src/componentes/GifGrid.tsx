import { FC } from "react"
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

type GifGridFC = {
    categoria: string;
};


export const GifGrid: FC<GifGridFC> = ({ categoria }) => {
    const { gifs, estaCargando } = useFetchGifs(categoria);
    // const [gifs, setGifs] = useState<Gif[]>([]);

    // const establecerGifs = async (categoria: string): Promise<void> => {
    //     const gifsPorCategoria: Gif[] = await buscarGifsPorCategoria(categoria);
    //     if (gifsPorCategoria) {
    //         setGifs(gifsPorCategoria);
    //     }
    // };

    // useEffect(() => {
    //     establecerGifs(categoria);
    // }, []);

    return (
        <>
            <h3>{categoria}</h3>
            <div className="card-grid">

                {
                    estaCargando ? (<h2>Cargando...</h2>) :
                        (gifs.map(gif => (
                            <GifItem key={gif.id} gif={gif} />
                        )))
                }
            </div>
        </>
    )
}
