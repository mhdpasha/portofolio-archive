import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import { routes } from './routes'

export default function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence initial={false} mode="wait">
            <Routes location={location} key={location.pathname}>
                {routes.map(({ path, component: Component }) => (
                    <Route key={path} path={path} element={<Component/>} />
                ))}
            </Routes>
        </AnimatePresence>
    )
}