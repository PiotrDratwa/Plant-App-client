'use client'
import React, { useEffect, useState } from 'react'
import { GetPlants } from '../api/api'

function Test() {
  const [plants, setPlants] = useState<any[]>([])

  useEffect(() => {
    const fetchPlants = async () => {
      const data = await GetPlants(1)
      const userId = document.cookie
      .split('; ')
      .find(row => row.startsWith('userID='))
      ?.split('=')[1]
      
      console.log('userID:', userId)
      console.log("data",data)
      if (data) {
        setPlants(data.recordsets[0])
      }
    }
    fetchPlants()
  }, [])

  return (
    <div>
      {plants.map((plant) => (
        <p key={plant.Id}>{plant.NamePlant}</p>
      ))}
    </div>
  )
}

export default Test