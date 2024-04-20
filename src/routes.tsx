import Transition from './transition';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

export const routes = [
    { name: 'Home', path: '/', component: Transition(Home) },
    { name: 'About', path: '/about', component: Transition(About) },
    { name: 'Projects', path: '/projects', component: Transition(Projects) }
]