"use client"
import PlantItem from "./components/PlantItem";
import AppButton from "./components/AppButton";
import { IoIosWater } from "react-icons/io";
import { FaTemperatureQuarter,FaSun } from "react-icons/fa6";
import Link from 'next/link'
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { ImCross } from "react-icons/im";

export default function Home() {
  const [Ismoist, Setismoist] = useState(false)

  return (
    <div className="flex justify-between items-between content-between bg-lime-700/40 py-8 px-16 mt-2 rounded-b-4xl h-160 gap-8">
      <div id="params" className="flex flex-col justify-center items-center w-1/2 h-full text-center">
        <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>Fikus</h3>
        <div className="flex-col gap-8 bg-lime-700/30 rounded-3xl p-8 h-4/5 w-full">
          <div className="flex justify-between gap-4">
            <AppButton className="w-40">
              <div>
                <div className="flex items-center justify-center">
                  <IoIosWater color="blue" size={"64"}/>
                  <h1 className="text-stone-900 text-center">20%</h1>
                </div>

                <h4 className='text-xl text-stone-900 font-medium'>Wilgotność powietrza</h4>
              </div>
            </AppButton>

            <AppButton className="w-40">
              <div>
                <div className="flex items-center justify-center">
                  <FaTemperatureQuarter color="black" size={"64"}/>
                  <h3 className="text-stone-900 text-center">50%</h3>
                </div>

                <h4 className='text-xl text-stone-900 font-medium'>Temperatura</h4>
              </div>
            </AppButton>

            <AppButton className="w-40">
              {Ismoist ? 
              (<div>
                <div className="flex items-center justify-center">
                  <FaCheck/>
                </div>
                <h4 className='text-xl text-stone-900 font-medium'>Gleba wilgotna</h4>
              </div>) :
              (<div>
                <div className="flex items-center justify-center">
                <ImCross />
                </div>
                <h4 className='text-xl text-stone-900 font-medium'>Gleba sucha</h4>
              </div>)
              }
            </AppButton>
          </div>

        <div className="flex justify-between">
          <div className="w-full mt-10">
            <AppButton className="flex-column justify-start align-start px-12 py-2">
              <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>Podlewaj co...</h3>
              <div className="flex gap-4 justify-start items-start"> 
                <input type="text" className="bg-white w-12 rounded-xl"/>
                <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>dni</h3>
              </div>
              <div className="flex gap-4 justify-start items-start"> 
                <input type="text" className="bg-white w-12 rounded-xl"/>
                <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>godzin</h3>
              </div>
              <div className="flex gap-4 justify-start items-start"> 
                <input type="text" className="bg-white w-12 rounded-xl"/>
                <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>minut</h3>
              </div>
            </AppButton>
          </div>

          <div className="w-full mt-10">
            <AppButton className="flex-column justify-start align-start px-12 py-2">
              <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>Podlewaj co...</h3>
              <div className="flex gap-4 justify-start items-start"> 
                <input type="text" className="bg-white w-12 rounded-xl"/>
                <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>dni</h3>
              </div>
              <div className="flex gap-4 justify-start items-start"> 
                <input type="text" className="bg-white w-12 rounded-xl"/>
                <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>godzin</h3>
              </div>
              <div className="flex gap-4 justify-start items-start"> 
                <input type="text" className="bg-white w-12 rounded-xl"/>
                <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>minut</h3>
              </div>
            </AppButton>
          </div>
        </div>
          
        </div>
      </div>
      
      <div id="myPlants" className="flex flex-col justify-center items-center w-1/2 h-full">
        <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>Moje rośliny</h3>
        <div id="plantItems" className="flex flex-col justify-between h-4/5">  
          <div className="flex justify-between items-between gap-8">
            <PlantItem label="Fikus"/>
            <PlantItem label="Paprotka"/>
            <PlantItem label="Kaktus"/>
          </div>
          <div className="flex justify-between items-between gap-8">
            <PlantItem label="Bazylia"/>
            <PlantItem label="Kaktus"/>
            <AppButton className="flex justify-center items-center w-48 h-48"><Link href="/myplants" className='text-2xl text-stone-900 font-medium text-center'>Zobacz więcej</Link></AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}


//TODO
//opcja dodawania rośliny
//udynamizowanie danych z frontendu danymi z backendu
//dodaj zmianę pola interval
//dodaj przycisk podlewania 

//rejestracja od front endu
//zakładka zarządzania użytkownikami
//mobilny widok