'use client'
import React, { useEffect, useState } from 'react'
import { GetPresets } from '../api/api'

function Presets() {
  const [presets, setPresets] = useState<any[]>([])

  useEffect(() => {
    const fetchPresets = async () => {
      const data = await GetPresets()
      console.log('RAW DATA:', data)

      if (data?.recordset) {
        setPresets(data.recordset) // ⬅️ TO JEST KLUCZ
      }
    }

    fetchPresets()
  }, [])

  return (
    <div>
      {presets.map((preset) => (
        <p key={preset.Id}>{preset.NamePreset} {preset.Temp}</p>
      ))}
    </div>
  )
}

export default Presets