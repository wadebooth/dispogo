import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const listOfStrains = () => {
  const [strains, setStrains] = useState<{ id: string; strain: string }[]>([])
  const [data, setData] = useState<{ name: string }[]>([])

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

  //   return (
  //     <View style={styles.container}>
  //       <FlatList
  //         data={strains}
  //         renderItem={({ item }) => (
  //           <View style={styles.strainItem}>
  //             <Text style={styles.strainName}>{item.strain}</Text>
  //           </View>
  //         )}
  //         keyExtractor={(item) => item.id}
  //       />
  //     </View>
  //   )
  // }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    strainItem: {
      backgroundColor: '#ddd',
      marginBottom: 8,
      padding: 8,
    },
    strainName: {
      fontSize: 18,
    },
  })
}

export default listOfStrains
