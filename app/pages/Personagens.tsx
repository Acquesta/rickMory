import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CardPersonagem from "../components/CardPersonagem";

export default function Personagens() {

    const [data, setData] = useState([[]])

    const [page, setPage] = useState(1)

    const [atualiza, setAtualiza] = useState(false)

    const scrollPersonagensRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response => {
            setData([...data, response.data.results]) 
            console.log([...data, response.data.results]);
        })
        .catch(error => console.error(error));        
    }, [atualiza])

    return (
        <div className="bg-slate-950">
            <h1 className="text-white text-4xl text-center py-5">Personagens</h1>
            <div className="flex items-center px-5"> 
                {/* <button onClick={() => rodaPersonagens('esquerda')} className="cursor-pointer"> <IoIosArrowBack color="white" size={25}/> </button> */}
                <ul ref={scrollPersonagensRef} className="flex flex-wrap justify-center gap-5 p-2 mx-auto">
                    { 
                        data.map((page) => (
                            page.map((personagem : any) => (
                                <CardPersonagem 
                                    key={personagem.id}  
                                    nome={personagem.name} 
                                    imagem={personagem.image} 
                                />
                            ))
                        ))
                    }
                </ul>
                {/* <button onClick={() => rodaPersonagens('direita')} className="rotate-180 cursor-pointer"> <IoIosArrowBack color="white" size={25}/> </button> */}
            </div>
            <div className="flex justify-center gap-5">
                {
                    page > 1 ?
                        <p onClick={() => {setPage(page - 1); data.pop()}} className="w-fit py-5 text-white text-center font-xl cursor-pointer hover:text-white/50">Ver menos</p>
                    : ''
                }
                {
                    page != 42 ?  
                        <p onClick={() => {setPage(page + 1); atualiza ? setAtualiza(false) : setAtualiza(true)}} className="w-fit py-5 text-white text-center font-xl cursor-pointer hover:text-white/50">Ver mais</p>
                    : ''
                }
            </div>
        </div>
    );
}

