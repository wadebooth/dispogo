import { useState, useEffect } from 'react'

const fetchDescendingStrains = async () => {
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
    return await response.json()
  } catch (error) {
    console.error(error)
    return []
  }
}

export default fetchDescendingStrains
