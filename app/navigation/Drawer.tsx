import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";

type TDrawerStackParamList = {
    Home: undefined;
    Feed: undefined;
    Profile: undefined;
}

const Drawer = createDrawerNavigator<TDrawerStackParamList>()

const DrawerNavPage = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavPage
