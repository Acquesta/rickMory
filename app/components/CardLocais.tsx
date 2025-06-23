

interface Locais {
    nome: string;
}

function CardLocais({ nome }: Locais) {
    return ( 
        <div className="w-fit bg-slate-800 px-2 py-2 rounded-sm cursor-pointer hover:scale-105">
            <p className="uppercase">{nome}</p>
        </div>
     );
}

export default CardLocais;