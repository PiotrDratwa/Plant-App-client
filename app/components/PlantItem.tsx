import React from 'react'
import AppButton from './AppButton'
import { TbPlant } from "react-icons/tb";

interface NavButtonProps {
  label: string
}

function PlantItem({ label }: NavButtonProps) {
  return (
    <AppButton className='flex flex-col justify-center items-center p-8 w-48 h-48'>
        <TbPlant size={80}/>
        <h3 className='text-2xl text-stone-900 font-medium text-center'>{label}</h3><></>
    </AppButton>
  )
}

export default PlantItem
