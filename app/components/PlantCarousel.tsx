"use client"
import { Carousel } from "react-responsive-carousel";
import PlantItem from "./PlantItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect, useState } from 'react'
import { GetHistory, GetPlants } from '../api/api'


type PlantCarouselProps = {
    title: string;
}


function PlantCarousel({title}: PlantCarouselProps) {
    const [plants, setPlants] = useState<any[]>([])
    useEffect(() => {
      const fetchPlants = async () => {
      const userId = document.cookie
      .split('; ')
      .find(row => row.startsWith('userID='))
      ?.split('=')[1]
  
      const Plantdata = await GetPlants(parseInt(userId || "0"))
      if (Plantdata) {
      setPlants(Plantdata.recordsets[0])
      }
      }
      fetchPlants()
    }, [])

    function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
      const chunks: T[][] = []
      for (let i = 0; i < arr.length; i += chunkSize) {
        chunks.push(arr.slice(i, i + chunkSize))
      }
      return chunks
    }

    return (
      <div>
          <h3 className="text-2xl text-stone-900 font-medium text-center pb-4">{title}</h3>
          <Carousel>
            {chunkArray(plants, 3).map((group, index) => (
              <div key={index} className="flex justify-center gap-8">
                {group.map((p) => (
                  <PlantItem key={p.Id} label={p.NamePlant} id={p.Id} />
                ))}
              </div>
            ))}
          </Carousel>
      </div>
    );
}

export default PlantCarousel

