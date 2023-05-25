import  {useState, useEffect} from 'react'

const PokemonAPI = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(" https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setPokemon(response.results)
            })
            .then(error => console.log(error))
    }, []);
    return (
        <div>
            <h2>Pokemon</h2>
            {
            pokemon.map((pokemon, index) => {
                return <p key={index}>{pokemon.name}</p>
            })
            }
        </div>
    )
}

export default PokemonAPI