import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { THomePageProps } from '../navigation/RootStack'

const Home = ({ navigation }: THomePageProps) => {
    return (
        <View>
            <Text>Home</Text>
            <Button title="Go to Feed" onPress={() => navigation.push("Feed")} />
            <Button title="Go to Profile" onPress={() => navigation.push("Profile")} />
            <Button title="Go to Details" onPress={() => navigation.push("Details", { itemId: 1 })} />
            <View style={{ margin: 16 }} />
            <Button title="Details 50" onPress={() => navigation.push("Details", { itemId: 50 })} />
        </View>
    )
}

export default Home