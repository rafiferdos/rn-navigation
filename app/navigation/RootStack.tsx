import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Details from "../screens/Details";
import DrawerNavPage from "./Drawer";

type TRootStackParamList = {
    Home: undefined;
    Feed: undefined;
    Profile: undefined;
    Details: { itemId: number }
    Drawer: undefined
}

const RootStack = createNativeStackNavigator<TRootStackParamList>()

export type THomePageProps = NativeStackScreenProps<TRootStackParamList, 'Home'>
export type TFeedPageProps = NativeStackScreenProps<TRootStackParamList, 'Feed'>
export type TProfilePageProps = NativeStackScreenProps<TRootStackParamList, 'Profile'>
export type TDetailsPageProps = NativeStackScreenProps<TRootStackParamList, 'Details'>

const RootStackNavigation = () => {
    return (
        <RootStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#fffee1'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <RootStack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
            <RootStack.Screen name="Feed" component={Feed} options={{ title: 'Feed' }} />
            <RootStack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
            <RootStack.Screen name="Details" component={Details} options={{ title: 'Details' }} />
            <RootStack.Screen name="Drawer" component={DrawerNavPage} options={{ title: 'Drawer' }} />
        </RootStack.Navigator>
    )
}

export default RootStackNavigation