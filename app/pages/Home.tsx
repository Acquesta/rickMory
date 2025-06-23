import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import CardLocais from "../components/CardLocais";

export default function HomeInicial() {

    const [data, setData] = useState([])
    const [locais, setLocais] = useState([])

    const scrollPersonagensRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character`)
        .then(response => {
            setData(response.data.results) 
        })
        .catch(error => console.error(error));       
        
        axios.get(`https://rickandmortyapi.com/api/location`)
        .then(response => {
            setLocais(response.data.results) 
        })
        .catch(error => console.error(error));    
    }, [])

    const rodaPersonagens = (lado: 'esquerdo' | 'direito') => {
        const scrollElement = scrollPersonagensRef.current;
        
        if (scrollElement) {
            const scrollAmount = scrollElement?.offsetWidth - 100; 
            if (lado === 'direito') {
                scrollElement.scrollLeft += scrollAmount;
            } else {
                scrollElement.scrollLeft -= scrollAmount;
            }
        }
    };

    return (
        <div className="bg-slate-950 w-full text-white">
            {/* <img src="./rickmory_bg.png" alt="" className="h-[90vh] ml-auto"/> */}
            <h1 className="text-5xl text-center pt-10">Rick and Mory</h1>
            <p className="w-1/2 mx-auto text-center pt-5">Descubra todos os personagens de Rick and Mory e seus respectivos episódios, terra ou se está vivo ou morto</p>
            <div>
                <h2 className="ml-10 mt-20 text-xl">Personagens</h2>
                <div className="flex mt-5">
                    <button onClick={() => rodaPersonagens('esquerdo')} className="mx-5 cursor-pointer"> 
                        <IoIosArrowBack color="white" size={25}/> 
                    </button>
                    <div ref={scrollPersonagensRef} className="flex gap-2 overflow-x-hidden overflow-y-hidden">
                        {
                            data.map((personagem : any) => (
                                <div key={personagem.id} className="min-w-[150px] py-1 hover:scale-105 cursor-pointer">
                                    <img className="rounded-lg" src={personagem.image} alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <button onClick={() => rodaPersonagens('direito')} className="mx-5 cursor-pointer rotate-180"> 
                        <IoIosArrowBack color="white" size={25}/> 
                    </button>
                </div>
            </div>
            <div>
                <h2 className="ml-10 mt-10 mb-4 text-xl">Locais</h2>
                <div className="flex gap-2 flex-wrap mx-14 py-5">
                        {
                            locais.map((local : any) => (
                                <CardLocais nome={local.name}/>
                            ))
                        }
                </div>
            </div>
        </div>
    )
}