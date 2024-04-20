import { Link } from 'react-router-dom'
import { routes } from '../routes'

export default function Navbar() {
    return(
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-xl font-bold">mhdpasha</Link>
          <ul className="flex">
            {routes.map((route, index) => (
              <li key={index} className="mr-6">
                <Link to={route.path} className="text-white hover:text-gray-400">{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
}