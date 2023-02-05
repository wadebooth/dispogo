import { useState, useEffect } from 'react'

const fetchStrains = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5e1e3d821emsh79b658b8ac2ceedp10f146jsn7fcc942aa189',
      'X-RapidAPI-Host': 'weed-strain1.p.rapidapi.com',
    },
  }

  try {
    const response = await fetch(
      'https://weed-strain1.p.rapidapi.com/?ordering=-strain',
      options
    )
    return await response.json()
  } catch (error) {
    console.error(error)
    return []
  }
}

export default fetchStrains
