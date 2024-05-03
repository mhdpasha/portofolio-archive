import { Link } from 'react-router-dom'
import { routes } from '../routes'
// import { ModeToggle } from '@/components/mode-toggle'
// import { TbArrowUpRight } from "react-icons/tb"

export default function Navbar() {

    const handleMouseEnter = (e: React.MouseEvent) => {
        e.currentTarget.classList.add('is-hovering')
    }
    const handleMouseLeave = (e: React.MouseEvent) => {
        e.currentTarget.classList.remove('is-hovering')
    }

    return (
        <nav className="bg-gray-800 w-24 flex flex-col items-center justify-center h-screen py-4">

            <ul className="space-y-8 ps-2">
                {routes.map(({ path, name }, index) => (
                    <li key={index}>
                        <Link
                            to={path}
                            className="block w-full text-white px-5 py-1 transition-transform duration-300 hover:translate-x-2"
                            style={{ cursor: 'none' }}
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave} >
                            {name} 
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
