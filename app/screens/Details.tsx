import { View, Text, Button } from 'react-native'
import React from 'react'
import { TDetailsPageProps } from '../navigation/RootStack'

const Details = ({navigation, route} : TDetailsPageProps) => {
    const {itemId} = route.params

  return (
    <View>
      <Text>Details: {itemId}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default Details