import React from 'react'
import { View, Text, FlatList } from 'react-native'
import useStrainData from '../hooks/useStrainData'

const Home = () => {
  const strains = useStrainData()

  return (
    <View>
      <FlatList
        data={strains}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.strain}</Text>}
      />
    </View>
  )
}

export default Home
