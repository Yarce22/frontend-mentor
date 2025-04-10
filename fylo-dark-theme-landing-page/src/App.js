import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { EarlyAccess } from './components/EarlyAccess';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TeamInfo } from './components/TeamInfo';
import { Testimonials } from './components/Testimonials';
function App() {
    return (_jsxs(_Fragment, { children: [_jsxs("main", { className: 'relative grid text-white place-items-center bg-DarkBlue-bg', children: [_jsx(Header, {}), _jsx(Hero, {}), _jsx(Features, {}), _jsx(TeamInfo, {}), _jsx(Testimonials, {}), _jsx(EarlyAccess, {})] }), _jsx(Footer, {})] }));
}
export default App;
