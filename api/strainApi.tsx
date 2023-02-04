import { useState, useEffect } from 'react'

const useStrainData = () => {
  const [strains, setStrains] = useState<{ id: string; strain: string }[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '5e1e3d821emsh79b658b8ac2ceedp10f146jsn7fcc942aa189',
          'X-RapidAPI-Host': 'weed-strain1.p.rapidapi.com',
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

export default useStrainData
