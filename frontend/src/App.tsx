import {Routes, Route, Link } from 'react-router-dom';
import CountryList from './pages/CountryList';
import RegionsList from './pages/RegionsList'
import RegionForm from './components/RegionForm'
import CurrencyForm from './components/CurrencyForm'
import CurrenciesList from './pages/CurrenciesList'
import CountryForm from './components/CountryForm'
import CityForm from './components/CityForm'
import CitiesList from './pages/CitiesList'

function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/countries">Countries</Link>
                <Link to="/cities">Cities</Link>
                <Link to="/regions">Regions</Link>
                <Link to="/currencies">Currencies</Link>
            </nav>
            <Routes>
                <Route path="/" element={<h1>Welcome to dockercompose poc!</h1>} />
                <Route path="/regions" element={<RegionsList />} />
                <Route path="/regions/new" element={<RegionForm />} />
                <Route path="/regions/:id/edit" element={<RegionForm />} />
                <Route path="/countries" element={<CountryList />} />
                <Route path="/countries/new" element={<CountryForm />} />
                <Route path="/countries/:id/edit" element={<CountryForm />} />
                <Route path="/currencies" element={<CurrenciesList />} />
                <Route path="/currencies/new" element={<CurrencyForm />} />
                <Route path="/currencies/:id/edit" element={<CurrencyForm />} />
                <Route path="/cities" element={<CitiesList />} />
                <Route path="/cities/new" element={<CityForm />} />
                <Route path="/cities/:id/edit" element={<CityForm />} />
            </Routes>
        </>
    );
}

export default App;
