import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import useStrainData from '../hooks/useStrainData'

const StrainList: React.FC = () => {
  const strains = useStrainData()

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
