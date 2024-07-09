import { FC, useState } from "react"
import { AgregarCategoria, GifGrid } from "./componentes";

export const GifExpertApp: FC = () => {
  const [categorias, setCategorias] = useState<string[]>(['One Punch Man']);

  const agregarCategoria = (categoria: string): void => {
    if (categorias.includes(categoria)) {
      alert(`Categoría "${categoria}" ya existe.`);
      return;
    };
    setCategorias(categorias => [categoria, ...categorias]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AgregarCategoria
        enNuevaCategoria={(categoria: string) => agregarCategoria(categoria)}
      />

      {
        categorias.map(categoria => {
          return <GifGrid key={categoria} categoria={categoria} />
        })
      }

    </>
  )
}
