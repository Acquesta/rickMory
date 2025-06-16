import { url } from "inspector";
import { useState } from "react";

interface CardProps {
    nome: string
    imagem?: string
}

function CardPersonagem({ nome, imagem }: CardProps) {

    const [showMouse, setShowMouse] = useState(false)

    return ( 
        <div    
            className="hover:scale-110 transition-all"
            onMouseEnter={() => setShowMouse(true)}
            onMouseLeave={() => setShowMouse(false)}
        >
            <div className={`${showMouse ? 'block' : 'hidden'} absolute -bottom-1 w-full py-2 transition-all bg-gradient-to-t from-black to-100% rounded-b-xl`}>
                <h3 className={`w-full h-auto text-white text-center`}>{nome}</h3>
            </div>
            <img 
                className="min-w-[150px] rounded-lg cursor-pointer" 
                src={imagem} 
                alt="imagem no personagem" 
            />
        </div>
     );
}

export default CardPersonagem;