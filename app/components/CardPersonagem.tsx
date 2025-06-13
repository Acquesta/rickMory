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
            className="hover:scale-110 transition-all duration-300"
            onMouseEnter={() => setShowMouse(true)}
            onMouseLeave={() => setShowMouse(false)}
        >
            <div className="bg-black rounded-t-lg">
                <h3 className={`w-full h-auto text-white ${showMouse ? 'block' : 'hidden'} text-center`}>{nome}</h3>
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