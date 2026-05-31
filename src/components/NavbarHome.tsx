import { Link } from 'react-router-dom'

export default function NavbarHome() {
    return(
        <nav className="w-full text-white px-6 py-4 flex items-center justify-between backdrop-blur-md fixed top-0 z-50">
            <Link to="/" className='text-xl font-bold'>AgroSat</Link>
            <div className='flex gap-6'>
                <Link to="/" className='hover:text-green-300 transition'>Home</Link>
                <Link to="/dashboard" className='hover:text-green-300 transition'>Dashboard</Link>
                <Link to="/sobre" className='hover:text-green-300 transition'>Sobre</Link>   
                <Link to="/faq" className='hover:text-green-300 transition'>FAQ</Link>
                <Link to="/integrantes" className='hover:text-green-300 transition'>Integrantes</Link>
            </div>
        </nav>
    )
}