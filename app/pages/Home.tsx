import axios from "axios";
import { useEffect, useState } from "react";
import CardPersonagem from "../components/CardPersonagem";

export default function HomeInicial() {

    const [data, setData] = useState({
        results: []
    })

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            setData(response.data) 
            console.log(response.data)
        })
        .catch(error => console.error(error));
    }, [])

    return (
        <div className="bg-slate-950 h-screen">
            <h1 className="text-white text-4xl text-center py-5">Personagens</h1>
            <ul className="flex gap-5 mx-8 p-2 overflow-x-hidden overflow-y-hidden">
                {
                data ? 
                  data.results.map((personagem : any) => (
                    <CardPersonagem 
                        key={personagem.id} 
                        nome={personagem.name} 
                        imagem={personagem.image} 
                    />
                  ))  : ''
                }
            </ul>
        </div>
    );
}

