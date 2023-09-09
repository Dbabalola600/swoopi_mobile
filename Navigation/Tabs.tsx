import { MaterialCommunityIcons, AntDesign, MaterialIcons, Ionicons, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import apptw from "../utils/lib/tailwind";
import MyTabBar from "./CustomBottomNav";
import DashBoardScreen from "../screens/DashBoard/DashBoardScreen";
import Test from "../screens/Tests/Test";
import ProfileScreen from "../screens/Profile/ProfileScreen";



const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator

            screenOptions={{
                tabBarStyle: { backgroundColor: "#BAC0FA" },
                tabBarInactiveTintColor: "black",
                // tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: "#0413BB"
            }}
        // tabBar={props => <MyTabBar {...props} />}
        >

            <Tab.Screen
                name='DashBoard'
                component={DashBoardScreen}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="dashboard"
                            color={color}
                            size={26} />
                    ),
                }}
            />


            < Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="journal"
                            color={color}
                            size={26} />
                    ),
                }}
            />






        </Tab.Navigator>
    )


}


export default Tabs