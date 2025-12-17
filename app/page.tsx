"use client"
import PlantItem from "./components/PlantItem";
import AppButton from "./components/AppButton";
import { IoIosWater } from "react-icons/io";
import { FaTemperatureQuarter,FaSun } from "react-icons/fa6";
import Link from 'next/link'
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { GetHistory, GetPlants } from './api/api'
import React, { useEffect, useState } from 'react'
import { usePlant } from "./context/PlantContext";


export default function Home() {
  const [history, setHistory] = useState<any[]>([])
  const [plants, setPlants] = useState<any[]>([])
  const { currentPlant, setCurrentPlant } = usePlant()

  useEffect(() => {
    const fetchPlants = async () => {
    const userId = document.cookie
    .split('; ')
    .find(row => row.startsWith('userID='))
    ?.split('=')[1]
    
    const Plantdata = await GetPlants(parseInt(userId || "0"))
    if (Plantdata) {
    setPlants(Plantdata.recordsets[0])
      setCurrentPlant({name:Plantdata.recordsets[0][0].NamePlant, id:Plantdata.recordsets[0][0].Id});
    }
    //const Historydata = await GetHistory(parseInt(Plantdata.recordsets[0][0].Id || "0"))
    const Historydata = await GetHistory(parseInt("1"))
    if (Historydata) {
      setHistory(Historydata.recordsets[0][Historydata.recordsets.length - 1])
      console.log("history",Historydata.recordsets[0][Historydata.recordsets.length - 1])
    }
    }
    fetchPlants()
  }, [])

  return (
    <div className="flex justify-between items-between content-between bg-lime-700/40 py-8 px-16 mt-2 rounded-b-4xl h-160 gap-8">
      <div id="params" className="flex flex-col justify-center items-center w-1/2 h-full text-center">
        <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>{currentPlant?.name}</h3>
        <div className="flex-col gap-8 bg-lime-700/30 rounded-3xl p-8 h-4/5 w-full">
          <div className="flex justify-between gap-4">
            <AppButton className="w-40">
              <div>
                <div className="flex items-center justify-center">
                  <IoIosWater color="blue" size={"64"}/>
                  <h1 className="text-stone-900 text-center">{parseFloat(history["Moist"]).toFixed(2)||0}</h1>
                </div>

                <h4 className='text-xl text-stone-900 font-medium'>Wilgotność gleby</h4>
              </div>
            </AppButton>

            <AppButton className="w-40">
              <div>
                <div className="flex items-center justify-center">
                  <FaTemperatureQuarter color="black" size={"64"}/>
                  <h3 className="text-stone-900 text-center">{history["Temp"]||0}</h3>
                </div>

                <h4 className='text-xl text-stone-900 font-medium'>Temperatura</h4>
              </div>
            </AppButton>

            <AppButton className="w-40">
              <div>
                <div className="flex items-center justify-center">
                  <h3 className="text-stone-900 text-center">{history["AirQuality"]||0}</h3>
                </div>
                <h4 className='text-xl text-stone-900 font-medium'>Jakość powietrza</h4>
              </div>
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
          <div className="grid grid-cols-3 gap-8 h-4/5">
            {plants.slice(0, 5).map((plant) => (
              <PlantItem key={plant.Id} label={plant.NamePlant} id={plant.Id}/>
            ))}
            <AppButton className="flex justify-center items-center w-48 h-48"><Link href="/myplants" className='text-2xl text-stone-900 font-medium text-center'>Zobacz więcej</Link></AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}


//TODO
//opcja dodawania rośliny i presetów
//udynamizowanie danych z frontendu danymi z backendu
//dodaj zmianę pola interval
//dodaj przycisk podlewania 

//rejestracja od front endu
//zakładka zarządzania użytkownikami
//mobilny widok