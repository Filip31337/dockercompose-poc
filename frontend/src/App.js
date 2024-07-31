import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Routes, Route, Link } from 'react-router-dom';
import CountryList from './pages/CountryList';
import CountryDetails from './pages/CountryDetails';
function App() {
    return (_jsxs(_Fragment, { children: [_jsxs("nav", { children: [_jsx(Link, { to: "/", children: "Home" }), _jsx(Link, { to: "/countries", children: "Countries" })] }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx("h1", { children: "Hello World" }) }), _jsx(Route, { path: "/countries", element: _jsx(CountryList, {}) }), _jsx(Route, { path: "/countries/:id", element: _jsx(CountryDetails, {}) })] })] }));
}
export default App;
