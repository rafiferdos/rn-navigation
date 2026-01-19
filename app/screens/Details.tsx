import { View, Text, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { TDetailsPageProps } from '../navigation/RootStack'

const Details = ({navigation, route} : TDetailsPageProps) => {
    useLayoutEffect(()=> {
        navigation.setOptions({
            title: `details of ${route.params.itemId}`
        })
    })
    const {itemId} = route.params

  return (
    <View>
      <Text>Details: {itemId}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default Details