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
      <div className="flex flex-col min-h-screen">
          <nav className="bg-gray-800 text-white p-4 flex justify-center">
              <Link className="mx-4 hover:text-gray-300" to="/">Home</Link>
              <Link className="mx-4 hover:text-gray-300" to="/countries">Countries</Link>
              <Link className="mx-4 hover:text-gray-300" to="/cities">Cities</Link>
              <Link className="mx-4 hover:text-gray-300" to="/regions">Regions</Link>
              <Link className="mx-4 hover:text-gray-300" to="/currencies">Currencies</Link>
          </nav>
          <main className="flex-grow flex items-center justify-center">
              <Routes>
                  <Route path="/" element={<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Welcome to Docker Compose POC!</h1>} />
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
          </main>
      </div>
    );
}

export default App;
