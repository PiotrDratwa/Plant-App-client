import React from 'react'
import NavButton from './NavButton'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='flex justify-center bg-lime-700/40 p-8 rounded-t-4xl shadow-xl'>
        <div className='flex justify-between align-between w-full'>
            <div>
                <h2 className='text-stone-900 font-bold text-3xl '>PlantCare</h2>
            </div>
            
            <div className='flex gap-8'>   
                <Link href="/" className='font-3xl text-stone-900 hover:scale-150 transition'>Panel Główny</Link>
                <Link href="/myplants" className='font-3xl text-stone-900 hover:scale-150 transition'>Moje Rośliny</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
