import './PokemonDetails.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function PokemonDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const [pokemonDetails, setPokemonDetails] = useState("");
    const [pokemonStats, setPokemonStats] = useState("");

    console.log(location.state);

    useEffect(() => {
        fetch(location.state).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    console.log(data);
    
                    const statsArray = {
                        hp: data.stats[0].base_stat,
                        attack: data.stats[1].base_stat,
                        defense: data.stats[2].base_stat,
                        speed: data.stats[5].base_stat
                    };
    
                    setPokemonDetails(data);
                    setPokemonStats(statsArray);
                });
            } else{
                console.log("heyhey");
            }
            // throw new Error('Something went wrong');
            // route to error page here
            // navigate("/MenuAndSearchBar");
        })
    }, [location.state]);

    console.log(pokemonStats);

    return (
        <div className="pokemonDetailsDiv">
            <Container maxWidth="xl" className="test">
                <Grid container spacing={2}>
                    <Grid sm={12} md={3}>
                        <Paper className="pokemonPaper" elevation={3}>
                            <Button className="pokemonIdBtn" variant="outlined" size="large"># {pokemonDetails?.id}</Button>
                            <h1>{pokemonDetails?.name?.toUpperCase()}</h1>
                            <img className="pokemonImg" src={pokemonDetails?.sprites?.front_default} alt="ImgShouldBeHere" />

                            {
                                pokemonDetails?.types ? pokemonDetails?.types.map((data, index) =>
                                    <div key={index}>
                                        <Button className={`${data.type.name}Btn`}>{data.type.name}</Button>
                                    </div>
                                ) : null
                            }

                        </Paper>
                        <br /><br />
                    </Grid>

                    <Grid sm={12} md={9}>
                        <h1>Pokemon Stats</h1>
                        <table className="pokemonStatsTable">
                            <tbody>
                                <tr>
                                    <td>
                                        <h2 className="pokemonStatsH2">Health Point</h2>
                                        <label className="pokemonStatsLbl">{pokemonStats.hp}</label>
                                    </td>

                                    <td className="pokemonStatsTd">
                                        <h2 className="pokemonStatsH2">Attack</h2>
                                        <label className="pokemonStatsLbl">{pokemonStats.attack}</label>
                                    </td>

                                    <td className="pokemonStatsTd">
                                        <h2 className="pokemonStatsH2">Defense</h2>
                                        <label className="pokemonStatsLbl">{pokemonStats.defense}</label>
                                    </td>

                                    <td className="pokemonStatsTd">
                                        <h2 className="pokemonStatsH2">Speed</h2>
                                        <label className="pokemonStatsLbl">{pokemonStats.speed}</label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default PokemonDetails;