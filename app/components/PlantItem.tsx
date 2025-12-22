import React from 'react'
import AppButton from './AppButton'
import { TbPlant } from "react-icons/tb";
import { usePlant } from '../context/PlantContext';
import { FaTrash } from "react-icons/fa";
import { DeletePlant } from '../api/api';



interface NavButtonProps {
  label: string
  id: number
  presetId?: number
}

function PlantItem({ label, id, presetId }: NavButtonProps) {
  const { currentPlant, setCurrentPlant } = usePlant();

  return (
    <AppButton
      onClick={() => {
        setCurrentPlant({ id, name: label, presetId });
        console.log("currentPlant", currentPlant);
      }}
      className="relative flex flex-col justify-center items-center p-8 w-48 h-48"
    >
      <TbPlant size={80} />

      <h3 className="text-2xl text-stone-900 font-medium text-center">
        {label}
      </h3>

      <div
        onClick={(e) => {
          e.stopPropagation();
          DeletePlant(id, label)
          console.log("DELETE", id);
        }}
        className="absolute bottom-2 right-2 w-10 h-10 flex justify-center items-center text-stone-900 hover:text-red-600 cursor-pointer z-20"
      >
        <FaTrash size={16} />
      </div>
    </AppButton>
  );
}

export default PlantItem
