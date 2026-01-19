import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Details from "../screens/Details";

type TRootStackParamList = {
    Home: undefined;
    Feed: undefined;
    Profile: undefined;
    Details: { itemId: number }
}

const RootStack = createNativeStackNavigator<TRootStackParamList>()

export type THomePageProps = NativeStackScreenProps<TRootStackParamList, 'Home'>
export type TFeedPageProps = NativeStackScreenProps<TRootStackParamList, 'Feed'>
export type TProfilePageProps = NativeStackScreenProps<TRootStackParamList, 'Profile'>
export type TDetailsPageProps = NativeStackScreenProps<TRootStackParamList, 'Details'>

const RootStackNavigation = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="Feed" component={Feed} />
            <RootStack.Screen name="Profile" component={Profile} />
            <RootStack.Screen name="Details" component={Details} />
        </RootStack.Navigator>
    )
}

export default RootStackNavigation