// Separating my hooks from my API

import { useState, useEffect } from 'react'
import type { StrainData } from '../models/strains'
import fetchDescendingStrains from '../api/strainsAPI'

const useStrainData = (): StrainData[] => {
  const [strains, setStrains] = useState<StrainData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'STRAINS_API_KEY',
          'X-RapidAPI-Host': 'X_RAPID_API_HOST',
        },
      }
      try {
        const response = await fetch(
          'https://weed-strain1.p.rapidapi.com/?ordering=-strain',
          options
        )
        const responseJson = await response.json()

        setStrains(responseJson)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  return strains
}

export default useStrainData;
