import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";

const RootStack = createNativeStackNavigator()

const RootStackNavigation = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={HomeScreen} />
        </RootStack.Navigator>
    )
}

export default RootStackNavigation