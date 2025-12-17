"use client"
import PlantCarousel from "../components/PlantCarousel";
import React, { useEffect, useState } from 'react'
import { GetHistory, GetPlants } from '../api/api'



export default function myPlants() {
  return (
    <div className="bg-lime-700/40 py-8 px-16 mt-2 rounded-b-4xl h-160 gap-8">
        <div>
            <PlantCarousel title="Moje rośliny" >
            </PlantCarousel>
        </div>
    </div>
  );
}
