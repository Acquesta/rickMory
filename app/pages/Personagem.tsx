"use client"

import { useParams } from "next/navigation";

function Personagem() {
      // O hook retorna os parâmetros e uma função para atualizá-los
      const { id } = useParams()

    return ( 
        <div>
            { id }
        </div>
     );
}

export default Personagem;