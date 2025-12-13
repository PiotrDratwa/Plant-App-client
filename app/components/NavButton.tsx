import React from 'react'

interface NavButtonProps {
  label: string
}

function NavButton({ label }: NavButtonProps) {
  return (
    <button className='font-3xl text-stone-900'>
        <h2 className='text-stone-900 text-3xl'>{label}</h2>
    </button>
  )
}

export default NavButton
