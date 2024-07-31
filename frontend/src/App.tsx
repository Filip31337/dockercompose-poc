import {Routes, Route, Link } from 'react-router-dom';
import CountryList from './pages/CountryList';
import CountryDetails from './pages/CountryDetails';

function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/countries">Countries</Link>
            </nav>
            <Routes>
                <Route path="/" element={<h1>Welcome to dockercompose poc!</h1>} />
                <Route path="/countries" element={<CountryList />} />
                <Route path="/countries/:id" element={<CountryDetails />} />
            </Routes>
        </>
    );
}

export default App;
