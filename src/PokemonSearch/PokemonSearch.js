import './PokemonSearch.css';
import MenuAndSearchBar from '../MenuAndSearchBar/MenuAndSearchBar';
import PokemonList from '../PokemonList/PokemonList';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

import AppBar from '@mui/material/AppBar';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function PokemonSearch() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<p>Page not found</p>} />
                    <Route path="/" element={<MenuAndSearchBar />}>
                        <Route path="/:searchText" element={<PokemonList />} />
                    </Route>
                    <Route path="/PokemonDetails" element={<PokemonDetails />} />
                </Routes>
            </BrowserRouter>

            <AppBar className="titleBar">
                <h1>
                    P<CatchingPokemonIcon />KE'HUB
                </h1>
            </AppBar>
        </div>
    )
}

export default PokemonSearch;