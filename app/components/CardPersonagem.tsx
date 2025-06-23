import { useState } from "react";

interface CardProps {
    nome: string
    imagem?: string
}

function CardPersonagem({ nome, imagem }: CardProps) {

    const [showMouse, setShowMouse] = useState(false)

    return ( 
        <div    
            className="max-w-[200px] min-w-10 h-auto hover:scale-110 transition-all"
            onMouseEnter={() => setShowMouse(true)}
            onMouseLeave={() => setShowMouse(false)}
        >
            <div className={`${showMouse ? 'block' : 'hidden'} absolute bottom-0 w-full py-2 transition-all bg-gradient-to-t from-black to-100% rounded-b-lg`}>
                <h3 className={`w-auto h-auto text-white text-center`}>{nome}</h3>
            </div>
            <img 
                className="rounded-lg cursor-pointer" 
                src={imagem} 
                alt="imagem no personagem" 
                // style={{maskImage: 'radial-gradient(ellipse 45% 60% at 48% 50%, black 50%, transparent 85%)', -webkit-mask-image: radial-gradient(ellipse 45% 60% at 48% 50%, black 50%, transparent 85%);}}
            />
        </div>
     );
}

export default CardPersonagem;