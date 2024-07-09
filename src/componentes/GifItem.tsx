import { FC } from "react";
import { Gif } from "../helpers/getGifs";

export type GifItemFC = {
    gif: Gif;
}

export const GifItem: FC<GifItemFC> = ({ gif }) => {
    return (
        <div className="card">
            <img src={gif.url} alt={gif.title} />
            <p>{gif.title}</p>
        </div>
    );
};