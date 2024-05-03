import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './partials'
import { routes } from './routes'
import { ThemeProvider } from "@/components/theme-provider"
import Cursor from './cursor'

export default function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
            <main className="flex h-screen">
                <Navbar />
                <section className="flex-1 bg-gray-900 flex justify-center items-center">
                    <AnimatedRoutes />
                </section>
            </main>
            <Cursor/>
        </Router>
        </ThemeProvider>
    )
}

function AnimatedRoutes() {
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
