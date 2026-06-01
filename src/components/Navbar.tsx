import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
    const [aberto, setAberto] = useState(false)

    return(
        <nav className="w-full text-white px-6 py-4 bg-green-900 sticky top-0 z-50 shadow-lg">
           <div className="flex items-center justify-between">
        <Link to="/" className='flex text-xl font-bold'>
         <img src="/icons/AgroSat.svg" alt="AgroSat Logo" className="w-12 h-8" />
         AgroSat</Link>

            <div className='hidden md:flex gap-6'>
                <Link to="/" className='hover:text-green-300 transition'>Home</Link>
                <Link to="/sobre" className='hover:text-green-300 transition'>Sobre</Link>   
                <Link to="/faq" className='hover:text-green-300 transition'>FAQ</Link>
                <Link to="/integrantes" className='hover:text-green-300 transition'>Integrantes</Link>
            </div>
            <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setAberto(!aberto)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${aberto ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${aberto ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${aberto ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {aberto && (
        <div className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-green-700 pt-4">
          <Link to="/" className='hover:text-green-300 transition' onClick={() => setAberto(false)}>Home</Link>
          <Link to="/dashboard" className='hover:text-green-300 transition' onClick={() => setAberto(false)}>Dashboard</Link>
          <Link to="/sobre" className='hover:text-green-300 transition' onClick={() => setAberto(false)}>Sobre</Link>
          <Link to="/faq" className='hover:text-green-300 transition' onClick={() => setAberto(false)}>FAQ</Link>
          <Link to="/integrantes" className='hover:text-green-300 transition' onClick={() => setAberto(false)}>Integrantes</Link>
        </div>
    )}
    </nav>
    )
}