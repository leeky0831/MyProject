import './MenuAndSearchBar.css';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';

function MenuAndSearchBar() {
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = () => {
        let url = `https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`;
        navigate("/PokemonDetails", { state: url });
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid xs={1} md={1}></Grid>

                <Grid xs={10} md={2}>
                    <Card className="sideMenuCard">
                        <h2>Filter Pokemon by Types</h2>
                        <hr />

                        <CardContent>
                            <Grid container spacing={1}>
                                <Link to={"/1"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="normalBtn" variant="outlined" size="large">Normal</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/2"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="fightingBtn" variant="outlined" size="large">Figthing</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/3"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="flyingBtn" variant="outlined" size="large">Flying</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/4"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="poisonBtn" variant="outlined" size="large">Poison</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/5"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="groundBtn" variant="outlined" size="large">Ground</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/6"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="rockBtn" variant="outlined" size="large">Rock</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/7"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="bugBtn" variant="outlined" size="large">Bug</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/8"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="ghostBtn" variant="outlined" size="large">Ghost</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/9"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="steelBtn" variant="outlined" size="large">Steel</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/10"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="fireBtn" variant="outlined" size="large">Fire</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/11"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="waterBtn" variant="outlined" size="large">Water</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/12"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="grassBtn" variant="outlined" size="large">Grass</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/13"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="electricBtn" variant="outlined" size="large">Electric</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/14"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="psychicBtn" variant="outlined" size="large">Psychic</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/15"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="iceBtn" variant="outlined" size="large">Ice</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/16"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="dragonBtn" variant="outlined" size="large">Dragon</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/17"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="darkBtn" variant="outlined" size="large">Dark</Button>
                                    </Grid>
                                </Link>

                                <Link to={"/18"}>
                                    <Grid xs={12} md={6}>
                                        <Button className="fairyBtn" variant="outlined" size="large">Fairy</Button>
                                    </Grid>
                                </Link>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid xs={1} md={0}></Grid>
                <Grid xs={1} md={0}></Grid>

                <Grid xs={10} md={8}>
                    <div className="searchDiv">
                        <form onSubmit={() => handleSubmit(input)}>
                            <TextField className="pokemonSerachBar" label="Search" size="small" color="secondary" value={input} onChange={handleChange} />
                            <Button className="pokemonSearchBtn" variant="contained" size="medium" type="submit">Search</Button>
                        </form>
                    </div>

                    <Outlet />
                </Grid>

                <Grid xs={1} md={1}></Grid>
            </Grid>
        </div>
    )
}

export default MenuAndSearchBar;