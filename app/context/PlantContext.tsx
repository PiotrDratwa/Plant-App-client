'use client'
import { createContext, useContext, useState } from 'react'

interface Plant {
  id: number
  name: string
}

interface PlantContextType {
  currentPlant: Plant | null
  setCurrentPlant: (plant: Plant) => void
}

const PlantContext = createContext<PlantContextType | null>(null)

export function PlantProvider({ children }: { children: React.ReactNode }) {
  const [currentPlant, setCurrentPlant] = useState<Plant | null>(null)

  return (
    <PlantContext.Provider value={{ currentPlant, setCurrentPlant }}>
      {children}
    </PlantContext.Provider>
  )
}

export const usePlant = () => {
  const context = useContext(PlantContext)
  if (!context) throw new Error('usePlant must be used within PlantProvider')
  return context
}