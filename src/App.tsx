import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar, Layout, View } from './partials'
import { Cursor, Page } from '.'

export default function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Cursor/>
            <Router>
                <Layout>
                <Navbar />
                    <View>
                        <Page />
                    </View>
                </Layout>
            </Router>
        </ThemeProvider>
    )
}