import { FC, useState } from 'react'

type AgregarCategoriaFC = {
    agregarCategoria?: Function;
    enNuevaCategoria: Function;
};

export const AgregarCategoria: FC<AgregarCategoriaFC> = ({enNuevaCategoria}) => {
    const [valorInput, setValorInput] = useState('');

    const cambiarValorInput = (texto: string): void => {
        setValorInput(texto);
    };

    const alEnviar = (evento: React.FormEvent): void => {
        evento.preventDefault();
        if(valorInput.trim().length === 0) return;
        // agregarCategoria(valorInput);
        enNuevaCategoria(valorInput.trim());
        setValorInput('');
    };

    return (
        <form onSubmit={evento => alEnviar(evento)}>
            <input
                type="text"
                placeholder="Buscar GIFs"
                value={valorInput}
                onChange={valor => cambiarValorInput(valor.target.value)}
            />
        </form>
    )
}
