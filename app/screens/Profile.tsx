import { View, Text, Button } from 'react-native'
import React from 'react'
import { TProfilePageProps } from '../navigation/RootStack'

const Profile = ({ navigation }: TProfilePageProps) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default Profile