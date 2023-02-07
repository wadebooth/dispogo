import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import useStrainData from '../hooks/useStrainData'
import { StrainData } from '../models/strains'

const ProductListCard = () => {
  const strains = useStrainData()

  const renderStrain = (item: StrainData) => {
    return (
      <View style={styles.productCard}>
        <TouchableOpacity>
          <Text style={styles.productText}>{item.strain} </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={strains}
        keyExtractor={(item: StrainData) => item.id.toString()}
        renderItem={({ item }) => renderStrain(item)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productCard: {
    height: 50,
    width: '100%',
    backgroundColor: '#273239',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  productText: {
    color: 'white',
    fontSize: 18,
  },
})

export default ProductListCard
