"use client"
import PlantCarousel from "../components/PlantCarousel";
import React, { useEffect, useState } from 'react'
import { GetHistory, GetPlants, GetPresets, PostPlants, PostPreset, UpdatePlant, UpdatePreset } from '../api/api'
import AppButton from "../components/AppButton";
import PlantItem from "../components/PlantItem";
import { usePlant } from "../context/PlantContext";
import { CiSquarePlus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";


interface Preset {
  Id: number
  Moist: number
  Temp: number
  AirQuality: number
  WateringIntervalMinutes: number
}

function getCookieValue(name: string) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

export default function MyPlants() {
  const [plantName, setPlantName] = useState("");
  const [temp, setTemp] = useState(0);
  const [moist, setMoist] = useState(0);
  const [airQuality, setAirQuality] = useState(0);
  const [intervalDays, setIntervalDays] = useState(0);
  const [intervalHours, setIntervalHours] = useState(0);
  const [intervalMinutes, setIntervalMinutes] = useState(0);
  const [userID, setUserID] = useState<number | null>(null);
  const [plants, setPlants] = useState<any[]>([]);
  const { currentPlant, setCurrentPlant } = usePlant();
  const [create, setCreate] = useState<boolean>(true);
  const [currentPreset, setCurrentPreset] = useState<Preset | null>(null);
  

  useEffect(() => {
  const uid = getCookieValue("userID");
    if (uid) {
      setUserID(parseInt(uid));
    }
  }, []);

    useEffect(() => {
      if (!currentPlant?.presetId) {
        setCurrentPreset({Id: 0, Moist: 0, Temp: 0, AirQuality: 0, WateringIntervalMinutes: 0});
        return;
      }; 
  
      const fetchPreset = async () => {
        const presetData = await GetPresets(currentPlant.presetId);
        if (presetData && presetData.length > 0) {
          setCurrentPreset(presetData[0]);
        }
      };
  
      fetchPreset();
    }, [currentPlant]);

  useEffect(() => {
    if (!userID) return;

    const fetchPlants = async () => {
      try {
        const Plantdata = await GetPlants(userID);
        if (Plantdata) {
          setPlants(Plantdata.recordsets[0]);
          if (!currentPlant && Plantdata.recordsets[0].length > 0) {
            setCurrentPlant({
              id: Plantdata.recordsets[0][0].Id,
              name: Plantdata.recordsets[0][0].NamePlant,
            });
          }
        }
      } catch (err) {
        console.error("Błąd pobierania roślin:", err);
      }
    };
    fetchPlants();
  }, [userID]);

  return (
    <div className="bg-lime-700/40 py-8 px-16 mt-2 rounded-b-4xl gap-8">
      <div className="mb-8">
          <h3 className="text-2xl text-stone-900 font-medium text-center pb-4">{create ? "Dodaj roślinę" : "Edytuj roślinę"}</h3>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center align-center gap-8 px-12 py-2 text-black text-3xl px-4 py-4 rounded-3xl bg-green-800/60 hover:bg-green-700/60 cursor-pointer transition">
                <div>
                <div className="flex items-center justify-center gap-8">
                  <div className="bg-green-800 p-0.5 hover:bg-green-600 transition" onClick={() => setCreate(true)}><CiSquarePlus size={32}/></div> 
                  <div className="bg-green-800 p-0.5 hover:bg-green-600 transition" onClick={() => setCreate(false)}><CiEdit  size={32}/></div>
                  </div>
                <h3 className='text-2xl text-stone-900 font-medium text-center'>Nazwa</h3>
                <input type="text" className="bg-white w-80 rounded-xl mb-4" onChange={(e) => setPlantName(e.target.value)} placeholder={create ? "" : currentPlant?.name}/>
                </div>
                <div>
                  <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>Podlewaj co...</h3>
                  <div className="flex gap-4 justify-start items-start"> 
                    <input type="text" className="bg-white w-12 rounded-xl" onChange={(e) => setIntervalDays(parseInt(e.target.value) || 0)} placeholder={create ? "" : parseInt(currentPreset?.WateringIntervalMinutes/1440)}/>
                    <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>dni</h3>
                  </div>
                  <div className="flex gap-4 justify-start items-start"> 
                    <input type="text" className="bg-white w-12 rounded-xl" onChange={(e) => setIntervalHours(parseInt(e.target.value) || 0)} placeholder={create ? "" : parseInt((currentPreset?.WateringIntervalMinutes/60)%24)}/>
                    <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>godzin</h3>
                  </div>
                  <div className="flex gap-4 justify-start items-start"> 
                    <input type="text" className="bg-white w-12 rounded-xl" onChange={(e) => setIntervalMinutes(parseInt(e.target.value) || 0)} placeholder={create ? "" : currentPreset?.WateringIntervalMinutes%60}/>
                    <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>minut</h3>
                  </div>
                </div>
                  <div>
                  <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>Idealne wartości</h3>
                  <div className="flex gap-4 justify-start items-start"> 
                    <input type="text" className="bg-white w-12 rounded-xl" onChange={(e) => setMoist(parseInt(e.target.value) || 0)} placeholder={create ? "" : currentPreset?.Moist}/>
                    <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>Wilgotność gleby</h3>
                  </div>
                  <div className="flex gap-4 justify-start items-start"> 
                    <input type="text" className="bg-white w-12 rounded-xl" onChange={(e) => setTemp(parseInt(e.target.value) || 0)} placeholder={create ? "" : currentPreset?.Temp}/>
                    <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>Temperatura </h3>
                  </div>
                  <div className="flex gap-4 justify-start items-start"> 
                    <input type="text" className="bg-white w-12 rounded-xl" onChange={(e) => setAirQuality(parseInt(e.target.value) || 0)} placeholder={create ? "" : currentPreset?.AirQuality}/>
                    <h3 className='text-2xl text-stone-900 font-medium text-center pb-4'>Jakość powietrza</h3>
                  </div>
                </div>
                {create ? <AppButton onClick={async () => {
                    const minutes = intervalDays * 24 * 60 + intervalHours * 60 + intervalMinutes;
                    const presetId = await PostPreset(
                      plantName + "_preset",
                      temp,
                      moist,
                      airQuality,
                      parseInt(userID.toString() || "0"),
                      minutes
                    );

                    PostPlants(userID, plantName, presetId);
                    }}>
                  Dodaj roślinę
                </AppButton>: 
                <AppButton onClick={async () => {
                    const minutes = intervalDays * 24 * 60 + intervalHours * 60 + intervalMinutes;
                    const presetId = await UpdatePreset(
                      currentPreset?.Id || 0,
                      plantName + "_preset",
                      temp,
                      moist,
                      airQuality,
                      minutes
                    );

                    console.log("UPDATE PLANT", plantName, currentPlant?.id, minutes);
                    UpdatePlant(currentPlant?.id || 0, userID, plantName);
                    }}>
                  Edytuj roślinę
                </AppButton>}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-8 h-4/5 justify-items-center">
          {plants.map((plant) => (
            <PlantItem key={plant.Id} label={plant.NamePlant} id={plant.Id} presetId={plant.PresetId} />
          ))}
        </div>
    </div>
  );
}
