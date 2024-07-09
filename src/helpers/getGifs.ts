export type Gif = {
    id: string;
    title: string;
    url: string;
}

export const buscarGifsPorCategoria = async (categoria: string ): Promise<Gif[]> => {
    const url: string = `https://api.giphy.com/v1/gifs/search?api_key=mWE4w2Vc5DIqg4ORbhfDBJ2MrV0rXfTk&q=${categoria}&limit=10`;
    
    try {
        const respuesta: any = await fetch(url);
        const {data} = await respuesta.json();
        const gifs: Gif[] = data.map((img: any) => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
        console.log(gifs);
        return gifs;
    } catch (error: any) {
        return error.toString();
    }
};
