import Transition from './transition'
import {Home, About, Projects} from './pages'

export const routes = [
    { name: 'Home', path: '/', component: Transition(Home) },
    { name: 'About', path: '/about', component: Transition(About) },
    { name: 'Projects', path: '/projects', component: Transition(Projects) }
]