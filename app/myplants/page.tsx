import Image from "next/image";
import PlantItem from "../components/PlantItem";
import NavButton from "../components/NavButton";
import AppButton from "../components/AppButton";
import { IoIosWater } from "react-icons/io";
import { FaTemperatureQuarter,FaSun } from "react-icons/fa6";
import PlantCarousel from "../components/PlantCarousel";



export default function myPlants() {
    const plants: string[] = ['a', 'b', 'c','d','e','f'];
  return (
    <div className="bg-lime-700/40 py-8 px-16 mt-2 rounded-b-4xl h-160 gap-8">
        <div>
            <PlantCarousel title="Moje rośliny" labels={plants}>
            </PlantCarousel>
        </div>
        
        <div>
            <PlantCarousel title="Proponowane rośliny" labels={plants}>
            </PlantCarousel>
        </div>
    </div>
  );
}
