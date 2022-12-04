import './PokemonDetails.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function PokemonDetails() {
    const location = useLocation();
    const [pokemonDetails, setPokemonDetails] = useState("");
    const [pokemonStats, setPokemonStats] = useState("");

    useEffect(() => {
        fetch(location.state).then((response) => response.json()).then((data) => {
            console.log(data);

            const statsArray = {
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
                special_att: data.stats[3].base_stat,
                special_def: data.stats[4].base_stat,
            };

            setPokemonDetails(data);
            setPokemonStats(statsArray);
        })
    }, [location.state]);

    return (
        <div className="pokemonDetailsDiv">
            <Container maxWidth="xl" className="test">
                <Grid container spacing={2}>
                    <Grid sm={12} md={3}>
                        <Paper className="pokemonPaper" elevation={3}>
                            <Button className="pokemonIdBtn" variant="outlined" size="large"># {pokemonDetails?.id}</Button>
                            <h1>{pokemonDetails?.name?.toUpperCase()}</h1>
                            <img className="pokemonImg" src={pokemonDetails?.sprites?.front_default} alt="NoImgAvailable" />

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
                        <h1>Pokemon Base Stats</h1>
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

                        <br /><br />

                        <Grid container>
                            <Grid sm={1} md={1}></Grid>
                            <Grid className="specialAttGrid" sm={10} md={4}>
                                <h2 className="specialAttH2">Special-Attack</h2>
                                <label className="specialAttLbl">{pokemonStats.special_att}</label>
                            </Grid>
                            <Grid sm={1} md={1}></Grid>
                            <Grid sm={1} md={1}></Grid>
                            <Grid className="specialDefGrid" sm={10} md={4}>
                                <h2 className="specialDefH2">Special-Defense</h2>
                                <label className="specialDefLbl">{pokemonStats.special_def}</label>
                            </Grid>
                            <Grid sm={1} md={1}></Grid>
                        </Grid>

                        <br /><br />

                        <h1>Available Movesets</h1>
                        <Grid container>
                            {
                                pokemonDetails?.moves ? pokemonDetails?.moves.map((data, index) =>
                                    <Grid sm={6} md={3} key={index}>
                                        <Button className="movesetBtn" variant="outlined" size="large" disabled>{data.move.name}</Button>
                                    </Grid>
                                ) : null
                            }
                        </Grid>

                        <br /><br />

                        <h1>Sprites Details</h1>
                        <Grid container spacing={3}>
                            <Grid sm={6}>
                                <Paper className="spritesPaper" elevation={3}>
                                    <h2>Default-Front</h2>
                                    <img className="spritesImg" src={pokemonDetails?.sprites?.front_default} alt="NoImgAvailable" />
                                </Paper>
                            </Grid>
                            <Grid sm={6}>
                                <Paper className="spritesPaper" elevation={3}>
                                    <h2>Default-Back</h2>
                                    <img className="spritesImg" src={pokemonDetails?.sprites?.back_default} alt="NoImgAvailable" />
                                </Paper>
                            </Grid>
                            <Grid sm={6}>
                                <Paper className="spritesPaper" elevation={3}>
                                    <h2>Shiny-Front</h2>
                                    <img className="spritesImg" src={pokemonDetails?.sprites?.front_shiny} alt="NoImgAvailable" />
                                </Paper>
                            </Grid>
                            <Grid sm={6}>
                                <Paper className="spritesPaper" elevation={3}>
                                    <h2>Shiny-Back</h2>
                                    <img className="spritesImg" src={pokemonDetails?.sprites?.back_shiny} alt="NoImgAvailable" />
                                </Paper>
                            </Grid>
                        </Grid>

                        <br /><br />

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default PokemonDetails;