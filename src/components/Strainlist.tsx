import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import useStrainData from '../hooks/useStrainData'
import type { StrainData } from '../models/strains'

const StrainList: React.FC = () => {
  const [strains, setStrains] = useState(useStrainData())

  const addStrain = (strain: StrainData) => {
    setStrains([...strains, strain])
  }

  const deleteStrain = (id: string) => {
    setStrains(strains.filter((strain) => strain.id !== id))
  }

  return (
    <FlatList
      data={strains}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text>{item.strain}</Text>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

export default StrainList
