import React from 'react'
import AppButton from './AppButton'
import { TbPlant } from "react-icons/tb";
import { usePlant } from '../context/PlantContext';


interface NavButtonProps {
  label: string
  id: number
}

function PlantItem({ label, id }: NavButtonProps) {
  const { currentPlant, setCurrentPlant } = usePlant()
  return (
    <AppButton className='flex flex-col justify-center items-center p-8 w-48 h-48' onClick={() => setCurrentPlant({ id:id, name: label })}>
        <TbPlant size={80}/>
        <h3 className='text-2xl text-stone-900 font-medium text-center'>{label}</h3>
    </AppButton>
  )
}

export default PlantItem
