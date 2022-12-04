import './PokemonList.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

function PokemonList() {
    const param = useParams();
    const navigate = useNavigate();

    const [pokemonList, setPokemonList] = useState("");

    console.log(param.searchText);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/${param.searchText}`).then((response) => response.json())
            .then((pokeType) => {
                setPokemonList(pokeType.pokemon);
            });

    }, [param]);

    const handleListClick = (url) => {
        navigate("/PokemonDetails", { state: url });
    }

    return (
        <div className="pokemonListDiv">
            <Grid container>
                {
                    pokemonList ? pokemonList.map((data, index) =>
                        <Grid xs={3} key={index}>
                            <Button className="pokeListBtn" variant="outlined" size="large" onClick={() => handleListClick(data.pokemon.url)}>{data.pokemon.name}</Button>
                        </Grid>
                    ) : null
                }

            </Grid>
        </div>
    )
}

export default PokemonList;